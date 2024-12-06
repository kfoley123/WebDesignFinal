export default function OurStory(){
    return (
        <>
            <div className="bg-pink-500 min-h-[30px] md:min-h-[50px]"></div>
            <div className="flex flex-col md:flex-row bg-customLightPink p-8">
            
                <div className="flex flex-col drop-shadow-md justify-center text-white w-full md:w-2/3 p-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-md text-center md:text-left">Welcome to Toronto Cupcake!</h2>
                    <p className="text-base drop-shadow-md md:text-lg leading-relaxed mb-4">
                        Since 2010, we’ve been Toronto’s go-to for gourmet cupcakes, perfect for birthdays, corporate events, or just treating yourself. Baked fresh daily with premium ingredients, we offer a wide range of classic and seasonal flavors, with fast delivery across the GTA.
                    </p>
                    <p className="text-base drop-shadow-md md:text-lg leading-relaxed">
                        We’re proud to spread happiness with every bite and to give back to the community by supporting local organizations and events. Ready for the city’s best cupcakes? Order online or contact us for custom creations to make your celebration unforgettable. Experience the joy of Toronto Cupcake today!
                    </p>
                </div>
        
                <div className="text-white flex flex-col items-center w-full md:w-1/3 p-4">
                    <img src="/images/baker.jpg" alt="baker" className="mb-4 w-full md:w-auto rounded" />
                    <p className="text-center drop-shadow-md text-sm leading-relaxed">
                        Toronto Cupcake was created by Michelle Harrison to pursue her love of baking. Inspired by her mother, Michelle opened Toronto Cupcake in August 2010 as one of Canada's first gourmet cupcakeries.
                    </p>
                </div>
            </div>
            <div className="bg-pink-500 min-h-[30px] md:min-h-[50px]"></div>
        </>
    
    )
}