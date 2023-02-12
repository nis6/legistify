import { Link, Image } from "@chakra-ui/react";
import svg from "../assets";
const Logo = () => {
  return (
    <Link>
      <Image src={svg.logo} objectFit="fill" />
    </Link>
  );
};

export default Logo;
