export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  calories: number
  rating: number
  image: string
  category: 'breakfast' | 'lunch' | 'dinner'
  type: 'veg' | 'non-veg'
  persons: number
  cookTime?: string
}

export interface TeamMember {
  id: string
  name: string
  image: string
  socialLinks: {
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

export interface Testimonial {
  id: string
  name: string
  image: string
  rating: number
  comment: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  lastUpdated: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}