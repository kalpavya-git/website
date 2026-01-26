import nityaChuranImg from "@/assets/kalpavya-nitya-churan-100g.webp";
import kidneyStoneCapsuleImg from "@/assets/kalpavya-kidney-stone-capsule-60.webp";
import stonekalpImg from "@/assets/kalpavya-stonekalp-200ml.webp";
import pittaCareImg from "@/assets/kalpavya-pitta-care-plus-300ml.webp";
import liverCapImg from "@/assets/kalpavya-liver-cap-60.webp";
import kidneyStoneComboImg from "@/assets/stonekalp-nitya-kidneystone-combo.webp";
import liverPittaComboImg from "@/assets/livercare-pittacare-nitya-combo.webp";

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  category: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  image: string;
}

// src/data/products.ts

export const products: Product[] = [
  {
    id: "nitya-churan",
    name: "Nitya Churan",
    description: "Digestive powder for regular bowel movement",
    longDescription:
      "Classical Ayurvedic formulation to support digestion and relieve constipation naturally.",
    price: "₹799",
    category: "Digestive",
    ingredients: ["Haritaki", "Triphala", "Saunf", "Ajwain"],
    benefits: ["Relieves constipation", "Improves digestion", "Reduces bloating"],
    usage: "Take 1 teaspoon with warm water at bedtime.",
    image: nityaChuranImg
  },
  {
    id: "kidney-stone-capsule",
    name: "Kidney Stone Capsule",
    description: "Herbal support for kidney stones",
    longDescription:
      "Formulated to support kidney health, improve urine flow, and manage stone-related discomfort.",
    price: "₹1399",
    category: "Kidney Care",
    ingredients: ["Punarnava", "Gokshura", "Pashanbheda"],
    benefits: ["Supports kidney health", "Helps manage stones"],
    usage: "Take 1 capsule twice daily with water.",
    image: kidneyStoneCapsuleImg
  },
  {
    id: "stonekalp",
    name: "Stonekalp",
    description: "Liquid ayurvedic medicine for kidney stones",
    longDescription:
      "Supports dissolution and flushing of kidney stones and cleanses the urinary tract.",
    price: "₹799",
    category: "Kidney Care",
    ingredients: ["Varuna", "Kulthi", "Gokshura"],
    benefits: ["Helps break stones", "Supports urinary health"],
    usage: "Take 10–15 ml twice daily with water.",
    image: stonekalpImg
  },
  {
    id: "pitta-care-plus",
    name: "Pitta Care Plus",
    description: "Cooling juice for pitta balance",
    longDescription:
      "Helps balance excess pitta and supports digestion and metabolism.",
    price: "₹1199",
    category: "Liver & Pitta Care",
    ingredients: ["Aloe Vera", "Giloy", "Amla"],
    benefits: ["Balances pitta", "Supports digestion"],
    usage: "Take 20 ml twice daily before meals.",
    image: pittaCareImg
  },
  {
    id: "liver-cap",
    name: "Liver Cap",
    description: "Capsules for liver detox and support",
    longDescription:
      "Supports liver detoxification and healthy liver function using classical herbs.",
    price: "₹1399",
    category: "Liver & Pitta Care",
    ingredients: ["Kutki", "Kalmegh", "Bhumyamalaki"],
    benefits: ["Supports liver health", "Improves metabolism"],
    usage: "Take 1 capsule twice daily after meals.",
    image: liverCapImg
  },
  {
    id: "stonekalp-nitya-kidneystone-combo",
    name: "Stonekalp + Nitya + Kidney Stone Combo",
    description: "Complete kidney stone care combo",
    longDescription:
      "Combo for kidney stone management combining liquid, capsules, and digestive support.",
    price: "₹2299",
    category: "Combos",
    ingredients: ["Stonekalp", "Nitya Churan", "Kidney Stone Capsule"],
    benefits: ["Kidney stone support", "Improves digestion", "Urinary health"],
    usage: "Use products as per individual instructions.",
    image: kidneyStoneComboImg
  },
  {
    id: "livercare-pittacare-nitya-combo",
    name: "Liver Care + Pitta Care + Nitya Combo",
    description: "Liver, pitta and digestion support combo",
    longDescription:
      "Holistic combo supporting liver function, pitta balance, and digestion.",
    price: "₹2500",
    category: "Combos",
    ingredients: ["Liver Cap", "Pitta Care Plus", "Nitya Churan"],
    benefits: ["Liver detox", "Pitta balance", "Better digestion"],
    usage: "Use products as per individual instructions.",
    image: liverPittaComboImg
  }
];

export const categories = [
  "All",
  "Digestive",
  "Kidney Care",
  "Liver & Pitta Care",
  "Combos"
];
