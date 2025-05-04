import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

export default function NavBar() {
    return (
        <>
       <header >
        <DesktopNavBar className="flex items-center justify-between  mx-auto max-w-1650"/>
        <MobileNavBar/>
       </header>
        </>
    )
}