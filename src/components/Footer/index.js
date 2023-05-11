import React from "react";
import Layout from "../Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-5 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
<div>        <Link href={"/"} className="underline underline-offset-2">Created By Sajid Jaber</Link></div>
      </Layout>
    </footer>
  );
};

export default Footer;
