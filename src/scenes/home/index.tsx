import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto flex flex-col px-6 md:w-5/6 md:flex-row md:items-center md:justify-between md:px-0"
        onViewportEnter={() => setSelectedPage(SelectedPage.home)}
      >
        {/* MAIN HEADER */}
        <div className="mt-32 md:basis-3/5">
          {/* HEADING */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative z-10">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home page text" />
              </div>
            </div>
            <p className="mt-8 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium inventore quam veniam delectus possimus magni quidem,
              eligendi doloremque saepe cumque.
            </p>
          </motion.div>
          {/* ACTION BUTTON */}
          <motion.div
            className="mt-10 flex items-center gap-8"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline transition duration-300 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.contactUs)}
              href={`#${SelectedPage.contactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="md:basis-3/5">
          <img
            className="w-full"
            src={HomePageGraphic}
            alt="home page graphic"
          />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] bg-primary-100 py-10">
          <div className="mx-auto flex w-5/6 items-center gap-8">
            <div>
              <img
                className="h-full w-full"
                src={SponsorRedBull}
                alt="sponsor"
              />
            </div>
            <div>
              <img
                className="h-full w-full"
                src={SponsorForbes}
                alt="sponsor"
              />
            </div>
            <div>
              <img
                className="h-full w-full"
                src={SponsorFortune}
                alt="sponsor"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
