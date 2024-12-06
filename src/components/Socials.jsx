import SocialCard from "./SocialCard"

export default function Socials(){

const dummyInstagramPosts = [ 
    { caption: "check out our new lemon drop always available cupcakes!", image: "/images/yellow-cupcake.jpg", hashtags: ["#lemondrop", "#cupcake"], id: 1 },
    { caption: "check out our new cinnamon bun always available cupcakes!", image: "/images/yellow-cupcake.jpg", hashtags: ["#cinnamon", "#cupcake"], id: 2 },
    { caption: "check out our new fuzzy peach always available cupcakes!", image: "/images/yellow-cupcake.jpg", hashtags: ["#fuzzypeach", "#cupcake"], id: 3 }
]
    return (
        <>
            <div className="bg-pink-500 text-white flex space-evenly justify-center items-center">
                    <span>@torontocupcakedelivery</span>
                    <img src="/images/instagram.png" alt="insta icon" className="w-20 h-20 mx-8 lg:mx-12"/>
                    <span>follow us on instagram</span>
            </div>
            <div className="flex flex-col justify-center items-center" 
            style={{ backgroundImage: "url('/images/sprinkles.jpg')" }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {dummyInstagramPosts.map(post => <SocialCard key={post.id} caption={post.caption} image={post.image} hashtags={post.hashtags} />)}

                </div>
            </div>
        </>
        
    )
}