import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import NavLink from "./NavLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const flexBetween = "flex items-center justify-between";
  const navList = ["Home", "Benefits", "Our Classes", "Contact Us", "About"];
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBg = isTopOfPage ? "" : "bg-primary-100 shadow-2xl";
  return (
    <nav>
      <div
        className={`${navbarBg} ${flexBetween} fixed left-1/2 top-0 z-30 w-full max-w-[1920px] -translate-x-1/2 py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
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
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become A Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu  */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 ">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu list */}
          <div className={`ml-[15%] flex flex-col gap-4 text-xl`}>
            {navList.map((nav) => (
              <NavLink
                key={nav}
                page={nav}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
