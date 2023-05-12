import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "../LiIcon";

const Details = ({ type,time, place,info}) => {
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
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}{" "}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>

      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
        <ul
          className="w-full flex flex-col items-start justify-between"
          style={{ scaleY: scrollYProgress }}
        >
          <Details
            type={"Full Stack MERN Web Developemnt Bootcamp"}
            time={"2022-2022"}
            place={"University of Wisconsin Madison"}
            info={"As a participant in the Full-Stack Web Development Bootcamp at the University of Wisconsin-Madison, I had the opportunity to immerse myself in an intensive, 12-week program that focused on MERN Stack (MongoDB, Express.js, React.js, Node.js). This bootcamp allowed me to gain a comprehensive understanding of full-stack development, from creating databases with MongoDB, building servers using Express.js and Node.js, to creating user interfaces with React.js."}
          />
            <Details
            type={"Undergraduate Degree B.S Computer Science"}
            time={"2013-2017"}
            place={"University of Wisconsin Whitewater"}
            info={"As a proud graduate of the University of Wisconsin-Whitewater's Computer Science program, I have developed a robust foundation in various aspects of computer science. Throughout my academic journey, I've dedicated myself to mastering a range of programming languages, including Java, Python, and C++, and I have gained a solid understanding of data structures, algorithms, and computer systems."}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
