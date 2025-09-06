"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-image.jpg"

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-coffee opacity-75"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-8">
          <motion.h1
            className="font-display text-6xl md:text-8xl font-bold text-primary-foreground mb-4 tracking-wide"
            variants={titleVariants}
          >
            Wafflo
          </motion.h1>
          <motion.p
            className="font-body text-xl md:text-2xl text-primary-foreground/90 mb-2 tracking-widest uppercase"
            variants={itemVariants}
          >
            قهوة • وافل • ساندويش
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mb-8"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          <motion.p
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            حيث تلتقي القهوة الحرفية مع الوافل الطازج والساندويش الذواقة. اختبر المزج المثالي بين الراحة والجودة في كل
            قضمة.
          </motion.p>
        </div>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="hero" size="lg" onClick={scrollToMenu}>
              استكشف قائمتنا
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
