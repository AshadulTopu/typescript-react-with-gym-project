import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  // href: string;
  // selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ActionButton({
  children,
  // selectedPage,
  setSelectedPage,
  // href,
}: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 transition duration-300 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.contactUs)}
      href={`#${SelectedPage.contactUs}`}
    >
      {children}
    </AnchorLink>
  );
}
