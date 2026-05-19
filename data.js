// ============================================================
// FOODIE HUB — DATA FILE
// Edit this file in VS Code to add/edit sections and items
// ============================================================

const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // Change to your number

const categories = [
  {
    id: "burger",
    name: "Burgers",
    icon: "🍔",
    emoji: "🍔",
    color: "#E74C3C",
    bgImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    description: "Juicy handcrafted burgers",
    items: [
      {
        id: 1,
        name: "Classic Chicken Burger",
        desc: "Crispy fried chicken, lettuce, tomato, mayo sauce",
        price: "৳ 180",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 1
      },
      {
        id: 2,
        name: "Double Beef Smash",
        desc: "Double smashed beef patty, cheddar, caramelized onions",
        price: "৳ 280",
        img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 2
      },
      {
        id: 3,
        name: "Spicy Zinger",
        desc: "Extra spicy crispy chicken, jalapeños, sriracha mayo",
        price: "৳ 220",
        img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80",
        bestseller: false,
        isNew: true,
        spicyLevel: 3
      },
      {
        id: 4,
        name: "Veggie Delight",
        desc: "Grilled veggie patty, fresh greens, hummus spread",
        price: "৳ 160",
        img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80",
        bestseller: false,
        isNew: false,
        spicyLevel: 0
      }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: "🍕",
    emoji: "🍕",
    color: "#E67E22",
    bgImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    description: "Wood-fired crispy pizzas",
    items: [
      {
        id: 1,
        name: "Margherita Classic",
        desc: "Fresh mozzarella, basil, tomato sauce, olive oil",
        price: "৳ 320",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 0
      },
      {
        id: 2,
        name: "Chicken BBQ",
        desc: "BBQ chicken, red onion, bell pepper, mozzarella",
        price: "৳ 380",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 1
      },
      {
        id: 3,
        name: "Spicy Pepperoni",
        desc: "Pepperoni, chilli flakes, mozzarella, tomato sauce",
        price: "৳ 420",
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
        bestseller: false,
        isNew: true,
        spicyLevel: 2
      },
      {
        id: 4,
        name: "Four Cheese",
        desc: "Mozzarella, cheddar, gouda, parmesan blend",
        price: "৳ 450",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
        bestseller: false,
        isNew: false,
        spicyLevel: 0
      }
    ]
  },
  {
    id: "momo",
    name: "Momos",
    icon: "🥟",
    emoji: "🥟",
    color: "#8E44AD",
    bgImg: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
    description: "Authentic steamed dumplings",
    items: [
      {
        id: 1,
        name: "Chicken Steam Momo",
        desc: "Minced chicken, ginger, garlic, served with dipping sauce",
        price: "৳ 120",
        img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 1
      },
      {
        id: 2,
        name: "Veg Fried Momo",
        desc: "Mixed vegetable filling, pan fried to golden perfection",
        price: "৳ 100",
        img: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=400&q=80",
        bestseller: false,
        isNew: false,
        spicyLevel: 0
      },
      {
        id: 3,
        name: "Spicy Jhol Momo",
        desc: "Steamed momo in spicy tomato broth, sesame",
        price: "৳ 150",
        img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80",
        bestseller: false,
        isNew: true,
        spicyLevel: 3
      }
    ]
  },
  {
    id: "noodles",
    name: "Noodles",
    icon: "🍜",
    emoji: "🍜",
    color: "#16A085",
    bgImg: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    description: "Stir-fried & soupy noodles",
    items: [
      {
        id: 1,
        name: "Chicken Chow Mein",
        desc: "Stir-fried noodles, chicken, vegetables, soy sauce",
        price: "৳ 160",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 1
      },
      {
        id: 2,
        name: "Beef Ramen",
        desc: "Rich bone broth, tender beef slices, soft boiled egg",
        price: "৳ 220",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80",
        bestseller: false,
        isNew: true,
        spicyLevel: 2
      }
    ]
  },
  {
    id: "rice",
    name: "Fried Rice",
    icon: "🍚",
    emoji: "🍚",
    color: "#D4AC0D",
    bgImg: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
    description: "Wok-tossed flavourful rice",
    items: [
      {
        id: 1,
        name: "Egg Fried Rice",
        desc: "Classic wok fried rice with scrambled egg, soy sauce",
        price: "৳ 120",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 0
      },
      {
        id: 2,
        name: "Chicken Fried Rice",
        desc: "Juicy chicken pieces, veggies, fried rice perfection",
        price: "৳ 160",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 1
      }
    ]
  },
  {
    id: "shawarma",
    name: "Shawarma",
    icon: "🌯",
    emoji: "🌯",
    color: "#C0392B",
    bgImg: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&q=80",
    description: "Middle Eastern street wraps",
    items: [
      {
        id: 1,
        name: "Chicken Shawarma",
        desc: "Marinated chicken, garlic sauce, pickles, fresh veggies",
        price: "৳ 180",
        img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 1
      },
      {
        id: 2,
        name: "Beef Shawarma",
        desc: "Slow cooked beef, tahini sauce, tomatoes, onion",
        price: "৳ 220",
        img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80",
        bestseller: false,
        isNew: false,
        spicyLevel: 2
      }
    ]
  },
  {
    id: "sandwich",
    name: "Sandwiches",
    icon: "🥪",
    emoji: "🥪",
    color: "#27AE60",
    bgImg: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&q=80",
    description: "Loaded fresh sandwiches",
    items: [
      {
        id: 1,
        name: "Club Sandwich",
        desc: "Triple decker, chicken, bacon, lettuce, tomato, mayo",
        price: "৳ 180",
        img: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 0
      },
      {
        id: 2,
        name: "Grilled Cheese",
        desc: "Double cheese, butter toasted, crispy outside gooey inside",
        price: "৳ 140",
        img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80",
        bestseller: false,
        isNew: false,
        spicyLevel: 0
      }
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "🥤",
    emoji: "🥤",
    color: "#2980B9",
    bgImg: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    description: "Refreshing cool beverages",
    items: [
      {
        id: 1,
        name: "Mango Lassi",
        desc: "Fresh mango, yogurt, chilled and creamy",
        price: "৳ 80",
        img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 0
      },
      {
        id: 2,
        name: "Fresh Lemonade",
        desc: "Freshly squeezed lemon, mint, chilled soda",
        price: "৳ 60",
        img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80",
        bestseller: false,
        isNew: false,
        spicyLevel: 0
      },
      {
        id: 3,
        name: "Chocolate Milkshake",
        desc: "Rich chocolate, vanilla ice cream, whipped cream",
        price: "৳ 120",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
        bestseller: false,
        isNew: true,
        spicyLevel: 0
      }
    ]
  },
  {
    id: "dessert",
    name: "Desserts",
    icon: "🍰",
    emoji: "🍰",
    color: "#E91E8C",
    bgImg: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
    description: "Sweet treats & indulgences",
    items: [
      {
        id: 1,
        name: "Chocolate Brownie",
        desc: "Warm fudgy brownie, vanilla ice cream, chocolate drizzle",
        price: "৳ 150",
        img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 0
      },
      {
        id: 2,
        name: "Gulab Jamun",
        desc: "Soft milk dumplings soaked in rose sugar syrup",
        price: "৳ 80",
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
        bestseller: false,
        isNew: false,
        spicyLevel: 0
      }
    ]
  },
  {
    id: "snacks",
    name: "Snacks",
    icon: "🍟",
    emoji: "🍟",
    color: "#F39C12",
    bgImg: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80",
    description: "Crispy bites & finger food",
    items: [
      {
        id: 1,
        name: "Loaded Fries",
        desc: "Crispy fries, cheese sauce, jalapeños, sour cream",
        price: "৳ 140",
        img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 1
      },
      {
        id: 2,
        name: "Chicken Nuggets",
        desc: "Golden crispy nuggets, 8pcs with dipping sauce",
        price: "৳ 160",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 0
      }
    ]
  },
  {
    id: "biryani",
    name: "Biryani",
    icon: "🍛",
    emoji: "🍛",
    color: "#784212",
    bgImg: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
    description: "Aromatic royal biryani",
    items: [
      {
        id: 1,
        name: "Chicken Biryani",
        desc: "Fragrant basmati rice, tender chicken, raita, salad",
        price: "৳ 220",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 2
      },
      {
        id: 2,
        name: "Beef Kacchi",
        desc: "Traditional kacchi biryani, slow cooked, rich flavors",
        price: "৳ 280",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 2
      }
    ]
  },
  {
    id: "combo",
    name: "Special Combo",
    icon: "🎁",
    emoji: "🎁",
    color: "#1ABC9C",
    bgImg: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    description: "Best value meal deals",
    items: [
      {
        id: 1,
        name: "Family Feast",
        desc: "2 Burgers + 1 Large Pizza + 4 Drinks + Fries",
        price: "৳ 850",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
        bestseller: true,
        isNew: false,
        spicyLevel: 0
      },
      {
        id: 2,
        name: "Student Deal",
        desc: "Burger + Fries + Drink — best value for students",
        price: "৳ 280",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
        bestseller: true,
        isNew: true,
        spicyLevel: 0
      },
      {
        id: 3,
        name: "Date Night",
        desc: "2 Shawarma + 1 Pizza + 2 Desserts + 2 Drinks",
        price: "৳ 720",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
        bestseller: false,
        isNew: true,
        spicyLevel: 0
      }
    ]
  }
];
