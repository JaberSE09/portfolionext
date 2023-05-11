import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../../public/images/sajid.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) ,value){
        ref.current.textContent = latest.toFixed(0)
      }
    });
  });

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Sajid Jaber | About</title>
        <meta name="description" content="Sajid Jaber About Me" />
      </Head>

      <main className="w-full flex flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text={"Let's code the future together!"}
            className="mb-16"
          />
          <div className="grid grid-cols-8 w-full gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/77 ">
                About Me
              </h2>
              <p>
                <p className="m-3">
                  With a passion for coding and a steadfast dedication to
                  creating engaging user experiences, I am a full-stack web
                  developer specializing in the MERN stack (MongoDB, Express.js,
                  React.js, and Node.js). I have a keen interest in solving
                  complex problems and am driven by the desire to build
                  innovative, scalable, and responsive web applications.{" "}
                </p>

                <p className="m-3">
                  I earned a Bachelor's degree in Computer Science and have
                  since been honing my skills in the exciting realm of web
                  development. Throughout my career, I have developed a unique
                  mix of technical acumen and creativity that enables me to
                  build visually appealing and functionally robust applications.
                </p>

                <p className="m-3">
                  My portfolio showcases a range of projects, where I have
                  demonstrated my ability to design, develop, and deploy
                  full-stack web applications using the MERN stack. I am
                  proficient in HTML, CSS, JavaScript, and familiar with various
                  development tools and methodologies like Git, Agile, and
                  Scrum. I believe in the power of collaboration and am an
                  effective team player, consistently contributing to achieving
                  shared goals while also demonstrating the ability to work
                  independently.
                </p>
                <p className="m-3">
                  Additionally, I'm always eager to learn new technologies and
                  expand my skill set to keep up with the ever-evolving digital
                  landscape. When I'm not coding, you'll find me reading about
                  the latest tech trends, playing chess, or exploring the great
                  outdoors. Feel free to explore my portfolio and don't hesitate
                  to reach out if you're interested in working together or
                  discussing potential projects. I'm always excited to connect
                  with fellow developers, potential employers, or anyone who
                  shares my passion for technology.
                </p>
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark">
              <div className="absolute top-0  -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
              <Image
                src={profilePic}
                alt="Sajid"
                className="w-full h-auto rounded-[2rem]"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-zl font-medium capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"> <AnimatedNumbers value={20} />+</span>
                <h2 className="text-zl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"> <AnimatedNumbers value={20} />+</span>
                <h2 className="text-zl font-medium capitalize text-dark/75">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
