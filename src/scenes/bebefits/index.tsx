import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import BenefitCard from "./BenefitCard";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

// type BenefitType = {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// };

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-8 w-8" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus quae eum iusto quia nihil dicta animi nam tempore eaque?",
  },
  {
    icon: <UserGroupIcon className="h-8 w-8" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus quae eum iusto quia nihil dicta animi nam tempore eaque?",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus quae eum iusto quia nihil dicta animi nam tempore eaque?",
  },
];

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.benefits)}
        className=""
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-6 md:mb-10 md:w-1/2"
        >
          <HText>This is the benefits</HText>
          <p className="text-base font-semibold text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            repellendus quae eum iusto quia nihil dicta animi nam tempore eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            repellendus quae eum iusto quia nihil dicta animi nam tempore eaque?
          </p>
        </motion.div>
        {/* CARDS */}
        <div className="grid justify-between gap-3 md:grid-cols-3 md:flex-row">
          {/* {benefits} */}
          {benefits.map((benefit: BenefitType) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
