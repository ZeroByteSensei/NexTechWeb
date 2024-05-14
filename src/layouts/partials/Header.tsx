"use client"

import Link from "next/link";
import {useState } from "react";
import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";
import { useActivePath } from "@/helpers/useActivePath";
import Social from "@/components/Social";
import social from "@/config/social.json";
import Logo from "@/components/Logo";


const navLinks = [
  { title: "Visit Home", href: "/" },
  { title: "Our Services", href: "/services" },
  { title: "Our Courses", href: "/courses" },
  { title: "Know About Us", href: "/about-us" },
  { title: "Our Blogs", href: "/blog" },
  { title: "Get In Touch", href: "/contact" },
];
const navigation = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About Us' },
  { href: '/services', name: 'Services' },
  { href: '/courses', name: 'Courses' },
  { href: '/contact', name: 'Contact' },
]


const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const checkActivePathNav = useActivePath();

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  // colors: yellow: #FBDC6D, Blue: #1B1E49, Red: #D02727

  return (
    <header className="bg-[#1B1E49] fixed w-full h-[78px] z-50">
      <nav className="flex justify-between items-center py-4 lg:py-0 lg:px-10">
        <div className="flex items-center">
          {/* <div className="w-5 h-5 bg-yellow-400 rounded-full" /> */}
            <span className="text-sm font-semibold tracking-widest">
              <Logo/>
            </span>
        </div>
        <div className="lg:flex hidden gap-12 text-md text-[#FBDC6D]">
          {navigation.map(({href, name})=>(
            <Link key={href} href={href} className={checkActivePathNav(href) ? 'text-[#8e92d5] font-bold' : ''}>
              <AnimatedLink title={name} />
            </Link>
          ))}
        </div>
        <div
          className="cursor-pointer text-md text-[#FBDC6D] px-3 py-5"
          onClick={toggleMenu}
          >
            <AnimatedLink title="MENU"/>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#1B1E49] text-[#8e92d5] pt-4 pr-4"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <Logo/>
                <p
                  className="cursor-pointer text-md font-bold text-[#FBDC6D] px-3 py-5 transition-all"
                  onClick={toggleMenu}
                >
                  <AnimatedLink title="CLOSE"/>
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => (
                    <div className="overflow-hidden" key={index} onClick={toggleMenu}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  )
                )}
              </motion.div>
              <div className="flex flex-col md:flex-row gap-y-8 md:justify-between md:px-4 md:pb-8">
                <Social source={social.main} className="social-icons"/>
                <div>
                  <p className="text-[#FBDC6D] text-lg">contact@nextechmedia.co.in</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }:{title:string, href:string}) => {
  const checkActivePathMenu = useActivePath();

  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-[#FBDC6D] font-bold"
    >
      <Link href={href} className={checkActivePathMenu(href) ? 'text-[#8e92d5] font-bold' : ''} >
        <AnimatedLink title={title}/>
      </Link>
    </motion.div>
  );
};



