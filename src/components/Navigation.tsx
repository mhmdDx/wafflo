"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navVariants = {
    transparent: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
      borderBottom: "1px solid rgba(0, 0, 0, 0)",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
  }

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  const linkVariants = {
    initial: { y: 0 },
    hover: { y: -2 },
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const mobileMenuVariants = {
    closed: {
      x: "100%",
    },
    open: {
      x: "0%",

    },
  }

  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    },
  }

  const mobileItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  }

  const mobileContainerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        variants={navVariants}
        animate={isScrolled ? "scrolled" : "transparent"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        initial="transparent"
      >
        <div className="container mx-auto px-6 py-4">
          <motion.div
            className="flex items-center justify-between"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="font-display text-2xl font-bold text-primary cursor-pointer"
              onClick={() => scrollToSection("hero")}
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Wafflo
            </motion.div>

            <motion.div className="hidden md:flex items-center space-x-reverse space-x-8" variants={containerVariants}>
              {[
                { text: "الرئيسية", section: "hero" },
                { text: "عن وافلو", section: "about" },
                { text: "القائمة", section: "menu" },
                { text: "تواصل معنا", section: "contact" },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="font-body text-foreground hover:text-primary transition-colors relative"
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  {item.text}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="coffee" size="sm" asChild>
                  <a href="tel:0127632306">اطلب الآن</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              onClick={toggleMobileMenu}
              variants={hamburgerVariants}
              animate={isMobileMenuOpen ? "open" : "closed"}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-foreground block"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-foreground block"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-foreground block"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-lg border-l border-border z-50 md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="font-display text-xl font-bold text-primary">القائمة</span>
                  <motion.button onClick={toggleMobileMenu} className="p-2" whileTap={{ scale: 0.95 }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <motion.div
                  className="flex-1 px-6 py-8"
                  variants={mobileContainerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {[
                    { text: "الرئيسية", section: "hero" },
                    { text: "عن وافلو", section: "about" },
                    { text: "القائمة", section: "menu" },
                    { text: "تواصل معنا", section: "contact" },
                  ].map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(item.section)}
                      className="block w-full text-right py-4 text-lg font-body text-foreground hover:text-primary transition-colors border-b border-border/50 last:border-b-0"
                      variants={mobileItemVariants}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.text}
                    </motion.button>
                  ))}

                  <motion.div className="mt-8" variants={mobileItemVariants}>
                    <Button variant="coffee" size="lg" className="w-full" asChild>
                      <a href="tel:0127632306">اطلب الآن</a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
