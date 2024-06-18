

import Home from "@/_root/pages/Home"
import Stories from "./stories/Stories"
import RecommendedUser from "./recommendedUser/RecommendedUser"



const Feeds = () => {
  return (
    <>

      <div className="lg:w-[83%] md:w-[83%] sm:w-full w-full min-h-screen lg:py-7 md:py-7 sm:py-4 py-3 flex  gap-x-3 px-3 ">

        <div className="lg:w md:w-full sm:w-full w-full h-auto relative custom-scrollbar overflow-scroll">
          <Stories />
          <Home />
        </div>

        <div className="w-[25%] h-auto lg:block md:hidden sm:hidden hidden">
          <RecommendedUser />
        </div>
      </div>
    </>
  )
}

export default Feeds


