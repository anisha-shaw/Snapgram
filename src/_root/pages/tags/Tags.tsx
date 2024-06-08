import { Link } from "react-router-dom"

const Tags = () => {
    return (
        <>
            <div className="  flex flex-wrap gap-9 w-full max-w-5xl">
                <Link to='/tagged-posts' className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] to-transparent rounded-b-[24px] gap-2"
                    style={{

                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <img src="https://source.unsplash.com/random/?nature" alt="" />
                </Link>
                <Link to='/tagged-posts' className="lg:w-[33%] md:w-[33%] sm:w-[32.5%]"
                    style={{

                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <img src="https://source.unsplash.com/random/?food" alt="" />
                </Link>
                <Link to='/tagged-posts' className="lg:w-[33%] md:w-[33%] sm:w-[32.5%]"
                    style={{

                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <img src="https://source.unsplash.com/random/?adventure" alt="" />
                </Link>
                <Link to='/tagged-posts' className="lg:w-[33%] md:w-[33%] sm:w-[32.5%]"
                    style={{

                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <img src="https://source.unsplash.com/random/?study" alt="" />
                </Link>



            </div>
        </>
    )
}

export default Tags
// w-full h-auto flex items-center gap-1 flex-wrap