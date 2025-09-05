import { Link, IconButton } from "@mui/material";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { LuMails } from "react-icons/lu";

// Customize your social media links
const SocialIconDetails = [
  {
    icon: (
      <IoLogoGithub className="text-[1.2rem] text-black group-hover:text-secondary" />
    ),
    link: "",
  },
  {
    icon: (
      <IoLogoLinkedin className="text-[1.2rem] text-black group-hover:text-secondary" />
    ),
    link: "",
  },
  {
    icon: (
      <LuMails className="text-[1.2rem] text-black group-hover:text-secondary" />
    ),
    link: "",
  },
];

function Socialicons() {
  return (
    <div className="flex space-x-6 social-icons">
      {SocialIconDetails.map((item, index) => (
        <IconButton
          key={index}
          onClick={
            item.link
              ? () => window.open(item.link)
              : undefined
          }
          target="_blank"
          className="group !bg-yellow-300 hover:!bg-yellow-300/80"
        >
          <Link>{item.icon}</Link>
        </IconButton>
      ))}
    </div>
  );
}

export default Socialicons;
