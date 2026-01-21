import { MetadataRoute } from 'next'

type ImageSitemap = Array<{
  url: string
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  images?: Array<{
    url: string
    title?: string
    caption?: string
    geoLocation?: string
  }>
}>

export default function sitemap(): ImageSitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://indianrestaurant.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      images: [
        {
          url: `${baseUrl}/images/main-b.jpg`,
          title: 'Authentic Indian Sushi Platter - Mumbai Restaurant',
          caption: 'Fresh sushi with traditional Indian spices and ingredients',
          geoLocation: 'Mumbai, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/about.jpg`,
          title: 'Indian Restaurant Interior - Mumbai',
          caption: 'Elegant dining area with traditional Indian decor',
          geoLocation: 'Mumbai, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/dish/1.png`,
          title: 'Fresh Chicken Veggies - ₹188',
          caption: 'Fresh ingredients with traditional spices and aromatic herbs',
          geoLocation: 'Mumbai, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/dish/2.png`,
          title: 'Grilled Chicken - ₹135',
          caption: 'Perfectly grilled with aromatic herbs and special sauce',
          geoLocation: 'Mumbai, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/dish/3.png`,
          title: 'Paneer Noodles - ₹73',
          caption: 'Delicious vegetarian noodles with fresh paneer cubes',
          geoLocation: 'Mumbai, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/dish/4.png`,
          title: 'Chicken Noodles - ₹143',
          caption: 'Spicy chicken noodles with vegetables and special sauce',
          geoLocation: 'Mumbai, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/dish/5.png`,
          title: 'Bread Boiled Egg - ₹37',
          caption: 'Healthy breakfast option with fresh bread and eggs',
          geoLocation: 'Mumbai, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/dish/6.png`,
          title: 'Immunity Dish - ₹60',
          caption: 'Boost your immunity with this special nutritious dish',
          geoLocation: 'Mumbai, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/bt1.jpg`,
          title: 'Elegant Dining Area - Indian Restaurant Mumbai',
          caption: 'Experience fine dining in our beautifully designed space',
          geoLocation: 'Mumbai, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/bt2.jpg`,
          title: 'Private Dining Room - Mumbai',
          caption: 'Perfect for intimate gatherings and special occasions',
          geoLocation: 'Mumbai, Maharashtra, India'
        }
      ]
    }
  ]
}
