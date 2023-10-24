import Image from "next/image"
import Btn from "./Btn"

const Hero = () => {
  return (
    <div className="flex flex-col gap-12 pt-12">
        <div className="w-full flex flex-col gap-4">
            <h2 className="text-color-gray-light text-xl sm:text-3xl leading-normal pls">UI UX Designer</h2>
            <h1 className="bg-color-secondary text-color-white text-3xl sm:4xl md:text-5xl lg:text-6xl pls py-6 rounded-tr-[4rem] sm:w-[60vw] max-w-3xl">Front-End Developer</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between items-start">
            <div className="w-full flex flex-col sm:gap-4 sm:max-w-lg prs pls">
                <p className="text-color-gray-light text-xl leading-relaxed">You Can Have Your Own Website With Just One Click And Of Course a Little Bit Of Description Of What You Need.</p>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-center mt-10">
                    <p className="text-color-gray-light text-xl">so just click here</p>
                    <Image src='/icon/Arrow-right.svg' alt="👉" width={200} height={75} className="hidden sm:block w-16 animate-move"/>
                    <Image src='/icon/Arrow-down.svg' alt="👇" width={75} height={200} className="h-10 sm:hidden animate-move"/>
                    <Btn href='/' title="Contact Me" />
                </div>
            </div>
            <div className="relative w-full sm:w-[40vw] flex justify-end items-end pls md:pl-0 self-end">
                <Image src='/image/avatar.png' alt='avatar' width={1000} height={1000} />
            </div>
        </div>
    </div>
  )
}

export default Hero