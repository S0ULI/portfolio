import Image from 'next/image'
import React from 'react'

const ProjectItem = ({src, href, title, w, h}) => {
  return (
    <div className='flex flex-col gap-8'>
        <h3 className='hover:underline text-color-primary text-lg w-fit'><a href={href} target="_blank" rel={title}>{title}</a></h3>
        <div className='w-full flex justify-center items-center'>
            <a href={href} target="_blank" rel={title} className='w-fit'>
                <Image src={src} alt={title} width={w} height={h} className='hover:-translate-y-2 transition-transform duration-300' />
            </a>
        </div>
    </div>
  )
}

export default ProjectItem