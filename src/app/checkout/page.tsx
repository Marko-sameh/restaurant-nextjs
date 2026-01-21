"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useCartStore } from "@/store/cartStore"
import { ShoppingBag, CreditCard, MapPin, User, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CheckoutFormData {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  paymentMethod: "cash" | "card"
  cardNumber?: string
  cardExpiry?: string
  cardCVV?: string
  notes?: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [isProcessing, setIsProcessing] = useState(false)
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    defaultValues: {
      paymentMethod: "cash",
    },
  })

  const paymentMethod = watch("paymentMethod")

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Order placed:", { ...data, items, total: getTotalPrice() })
    clearCart()
    router.push("/order-success")
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some items to proceed to checkout</p>
          <Link href="/#menu" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all">
            Browse Menu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-600 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Menu
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-orange-500" />
                    Contact Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input {...register("fullName", { required: "Name is required" })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="John Doe" />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9+\-\s()]+$/, message: "Invalid phone number" } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="+91 1234567890" />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" } })} type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="john@example.com" />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                    Delivery Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                      <input {...register("address", { required: "Address is required" })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="123 Main Street" />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                        <input {...register("city", { required: "City is required" })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Mumbai" />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code *</label>
                        <input {...register("postalCode", { required: "Postal code is required" })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="400001" />
                        {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-orange-500" />
                    Payment Method
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                      <input {...register("paymentMethod")} type="radio" value="cash" className="w-4 h-4 text-orange-600" />
                      <span className="ml-3 font-medium">Cash on Delivery</span>
                    </label>

                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                      <input {...register("paymentMethod")} type="radio" value="card" className="w-4 h-4 text-orange-600" />
                      <span className="ml-3 font-medium">Credit/Debit Card</span>
                    </label>
                  </div>

                  {paymentMethod === "card" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <input {...register("cardNumber")} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="1234 5678 9012 3456" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input {...register("cardExpiry")} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="MM/YY" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                          <input {...register("cardCVV")} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="123" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Notes (Optional)</label>
                  <textarea {...register("notes")} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Any special instructions..." />
                </div>

                <button type="submit" disabled={isProcessing} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                  {isProcessing ? "Processing..." : "Place Order"}
                </button>
              </form>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-orange-600">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{getTotalPrice().toFixed(2)} EGP</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>20.00 EGP</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                  <span>Total</span>
                  <span className="text-orange-600">{(getTotalPrice() + 20).toFixed(2)} EGP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
