import GridPostList from "@/components/shared/GridPostList";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useGetUserById } from "@/lib/react-query/queriesAndMutations";
import { Loader } from "lucide-react";
import { Route, Routes, Link, Outlet, useParams, useLocation, } from "react-router-dom";
// import LikedPosts from "./LikedPost";
import ReelPosts from "./ReelPosts";
import Tags from "./tags/Tags";
import highlightData from "./highlights/HighLightData";

interface StabBlockProps {
  value: string | number;
  label: string;
}

const StatBlock = ({ value, label }: StabBlockProps) => (
  <div className="flex-center gap-2">
    <p className="small-semibold lg:body-bold text-primary-500">{value}</p>
    <p className="small-medium lg:base-medium text-light-2">{label}</p>
  </div>
);

const Profile = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const { pathname } = useLocation();

  const { data: currentUser } = useGetUserById(id || "");

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="profile-container">
      <div className="profile-inner_container">
        <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
          <img
            src={
              currentUser.imageUrl || "/assets/icons/profile-placeholder.svg"
            }
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
          />
          <div className="flex flex-col flex-1 justify-between md:mt-2">
            <div className="flex flex-col w-full">
              <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">
                {currentUser.name}
              </h1>
              <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                @{currentUser.username}
              </p>
            </div>

            <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">
              <StatBlock value={currentUser.posts.length} label="Posts" />
              <StatBlock value={20} label="Followers" />
              <StatBlock value={20} label="Following" />
            </div>

            <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">
              {currentUser.bio}
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <div className={`${user.id !== currentUser.$id && "hidden"}`}>
              <Link
                to={`/update-profile/${currentUser.$id}`}
                className={`h-12 bg-dark-4 px-5 text-light-1 flex-center gap-2 rounded-lg ${user.id !== currentUser.$id && "hidden"
                  }`}>
                <img
                  src={"/assets/icons/edit.svg"}
                  alt="edit"
                  width={20}
                  height={20}
                />
                <p className="flex whitespace-nowrap small-medium">
                  Edit Profile
                </p>
              </Link>
            </div>
            <div className={`${user.id === id && "hidden"}`}>
              <Button type="button" className="shad-button_primary px-8">
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex items-center gap-x-9 mb-10 justify-center">
        <div className="max-w-[61vw] w-full h-auto flex items-center gap-x-3.5  overflow-x-scroll">
          {highlightData.map((data) => (
            <Link to='/' key={data.id} className="flex items-center justify-between flex-col flex-shrink-0 ">
              <div className="w-24 h-24 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#7a5bb4] to-[#5b05fa]">
                <img
                  className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                  src={data.img}
                  alt={data.name}
                />

              </div>
              <p className="text-white text-sm mt-1 ">{data.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {currentUser.$id === user.id && (
        <div className="flex max-w-5xl w-full">
          <Link
            to={`/profile/${id}`}
            className={`profile-tab rounded-l-lg ${pathname === `/profile/${id}` && "!bg-dark-3"
              }`}>
            <img
              src={"/assets/icons/posts.svg"}
              alt="posts"
              width={20}
              height={20}
            />
            Posts
          </Link>


          <Link
            to={`/profile/${id}/reels`}
            className={`profile-tab rounded-r-lg ${pathname === `/profile/${id}/reels` && "!bg-dark-3"
              }`}>
            <img
              src={"/assets/icons/reel.svg"}
              alt="reel"
              width={20}
              height={20}
            />
            Reels
          </Link>

          <Link
            to={`/profile/${id}/tagged-posts`}
            className={`profile-tab rounded-r-lg ${pathname === `/profile/${id}/tagged-posts` && "!bg-dark-3"
              }`}>
            <img
              src={"/assets/icons/tag.svg"}
              alt="tag"
              width={20}
              height={20}
            />
            Tagged Posts
          </Link>

        </div>
      )}

      <Routes>
        <Route
          index
          element={<GridPostList posts={currentUser.posts} showUser={false} />}
        />
        {currentUser.$id === user.id && (
          <Route path="/reels" element={< ReelPosts />} />

        )}


      </Routes>
      <Outlet />

      <Routes>
        <Route
          index
          element={<GridPostList posts={currentUser.posts} showUser={false} />}
        />
        {currentUser.$id === user.id && (
          <Route path="/tagged-posts" element={< Tags />} />

        )}

      </Routes>
      <Outlet />
    </div>
  );
};

export default Profile;



