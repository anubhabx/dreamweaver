import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import ProfileActions from "./ProfileActions";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-16 py-4 md:px-48 border-b bg-transparent backdrop-blur-sm">
      <div className="flex flex-grow space-x-16 items-center">
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <span className="font-bold text-xl">.Dreamweaver</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Profile Actions */}
        <div>
          <ProfileActions />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
