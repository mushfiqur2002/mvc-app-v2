import { Button } from "@/components/ui/button"
import sideImage1 from "../../public/sideImage1 (1).png"
import sideImage2 from "../../public/sideImage2.png"

function ShoppingSection() {
    return (

        <div className="pt-24 relative bg-[linear-gradient(180deg,rgba(255,255,255,.1)0%,rgba(0,0,0,1)63%)] w-full min-h-[400px]">
            <div className="flex-col center-center gap-4 mt-12">
                <h1 className="uppercase text-white text-[28px] font-medium text-center">
                    Smooth Flight, Powerful <br></br>Operating Time
                </h1>
                <p className="text-white text-center text-[14px] font-thin">
                    providing a smooth live view even when flying at a high speed
                </p>
                <div>
                    <Button className="gradient-button rounded-full shadow-[0px_-5px_15px_0px_rgba(3,_150,_255,_1)]">Buy Now</Button>
                </div>
            </div>

            <div className="center-between absolute top-50  w-full">
                {/* side 01 */}
                <div className="w-[365px] h-[365px] flex items-center justify-center relative">
                    <div className="w-[750px] h-[750px] absolute -top-[75%] -left-[150%] md:-left-[60%] rounded-full inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.22)_0%,rgba(0,0,0,0)_55%)] blur-2xl"></div>
                    <div className="w-[250px] md:w-[350px] h-[350px] -left-[80px] md:-left-[100px] top-[35px] md:-top-[15px] absolute">
                        <img src={sideImage1} className="object-contain" />
                    </div>
                </div>

                <div className="w-[365px] h-[365px] flex items-center justify-center relative">
                    <div className="w-[750px] h-[750px] absolute -top-[90%] -left-[35%] rounded-full inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.22)_0%,rgba(0,0,0,0)_55%)] blur-2xl"></div>
                    <div className="w-[250px] md:w-[350px] h-[350px] -right-[100px] md:-right-[120px] -top-[45px] md:-top-[65px] absolute">
                        <img src={sideImage2} className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingSection
// bg-[radial-gradient(circle,rgba(255,255,255,.15)_0%,rgba(0,0,0,.15)_60%)]