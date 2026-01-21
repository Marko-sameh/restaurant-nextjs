"use client"

import { motion } from "framer-motion"
import { CheckCircle, Home, Receipt } from "lucide-react"
import Link from "next/link"

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Order Placed Successfully!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-8"
        >
          Thank you for your order. We've received your order and will start preparing it shortly.
          You'll receive a confirmation email soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-orange-50 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center justify-center mb-3">
            <Receipt className="w-6 h-6 text-orange-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Order Details</h2>
          </div>
          <p className="text-gray-600 text-sm">
            Order ID: <span className="font-mono font-semibold">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Estimated Delivery: <span className="font-semibold">30-45 minutes</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-3"
        >
          <Link
            href="/"
            className="flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <Link
            href="/#menu"
            className="block w-full text-gray-600 text-center font-medium py-3 hover:text-orange-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
