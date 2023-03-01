import React from "react";
import { MobileNav, NavBar } from "@components/frontFacing";
import { useIsMidScreen } from "@components/common/hooks";

export default function NavBarLayout (page: React.ReactElement): React.ReactNode {
  const [isMidScreen, setIsMidScreen] = React.useState<boolean>();
  const isScreen = useIsMidScreen();
  React.useEffect(() => {
    setIsMidScreen(isScreen)
  }, [isScreen])
  return (
    <div className="relative">
      <div className="relative">
        {!isMidScreen ?<MobileNav /> : <NavBar /> }
      </div>
      <div className="z-0">
        {page}
      </div>
    </div>
  )
}
