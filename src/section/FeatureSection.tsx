import { VscVr } from "react-icons/vsc";
import firstImage from "../../public/first_image.jpg";
import secondImage from "../../public/second_image.jpg";
import thirdImage from "../../public/third_image.png";
import modelImage2 from "../../public/model3.png"
import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import { TbClock24 } from "react-icons/tb";
import { GiDeliveryDrone } from "react-icons/gi";
import { TfiVideoCamera } from "react-icons/tfi";
import { BsFullscreen } from "react-icons/bs";
// import ShowCase from "@/components/ShowCase";
import { motion } from "motion/react"
// import { useRef } from "react";

import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

const cardsData = [
    {
        image: firstImage,
        text: "immersive flight experience",
        offset: false,
    },
    {
        image: secondImage,
        text: "immersive flight experience",
        offset: true,
    },
    {
        image: thirdImage,
        text: "immersive flight experience",
        offset: false,
    },
];

const featuresGrid = [
    {
        icon: VscVr,
        text: "Immersive Flight Experience",
    },
    {
        icon: TfiVideoCamera,
        text: "DJI O4 Video Transmission",
    },
    {
        icon: GiDeliveryDrone,
        text: "Ready To User",
    },
    {
        icon: BsFullscreen,
        text: "1080p Ultra-Wide Screen",
    },
    {
        icon: HiOutlineCursorArrowRays,
        text: "AR Cursor",
    },
    {
        icon: TbClock24,
        text: "24-Hour Max Operating Time",
    },
];


function FeatureSection() {
    const isTablet = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref
    });

    const maskSize = useTransform(
        scrollYProgress,
        [1, 0],
        [28800, 800]
    );



    const maskSizeValue = useMotionTemplate`${maskSize}px`;

    // VIDEO FADE
    // const videoOpacity = useTransform(
    //     scrollYProgress,
    //     [0, 0.5, 0.7],
    //     [1, 1, 0]
    // );

    // // SLIGHT ZOOM (cinematic feel)
    // const scale = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     [1, 1.1]
    // );

    useGSAP(() => {
        if (!isTablet) {
            const timeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true
                }
            })
            timeLine.to('.mask img', {
                transform: 'scale(1.1)'
            })
        }
    }, [isTablet])

    return (
        <div className="center-center relative flex-col">
            {/* headers */}
            <div className="headers center-center flex-col gap-6 mt-16 md:mt-24">
                <div className="flex items-center justify-center bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgb(15,45,125)_10%,rgb(15,45,125)_90%,rgba(255,255,255,1)_100%)] rounded-full w-[120px] h-[36px] p-[1px]">
                    <div className="flex items-center justify-center bg-[#000D21] text-white font-thin text-sm rounded-full w-full h-full">
                        Features
                    </div>
                </div>

                <div className="flex-col center-center gap-4">
                    <h1 className="uppercase text-white text-[28px] font-medium">
                        all thrills, no frills
                    </h1>
                    <p className="text-white text-center text-[14px] font-thin">
                        Simmply put them on, and you can take <br /> off right away
                    </p>
                </div>
            </div>

            {/* cards */}
            <div className="cards w-full center-center flex-col relative">
                <div className="relative z-10 w-[100%] md:w-[80%] h-[350px] mt-12 mx-auto">
                    {/* Glow layer */}
                    <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(ellipse_at_top,rgba(120,180,255,0.9)_0%,rgba(180,220,255,.5)_35%,rgba(120,180,255,0.3)_55%,rgba(0,0,0,0)_100%)] blur-lg"></div>
                    {/* Dark mask */}
                    <div className="absolute inset-0 mt-[12px] rounded-[50%] bg-black"></div>
                    <div className="w-full h-64 absolute bottom-0 md:-bottom-10 bg-black"></div>
                </div>

                {/* <div className="md:w-[90%] md:h-[300px] z-20 flex gap-6 absolute mt-12 md:mt-20 px-4 snap-none md:snap-x md:snap-mandatory lg:items-center lg:justify-center overflow-x-auto lg:overflow-visible scrollbar-hide"> */}
                <div className="w-[90%] md:h-[300px] z-20 flex gap-6 absolute mt-6 md:mt-20 px-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:items-center lg:justify-center scrollbar-hide">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className={`card w-[300px] h-[220px] bg-gray-500 rounded-lg relative overflow-hidden snap-center flex-shrink-0 ${card.offset ? "top-0 md:top-[-50px]" : ""}`}>
                            <div className="image absolute w-full h-full">
                                <img
                                    className="w-full h-full object-cover"
                                    src={card.image}
                                    alt=""
                                />
                            </div>
                            <div className="absolute w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,.1)_30%,_rgba(0,0,0,.7)_60%)]">
                                <p className="capitalize absolute text-white left-[20px] bottom-[15px]">
                                    {card.text.split(" ").slice(0, 2).join(" ")} <br />
                                    {card.text.split(" ").slice(2).join(" ")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* showcase  */}
            {/* <div
                className="w-full bg-white h-[300vh] mt-10"
                ref={ref}
                id="showcase">
                <motion.video
                    src="/videomavc.mp4"
                    className="absolute w-full h-[100vh] object-cover z-10"
                    autoPlay
                    loop
                    muted
                    style={{ opacity: videoOpactiy }}
                />

                <motion.video
                    src="/videomavc.mp4"
                    className="absolute w-full h-full object-cover z-20"
                    autoPlay
                    loop
                    muted
                    style={{
                        WebkitMaskImage: "url('/mask.svg')",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: useMotionTemplate`center ${maskPostion}px`,
                        WebkitMaskSize: useMotionTemplate`${maskSize}px`,

                        maskImage: "url('/mask.svg')",
                        maskRepeat: "no-repeat",
                        maskPosition: useMotionTemplate`center ${maskPostion}px`,
                        maskSize: useMotionTemplate`${maskSize}px`
                    }}
                />
            </div> */}
            {/* <ShowCase></ShowCase> */}

            <section
                ref={ref}
                className="w-full h-[80vh] mt-100 bg-black overflow-y-scroll"
            >
                <div className="h-[100vh]">

                    <motion.video
                        src="/videomavc.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                        style={{
                            WebkitMaskImage: "url('/mask.svg')",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            WebkitMaskSize: maskSizeValue,

                            maskImage: "url('/mask.svg')",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                            maskSize: maskSizeValue
                        }}
                    />

                </div>
            </section>

            {/* feature grid */}
            <div id="feature_grid" className="w-[90%] md:mt-12 lg:mt-24 border-x-1 border-y-1 border-x-[rgba(255,255,255,.5)] border-y-[rgba(255,255,255,.15)] px-6 py-6 flex flex-wrap gap-6 center-center bg-[linear-gradient(90deg,_rgba(0,75,174,.75)_0%,_rgba(0,0,0,1)_5%,_rgba(0,0,0,1)_95%,_rgba(0,_75,_174,.75)_100%)] rounded-xl">
                {featuresGrid.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="w-[46%] md:w-[280px] h-[150px] border-1 rounded-xl center-center flex-col gap-4 border-gray-500"
                        >
                            <div className="w-12 h-12 border-1 border-[rgba(255,255,255,.25)] center-center rounded-md">
                                <Icon size={24} color="white" />
                            </div>
                            <div>
                                <p className="text-white font-thin text-center">{item.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* feature footer */}
            <div className="mt-12 md:mt-24 w-[90%] md:w-full">
                <div className="flex-col center-center gap-2">
                    <h1 className="uppercase text-white text-[28px] font-medium text-center">
                        Ready to Use, Streamlined Creation
                    </h1>
                    <p className="text-white text-center text-[14px] font-thin">
                        Simply put them on, and you can take off right away
                    </p>
                </div>

                <div className="mt-12 relative center-center bg-[linear-gradient(0deg,rgba(255,255,255,.1)0%,rgba(0,0,0,1)63%)] w-full">
                    <div className="relative w-[400px] h-[200px] md:w-[800px] md:h-[350px] overflow-hidden mx-auto">
                        {/* Ring 1 */}
                        <div className="relative w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full">
                            <div className="absolute inset-0 rounded-full p-[1px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_12%,rgba(255,255,255,1)_84%,rgba(0,0,0,1)_100%)]">
                                <div className="w-full h-full rounded-full bg-black">
                                    <div className="w-full h-full rounded-full bg-[linear-gradient(0deg,rgba(255,255,255,.1)0%,rgba(0,0,0,1)25%,rgba(0,0,0,1)35%,rgba(255,255,255,.1)55%,rgba(0,0,0,1)75%,rgba(0,0,0,1)100%)] center-center">
                                        {/* Ring 2 */}
                                        <div className="relative w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full">
                                            <div className="absolute inset-0 rounded-full p-[1px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_12%,rgba(255,255,255,1)_84%,rgba(0,0,0,1)_100%)]">
                                                <div className="w-full h-full rounded-full bg-black">
                                                    <div className="w-full h-full rounded-full bg-[linear-gradient(0deg,rgba(255,255,255,.1)0%,rgba(0,0,0,1)5%,rgba(0,0,0,1)25%,rgba(255,255,255,.15)55%,rgba(0,0,0,1)75%,rgba(0,0,0,1)100%)] center-center">
                                                        {/* Ring 3 */}
                                                        <div className="relative w-[200px] h-[200px] md:w-[560px] md:h-[560px] rounded-full">
                                                            <div className="absolute inset-0 rounded-full p-[1px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_12%,rgba(255,255,255,1)_84%,rgba(0,0,0,1)_100%)]">
                                                                <div className="w-full h-full rounded-full bg-black center-center">
                                                                    <div className="w-full h-full rounded-full bg-[linear-gradient(0deg,rgba(255,255,255,.1)0%,rgba(0,0,0,1)5%,rgba(0,0,0,1)25%,rgba(255,255,255,.15)55%,rgba(0,0,0,1)75%,rgba(0,0,0,1)100%)] center-center">
                                                                        {/* Ring 4 */}
                                                                        <div className="relative w-[100px] h-[100px] md:w-[410px] md:h-[410px] rounded-full">
                                                                            <div className="absolute inset-0 rounded-full p-[1px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_12%,rgba(255,255,255,1)_84%,rgba(0,0,0,1)_100%)]">
                                                                                <div className="w-full h-full rounded-full bg-black">
                                                                                    <div className="w-full h-full rounded-full bg-[linear-gradient(0deg,rgba(255,255,255,.1)0%,rgba(0,0,0,1)5%,rgba(0,0,0,1)25%,rgba(255,255,255,.15)55%,rgba(0,0,0,1)75%,rgba(0,0,0,1)100%)] center-center"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute center-center md:w-[500px] h-[350px] overflow-hidden">
                        <img src={modelImage2} className="h-[420px] md:h-[550px] w-full" />
                    </div>
                </div>

            </div>
        </div >
    );
}

export default FeatureSection;




