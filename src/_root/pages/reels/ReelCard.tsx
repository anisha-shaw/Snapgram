import { Link } from "react-router-dom"
import { reelsData } from "./ReelData"


const ReelCard = () => {
    return (
        <>
            <div className="common-container">
                <div className="saved-container">
                    <div className="flex gap-2 w-full max-w-5xl">
                        <img
                            src="/assets/icons/reel.svg"
                            width={36}
                            height={36}
                            alt="edit"
                            className="invert-white"
                        />
                        <h2 className="h3-bold md:h2-bold text-left w-full"> Reels</h2>
                    </div>
                    <div className="flex flex-wrap gap-9 w-full max-w-5xl ">
                        {reelsData.map((reel) => (
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

                </div>

            </div>

        </>
    )
}

export default ReelCard
