
import { useDeleteSavedPost, useGetCurrentUser, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations"
import { checkIsLiked } from "@/lib/utils"
import { Models } from "appwrite"
import React, { useEffect, useState } from "react"
import Loader from "./Loader"


type PostStatsProps = {
    post?: Models.Document,
    userId: string
}

const PostStats = ({ post, userId }: PostStatsProps) => {
    const likesPost = post?.likes.map((user: Models.Document) => user.$id)

    const [likes, setLikes] = useState(likesPost);
    const [isSaved, setIsSaved] = useState(false)

    const { mutate: likePost } = useLikePost()
    const { mutate: savePost, isPending: isSavingPost } = useSavePost()
    const { mutate: deleteSavedPost, isPending: isDeletingSaved } = useDeleteSavedPost()

    const { data: currentUser } = useGetCurrentUser()

    useEffect(() => {
        const storedLikes = localStorage.getItem(`likes_${post?.$id}`)
        const storedIsSaved = localStorage.getItem(`isSaved_${post?.$id}`)

        if (storedLikes) {
            setLikes(JSON.parse(storedLikes))
        }

        if (storedIsSaved) {
            setIsSaved(JSON.parse(storedIsSaved))
        }
    }, [post])

    useEffect(() => {
        setIsSaved(!!currentUser?.save.find((record: Models.Document) =>
            record.post.$id === post?.$id) || localStorage.getItem(`isSaved_${post?.$id}`))
    }, [currentUser, post])


    const handleLikePost = (e: React.MouseEvent) => {
        e.stopPropagation();

        let newLikes = [...likes];
        const hasLiked = newLikes.includes(userId);

        if (hasLiked) {
            newLikes = newLikes.filter((id) => id !== userId)
        } else {
            newLikes.push(userId)
        }
        setLikes(newLikes);
        localStorage.setItem(`likes_${post?.$id}`, JSON.stringify(newLikes))
        likePost({ postId: post?.$id || '', likesArray: newLikes })
    }

    const handleSavePost = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (isSaved) {
            setIsSaved(false)
            localStorage.removeItem(`isSaved_${post?.$id}`)
            deleteSavedPost(post?.$id || '')
        } else {
            setIsSaved(true)
            localStorage.setItem(`isSaved_${post?.$id}`, JSON.stringify(true))
            savePost({ postId: post?.$id || '', userId });
        }
    }

    return (
        <div className="flex justify-between w-full h-auto items-center">
            <div className="flex items-center gap-x-3">
                <img
                    src={checkIsLiked(likes, userId) ? "/assets/icons/liked.svg" : "/assets/icons/like.svg"}
                    alt="like"
                    width={20}
                    height={20}
                    onClick={handleLikePost}
                    className="cursor-pointer"
                />
                <p className="small-medium lg:base-medium">{likes.length}</p>
            </div>


            <div className="flex  gap-x-9">
                <img
                    src="/assets/icons/chat.svg"
                    alt="like"
                    width={20}
                    height={20}
                    // onClick={handleLikePost}
                    className="cursor-pointer"
                />
            </div>



            <div className="flex items-center gap-x-3">
                <img
                    src="/assets/icons/share.svg"
                    alt="like"
                    width={20}
                    height={20}
                    // onClick={handleLikePost}
                    className="cursor-pointer"
                />
            </div>


            <div className="flex items-center gap-x-3">
                {isSavingPost || isDeletingSaved ? <Loader /> : (
                    <img
                        src={isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
                        alt="like"
                        width={20}
                        height={20}
                        onClick={handleSavePost}
                        className="cursor-pointer"
                    />)}
            </div>
        </div>
    )
}

export default PostStats




// 
