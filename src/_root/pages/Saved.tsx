// import GridPostList from "@/components/shared/GridPostList";
// import Loader from "@/components/shared/Loader";
// import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
// import { Models } from "appwrite";

import PostFeedData from "@/components/shared/PostFeedData";
import { Link } from "react-router-dom";




const Saved = () => {
  return (

    <>
      <div className="saved-container">

        <div className="flex gap-2 w-full max-w-5xl">
          <img
            src="/assets/icons/save.svg"
            width={36}
            height={36}
            alt="edit"
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h2>
        </div>

        <div className="flex flex-wrap gap-9 w-full max-w-5xl" >
          {PostFeedData.map((data) => (
            <div className="   gap-2 w-full max-w-5xl">
              <Link to='/' className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] to-transparent rounded-b-[24px] gap-2"
                style={{

                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}>
                <img src={data.postImg} alt="" />


                <div className="hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] left-[50%] translate-x-[-50%]">
                  <div className="flex items-center gap-x-1">
                    <img
                      src="/assets/icons/saved.svg"
                      className="w-6 h-6" alt=""
                    />

                  </div>
                </div>


              </Link>

            </div>
          ))}

        </div>

      </div>

    </>
  )
};

export default Saved;



// const { data: currentUser } = useGetCurrentUser();

//   const savePosts = currentUser?.save
//     .map((savePost: Models.Document) => ({
//       ...savePost.post,
//       creator: {
//         imageUrl: currentUser.imageUrl,
//       },
//     }))
//     .reverse();

//   return (
// <div className="saved-container">
//   <div className="flex gap-2 w-full max-w-5xl">
//     <img
//       src="/assets/icons/save.svg"
//       width={36}
//       height={36}
//       alt="edit"
//       className="invert-white"
//     />
//     <h2 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h2>
//   </div>

//       {!currentUser ? (
//         <Loader/>
//       ) : (
//         <ul className="w-full flex justify-center max-w-5xl gap-9">
//           {savePosts.length === 0 ? (
//             <p className="text-light-4">No available posts</p>
//           ) : (
//             <GridPostList posts={savePosts} showStats={false} />
//           )}
//         </ul>
//       )}
//     </div>
//   );