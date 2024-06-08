import { reelPost } from "./reels/ReelData";
import { Link } from "react-router-dom";

const ReelPosts = () => {
    return (
        <div className="flex flex-wrap gap-9 w-full max-w-5xl ">
            {reelPost.map((reel) => (
                <Link
                    to='/'
                    key={reel.id}
                    className="lg:w-[24.675%] md:w-[24.675%] sm:w-[32.5%] w-[32.5%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] h-[30vh]  relative group"
                    style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <video
                        src={reel.video}
                        title="reel video"
                        loop
                        muted
                        autoPlay
                        className="w-full h-full object-cover"
                    />
                    <div className="hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] left-[50%] translate-x-[-50%]">
                        <div className="flex items-center gap-x-1">
                            <img
                                src="/assets/icons/like.svg"
                                className="w-6 h-6" alt=""
                            />
                            <p className="text-base text-white font-medium">
                                {reel.likeCount}
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <img
                                src="/assets/icons/chat.svg"
                                className="w-6 h-6" alt=""
                            />
                            <p className="text-base text-white font-medium">
                                {reel.commentCount}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
};





export default ReelPosts;















// const { data: currentUser } = useGetCurrentUser();

//   if (!currentUser)
//     return (
//       <div className="flex-center w-full h-full">
//         <Loader />
//       </div>
//     );

//   return (
//     <>
//       {currentUser.liked.length === 0 && (
//         <p className="text-light-4">No reels posts</p>
//       )}

//       <GridPostList posts={currentUser.liked} showStats={false} />
//     </>
//   );