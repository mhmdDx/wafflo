"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const textVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const statsData = [
    { number: "+500", label: "كوب قهوة يومياً" },
    { number: "15", label: "نوع وافل مميز" },
    { number: "3", label: "سنوات من التميز" },
    { number: "%100", label: "مكونات طازجة" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-warm" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6" variants={itemVariants}>
            عن وافلو
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mb-12"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="text-right" variants={containerVariants}>
              <motion.p className="font-body text-lg text-foreground/80 mb-6 leading-relaxed" variants={textVariants}>
                وُلد وافلو من شغف بالقهوة الاستثنائية وطعام الراحة، ليجمع بين أجود المكونات الحرفية لخلق تجربة طعام لا
                تُنسى.
              </motion.p>
              <motion.p className="font-body text-lg text-foreground/80 mb-6 leading-relaxed" variants={textVariants}>
                صانعو القهوة المهرة لدينا يصنعون كل كوب بدقة، بينما فريق المطبخ يبدع وافل ذهبي وساندويش ذواقة يحتفي
                بالتقليد والابتكار معاً.
              </motion.p>
              <motion.p className="font-body text-lg text-foreground/80 leading-relaxed" variants={textVariants}>
                في وافلو، كل زيارة هي رحلة من المذاق، حيث تلتقي الجودة بالراحة في أجواء دافئة ومرحبة.
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
              {statsData.map((stat, index) => (
                <motion.div key={index} variants={cardVariants} whileHover={{ scale: 1.05, y: -5 }}>
                  <Card className="p-6 text-center shadow-warm hover:shadow-lg transition-shadow duration-300">
                    <motion.div
                      className="font-display text-3xl font-bold text-primary mb-2"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="font-body text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
