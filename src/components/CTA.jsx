export default function CTA(){
    return (
            <div className="relative bg-cover bg-center h-screen" 
            style={{ backgroundImage: "url('/images/CTA-bg.png')" }}>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative flex flex-col items-center justify-center text-center h-full px-4 sm:px-6">
        
                    <h1 className="text-white text-4xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    Make your next event a little sweeter!
                    </h1>

                    <p className="text-white text-lg sm:text-base md:text-xl mb-8 max-w-lg leading-relaxed drop-shadow-md">
                    Whether you're planning a corporate event, celebrating a special occasion, or simply sending a sweet surprise, we've got you covered!
                    </p>
                    
                    <a 
                    href="#" 
                    className="bg-pink-500 text-white font-semibold text-lg sm:text-base px-6 sm:px-4 py-3 sm:py-2 rounded-md shadow-lg hover:bg-pink-600 transition"
                    >
                    ORDER NOW
                    </a>
                </div>
            </div>
    )
}