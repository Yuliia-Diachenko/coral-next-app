import Logo from "@/components/Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import { PiUserCircleFill } from "react-icons/pi";
import Link from "next/link";

interface DesktopNavBarProps {
  className?: string;
}
const DesktopNavBar: React.FC<DesktopNavBarProps> = ({ className }) => {

    return (
       <div className={className}>
      <div className="bg-[#E27979] w-full h-[184px] fixed top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between pl-8">
    
          <Logo className="w-[330px] h-[62px] flex gap-2 items-center" />

          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-8 justify-center gap-8">
              <li className="text-lg font-semibold text-white-400 hover:text-white-800 focus:text-white-800 transition-colors">
                <Link href={'/fallback-url'}>Home</Link>
              </li>
              <li className="text-lg font-semibold text-white-400 hover:text-white-800 focus:text-white-800 transition-colors">
                <Link href={'/fallback-url'}>Solutions</Link>
              </li>
              <li className="text-lg font-semibold text-white-400 hover:text-white-800 focus:text-white-800 transition-colors">
                <Link href={'/fallback-url'}>Resources</Link>
              </li>
              <li className="text-lg font-semibold text-white-400 hover:text-white-800 focus:text-white-800 transition-colors">
                <Link href={'/fallback-url'}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-6">
            <SearchBar />
            <PiUserCircleFill size={32} className="text-white" />
          </div>
        </div>
      </div>
    </div>
   )
};
    
   

export default DesktopNavBar;