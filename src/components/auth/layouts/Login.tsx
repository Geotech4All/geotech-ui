import React from "react";
import Image from "next/image";
import { useIsScreenSize } from "@components/common/hooks";

interface LoginLayoutProps {
  src?: string;
  children?: React.ReactNode;
  width?: number;
  height?: number;
  alt?: string;
}
export default function AuthFormLayout(props: LoginLayoutProps){
  const { src, children, width, height, alt } = props;
  const [showImage, setShowImage] = React.useState(false);
  const imgSrc = src ? src : "/images/scientist.png";
  const isTabletOrMobile = useIsScreenSize(970)
  React.useEffect(() => {
    setShowImage(isTabletOrMobile);
  }, [isTabletOrMobile]);

  return (
    <main className="items-center min-w-[100vw] min-h-screen flex">
      {showImage && (
        <div className="flex-[1.5] flex bg-purple-50/50 p-3 flex-col items-center justify-center min-h-screen">
          <div className="font-montserrat flex items-end gap-3 self-end p-6 text-black/90">
            <h2 className="text-3xl font-semibold">Sign in</h2>
            <h1 className="text-5xl font-extrabold text-purple-900">Let&apos;s discover</h1>
          </div>
          <Image 
            className="w-full h-full object-cover"
            width={width ?? 624}
            height={height ?? 624}
            src={imgSrc} alt={alt ?? "a woman wearing a lab-coat and looking into a microscope"} />
        </div>)
      }
      <div className="flex-1 flex shadow-lg items-center p-3 justify-center min-h-screen">{children}</div>
    </main>
  )
};
