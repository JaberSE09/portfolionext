import Head from "next/head";
import Layout from "../components/Layout";
import profilePic from "../../public/images/sajid.png";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="Sajid" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Versatile Full Stack MERN Developer" />
              <p className="my-4 text-base font-medium">An adept Full Stack MERN Developer, I bring a wealth of experience in building scalable, high-performing, and robust web applications using MongoDB, Express.js, React.js, and Node.js. With a strong understanding of JavaScript and its latest ES6+ features, I deliver both front-end and back-end solutions that meet and exceed client expectations.</p>
           
            <div className="flex items-center self-start mt-2">
            <Link className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark" href={"./resume.pdf"} download={true} target="_blank">Resume
            <LinkArrow className={" w-6 h-6 ml-1"} />
            
            
            
            </Link>
            <Link href={"mailto:sajidjaber@yahoo.com"} className="ml-4 text-lg font-medium capitalize text-dark underline">Contact</Link>
          </div>
         </div> 
             </div>
        </Layout>
      </main>
    </>
  );
}
