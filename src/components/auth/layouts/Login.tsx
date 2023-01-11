import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface LoginLayoutProps {
  src?: string;
  children?: React.ReactNode;
}
export default function LoginLayout(props: LoginLayoutProps){
  const { src, children } = props;
  const [showImage, setShowImage] = React.useState(false);
  const imgSrc = src ? src : "/images/scientist.png";
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 975px)' })
  React.useEffect(() => {
    setShowImage(isTabletOrMobile);
  }, [isTabletOrMobile]);

  return (
    <main className=" items-center min-w-[100vw] flex">
      {showImage && (
        <div className="flex-1 h-full">
          <Image 
            className="w-full h-full object-cover"
            width={624}
            height={624}
            src={imgSrc} alt="a woman wearing a lab-coat and looking into a microscope" />
        </div>)
      }
      <div className="flex-1 flex items-center p-3 justify-center h-full">{children}</div>
    </main>
  )
};
