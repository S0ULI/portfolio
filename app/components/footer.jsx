import Image from "next/image"
import Wrapper from "./Wrapper"
import Form from "./contact-form"

const Footer = () => {
  return (
    <div className="bg-color-black w-full mt-64">
        <Wrapper>
            <p className="text-xs text-color-gray-light py-2 w-full">Copyright © 2023 Soltani. All rights reserved.</p>
        </Wrapper>
    </div>
  )
}

export default Footer