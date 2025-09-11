"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import foodMenuImage from "@/assets/waffles.jpg"
import drinksMenuImage from "@/assets/iced-coffee.jpg"
import sandwichesMenuImage from "@/assets/sandwiches.jpg"

const Menu = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  const headerVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const menuCategories = [
    // Waffles & Pancakes
    {
      title: "وافل حلو",
      image: foodMenuImage,
      items: [
        { name: "نوتيلا", description: "", price: "25 ج.م" },
        { name: "اوريو", description: "", price: "25 ج.م" },
        { name: "كارمل", description: "", price: "25 ج.م" },
        { name: "وايت شوكليت", description: "", price: "25 ج.م" },
        { name: "لوتس", description: "", price: "25 ج.م" },
        { name: "مانجو", description: "", price: "30 ج.م" },
        { name: "صوص توت بري", description: "", price: "30 ج.م" },
        { name: "صوص فراولة", description: "", price: "30 ج.م" },
        { name: "كيندر", description: "", price: "30 ج.م" },
        { name: "بيستاشيو", description: "", price: "35 ج.م" },
      ],
    },
    {
      title: "وافل حادق",
      image: foodMenuImage,
      items: [
        { name: "رومي", description: "", price: "25 ج.م" },
        { name: "شيدر", description: "", price: "25 ج.م" },
        { name: "سوس شيدر", description: "", price: "30 ج.م" },
        { name: "فاهيتا + لاشنون + ميكس جبن", description: "", price: "30 ج.م" },
        { name: "فتوتشيني بونو", description: "", price: "35 ج.م" },
      ],
    },
    {
      title: "بان كيك",
      image: foodMenuImage,
      items: [
        { name: "نوتيلا", description: "", price: "25/45 ج.م" },
        { name: "لوتس", description: "", price: "25/45 ج.م" },
        { name: "وايت شوكليت", description: "", price: "25/45 ج.م" },
        { name: "بيستاشيو", description: "", price: "30/60 ج.م" },
        { name: "فريش فواكه", description: "", price: "30/60 ج.م" },
        { name: "كيندر", description: "", price: "30/60 ج.م" },
        { name: "مورو", description: "", price: "30/60 ج.م" },
        { name: "صوص باشون فروت", description: "", price: "30/60 ج.م" },
        { name: "فور سيزون", description: "", price: "30/60 ج.م" },
      ],
    },

    // Sandwiches
    {
      title: "سندوتشات حلو",
      image: sandwichesMenuImage,
      items: [
        { name: "نوتيلا اوريو", description: "", price: "15 ج.م" },
        { name: "اوريو + وايت شوكليت", description: "", price: "15 ج.م" },
        { name: "ميكس شوكليت", description: "", price: "15 ج.م" },
        { name: "مارشميلو شوكليت", description: "", price: "17 ج.م" },
        { name: "لوتس + وايت شوكليت", description: "", price: "17 ج.م" },
        { name: "سوبر نوتيلا", description: "", price: "20 ج.م" },
        { name: "بيستاشيو اوريو", description: "", price: "20 ج.م" },
        { name: "مارشميلو اوريو", description: "", price: "20 ج.م" },
      ],
    },
    {
      title: "سندوتشات الجبن",
      image: sandwichesMenuImage,
      items: [
        { name: "جبنة بيضة", description: "", price: "6 ج.م" },
        { name: "جبنة بيضة + طماطم وخيار", description: "", price: "7 ج.م" },
        { name: "طرية ملح خفيف", description: "", price: "8 ج.م" },
        { name: "كيري سادة", description: "", price: "9 ج.م" },
        { name: "كيري بسطرة", description: "", price: "12 ج.م" },
        { name: "شيدر", description: "", price: "10 ج.م" },
        { name: "تونة", description: "", price: "15 ج.م" },
        { name: "سلطة تونة", description: "", price: "20 ج.م" },
      ],
    },
    {
      title: "سندوتشات اللحوم",
      image: sandwichesMenuImage,
      items: [
        { name: "بانية", description: "", price: "18 ج.م" },
        { name: "بوفتيك", description: "", price: "18 ج.م" },
        { name: "سجق مشوي", description: "", price: "20 ج.م" },
        { name: "سجق خلطة", description: "", price: "17 ج.م" },
        { name: "سوسيس", description: "", price: "17 ج.م" },
        { name: "لحمة بالبصل", description: "", price: "20 ج.م" },
        { name: "بسطرة بالصلصة", description: "", price: "15 ج.م" },
        { name: "مورتادلا", description: "", price: "17 ج.م" },
      ],
    },

    // Fresca
    {
      title: "فرسكا حلو",
      image: foodMenuImage,
      items: [
        { name: "ساده", description: "", price: "5 ج.م" },
        { name: "سكر", description: "", price: "8 ج.م" },
        { name: "هوموز", description: "", price: "8 ج.م" },
        { name: "بسكوت", description: "", price: "10 ج.م" },
        { name: "نوتيلا", description: "", price: "12 ج.م" },
        { name: "وايت شوكليت", description: "", price: "12 ج.م" },
        { name: "لوتس", description: "", price: "12 ج.م" },
        { name: "كيندر", description: "", price: "15 ج.م" },
        { name: "فرسكا بوم", description: "", price: "25 ج.م" },
      ],
    },
    {
      title: "فرسكا حادق",
      image: foodMenuImage,
      items: [
        { name: "رومي", description: "", price: "15 ج.م" },
        { name: "شيدر", description: "", price: "15 ج.م" },
        { name: "ميكس جبن", description: "", price: "20 ج.م" },
        { name: "فاهيتا", description: "", price: "25 ج.م" },
      ],
    },

    // Drinks
    {
      title: "سموزيس",
      image: drinksMenuImage,
      items: [
        { name: "بلو بيري", description: "", price: "35 ج.م" },
        { name: "باشون فروت", description: "", price: "35 ج.م" },
        { name: "فراولة", description: "", price: "35 ج.م" },
        { name: "مانجو", description: "", price: "35 ج.م" },
        { name: "أناناس", description: "", price: "35 ج.م" },
        { name: "فراولة بيري", description: "", price: "35 ج.م" },
        { name: "بيناكولادا", description: "", price: "35 ج.م" },
      ],
    },
    {
      title: "عصائر فريش",
      image: drinksMenuImage,
      items: [
        { name: "ليمون", description: "", price: "30 ج.م" },
        { name: "ليمون نعناع", description: "", price: "35 ج.م" },
        { name: "برتقال", description: "", price: "35 ج.م" },
        { name: "مانجو", description: "", price: "45 ج.م" },
        { name: "موز", description: "", price: "45 ج.م" },
        { name: "موز كارميل", description: "", price: "50 ج.م" },
        { name: "جوافة", description: "", price: "50 ج.م" },
        { name: "فراولة", description: "", price: "50 ج.م" },
        { name: "رمان", description: "", price: "50 ج.م" },
        { name: "كيوي", description: "", price: "60 ج.م" },
      ],
    },
    {
      title: "ميلك شيكس",
      image: drinksMenuImage,
      items: [
        { name: "ميلك شيك فانيلا", description: "", price: "45 ج.م" },
        { name: "ميلك شيك شوكليت", description: "", price: "45 ج.م" },
        { name: "ميلك شيك فراولة", description: "", price: "45 ج.م" },
        { name: "ميلك شيك مانجو", description: "", price: "45 ج.م" },
        { name: "ميلك شيك أوريو", description: "", price: "45 ج.م" },
        { name: "ميلك شيك نوتيلا", description: "", price: "50 ج.م" },
        { name: "ميلك شيك لوتس", description: "", price: "50 ج.م" },
        { name: "ميلك شيك كراميل", description: "", price: "50 ج.م" },
      ],
    },
    {
      title: "سوفت درينكس",
      image: drinksMenuImage,
      items: [
        { name: "موهيتو بلوبيري", description: "", price: "40 ج.م" },
        { name: "موهيتو باشون فروت", description: "", price: "40 ج.م" },
        { name: "موهيتو اناناس", description: "", price: "40 ج.م" },
        { name: "موهيتو فراوله", description: "", price: "40 ج.م" },
        { name: "موهيتو مانجو", description: "", price: "40 ج.م" },
        { name: "موهيتو نعناع", description: "", price: "40 ج.م" },
        { name: "موهيتو شيري", description: "", price: "40 ج.م" },
        { name: "صن شاين", description: "", price: "40 ج.م" },
        { name: "شيري كولا", description: "", price: "50 ج.م" },
        { name: "ريد بول بلوبيري", description: "", price: "80 ج.م" },
        { name: "ريد بول باشون فروت", description: "", price: "80 ج.م" },
        { name: "ريد بول اناناس", description: "", price: "80 ج.م" },
        { name: "ريد بول كوكونت", description: "", price: "80 ج.م" },
        { name: "ريد بول مانجا", description: "", price: "80 ج.م" },
        { name: "ريد بول بطيخ", description: "", price: "80 ج.م" },
        { name: "ريد بول كيوي", description: "", price: "80 ج.م" },
        { name: "ريد بول ميكس بيري", description: "", price: "80 ج.م" },
        { name: "بينا كولادا", description: "", price: "80 ج.م" },
      ],
    },
  ]

  return (
    <section id="menu" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold text-primary mb-6"
            variants={headerVariants}
          >
            قائمتنا
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mb-6"
            variants={headerVariants}
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto" variants={headerVariants}>
            اكتشف مجموعتنا المختارة بعناية من المشروبات الفاخرة والوافل الحرفي والساندويش الذواقة المحضر طازجاً يومياً.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {menuCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden shadow-coffee hover:shadow-glow transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-coffee opacity-20"></div>
                    <motion.div
                      className="absolute bottom-4 left-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <h3 className="font-display text-2xl font-bold text-white">{category.title}</h3>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <motion.div
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex justify-between items-start group cursor-pointer"
                          variants={itemVariants}
                          whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.02)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex-1">
                            <motion.h4
                              className="font-body font-semibold text-foreground mb-1 group-hover:text-primary transition-colors"
                              whileHover={{ scale: 1.02 }}
                            >
                              {item.name}
                            </motion.h4>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <motion.div
                            className="font-body font-bold text-primary ml-4"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.price}
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
