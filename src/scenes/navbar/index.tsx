// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import NavLink from "./NavLink";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

export default function Navbar({ selectedPage, setSelectedPage }: Props) {
  const flexBetween = "flex items-center justify-between";
  const navList = ["Home", "Benefits", "Contact Us", "About"];
  return (
    <nav>
      <div
        className={`${flexBetween} fixed left-1/2 top-0 z-30 w-full max-w-[1920px] -translate-x-1/2 py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />
            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                {navList.map((nav) => (
                  <NavLink
                    key={nav}
                    page={nav}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
              </div>
              <div className={`${flexBetween} gap-8`}>
                <a href="#signin">Sign In</a>
                <a href="#signin">Become A Member</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
