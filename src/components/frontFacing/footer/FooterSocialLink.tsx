import { UrlType } from "@constants/adminUrls";
import React from "react";

interface FooterSocialProps {
  social: UrlType;
}

export default function FooterSocialLink(props: FooterSocialProps){
  const [accentColor, setAccentColor] = React.useState<string>();
  const { social } = props;
  const Icon = social.icon;

  React.useEffect(() => {
    if (social.name == "Twitter") {
      setAccentColor("hover:text-blue-600 active:text-blue-600")
    } else if (social.name == "LinkedIn") {
      setAccentColor("hover:text-cyan-500 active:text-cyan-500")
    } else if (social.name == "Facebook") {
      setAccentColor("hover:text-[#3B5998] active:text-[#3B5998]")
    }
  }, [social])

  return (
    <a className={`flex items-center gap-2 ${accentColor} transition-all`}
      rel="noreferrer"
      target="_blank"
      href={social.path}>
      <span className="p-1.5 aspect-square bg-black/40 border border-gray-50/10 rounded-full">
        <Icon /></span> {social.name}
    </a>
  );
};
