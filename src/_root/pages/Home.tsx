import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
// import Stories from "@/components/shared/stories/Stories";


import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";


const Home = () => {
  const { data: posts, isPending: isPostLoading, isError: isErrorPosts } = useGetRecentPosts()

  return (
    <>

      <div >

        <div className="home-container">
          
          <div className="home-posts">
            {/* <h2 className="h3-bold md:h2-bold text-left w-full">
              Home Feed
            </h2> */}
            {/* <Stories /> */}
            {isPostLoading && !posts ? (
              <Loader />
            ) : (
              <ul className="flex flex-col flex-1 gap-9 w-full">
                {posts?.documents.map((post: Models.Document) => (
                  <li key={post.$id} className="flex justify-center w-full">
                    <PostCard post={post} />
                  </li>

                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
