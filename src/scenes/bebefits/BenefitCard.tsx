import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function BenefitCard({
  icon,
  title,
  description,
  setSelectedPage,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="rounded-lg border border-gray-200 p-10 text-center"
    >
      {/* ICON */}
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 bg-primary-100">
        {/* <HomeModernIcon className="h-6 w-6 text-primary-500" /> */}
        {icon}
      </div>
      {/* TITLE */}
      <h3 className="mb-6 text-3xl">{title}</h3>
      {/* DESCRIPTION */}
      <p className="mb-6">{description}</p>

      <AnchorLink
        className="text-sm font-bold text-primary-500 underline transition duration-300 hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.contactUs)}
        href={`#${SelectedPage.contactUs}`}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
}
