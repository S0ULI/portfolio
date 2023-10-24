import Image from 'next/image';
import Btn from './Btn';
import Wrapper from './Wrapper';

const AboutMe = () => {
  return (
    <div id='about' className='w-full overflow-x-clip'>
      <Wrapper myStyle='flex justify-between items-center gap-4'>
        <div className='flex flex-col gap-8 w-full'>
            <h2 className="h2-style">About Me</h2>
            <div className='flex flex-col gap-4'>
                <p className="text-color-gray-light text-xl leading-relaxed text-justify sm:text-left">
                  well as you probably already have seen in this page i am a Front-end
                  <span className="text-color-white"> Developer </span>mostly. i use
                  different and most up to date tools such as react, next js, three js
                  and much more to build your website in the most professional and
                  modern way possible.
                </p>
                <div className='flex gap-4 flex-wrap'>
                    <Btn href='/' title="React" />
                    <Btn href='/' title="Next JS" />
                    <Btn href='/' title="Three JS" />
                    <Btn href='/' title="Node JS" />
                    <Btn href='/' title="Prisma" />
                    <Btn href='/' title="Mongo db" />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className="text-color-gray-light text-xl leading-relaxed text-justify sm:text-left">
                i am not finished yet, i can do fairly good<span className='text-color-white'> Designs </span>as well and for that i also use the most modern and up to date tools such as PhotoShop, Illustrator, Adobe XD and my favorite Figma.
                </p>
                <div className='flex gap-4 flex-wrap'>
                    <Btn href='/' title="PhotoShop" />
                    <Btn href='/' title="Illustrator" />
                    <Btn href='/' title="Adobe XD" />
                    <Btn href='/' title="Figma" />
                </div>
            </div>
        </div>
        <div className='w-full hidden md:block'>
            <Image src='/image/keyboard.svg' alt='' width={1000} height={1000} className='translate-x-1/2 translate-y-1/4 scale-150 select-none'/>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutMe;
