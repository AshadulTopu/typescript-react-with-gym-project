import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

export default function NavLink({
  page,
  selectedPage,
  setSelectedPage,
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  //   const selectedPage = "home";
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} hover:text-primary-300 transition duration-500`}
    >
      {page}
    </AnchorLink>
  );
}
