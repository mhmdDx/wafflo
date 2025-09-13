"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  }

  return (
    <motion.footer className="bg-primary text-primary-foreground py-12" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Coffee className="w-8 h-8" />
              </motion.div>
              <span className="font-display text-2xl font-bold">Wafflo</span>
            </motion.div>
            <motion.p
              className="font-body text-primary-foreground/80 mb-6 max-w-md"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              حيث تلتقي القهوة الحرفية مع الوافل الطازج والساندويش الذواقة. اختبر المزج المثالي بين الراحة والجودة.
            </motion.p>
            <motion.div className="flex space-x-4" variants={containerVariants}>
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  variants={socialVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-body font-semibold mb-4">روابط سريعة</h4>
            <motion.ul className="space-y-2 font-body text-primary-foreground/80" variants={containerVariants}>
              {[
                { text: "الرئيسية", href: "#hero" },
                { text: "عن وافلو", href: "#about" },
                { text: "القائمة", href: "#menu" },
                { text: "تواصل معنا", href: "#contact" },
              ].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a
                    href={link.href}
                    className="hover:text-primary-foreground transition-colors inline-block"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {link.text}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-body font-semibold mb-4">التواصل</h4>
            <motion.div className="space-y-2 font-body text-primary-foreground/80" variants={containerVariants}>
              <motion.p variants={itemVariants}>خلف مول عمر المختار</motion.p>
              <motion.p variants={itemVariants}>بجوار مستشفي الصفوه</motion.p>
              <motion.a
                href="tel:0127632306"
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                className="inline-block"
              >
                0127632306
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        
<motion.div
  className="border-t border-primary-foreground/20 mt-8 pt-8 text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ delay: 0.8, duration: 0.6 }}
>
  <p className="font-body text-primary-foreground/60">
    <span className="text-primary-foreground/40">©</span> 2025 وافلو. جميع الحقوق محفوظة. تطوير بوسطة{' '}
    <a
      href="https://github.com/mhmdDx"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-foreground transition-colors"
    >
      محمد عيد
    </a>.
  </p>
</motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
