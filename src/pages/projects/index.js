import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import portfolio from '../../../public/images/portfolio.png'


const Project =({type, title, img, link, github }) =>{
  <article className="w-full flex items-center justify-center rounded-2xl border border-sol
   border-dark bg-light p-6 relative">
  <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
    <Image src={img} alt={title} className=" w-full h-full" />
  </Link>
  <div className="w-full flex flex-col items-start pl-6">
    <span className="text-primary font-medium text-xl">{type}</span>
    <Link href={link} target="_blank">
      <h2 className="my-2 w-full text-left text-4xl font-bold underlined underline-offset-2">{title}</h2>
    </Link>
  <div className="mt-2 flex items-center"> 
  <Link className="w-10" href={github} target="_blank"><GithubIcon /> </Link>
  <Link href={link}
  className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
  target="_blank">Visit </Link>
  
  </div>
  </div>
</article>
}
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="p-12 w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl">
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className=" w-full h-full" />
      </Link>
      <div className="w-1/2 flex flex-col items-start pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold underlined underline-offset-2">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark  ">{summary}</p>
      <div className="mt-2 flex items-center"> 
      <Link className="w-10" href={github} target="_blank"><GithubIcon /> </Link>
      <Link href={link}
      className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
      target="_blank">Visit Project </Link>
      
      </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Sajid Jaber | Projects</title>
        <meta name="description" content="Sajid Jaber Projects" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
          className="mb-16"
            text={
              "My Portfolio: Showcasing a Journey of Creativity, Innovation, and Professional Growth"
            }
          />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject 
              title={"Portfolio Website"}
              summary={"Welcome to my professional portfolio, a MERN Stack Development showcase of my journey as a Web Developer. I specialize in  with a passion for creating intuitive and engaging digital experiences. With over 5 years of experience in the industry, I've had the opportunity to work on a range of projects from small business websites to complex web applications. My expertise lies in HTML, CSS, JavaScript, and working with modern frameworks like React and Vue.js. This portfolio not only highlights my skills and achievements, but also reflects my commitment to staying abreast of the latest industry trends and technologies. Feel free to explore my work and get in touch for potential collaborations."}
              type={"Featured Project"}
              github={"https://github.com/JaberSE09/portfolionext"}
              link={"/"}
              img={portfolio}
              />
            </div>
            <div className="col-span-6"><Project 
            title={}
            
            
            </div>
            <div className="col-span-6">Project 2</div>
            <div className="col-span-6">Project 1</div>
            <div className="col-span-6">Project 2</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
