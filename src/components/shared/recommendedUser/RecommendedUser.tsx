import RecommendUserData from "./RecommendedUserData"
import ProfileNav from "./profileNav/ProfileNav"
import { Link } from "react-router-dom"

const RecommendedUser = () => {
  const linkData = [
    {
      id: 1,
      link: '/',
      title: 'About'
    },
    {
      id: 2,
      link: '/',
      title: 'Help'
    },
    {
      id: 3,
      link: '/',
      title: 'Press'
    },
    {
      id: 4,
      link: '/',
      title: 'API'
    },
    {
      id: 5,
      link: '/',
      title: 'Jobs'
    },
    {
      id: 6,
      link: '/',
      title: 'Privacy'
    },
    {
      id: 7,
      link: '/',
      title: 'Terms'
    },
    {
      id: 8,
      link: '/',
      title: 'Location'
    },
    {
      id: 10,
      link: '/',
      title: 'Language'
    },
    {
      id: 11,
      link: '/',
      title: 'Meta Verified'
    },
  ]


  return (
    <div className="w-full h-auto py-3">
      <ProfileNav />

      <div className="w-full h-auto my-8">
        <div className="w-full h-auto flex items-center justify-between mb-4">
          <h6 className="text-sm text-gray-400 font-medium">
            Top creator
          </h6>

          <Link to='/' className="text-xs font-semibold text-gray-300 hover:text-gray-600">
            See All
          </Link>
        </div>

        {RecommendUserData.map((user) => (
          <div key={user.id} className="w-full h-auto flex items-center justify-between mb-4">
            <Link to='/profile'
              className="w-full h-auto flex items-center gap-x-2">
              <img
                src={user.profileImg}
                className="w-12 h-12 rounded-full object-cover" alt=""
              />
              <div className="flex items-start gap-y-0 flex-col">
                <p className="text-[0.9rem] text-white font-medium mb-0">
                  {user.username}
                </p>
                <h6 className="text-xs text-gray-500 font-normal">
                  Followed by herry_abs
                </h6>
              </div>
            </Link>

            <Link to='/' className="text-[0.855rem] text-blue-500 hover:text-gray-200">
              {user.follow}
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full h-auto">
        <div className="w-full h-auto flex items-center gap-x-[4px] flex-wrap mb-3">
          {linkData.map((link) => (
            <div key={link.id}
              className="w-fit h-auto flex items-center gap-x-[4px]">
              <Link to={link.link} className="text-[0.8rem] text-[#5b5b5b] hover:underline">
                {link.title}
              </Link>
              <div className="w-[1.5px] h-[1.5px] bg-[#5b5b5b] rounded-full">

              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#5b5b5b] font-normal">
          &copy; 2024 SNAPGRAM FROM META
        </p>
      </div>
    </div>
  )
}

export default RecommendedUser
