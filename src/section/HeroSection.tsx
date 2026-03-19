import { Button } from "@/components/ui/button"
import articleSideImage from "../../public/article_side_image.png"
function HeroSection() {
    return (
        <div className="w-full flex items-center justify-center hero-background-gradient relative pt-36">
            <div className="w-full absolute top-15 md:top-[-10px] left-0 z-10">
                <p className="uppercase text-[120px] md:text-[325px] font-semibold text-end hero-text-gradient text-transparent">mavc</p>
            </div>

            <div className="article w-full h-full relative z-20 flex justify-items-center items-center mx-[15.2px] md:mx-6">
                <div className="writing z-10 flex flex-col gap-6">
                    <h1 className="hidden md:flex hero-article-gradient text-[48px]">Effortlessly perform difficult <br></br>aerial acrobatics with<br></br> MAVC3 Pro</h1>

                    <h1 className="flex flex-col md:hidden text-[rgba(255,255,255,.75)] text-[36px] text-start font-medium">Effortlessly perform difficult aerial acrobatics with<br></br> <strong className="text-[rgba(255,255,255,.95)]">MAVC3 Pro</strong></h1>

                    <p className="text-gray-400 text-[18px] text-center md:text-start">New pilots can now perform spectacular flips, drifts, and other<br></br> captivating manoeuvres.</p>
                    <div className="flex w-full items-center justify-center md:justify-start gap-4 pt-4 md:pt-0">
                        <Button className="gradient-button rounded-full shadow-[0px_-5px_15px_0px_rgba(3,_150,_255,_1)]">Buy Now</Button>
                        <Button className="normal-button rounded-full">Watch Demo</Button>
                    </div>
                </div>
                <div className="image absolute -right-[10px] md:right-0 top-[-5px] md:top-[-100px] h-full w-[350px] md:w-[650px]">
                    <img src={articleSideImage} alt="Article side image" />
                </div>
            </div>
        </div>
    )
}


export default HeroSection
