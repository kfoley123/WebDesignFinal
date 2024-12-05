export default function CTA(){
    return (
            <div className="relative bg-cover bg-center h-screen" 
            style={{ backgroundImage: "url('/images/CTA-bg.png')" }}>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative flex flex-col items-center justify-center text-center h-full px-4 sm:px-6">
                    <h1 className="mt-12 text-white text-5xl sm:text-4xl md:text-7xl font-bold mb-4 drop-shadow">
                        Make your next event a little sweeter!
                    </h1>

                    <a 
                        href="#" 
                        className="bg-pink-500 mt-12 text-white font-semibold text-2xl px-12 py-6  md:text-5xl md:px-24 md:py-12 rounded-lg shadow-2xl hover:bg-pink-600"
                    >
                        ORDER NOW
                    </a>

                    <p className="text-white text-xl sm:text-base md:text-2xl mt-12 max-w-lg leading-relaxed drop-shadow-md">
                        Whether you're planning a corporate event, celebrating a special occasion, or simply sending a sweet surprise, we've got you covered!
                    </p>
                </div>

            </div>
    )
}