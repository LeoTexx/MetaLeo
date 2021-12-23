import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative mx-auto h-24 w-24 hidden lg:inline-grid">
          <Image
            layout="fill"
            className="object-cover rounded-full "
            src="/images/monkey.jpg"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl"> Welcome to METALEO</h1>
          <h2 className="text-xl mb-8">
            The place in the Metaverse made by Leo
          </h2>

          <h2 className="text-5xl font-bold truncate">
            {user.get("username")}
          </h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
