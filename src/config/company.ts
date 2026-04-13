export interface Program {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  ageGroup: string;
  image: string;
  features: string[];
}

export interface Coach {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export interface Social {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface Company {
  name: string;
  tagline: string;
  logo: string;
  email: string;
  phone: string;
  address: string;
  social: Social;
}

export interface CompanyConfig {
  domain: string;
  company: Company;
  programs: Program[];
  coaches: Coach[];
  testimonials: Testimonial[];
  gallery: string[];
  articles: Article[];
}

export const companyConfig: CompanyConfig = {
  domain: "cairocourts.com",
  company: {
    name: "Cairo Courts Basketball Academy",
    tagline: "Where Champions Are Made",
    logo: "/logo.svg",
    email: "info@cairocourts.com",
    phone: "+20 10 1234 5678",
    address: "Sheikh Zayed, Cairo, Egypt",
    social: {
      facebook: "https://facebook.com/cairocourts",
      instagram: "https://instagram.com/cairocourts",
      youtube: "https://youtube.com/cairocourts",
    },
  },
  programs: [
    {
      id: "1",
      title: "Youth Development",
      description: "Building fundamentals for young athletes ages 6-12.",
      price: "1500 EGP/month",
      duration: "4 weeks",
      ageGroup: "Ages 6-12",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
      features: ["Basic Skills", "Fun Drills", "Team Games"],
    },
    {
      id: "2",
      title: "Elite Training",
      description: "Advanced training for serious athletes ages 13-18.",
      price: "2500 EGP/month",
      duration: "4 weeks",
      ageGroup: "Ages 13-18",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&h=400&fit=crop",
      features: ["Advanced Skills", "Conditioning", "Video Analysis"],
    },
    {
      id: "3",
      title: "Private Coaching",
      description: "One-on-one personalized training.",
      price: "300 EGP/session",
      duration: "1 hour",
      ageGroup: "All Ages",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop",
      features: ["1-on-1 Training", "Custom Plan"],
    },
    {
      id: "4",
      title: "Summer Camp",
      description: "Intensive summer camp for all levels.",
      price: "4500 EGP",
      duration: "2 weeks",
      ageGroup: "Ages 8-18",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      features: ["Intensive Training", "Tournaments", "Certificate"],
    },
  ],
  coaches: [
    {
      id: "1",
      name: "Ahmed Mohamed",
      title: "Head Coach",
      specialization: "Offensive Strategy",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
      bio: "Former professional player",
    },
    {
      id: "2",
      name: "Karim Youssef",
      title: "Assistant Coach",
      specialization: "Defense & Conditioning",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Certified strength specialist",
    },
    {
      id: "3",
      name: "Omar Said",
      title: "Skills Coach",
      specialization: "Shooting",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Shot specialist",
    },
    {
      id: "4",
      name: "Mona Ahmed",
      title: "Youth Coach",
      specialization: "Fundamentals",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Youth specialist",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Mohamed Adel",
      role: "Parent",
      content: "My son has improved tremendously since joining.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: "2",
      name: "Nour El-Din",
      role: "Student",
      content: "Helped me get recruited to college!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: "3",
      name: "Hala Mohamed",
      role: "Parent",
      content: "Best basketball academy in Egypt!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400&h=300&fit=crop",
  ],
  articles: [
    {
      id: "1",
      slug: "5-tips-for-better-shooting",
      title: "5 Tips for Better Shooting",
      excerpt: "Improve your shooting technique with these proven tips.",
      content: `<p>Shooting is one of the most important skills in basketball.</p>
      <h2>1. Follow Through</h2>
      <p>Make sure to snap your wrist toward the basket.</p>
      <h2>2. Keep Eyes on Target</h2>
      <p>Pick a specific spot on the rim and focus on it.</p>
      <h2>3. Use Your Legs</h2>
      <p>Power comes from your legs, not just your arms.</p>
      <h2>4. Practice Daily</h2>
      <p>The key is repetition. Aim for 100 made shots per day.</p>
      <h2>5. Stay Confident</h2>
      <p>Confidence is crucial. Stay positive.</p>`,
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=400&fit=crop",
      author: "Ahmed Mohamed",
      date: "April 10, 2026",
      category: "Training"
    },
    {
      id: "2",
      slug: "youth-athletics-why-start-early",
      title: "Why Kids Should Start Basketball Early",
      excerpt: "Discover the benefits of starting at a young age.",
      content: `<p>Starting basketball at a young age offers numerous benefits.</p>
      <h2>1. Physical Development</h2>
      <p>Develops coordination, balance, and motor skills.</p>
      <h2>2. Teamwork</h2>
      <p>Teaches children how to work with others.</p>
      <h2>3. Discipline</h2>
      <p>Instills discipline and focus.</p>
      <h2>4. Confidence</h2>
      <p>As children improve, their confidence grows.</p>
      <h2>5. Love for Sports</h2>
      <p>Creates foundation for lifelong fitness.</p>`,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop",
      author: "Mona Ahmed",
      date: "April 8, 2026",
      category: "Youth"
    },
    {
      id: "3",
      slug: "nutrition-for-athletes",
      title: "Proper Nutrition for Athletes",
      excerpt: "Learn what foods fuel performance and recovery.",
      content: `<p>Proper nutrition is essential for athletes.</p>
      <h2>1. Carbohydrates</h2>
      <p>Primary fuel source. Include whole grains and fruits.</p>
      <h2>2. Protein</h2>
      <p>Helps repair and build muscle tissue.</p>
      <h2>3. Hydration</h2>
      <p>Drink water before, during, and after activities.</p>
      <h2>4. Pre-Game Nutrition</h2>
      <p>Eat balanced meal 2-3 hours before games.</p>
      <h2>5. Post-Training Recovery</h2>
      <p>Consume protein and carbs within 30-60 minutes.</p>`,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
      author: "Karim Youssef",
      date: "April 5, 2026",
      category: "Nutrition"
    }
  ],
};