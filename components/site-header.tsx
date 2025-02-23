"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { AlignJustify, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const menuItems = [
  {
    id: 1,
    label: "Find Creators",
    href: "/creators",
  },
  {
    id: 2,
    label: "How it Works",
    href: "/how-it-works",
  },
  {
    id: 3,
    label: "Pricing",
    href: "/pricing",
  },
  {
    id: 4,
    label: "Resources",
    href: "/resources",
  },
]

const mobileNavVariants = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.2,
      ease: "easeOut",
    },
  },
}

const mobileLinkVariants = {
  initial: {
    y: "-20px",
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

function SiteHeader() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)

  useEffect(() => {
    const html = document.querySelector("html")
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen)
  }, [hamburgerMenuIsOpen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false)
    window.addEventListener("orientationchange", closeHamburgerNavigation)
    window.addEventListener("resize", closeHamburgerNavigation)

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation)
      window.removeEventListener("resize", closeHamburgerNavigation)
    }
  }, [])

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-[var(--header-height)] items-center justify-between">
          <Link className="text-md flex items-center" href="/">
            Zero Vacancy
          </Link>

          <div className="ml-auto flex h-full items-center">
            <Link className="mr-3 sm:mr-6 text-sm hidden sm:inline-block" href="/signin">
              Log in
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "mr-3 sm:mr-6 text-sm"
              )}
              href="/signup"
            >
              Sign up
            </Link>
          </div>
          <button
            className="ml-2 sm:ml-6 md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobileNavVariants}
          animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          className={cn(
            "fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px]",
            {
              "pointer-events-none": !hamburgerMenuIsOpen,
            }
          )}
        >
          <div className="container flex h-[3.5rem] items-center justify-between">
            <Link className="text-md flex items-center" href="/">
              Zero Vacancy
            </Link>

            <button
              className="ml-6 md:hidden"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
            </button>
          </div>
          <motion.ul
            className="flex flex-col md:flex-row md:items-center uppercase md:normal-case ease-in pt-4 md:pt-0"
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? "open" : "exit"}
          >
            {menuItems.map((item) => (
              <motion.li
                variants={mobileLinkVariants}
                key={item.id}
                className="border-grey-dark pl-6 py-2 md:py-0.5 border-b md:border-none"
              >
                <Link
                  className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${
                    hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </>
  )
}

export { SiteHeader }