export default function Delivery(){
    return (
        <div className="bg-customLightPink flex flex-col md:flex-row text-white">
       
            <div 
                className="flex-1 flex flex-col justify-between md:w-1/2 bg-center bg-cover text-center py-5 min-h-[300px] md:min-h-[500px]"
                style={{ backgroundImage: "url('/images/delivery.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                
                    <h1 className="font-bold drop-shadow-md text-4xl">
                        Your Occasion, Our Cupcakes
                    </h1>

                    <h1 className="font-bold drop-shadow-md text-4xl">
                        Delivered Anywhere in the GTA!
                    </h1>
            </div>
    
      
        <div className="flex-1 md:w-1/2 space-y-8 px-6 py-12 md:px-8 lg:px-16 text-white">
            <div className="flex flex-col space-y-2">
                <h2 className="text-2xl drop-shadow font-semibold">Fast Delivery</h2>
                <p className="leading-relaxed drop-shadow">
                    Need cupcakes ASAP? No problem! We offer fast delivery for most areas within Toronto and the GTA. 
                    Just place your order before our cut-off time to ensure your treats arrive fresh and on time the following day.
                </p>
            </div>
    
            <div className="flex flex-col space-y-2">
                <h2 className="text-2xl drop-shadow font-semibold">Wide Coverage</h2>
                <p className="leading-relaxed drop-shadow">
                    From downtown Toronto to Hamilton, Mississauga, Vaughan, Scarborough, and beyond, our delivery service spans 
                    approximately 80km around the city. 
                </p>
                <a href="#" className="text-blue-400 hover:underline">Check our delivery areas here.</a>
            </div>
    
            <div className="flex flex-col space-y-2">
                <h2 className="text-2xl drop-shadow font-semibold">Custom Designs</h2>
                <p className="leading-relaxed drop-shadow">
                    Our cupcakes are not only delicious but also visually stunning. Customize your order with corporate logos, 
                    themed designs, or even personalized messages.
                </p>
            </div>
        </div>
    </div>
    )
}