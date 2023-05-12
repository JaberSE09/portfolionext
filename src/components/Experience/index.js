import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "../LiIcon";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first-mt-0 last-mt-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      {" "}
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position} &nbsp; @ {company}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}{" "}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
        <ul
          className="w-full flex flex-col items-start justify-between"
          style={{ scaleY: scrollYProgress }}
        >
          <Details
            position={"Remote Web Developer (Freelancer)"}
            company={"self-employed"}
            time={"2018-Present"}
            address={"Remote"}
            work={
              "As a Freelance Remote Web Developer, I use my extensive skills to create dynamic, user-friendly, and aesthetically pleasing websites. I work independently, efficiently, and remotely, collaborating with various teams to meet and surpass project expectations."
            }
          />
          <Details
            position={"Remote Web Developer (Freelancer)"}
            company={"self-employed"}
            time={"2018-Present"}
            address={"Remote"}
            work={
              "As a Freelance Remote Web Developer, I use my extensive skills to create dynamic, user-friendly, and aesthetically pleasing websites. I work independently, efficiently, and remotely, collaborating with various teams to meet and surpass project expectations."
            }
          />
          <Details
            position={"Remote Web Developer (Freelancer)"}
            company={"self-employed"}
            time={"2018-Present"}
            address={"Remote"}
            work={
              "As a Freelance Remote Web Developer, I use my extensive skills to create dynamic, user-friendly, and aesthetically pleasing websites. I work independently, efficiently, and remotely, collaborating with various teams to meet and surpass project expectations."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
