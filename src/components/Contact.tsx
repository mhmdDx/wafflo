"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
  }

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-warm" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6" variants={itemVariants}>
            زورنا
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mb-6"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            تعال واختبر فرق وافلو. نحن مفتوحون يومياً ومستعدون لتقديم أجود القهوة والطعام في أجواء دافئة ومرحبة.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} whileHover={{ scale: 1.02, y: -5 }}>
            <Card className="p-6 shadow-warm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-reverse space-x-4">
                <motion.div
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-body font-semibold text-foreground mb-2">الموقع</h3>
                  <p className="font-body text-muted-foreground">
                    خلف مول عمر المختار
                    <br />
                    بجوار مستشفي الصفوه
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} whileHover={{ scale: 1.02, y: -5 }}>
            <Card className="p-6 shadow-warm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-reverse space-x-4">
                <motion.div
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-body font-semibold text-foreground mb-2">الهاتف</h3>
                  <motion.a
                    href="tel:0127632306"
                    className="font-body text-muted-foreground"
                    whileHover={{ scale: 1.05, color: "#000" }}
                  >
                    0127632306
                  </motion.a>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
