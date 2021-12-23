import Image from "next/image";
import { useMoralis } from "react-moralis";
import TiltPhaseSix from "./TiltPhaseSix";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative font-press text-[#e36493]">
      <div className="flex flex-col absolute z-50 h-3/4 w-full items-center justify-center space-y-4 ">
        <TiltPhaseSix>
          <div className="flex flex-col space-y-5 bg-white bg-opacity-10 backdrop-blur-sm py-[5rem] px-10 rounded-lg shadow-lg shadow-yellow-500/10 card">
            <span className="flex items-center justify-center">
              <Image
                className="object-cover rounded-full "
                src="/images/monkey.jpg"
                width={200}
                height={200}
              />
            </span>
            <button
              onClick={authenticate}
              className="bg-black rounded-lg p-5 font-bold  text-sm lg:text-xl transition-all duration-250 hover:shadow-pink-500 hover:shadow-md hover:-translate-y-2 active:-translate-y-1 active:shadow-sm"
            >
              Login with MetaMask
            </button>
          </div>
        </TiltPhaseSix>
      </div>
      <div className="w-full h-screen">
        <Image src="/images/background.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
