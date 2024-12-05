export default function Card({ name, image }) {
    return (
        <div className="flex flex-col items-center justify-center border-2 border-black p-2 my-5 mx-3 w-40 lg:w-60">
        <img 
            src={image} 
            alt={name} 
            className="mb-2 w-full max-h-[50%] object-contain" 
        /> 
        <h1 className="text-lg font-semibold mb-1 text-center">{name}</h1> 
        <span className="mb-2 text-center">QTY: 1</span> 
        <a 
            href="#"
            className="bg-customPink text-white font-semibold py-1 px-4 rounded-full shadow-lg hover:bg-pink-600 text-center"
        >
            Add to Cart
        </a>
    </div>
    
    );
}
