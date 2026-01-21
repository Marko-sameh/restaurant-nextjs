"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What Are The Login Hours?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repellendus perspiciatis architecto praesentium ad error?"
  },
  {
    id: 2, 
    question: "How Long It Will Take Food To Arrive?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repellendus perspiciatis architecto praesentium ad error?"
  },
  {
    id: 3,
    question: "What Is Cost Of Food Delivery?", 
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repellendus perspiciatis architecto praesentium ad error? Lorem ipsum dolor sit, amet consectetur"
  },
  {
    id: 4,
    question: "What Do I Get My Refund?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repellendus perspiciatis architecto praesentium ad error?"
  },
  {
    id: 5,
    question: "Does Your Restaurant Has Both Veg And Non Veg?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repellendus perspiciatis architecto praesentium ad error?"
  },
  {
    id: 6,
    question: "Who Is Eligible For Pro Membership?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repellendus perspiciatis architecto praesentium ad error?"
  }
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section 
      className="py-20 bg-gray-100"
      style={{
        backgroundImage: "url('/images/faq-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            FAQS
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently <br />
            Asked Questions
          </h2>
          
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-neumorphic p-6 cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 border-b-4 border-orange-500 pb-2 flex-1 mr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}