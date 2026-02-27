// Coffee Products
export const coffeeProducts = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    roastLevel: "light",
    flavorNotes: ["fruity", "floral", "tea-like"],
    price: 450,
    weights: [250, 500, 1000],
    description:
      "A delicate and complex Ethiopian coffee with bright acidity and fruity notes.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=500&fit=crop",
    brewingRecommendations: "Pour over or AeroPress for best results",
  },
  {
    id: 2,
    name: "Colombian Huila",
    origin: "Colombia",
    roastLevel: "medium",
    flavorNotes: ["chocolate", "nuts", "caramel"],
    price: 520,
    weights: [250, 500, 1000],
    description:
      "A balanced medium roast with smooth chocolate and nutty flavors.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=500&fit=crop",
    brewingRecommendations: "Espresso or drip coffee",
  },
  {
    id: 3,
    name: "Brazilian Santos",
    origin: "Brazil",
    roastLevel: "dark",
    flavorNotes: ["bold", "earthy", "smoky"],
    price: 480,
    weights: [250, 500, 1000],
    description: "A bold dark roast with earthy undertones and rich body.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=500&fit=crop",
    brewingRecommendations: "French press or espresso",
  },
  {
    id: 4,
    name: "Kenyan AA",
    origin: "Kenya",
    roastLevel: "medium",
    flavorNotes: ["berry", "wine", "jasmine"],
    price: 580,
    weights: [250, 500, 1000],
    description: "Premium grade coffee with distinctive berry and wine notes.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=500&fit=crop",
    brewingRecommendations: "Pour over or filter coffee",
  },
  {
    id: 5,
    name: "Indonesian Sumatra",
    origin: "Indonesia",
    roastLevel: "dark",
    flavorNotes: ["spicy", "herbal", "almond"],
    price: 500,
    weights: [250, 500, 1000],
    description: "Full-bodied with earthy and spicy characteristics.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=500&fit=crop",
    brewingRecommendations: "French press or Moka pot",
  },
  {
    id: 6,
    name: "Peru Arabica Blend",
    origin: "Peru",
    roastLevel: "medium",
    flavorNotes: ["citrus", "cocoa", "creamy"],
    price: 460,
    weights: [250, 500, 1000],
    description: "A smooth blend with bright citrus and creamy cocoa finish.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=500&fit=crop",
    brewingRecommendations: "Espresso or pour over",
  },
];

// Training Programs
export const trainingPrograms = [
  {
    id: 1,
    level: "Beginner",
    duration: "4 weeks (16 hours)",
    fee: 5000,
    description:
      "Learn the fundamentals of coffee preparation and barista basics.",
    includes: [
      "Introduction to coffee origins",
      "Basic espresso machine operation",
      "Manual milk steaming",
      "Coffee brewing methods",
      "Customer service fundamentals",
      "Introduction to latte art",
    ],
    whoItsFor: "Coffee enthusiasts with no prior experience",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=400&fit=crop",
  },
  {
    id: 2,
    level: "Intermediate",
    duration: "6 weeks (24 hours)",
    fee: 8500,
    description:
      "Develop advanced barista skills and master espresso techniques.",
    includes: [
      "Advanced espresso extraction",
      "Grind calibration and consistency",
      "Advanced milk steaming techniques",
      "Latte art mastery",
      "Flavor profiling",
      "Equipment maintenance",
      "Specialty coffee knowledge",
    ],
    whoItsFor: "Experienced coffee makers or Barista course graduates",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=400&fit=crop",
  },
  {
    id: 3,
    level: "Advanced",
    duration: "8 weeks (32 hours)",
    fee: 12500,
    description: "Become a coffee expert with certification-level expertise.",
    includes: [
      "SCA Barista certification preparation",
      "Coffee cupping and tasting",
      "Advanced espresso machine servicing",
      "Business and cafe management",
      "Competition-level techniques",
      "Trainer mentorship",
      "Professional portfolio building",
    ],
    whoItsFor: "Professional baristas seeking certification or expertise",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=400&fit=crop",
  },
];

// Upcoming Training Batches
export const upcomingBatches = [
  {
    id: 1,
    level: "Beginner",
    startDate: "2026-03-15",
    endDate: "2026-04-12",
    availableSeats: 8,
    totalSeats: 12,
  },
  {
    id: 2,
    level: "Intermediate",
    startDate: "2026-03-22",
    endDate: "2026-05-03",
    availableSeats: 5,
    totalSeats: 10,
  },
  {
    id: 3,
    level: "Advanced",
    startDate: "2026-04-05",
    endDate: "2026-05-31",
    availableSeats: 3,
    totalSeats: 8,
  },
  {
    id: 4,
    level: "Beginner",
    startDate: "2026-04-19",
    endDate: "2026-05-17",
    availableSeats: 10,
    totalSeats: 12,
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    course: "Intermediate Barista",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    text: "The training completely transformed my coffee-making skills. The instructors were knowledgeable and patient. I now run my own coffee cart!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    course: "Beginner Barista",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "Best investment for my cafe. The beans are premium quality and the training helped my staff serve customers better.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    course: "Advanced Barista",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    text: "The advanced certification course was comprehensive. I learned competition techniques and got certified. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Cafe Owner",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    text: "We switched to Mount Strada for our wholesale beans. The consistency and quality are unmatched. Great service too!",
    rating: 5,
  },
];

// Team Members
export const teamMembers = [
  {
    id: 1,
    name: "Vikram Singh",
    role: "Founder & Master Barista",
    bio: "With 15+ years of experience in specialty coffee, Vikram founded Mount Strada to share his passion for quality coffee.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    certifications: ["SCA Barista Certification", "Coffee Cupping Specialist"],
  },
  {
    id: 2,
    name: "Anjali Desai",
    role: "Training Director",
    bio: "Anjali has trained over 500 baristas and is passionate about education and skill development in the coffee industry.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    certifications: ["SCA Trainer", "SCAA Professional"],
  },
  {
    id: 3,
    name: "Rohan Mendes",
    role: "Coffee Sourcing Specialist",
    bio: "Rohan works directly with coffee farmers worldwide to ensure we source only the finest, ethically-traded beans.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    certifications: ["Q Grader", "Sustainability Expert"],
  },
];

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: "The Art of Espresso Extraction",
    slug: "art-of-espresso-extraction",
    date: "2026-02-20",
    category: "Brewing Guides",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=300&fit=crop",
    excerpt:
      "Learn the science behind perfect espresso shots and how small adjustments make a big difference.",
    content: `Espresso extraction is both art and science. The perfect shot requires proper grind size, tamping pressure, water temperature, and timing.

Key factors include:
- Grind consistency
- Tamping technique
- Water temperature (90-96°C)
- Extraction time (25-30 seconds)
- Machine maintenance

Master these fundamentals and you'll be making café-quality espresso at home.`,
  },
  {
    id: 2,
    title: "Ethiopian Coffee: A Journey Through Origins",
    slug: "ethiopian-coffee-origins",
    date: "2026-02-15",
    category: "Bean Origins",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=300&fit=crop",
    excerpt:
      "Discover the rich history and unique flavor profiles of Ethiopian Yirgacheffe and Sidamo coffees.",
    content: `Ethiopia is the birthplace of coffee. The country's mountainous regions produce some of the world's most unique and prized coffee beans.

Yirgacheffe:
- Light roast brings out floral and fruity notes
- Bright acidity with tea-like body
- Perfect for pour over brewing

Sidamo:
- Medium body with balanced acidity
- Complex flavor notes
- Great for espresso and filter coffee

Visit the highlands and taste coffee straight from the source.`,
  },
  {
    id: 3,
    title: "Home Coffee Setup: Equipment Guide",
    slug: "home-coffee-setup-guide",
    date: "2026-02-10",
    category: "Brewing Guides",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=300&fit=crop",
    excerpt:
      "Everything you need to know about setting up a quality home coffee station on any budget.",
    content: `Setting up a home coffee station doesn't have to be expensive. Start with these essentials:

Essential Equipment:
- Grinder (burr grinder recommended)
- Brewing method (French press, AeroPress, or pour over)
- Scale (for consistency)
- Kettle (preferably gooseneck)
- Fresh beans

Budget-Friendly Options:
- Manual hand grinder ($500-1000)
- Pour over setup ($200-500)
- Moka pot ($300-800)

Upgrade gradually as your skills improve.`,
  },
  {
    id: 4,
    title: "Latte Art 101: Creating Perfect Patterns",
    slug: "latte-art-guide",
    date: "2026-02-05",
    category: "Barista Tips",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=300&fit=crop",
    excerpt:
      "Master the basics of latte art with step-by-step instructions for creating beautiful rosetta and tulip designs.",
    content: `Latte art is a skill that takes practice. Here are the fundamentals:

Milk Preparation:
- Use cold milk
- Steam to 60-70°C
- Create microfoam texture
- Pour from 6-8 inches height

Basic Patterns:
- Rosetta (leaf pattern)
- Tulip (multi-petal design)
- Heart (romantic favorite)

Practice pouring technique before worrying about complex designs.`,
  },
];

// FAQ Data
export const faqData = [
  {
    category: "Coffee Beans",
    questions: [
      {
        id: 1,
        question: "What is the minimum order quantity for wholesale?",
        answer:
          "For wholesale orders, we have a minimum order of 5 kg. For regular customers, you can order as little as 250g.",
      },
      {
        id: 2,
        question: "How long does delivery take?",
        answer:
          "Local deliveries in the city take 2-3 days. Pan-India delivery typically takes 5-7 business days. We also offer premium next-day delivery for an additional charge.",
      },
      {
        id: 3,
        question: "What payment methods do you accept?",
        answer:
          "We accept credit cards, debit cards, UPI transfers, bank transfers, and cash on delivery. All transactions are secure and encrypted.",
      },
      {
        id: 4,
        question: "Do you supply to cafes and restaurants?",
        answer:
          "Yes! We offer wholesale pricing for bulk orders. Contact our wholesale team for custom pricing and terms.",
      },
      {
        id: 5,
        question: "Are your beans roasted fresh?",
        answer:
          "Absolutely. We roast beans in small batches every week to ensure maximum freshness. All beans are roasted within 2 weeks of the order date.",
      },
    ],
  },
  {
    category: "Barista Training",
    questions: [
      {
        id: 6,
        question: "Who can join the barista training program?",
        answer:
          "Anyone aged 16 and above can join. No prior experience is necessary for the beginner course. For intermediate and advanced courses, prior experience is recommended.",
      },
      {
        id: 7,
        question: "Is the certificate recognized?",
        answer:
          "Our advanced course graduates receive a certificate recognized by the Specialty Coffee Association (SCA). This is valued internationally.",
      },
      {
        id: 8,
        question: "What should I bring on training day?",
        answer:
          "Bring comfortable clothes and closed-toe shoes. We provide all equipment and materials. No need to bring anything else.",
      },
      {
        id: 9,
        question: "What is your refund policy?",
        answer:
          "We offer a full refund if you cancel at least 7 days before the course start date. Cancellations within 7 days forfeit the full amount.",
      },
      {
        id: 10,
        question: "Is the training online or offline?",
        answer:
          "We offer both! Offline training is hands-on at our facility. Online training covers theory, but practical skills require in-person sessions.",
      },
    ],
  },
];

// Company Info
export const companyInfo = {
  name: "Mount Strada",
  tagline: "Crafting Excellence, One Cup at a Time",
  description:
    "Your destination for premium specialty coffee beans and professional barista training.",
  foundedYear: 2014,
  yearsInBusiness: 12,
  studentsTrained: 500,
  beansSoldKgs: 15000,
  phone: "+91-9876543210",
  whatsapp: "+91-9876543210",
  email: "hello@mountstrada.com",
  address: "123 Coffee Lane, Bangalore, Karnataka 560001",
  hours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 5:00 PM",
    sunday: "Closed",
  },
  socialMedia: {
    instagram: "https://instagram.com/mountstrada",
    facebook: "https://facebook.com/mountstrada",
    youtube: "https://youtube.com/mountstrada",
  },
  certifications: [
    "SCA Affiliate",
    "Fair Trade Certified",
    "Specialty Coffee Association Member",
    "ISO 9001:2015",
  ],
};

// Timeline
export const timeline = [
  {
    year: 2014,
    title: "Founded",
    description:
      "Mount Strada was established with a vision to promote specialty coffee in India.",
  },
  {
    year: 2016,
    title: "First Training Center",
    description: "Opened our first dedicated barista training facility.",
  },
  {
    year: 2018,
    title: "Wholesale Program",
    description: "Expanded to supply premium beans to cafes and restaurants.",
  },
  {
    year: 2020,
    title: "SCA Affiliation",
    description: "Became an official Specialty Coffee Association affiliate.",
  },
  {
    year: 2023,
    title: "Expanded Operations",
    description: "Opened second location and trained 100+ students.",
  },
  {
    year: 2024,
    title: "Online Training",
    description: "Launched online barista training courses.",
  },
];
