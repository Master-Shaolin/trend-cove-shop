
import Link from "next/link";
import logo from "/public/images/logo.png";

const HeadLogo = () => {
  return (
    <div>
      <Link className="inline-flex focus:outline-none w-36" href={"/"}>
        <img className="object-cover w-full rounded-md" src={logo.src} />
      </Link>
    </div>
  );
};

export default HeadLogo;
