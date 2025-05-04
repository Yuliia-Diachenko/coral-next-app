import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

export default function NavBar() {
    return (
        <>
       <header>
        <DesktopNavBar/>
        <MobileNavBar/>
       </header>
        </>
    )
}