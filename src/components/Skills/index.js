import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-15vw" y="-10vw" />
        <Skill name="HTML" x="-15vw" y="-20vw" />
        <Skill name="JavaScript" x="-15vw" y="-15vw" />
        <Skill name="ReactJS" x="0vw" y="-10vw" />
        <Skill name="NextJS" x="0vw" y="-20vw" />
        <Skill name="Flutter" x="0vw" y="-15vw" />
        <Skill name="Web Design" x="20vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="20vw" y="-15vw" />
        <Skill name="Bootstrap" x="20vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="15vw" y="10vw" />
        <Skill name="PHP" x="15vw" y="20vw" />
        <Skill name="MYSQL" x="15vw" y="15vw" />
        <Skill name="MYSQL" x="0vw" y="15vw" />
        <Skill name="Java" x="0vw" y="20vw" />
        <Skill name="MongoDB" x="0vw" y= "10vw" />
        <Skill name="MYSQL" x="0vw" y="15vw" />
        <Skill name="C++" x="-15vw" y="15vw" />
        <Skill name="C#" x="-15vw" y="10vw" />
        <Skill name="Python" x="-15vw" y="20vw" />
      </div>
    </>
  );
}

export default Skills;
