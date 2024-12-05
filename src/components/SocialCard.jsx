export default function SocialCard({ image, hashtags, caption}){
    return (
        <>
        <div className="flex flex-col bg-white items-center text-center justify-center w-60 text-pink-500 mb-10 mx-2 hover:border-pink-500 hover:border-2">
                <a href="#"><img src={image} alt="instagram post image"/></a>
                <a href="#"><img src="/images/insta.svg" alt="instgram logo" className="h-10 w-10 text-pink-500 my-3" /></a>
                <span className="my-2">{caption}</span>
                <span className="my-5">{hashtags.map(tag => `${tag}`).join(' ')}</span>
                <a><span className="my-3 text-xs">@torontocupcakedelivery</span></a>
        </div>
        </>
    )
}