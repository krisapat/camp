import { Darkmode } from "./Navbar_Components/Darkmode"
import Logo from "./Navbar_Components/Logo"
import Profile from "./Navbar_Components/Profile"

const Navbar = () => {
    return (
        <nav className="container flex items-center justify-between space-x-4">
            {/* Logo */}
            <Logo />
            {/* Search */}
            
            {/* User */}
            <div className="flex items-center space-x-2">
                <Darkmode />
                <Profile />
            </div>
        </nav>
    )
}
export default Navbar