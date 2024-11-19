import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const components = {
  instagram: FaInstagram,
  x: FaSquareXTwitter,
  facebook: FaFacebook,
  youtube: FaYoutube,
};

interface IProps {
  iconName: string;
}

const IconSocial = ({ iconName }: IProps) => {
  const Icon = components[iconName as keyof IconType] as IconType;
  return <Icon className="w-4 h-4" />;
};

export default IconSocial;
