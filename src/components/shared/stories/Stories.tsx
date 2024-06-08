import { Link } from "react-router-dom"
import storiesData from "./StoriesData"
import TextEllipse from "./TextEllipse"



const Stories = () => {
  return (
    <>


      <div className=" lg:max-w-[41vw] md:mx-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
        <Link
          to='/'
          className="flex items-center justify-center flex-col flex-shrink-0"
          key='1'>
          <div className="w-16 h-16 rounded-full object-cover bg-purple-500 p-[2px]">
            <img
              className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
              src="https://source.unsplash.com/random/?temple"
              alt="story image" />
          </div>
          <TextEllipse username='stories' maxLength={8} />

        </Link>

        {storiesData.map((story) => (
          <Link
            key={story.id}
            to='/'
            className="flex items-center justify-center flex-col flex-shrink-0">
            <div
              className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#7a5bb4] to-[#5b05fa]">
              <img
                className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                src={story.imageUrl}
                alt="story image" />
            </div>

            <TextEllipse username={story.username} maxLength={8} />
          </Link>
        ))}
      </div>


      {/* <div className="w-[25%] h-auto lg:block md:hidden sm:hidden hidden pl-5">
          <RecommendedUser />
        </div> */}





    </>



  )
}

export default Stories



// lg:max-w-[41vw] md:mx-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5