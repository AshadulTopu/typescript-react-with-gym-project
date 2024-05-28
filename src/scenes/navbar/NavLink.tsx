import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function NavLink({
  page,
  selectedPage,
  setSelectedPage,
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  // const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  //   const selectedPage = "home";
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
}
