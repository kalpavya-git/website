import nityaChuranImg from "@/assets/kalpavya-nitya-churan-100g.webp";
import kidneyStoneCapsuleImg from "@/assets/kalpavya-kidney-stone-capsule-60.webp";
import stonekalpImg from "@/assets/kalpavya-stonekalp-200ml.webp";
import pittaCareImg from "@/assets/kalpavya-pitta-care-plus-300ml.webp";
import liverCapImg from "@/assets/kalpavya-liver-cap-60.webp";
import kidneyStoneComboImg from "@/assets/stonekalp-nitya-kidneystone-combo.webp";
import liverPittaComboImg from "@/assets/livercare-pittacare-nitya-combo.webp";
import manvigorImg from "@/assets/manvigor-plus.png";
import amlivdsImg from "@/assets/am-liv-ds.png";
import leucareImg from "@/assets/leucare-plus.png";

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
  richContent?: RichContent;
}

export interface RichContent {
  problemSection: {
    title: string;
    description: string;
    problems: { title: string; description: string; icon?: string }[];
    problemImage?: string;
  };
  solutionSection: {
    title: string;
    subTitle: string;
    description: string;
    features: string[];
    solutionImage?: string;
  };
  mechanismSection: {
    title: string;
    steps: { title: string; description: string; icon: string }[];
  };
  ingredientsSection: {
    title: string;
    ingredients: { name: string; description: string; image?: string }[];
  };
  comparisonSection: {
    title: string;
    modernTreatment: { title: string; points: { label: string; value: string }[] };
    ourProduct: { title: string; points: { label: string; value: string }[] };
  };
  usageSection: {
    title: string;
    steps: { title: string; description: string; note?: string }[];
  };
  principlesSection: {
    title: string;
    description: string;
    problems: { title: string; description: string; icon: string }[];
    solutions: { title: string; description: string; icon: string }[];
  };
  featuresSection: string[];
  certifications: string[];
  testimonials: { name: string; location: string; age: number; rating: number; content: string }[];
  faqs: { question: string; answer: string }[];
}

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
    image: nityaChuranImg,
    richContent: {
      problemSection: {
        title: "🚫 क्या आप कब्ज (Constipation) से परेशान हैं?",
        description: "पेट साफ न होना, गैस और भारीपन सिर्फ एक छोटी समस्या नहीं है, यह कई बीमारियों की जड़ है।",
        problems: [
          { title: "पेट साफ न होना", description: "Incomplete bowel movement", icon: "alert-circle" },
          { title: "गैस और एसिडिटी", description: "Gas & Acidity", icon: "wind" },
          { title: "पेट में भारीपन", description: "Heaviness & Bloating", icon: "maximize-2" },
          { title: "आलस और थकान", description: "Lethargy & Fatigue due to toxins", icon: "battery-low" },
        ],
        problemImage: "/images/generated/nitya-problem.png"
      },
      solutionSection: {
        title: "Nitya Churan",
        subTitle: "हर सुबह पेट साफ, दिन भर ताज़गी!",
        description: "एक आदत जो आपकी सेहत बदल दे। बिना मरोड़, बिना आदत डाले, पेट की सफाई का प्राकृतिक तरीका।",
        features: ["Non-Habit Forming", "No Cramps", "Overnight Relief"],
        solutionImage: "/images/generated/nitya-solution.png"
      },
      mechanismSection: {
        title: "कैसे काम करता है Nitya Churan?",
        steps: [
          { title: "Softens Stool", description: "मल को नरम करता है ताकि निकासी आसानी से हो। Softens hardened stool.", icon: "droplet" },
          { title: "Improves Movement", description: "आंतों की चाल (Peristalsis) को सुधारता है। Improves bowel movement.", icon: "activity" },
          { title: "Clears Toxins", description: "आंतों में जमा गंदगी और आम (Ama) को बाहर निकालता है। Detoxifies intestines.", icon: "trash-2" },
          { title: "Relieves Gas", description: "गैस और अफारा से तुरंत राहत देता है। Relieves bloating instantly.", icon: "wind" },
        ]
      },
      ingredientsSection: {
        title: "शुद्ध जड़ी-बूटियों का संगम",
        ingredients: [
          { name: "Haritaki", description: "शक्तिशाली रेचक और पाचन सुधारक।" },
          { name: "Triphala", description: "थ्री-दोष नाशक और डिटॉक्स में बेहतरीन।" },
          { name: "Saunf", description: "पेट को ठंडा रखती है और मरोड़ कम करती है।" },
          { name: "Ajwain", description: "गैस और दर्द में तुरंत आराम।" },
        ]
      },
      comparisonSection: {
        title: "Ordinary Laxatives vs Nitya Churan",
        modernTreatment: {
          title: "Chemical Laxatives",
          points: [
            { label: "Habit Forming", value: "⚠️ Yes (आदत पड़ती है)" },
            { label: "Cramps", value: "😣 Painful Cramps" },
            { label: "Long Term Safety", value: "🚫 Unsafe" },
          ]
        },
        ourProduct: {
          title: "Nitya Churan",
          points: [
            { label: "Habit Forming", value: "✅ No (आदत नहीं पड़ती)" },
            { label: "Cramps", value: "😊 Gentle Action" },
            { label: "Long Term Safety", value: "🌿 Safe for Daily Use" },
          ]
        }
      },
      usageSection: {
        title: "सेवन विधि",
        steps: [
          { title: "सोते समय", description: "रात को खाना खाने के 1 घंटे बाद।", note: "Best Time" },
          { title: "एक चम्मच", description: "3-5 ग्राम चूर्ण लें।", note: "Quantity" },
          { title: "गुनगुना पानी", description: "एक गिलास गुनगुने पानी के साथ फांक लें।", note: "Anupana" },
          { title: "सुबह साफ", description: "सुबह उठते ही पेट पूरी तरह साफ!", note: "Result" },
        ]
      },
      principlesSection: {
        title: "आयुर्वेद का नज़रिया",
        description: "कब्ज केवल एक लक्षण है, वात दोष के बिगड़ने का संकेत है।",
        problems: [
          { title: "Vata Aggravation", description: "Dryness in colon (आंतों में रूखापन)", icon: "wind" },
          { title: "Impaired Digestion", description: "Weak Agni (कमजोर पाचन अग्नि)", icon: "flame" },
          { title: "Toxin Build-up", description: "Formation of Ama (आम विष)", icon: "alert-triangle" },
        ],
        solutions: [
          { title: "Vata Balancing", description: "Lubricates and soothes colon", icon: "activity" },
          { title: "Deepan Pachan", description: "Restores digestve fire", icon: "flame" },
          { title: "Srotas Shodhan", description: "Clears channels naturally", icon: "droplet" },
        ]
      },
      featuresSection: ["🌿 100% Ayurvedic", "👨⚕️ Doctor Recommended", "🚫 No Side Effects"],
      certifications: ["FSSAI Certified", "GMP Certified", "AYUSH Premium", "100% Herbal"],
      testimonials: [
        { name: "Rajesh Gupta", location: "Delhi", age: 45, rating: 5, content: "बहुत सालों से कब्ज थी, Nitya Churan से अब सुबह पेट एक बार में साफ हो जाता है।" },
        { name: "Meena Devi", location: "Kanpur", age: 52, rating: 5, content: "बाजार के चूर्ण से पेट में मरोड़ होती थी, यह बहुत ही soft और असरदार है।" },
        { name: "Vikas Singh", location: "Patna", age: 38, rating: 4, content: "गैस और एसिडिटी में भी बहुत आराम मिला है। Best product!" },
      ],
      faqs: [
        { question: "क्या इसकी आदत पड़ जाती है?", answer: "नहीं, Nitya Churan आदत नहीं डालता। यह आंतों की नेचुरल मूवमेंट को ठीक करता है।" },
        { question: "इसे कब लेना चाहिए?", answer: "सबसे अच्छा समय रात को सोने से पहले गुनगुने पानी के साथ है।" },
        { question: "क्या इसे शुगर के मरीज ले सकते हैं?", answer: "जी हाँ, यह पूरी तरह सुरक्षित है और इसमें कोई चीनी नहीं है।" },
      ]
    }
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
    image: kidneyStoneCapsuleImg,
    richContent: {
      problemSection: {
        title: "⚠️ अगर Ultrasound Report में Stone आ चुका है",
        description: "और Doctor ने Surgery Suggest कर दी है — तो अभी रुकिए। क्योंकि हजारों लोग ऑपरेशन से पहले Safe (सुरक्षित), Ayurvedic (आयुर्वेदिक), Doctor-Guided (डॉक्टर द्वारा निर्देशित) विकल्प चुन रहे हैं।",
        problems: [
          { title: "पेट के दाईं तरफ sharp pain", description: "Sharp pain on the right side of abdomen" },
          { title: "पीठ और कंधे तक जाने वाला दर्द", description: "Pain radiating to back and shoulder" },
          { title: "उल्टी, गैस, heaviness", description: "Vomiting, gas & heaviness" },
          { title: "फैटी खाने के बाद attack", description: "Attack after eating fatty foods" },
          { title: "हर बार surgery का डर", description: "Constant fear of surgery" },
        ],
        problemImage: "/images/generated/stone-care-problem.png"
      },
      solutionSection: {
        title: "Kidney Stone Capsule",
        subTitle: "प्राकृतिक रूप से पथरी का समाधान - 100% Ayurvedic Solution",
        description: "एक 100% Ayurvedic solution जो पथरी को जड़ से तोड़ने, घोलने और बाहर निकालने में प्रभावी है। बिना दर्द, बिना सर्जरी।",
        features: ["100% Natural", "Clinically Tested", "No Side Effects"],
        solutionImage: "/images/generated/stone-care-solution.png"
      },
      mechanismSection: {
        title: "Kidney Stone Capsule 4-step में काम करती है:",
        steps: [
          { title: "Stone Break Action", description: "जमा मिनरल्स को ढीला करके पथरी को छोटे कणों में तोड़ता है। Breaks stones into small particles", icon: "hammer" },
          { title: "Flush Out Support", description: "टूटे हुए कणों को पेशाब के रास्ते बाहर निकालने में मदद। Flushes out broken particles through urine", icon: "droplet" },
          { title: "Anti-Inflammation", description: "सूजन, जलन और दर्द को शांत करता है। Soothes inflammation, burning & pain", icon: "shield" },
          { title: "Recurrence Control", description: "दोबारा पथरी बनने की संभावना कम करता है। Prevents stone recurrence", icon: "repeat" },
        ]
      },
      ingredientsSection: {
        title: "Key Ingredients - शक्तिशाली आयुर्वेदिक संयोजन",
        ingredients: [
          { name: "Punarnava", description: "पथरी तोड़ने में सहायक" },
          { name: "Gokshur", description: "मूत्र मार्ग साफ करे" },
          { name: "Varun", description: "Stone flush करने में मदद" },
          { name: "Kulthi", description: "मिनरल जमा होने से रोके" },
          { name: "Pashanbhed", description: "पथरी घोलने में उपयोगी" },
        ]
      },
      comparisonSection: {
        title: "Modern Treatment vs Stone Care",
        modernTreatment: {
          title: "Modern Treatment",
          points: [
            { label: "Pills", value: "⚠️ Painkiller-dependent" },
            { label: "Surgery", value: "😰 Surgery / Laser fear" },
            { label: "Temporary", value: "⏱️ Temporary relief" },
            { label: "Side Effects", value: "⚡ Side-effects risk" },
          ]
        },
        ourProduct: {
          title: "Kidney Stone Capsule",
          points: [
            { label: "Natural", value: "✅ Root-cause approach" },
            { label: "No Surgery", value: "😊 No surgery" },
            { label: "Long-term", value: "🎯 Long-term support" },
            { label: "Ayurvedic", value: "🌿 100% Ayurvedic" },
          ]
        }
      },
      usageSection: {
        title: "कैसे उपयोग करें - सिर्फ 4 आसान स्टेप्स में पथरी से मुक्ति",
        steps: [
          { title: "दिन में 2 बार", description: "Morning & Evening: सुबह और शाम 1-1 कैप्सूल", note: "Best Time: खाने के बाद" },
          { title: "गुनगुने पानी के साथ", description: "एक गिलास हल्का गर्म पानी", note: "Tip: ठंडा पानी avoid करें" },
          { title: "30–45 दिन लगातार", description: "Complete Course: बिना नागा रोज़ाना सेवन करें", note: "Important: कोर्स पूरा करें" },
          { title: "Results Starting", description: "असर अक्सर 7–10 दिन में महसूस होना शुरू", note: "दर्द में कमी, पेशाब साफ" },
        ]
      },
      principlesSection: {
        title: "Why Stone Care is Recommended? - आयुर्वेद के सिद्धांत पर आधारित",
        description: "Ayurveda के अनुसार पथरी का मुख्य कारण और उसका समाधान",
        problems: [
          { title: "शरीर में गर्मी (Heat)", description: "Internal heat accumulation", icon: "fire" },
          { title: "शरीर में सूखापन (Dryness)", description: "Lack of hydration & fluids", icon: "sun" },
          { title: "टॉक्सिन का जमाव (Toxins)", description: "Accumulation of harmful toxins", icon: "skull" },
        ],
        solutions: [
          { title: "Stone की जड़ पर काम", description: "Attacks the root cause, not just symptoms", icon: "root" },
          { title: "Blood Flow में सुधार", description: "Improves circulation & kidney function", icon: "activity" },
          { title: "मूत्र मार्ग को साफ करे", description: "Cleanses urinary tract naturally", icon: "droplet" },
        ]
      },
      featuresSection: ["📊 Free Diet Chart", "🚚 Free Fast Delivery", "💰 Free COD Available"],
      certifications: ["FSSAI Certified", "ISO Approved", "GMP Manufacturing", "100% Natural", "No Side Effects"],
      testimonials: [
        { name: "Ramesh Kumar", location: "Jaipur", age: 30, rating: 5, content: "पित्ताशय की पथरी से बार-बार दर्द होता था। 3 हफ्ते लेने के बाद pain काफी कम हुआ और stone निकलने में मदद मिली।" },
        { name: "Sunita Verma", location: "Indore", age: 25, rating: 5, content: "पित्ताशय की पथरी के लिए Laser से डर लग रहा था। Capsule लेने से जलन और blockage में आराम मिला।" },
        { name: "Anil Sharma", location: "Delhi", age: 48, rating: 5, content: "पित्ताशय में पथरी थी। 45 दिन के course के बाद stone size काफी कम हो गया। अब दर्द नहीं होता।" },
      ],
      faqs: [
        { question: "क्या यह हर तरह की पथरी में काम करता है?", answer: "हाँ, यह गुर्दे की पथरी और पित्ताशय की पथरी दोनों में मदद कर सकता है, लेकिन डॉक्टर से परामर्श करना उचित है।" },
        { question: "कितने दिन में राहत मिलती है?", answer: "ज्यादातर मामलों में 7-10 दिनों में दर्द में राहत मिलने लगती है।" },
        { question: "क्या सर्जरी से बचा जा सकता है?", answer: "कई मामलों में आयुर्वेद सर्जरी से बचने में मदद कर सकता है, खासकर अगर पथरी छोटी हो।" },
        { question: "क्या कोई साइड इफेक्ट है?", answer: "यह 100% आयुर्वेदिक है और इसका कोई ज्ञात साइड इफेक्ट नहीं है।" },
      ]
    }
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
    image: stonekalpImg,
    richContent: {
      problemSection: {
        title: "पथरी का दर्द और पेशाब में जलन?",
        description: "बार-बार होने वाली पथरी और UTI (Infection) से परेशान हैं?",
        problems: [
          { title: "पेशाब में जलन", description: "Burning sensation in urine", icon: "flame" },
          { title: "रुकावट", description: "Obstructed urine flow", icon: "alert-circle" },
          { title: "पीठ का दर्द", description: "Recurring back/abdomen pain", icon: "activity" },
          { title: "UTI", description: "Urinary Tract Infections", icon: "bug" },
        ],
        problemImage: "/images/generated/stonekalp-problem.png"
      },
      solutionSection: {
        title: "Stonekalp Syrup",
        subTitle: "पथरी निकलने की रफ़्तार, अब और भी तेज़!",
        description: "एक शक्तिशाली तरल फॉर्मूला जो खून में जल्दी घुलता है और पथरी पर तेजी से असर करता है।",
        features: ["Fast Absorption", "Diuretic Action", "UTI Relief"],
        solutionImage: "/images/generated/stonekalp-solution.png"
      },
      mechanismSection: {
        title: "Stonekalp का 4-Way Action",
        steps: [
          { title: "Diuretic Action", description: "पेशाब की मात्रा बढ़ाता है ताकि पथरी बह सके। Increases urine output.", icon: "droplet" },
          { title: "Alkalizer", description: "पेशाब की एसिडिटी कम करता है, जलन रोकता है। Normalizes urine pH.", icon: "activity" },
          { title: "Stone Breaker", description: "पथरी को कण-कण करके तोड़ता है। Breaks stones chemically.", icon: "hammer" },
          { title: "Antibacterial", description: "इंफेक्शन (UTI) को खत्म करता है। Fights infections.", icon: "shield" },
        ]
      },
      ingredientsSection: {
        title: "Power of Liquid Herbs",
        ingredients: [
          { name: "Varuna", description: "पथरी को फोड़ने की शक्ति।" },
          { name: "Kulthi", description: "किडनी को साफ करने वाली दाल।" },
          { name: "Gokshura", description: "पेशाब खुलकर लाने में मदद।" },
          { name: "Punarnava", description: "सूजन कम करने में बेजोड़।" },
        ]
      },
      comparisonSection: {
        title: "Syrup vs Tablets",
        modernTreatment: {
          title: "Ordinary Tablets",
          points: [
            { label: "Absorption", value: "⏳ Slow (धीरे घुलती हैं)" },
            { label: "Hydration", value: "💧 Low" },
            { label: "Swallowing", value: "💊 Difficult for some" },
          ]
        },
        ourProduct: {
          title: "Stonekalp Syrup",
          points: [
            { label: "Absorption", value: "🚀 Fast (तुरंत असर)" },
            { label: "Hydration", value: "🌊 High" },
            { label: "Swallowing", value: "😋 Easy to consume" },
          ]
        }
      },
      usageSection: {
        title: "पीने का सही तरीका",
        steps: [
          { title: "दिन में 2-3 बार", description: "सुबह, दोपहर और शाम।", note: "Frequency" },
          { title: "10-15 ml", description: "2-3 चम्मच दवा लें।", note: "Dose" },
          { title: "पानी के साथ", description: "आधा कप पानी में मिलाकर पिएं।", note: "Method" },
          { title: "खूब पानी पिएं", description: "दिन भर में 3-4 लीटर पानी पिएं।", note: "Advice" },
        ]
      },
      principlesSection: {
        title: "द्रव से द्रव की शुद्धि",
        description: "आयुर्वेद में तरल औषधियाँ मूत्रल (Diuretic) रोगों में श्रेष्ठ मानी जाती हैं।",
        problems: [
          { title: "Concentrated Urine", description: "Causes crystal formation", icon: "droplet" },
          { title: "Urinary Stasis", description: "Urine holding promotes stones", icon: "pause" },
          { title: "Infection Risk", description: "Bacteria growth due to stasis", icon: "bug" },
        ],
        solutions: [
          { title: "Dilution", description: "Dilutes urine, preventing crystals", icon: "droplet" },
          { title: "Flushing", description: "Mechanically flushes stones", icon: "chevrons-right" },
          { title: "Healing", description: "Heals inner lining of tract", icon: "heart" },
        ]
      },
      featuresSection: ["🍹 Fast Acting Liquid", "🌿 100% Herbal", "👨⚕️ Kidney Safe"],
      certifications: ["FSSAI Certified", "GMP Certified", "Sugar Free Options"],
      testimonials: [
        { name: "Rahul S.", location: "Mumbai", age: 29, rating: 5, content: "कैप्सूल के साथ सिरप लेने से मेरी 8mm की पथरी 1 महीने में निकल गई।" },
        { name: "Priya K.", location: "Pune", age: 34, rating: 5, content: "पेशाब में बहुत जलन थी, Stonekalp से 2 दिन में ही आराम मिल गया।" },
        { name: "Amitabh", location: "Lucknow", age: 50, rating: 4, content: "किडनी डिटॉक्स के लिए बहुत अच्छा प्रोडक्ट है।" },
      ],
      faqs: [
        { question: "क्या इसे बच्चे ले सकते हैं?", answer: "बच्चों की उम्र के हिसाब से डोज कम करके दी जा सकती है, डॉक्टर से पूछें।" },
        { question: "क्या यह शुगर फ्री है?", answer: "जी हाँ, यह शुगर फ्री बेस में उपलब्ध है।" },
        { question: "कितने दिन पीना है?", answer: "पथरी निकलने तक या कम से कम 1-2 महीने।" },
      ]
    }
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
    image: pittaCareImg,
    richContent: {
      problemSection: {
        title: "एसिडिटी, सीने में जलन और गर्मी?",
        description: "क्या आपको भी गुस्सा ज्यादा आता है और शरीर में गर्मी महसूस होती है? यह पित्त दोष का प्रकोप है।",
        problems: [
          { title: "Acidity & Heartburn", description: "सीने और पेट में जलन", icon: "flame" },
          { title: "Skin Rashes", description: "त्वचा पर लाल चकत्ते और खुजली", icon: "alert-circle" },
          { title: "Excess Heat", description: "हाथ-पैरों में जलन", icon: "sun" },
          { title: "Anger & Stress", description: "चिड़चिड़ापन और गुस्सा", icon: "frown" },
        ],
        problemImage: "/images/generated/pitta-problem.png"
      },
      solutionSection: {
        title: "Pitta Care Plus",
        subTitle: "शरीर को दे शीतलता, मन को शांति",
        description: "कूलिंग जड़ी-बूटियों का एक अनोखा मिश्रण जो पित्त को शांत करता है और पाचन को सुधारता है।",
        features: ["Instant Cooling", "Acid Balance", "Blood Purification"],
        solutionImage: "/images/generated/pitta-solution.png"
      },
      mechanismSection: {
        title: "शीतलता का विज्ञान",
        steps: [
          { title: "Neutralizes Acid", description: "पेट के अतिरिक्त एसिड को न्यूट्रल करता है। Balances pH.", icon: "droplet" },
          { title: "Cools Blood", description: "रक्त की गर्मी को कम करता है। Purifies blood.", icon: "thermometer-snowflake" },
          { title: "Liver Support", description: "लिवर को ठंडा रखता है और एंजाइम्स सुधारता है। Cools liver.", icon: "activity" },
          { title: "Skin Health", description: "खून साफ करके त्वचा को निखारता है। Clears skin.", icon: "smile" },
        ]
      },
      ingredientsSection: {
        title: "Cooling Ingredients",
        ingredients: [
          { name: "Aloe Vera", description: "पेट को ठंडक और अल्सर में आराम।" },
          { name: "Giloy", description: "इम्यूनिटी और बुखार कम करने में।" },
          { name: "Amla", description: "विटामिन सी का स्रोत, पित्त नाशक।" },
          { name: "Muktashukti", description: "कैल्शियम का स्रोत, एसिडिटी का दुश्मन।" },
        ]
      },
      comparisonSection: {
        title: "Antacids vs Pitta Care",
        modernTreatment: {
          title: "Chemical Antacids",
          points: [
            { label: "Action", value: "⏱️ Temporary Suppress (दबाता है)" },
            { label: "Digestion", value: "📉 Weaken Digestion (पाचन कमजोर)" },
            { label: "Chemicals", value: "🧪 Synthetic" },
          ]
        },
        ourProduct: {
          title: "Pitta Care Plus",
          points: [
            { label: "Action", value: "🎯 Root Cause Correction (जड़ से इलाज)" },
            { label: "Digestion", value: "📈 Improves Digestion (पाचन सुधार)" },
            { label: "Chemicals", value: "🌿 Natural Herbs" },
          ]
        }
      },
      usageSection: {
        title: "सेवन का तरीका",
        steps: [
          { title: "खाली पेट", description: "सुबह और शाम खाने से पहले।", note: "Best Time" },
          { title: "20-30 ml", description: "3-4 चम्मच सिरप।", note: "Quantity" },
          { title: "बराबर पानी", description: "उतने ही पानी में मिलाकर।", note: "Mix" },
          { title: "परहेज", description: "मिर्च-मसाले और खट्टी चीजों से बचें।", note: "Avoid" },
        ]
      },
      principlesSection: {
        title: "पित्त शमन चिकित्सा",
        description: "अग्नि और जल तत्व का संतुलन ही स्वास्थ्य है।",
        problems: [
          { title: "Teekshna Agni", description: "Very sharp hunger/digestion burns tissues", icon: "flame" },
          { title: "Ushna Guna", description: "excess heat quality", icon: "sun" },
          { title: "Amla Rasa", description: "Sour taste increases acidity", icon: "droplet" },
        ],
        solutions: [
          { title: "Sheetal", description: "Cooling potency herbs", icon: "thermometer-snowflake" },
          { title: "Madhur", description: "Sweet taste relieves pitta", icon: "smile" },
          { title: "Tikta", description: "Bitter taste purifies blood", icon: "leaf" },
        ]
      },
      featuresSection: ["❄️ Natural Cooling", "🌿 100% Ayurvedic", "🧪 No Chemicals"],
      certifications: ["FSSAI Certified", "GMP Certified", "Quality Tested"],
      testimonials: [
        { name: "Suresh", location: "Ahmedabad", age: 40, rating: 5, content: "सालों पुरानी एसिडिटी की समस्या जड़ से खत्म हो गई। बहुत ही ठंडा अहसास देता है।" },
        { name: "Kiran", location: "Surat", age: 28, rating: 5, content: "मुंहासे और स्किन रैशेज में बहुत आराम मिला। खून साफ करता है।" },
        { name: "Pooja", location: "Mumbai", age: 35, rating: 4, content: "गर्मी में हाथ-पैर की जलन के लिए रामबाण है।" },
      ],
      faqs: [
        { question: "क्या इसे रोज़ ले सकते हैं?", answer: "हाँ, यह एक हेल्थ टॉनिक की तरह है, इसे पूरी गर्मियाँ ले सकते हैं।" },
        { question: "स्वाद कैसा है?", answer: "इसका स्वाद हल्का कसैला और मीठा है, जो जड़ी-बूटियों का नेचुरल टेस्ट है।" },
        { question: "क्या अल्सर में काम करेगा?", answer: "हाँ, एलोवेरा होने के कारण यह पेट के अल्सर में भी ठंडक देता है।" },
      ]
    }
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
    image: liverCapImg,
    richContent: {
      problemSection: {
        title: "लिवर है तो लाइफ है!",
        description: "Fatty Liver, पीलिया (Jaundice) या पाचन की खराबी को नज़रअंदाज़ न करें। लिवर शरीर का इंजन है।",
        problems: [
          { title: "Fatty Liver", description: "Grade 1 or 2 Fatty Liver", icon: "alert-triangle" },
          { title: "भूख न लगना", description: "Loss of Appetite", icon: "frown" },
          { title: "पाचन में गड़बड़ी", description: "Indigestion & Heaviness", icon: "activity" },
          { title: "शराब का दुष्प्रभाव", description: "Damage due to alcohol", icon: "wine" },
        ],
        problemImage: "/images/generated/liver-problem.png"
      },
      solutionSection: {
        title: "Liver Cap",
        subTitle: "Complete Liver Detox & Protection",
        description: "लिवर सेल्स को रिपेयर करने और डिटॉक्स करने के लिए हिमालयन जड़ी-बूटियों का एक शक्तिशाली फार्मूला।",
        features: ["Liver Detox", "Cell Repair", "Metabolism Boost"],
        solutionImage: "/images/generated/liver-solution.png"
      },
      mechanismSection: {
        title: "लिवर सुरक्षा कवच",
        steps: [
          { title: "Detoxification", description: "लिवर से विषैले पदार्थों को बाहर निकालता है। Flushes toxins.", icon: "trash-2" },
          { title: "Hepatoprotection", description: "लिवर सेल्स को डैमेज होने से बचाता है। Protects cells.", icon: "shield" },
          { title: "Regeneration", description: "नये लिवर सेल्स बनने में मदद करता है। Cell regeneration.", icon: "refresh-cw" },
          { title: "Enzyme Regulation", description: "SGOT/SGPT लेवल को नार्मल करता है। Balances enzymes.", icon: "activity" },
        ]
      },
      ingredientsSection: {
        title: "Hepatoprotective Herbs",
        ingredients: [
          { name: "Kutki", description: "लिवर डिटॉक्स और पीलिया में श्रेष्ठ।" },
          { name: "Kalmegh", description: "लिवर एन्जाइम्स को सही करता है।" },
          { name: "Bhumyamalaki", description: "हेपेटाइटिस और लिवर डैमेज में लाभकारी।" },
          { name: "Punarnava", description: "लिवर की सूजन कम करता है।" },
        ]
      },
      comparisonSection: {
        title: "Liv-52 / Others vs Liver Cap",
        modernTreatment: {
          title: "Generic Syrups",
          points: [
            { label: "Potency", value: "📉 Low Concentration" },
            { label: "Result", value: "⏳ Slow Acting" },
            { label: "Sugar", value: "🍬 High Sugar Content" },
          ]
        },
        ourProduct: {
          title: "Liver Cap",
          points: [
            { label: "Potency", value: "🚀 High Potency Extract" },
            { label: "Result", value: "⚡ Fast Result" },
            { label: "Sugar", value: "🌿 Zero Sugar (Capsule)" },
          ]
        }
      },
      usageSection: {
        title: "खुराक",
        steps: [
          { title: "भोजन के बाद", description: "नाश्ते और रात के खाने के बाद।", note: "Time" },
          { title: "1-2 कैप्सूल", description: "समस्या की गंभीरता के अनुसार।", note: "Dose" },
          { title: "पानी के साथ", description: "सादे पानी के साथ लें।", note: "Anupana" },
          { title: "परहेज", description: "शराब और तले हुए भोजन से बचें।", note: "Avoid" },
        ]
      },
      principlesSection: {
        title: "यकृत (Liver) स्वास्थ्य",
        description: "आयुर्वेद में यकृत को रक्त वह स्रोतस का मूल माना गया है।",
        problems: [
          { title: "Ranjaka Pitta Imbalance", description: "Causes Jaundice/Anaemia", icon: "activity" },
          { title: "Meda (Fat) Accumulation", description: "Fatty Liver", icon: "layers" },
          { title: "Vish (Toxins)", description: "Metabolic waste build up", icon: "skull" },
        ],
        solutions: [
          { title: "Pitta Virechan", description: "Expels toxic bile", icon: "droplet" },
          { title: "Lekhana", description: "Scrapes away fat", icon: "scissors" },
          { title: "Rasayana", description: "Rejuvenates liver tissue", icon: "heart" },
        ]
      },
      featuresSection: ["🛡️ Liver Guard", "🌿 100% Herbal", "💊 Sugar Free"],
      certifications: ["FSSAI Certified", "GMP Certified", "Lab Tested"],
      testimonials: [
        { name: "Mohit", location: "Chandigarh", age: 32, rating: 5, content: "Fatty Liver Grade 2 था, 3 महीने के कोर्स के बाद अब नार्मल हो गया है।" },
        { name: "Ravi", location: "Delhi", age: 45, rating: 5, content: "शराब की वजह से लिवर कमजोर था, इससे मुझे बहुत ताकत मिली है।" },
        { name: "Sunil", location: "Bhopal", age: 55, rating: 4, content: "पाचन सुधर गया और भूख भी अच्छी लगने लगी है।" },
      ],
      faqs: [
        { question: "क्या फैटी लिवर में काम करेगा?", answer: "जी हाँ, यह फैटी लिवर के लिए विशेष रूप से फायदेमंद है।" },
        { question: "क्या शराब छोड़ना जरूरी है?", answer: "अच्छे परिणाम के लिए शराब छोड़ना या कम करना बहुत जरूरी है।" },
        { question: "कितने दिन लेना है?", answer: "कम से कम 3 महीने का कोर्स करें।" },
      ]
    }
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
    image: kidneyStoneComboImg,
    richContent: {
      problemSection: {
        title: "जिद्दी पथरी का संपूर्ण इलाज",
        description: "सिर्फ एक दवा कॉफी नहीं? क्या पथरी बड़ी है या बार-बार होती है?",
        problems: [
          { title: "बड़ी पथरी", description: "> 5mm Stone", icon: "maximize" },
          { title: "मल्टीपल स्टोन", description: "Multiple Stones", icon: "grid" },
          { title: "पाचन भी खराब", description: "Constipation & Gas with Stone", icon: "activity" },
          { title: "बार-बार होना", description: "Recurring Stones", icon: "repeat" },
        ],
        problemImage: "/images/generated/stone-care-problem.png"
      },
      solutionSection: {
        title: "Complete Kidney Care Kit",
        subTitle: "Stonekalp + Capsule + Nitya Churan",
        description: "आयुर्वेद का 'Triple Action' फार्मूला जो पथरी को तोड़ता है, बहाता है और दोबारा बनने से रोकता है।",
        features: ["Triple Action", "Holistic Care", "Money Saver Pack"],
        solutionImage: "/images/generated/stone-care-solution.png"
      },
      mechanismSection: {
        title: "3-Way Attack on Stone",
        steps: [
          { title: "Break (Capsule)", description: "कैप्सूल पथरी को अंदर से तोड़ता है। Internal breaking.", icon: "hammer" },
          { title: "Flush (Syrup)", description: "सिरप मूत्र मार्ग साफ़ करके पथरी को बहा देता है। Flushes particles.", icon: "droplet" },
          { title: "Regulate (Churan)", description: "चूर्ण पेट साफ रखता है ताकि गैस का दबाव किडनी पर न पड़े। Detox digestion.", icon: "wind" },
          { title: "Heal", description: "किडनी को इन्फेक्शन और डैमेज से बचाता है। Promotes healing.", icon: "heart" },
        ]
      },
      ingredientsSection: {
        title: "The Ultimate Combo Ingredients",
        ingredients: [
          { name: "Varun & Kulthi", description: "Stone Breaker Herbs" },
          { name: "Gokshura", description: "Diuretic (Urine Flow)" },
          { name: "Triphala", description: "Digestive Detox" },
          { name: "Punarnava", description: "Kidney Renewer" },
        ]
      },
      comparisonSection: {
        title: "Single Medicine vs Complete Kit",
        modernTreatment: {
          title: "Single Medicine",
          points: [
            { label: "Action", value: "⚠️ Limited (अधूरी क्रिया)" },
            { label: "Digestion", value: "❌ Ignored" },
            { label: "Success Rate", value: "📉 Moderate" },
          ]
        },
        ourProduct: {
          title: "Complete Kit",
          points: [
            { label: "Action", value: "✅ Comprehensive (संपूर्ण इलाज)" },
            { label: "Digestion", value: "✅ Managed by Nitya Churan" },
            { label: "Success Rate", value: "🚀 Maximum" },
          ]
        }
      },
      usageSection: {
        title: "Kit उपयोग विधि",
        steps: [
          { title: "Capsule", description: "सुबह-शाम भोजन के बाद 1 कैप्सूल।", note: "After Meal" },
          { title: "Syrup", description: "खाने से पहले 2-3 चम्मच आधा कप पानी के साथ।", note: "Before Meal" },
          { title: "Churan", description: "रात को सोते समय 1 चम्मच गुनगुने पानी से।", note: "Bedtime" },
          { title: "Result", description: "1 महीने में बड़ा बदलाव देखें।", note: "Observation" },
        ]
      },
      principlesSection: {
        title: "संपूर्ण चिकित्सा (Holistic Healing)",
        description: "सिर्फ लक्षण नहीं, पूरे शरीर का संतुलन।",
        problems: [
          { title: "Apana Vayu Dushti", description: "Deranged downward wind causes stones", icon: "wind" },
          { title: "Amapachana", description: "Remove toxins first", icon: "trash" },
          { title: "Ashmari Bhedan", description: "Stone breaking therapy", icon: "hammer" },
        ],
        solutions: [
          { title: "Anulomana", description: "Nitya Churan corrects wind flow", icon: "arrow-down" },
          { title: "Mutrala", description: "Syrup increases flow", icon: "droplet" },
          { title: "Bhedana", description: "Capsule pierces stones", icon: "target" },
        ]
      },
      featuresSection: ["📦 Complete Kit", "💰 Best Value", "⚡ Faster Results"],
      certifications: ["FSSAI Certified", "GMP Certified", "Doctor Approved"],
      testimonials: [
        { name: "Arvind", location: "Agra", age: 42, rating: 5, content: "डॉक्टर ने ऑपरेशन बोला था, 12mm की पथरी इस किट से निकल गई। बहुत धन्यवाद!" },
        { name: "Vikram", location: "Jaipur", age: 35, rating: 5, content: "पूरा किट लेने से गैस और दर्द दोनों में एक साथ आराम मिल गया।" },
        { name: "Manoj", location: "Delhi", age: 48, rating: 5, content: "Best value for money. अलग-अलग लेने से सस्ता और ज्यादा असरदार।" },
      ],
      faqs: [
        { question: "क्या तीनों एक साथ लेना जरूरी है?", answer: "हाँ, अच्छे और जल्दी रिजल्ट के लिए तीनों का कॉम्बिनेशन बेस्ट काम करता है।" },
        { question: "कितने महीने का कोर्स है?", answer: "स्टोन के साइज पर निर्भर करता है, आमतौर पर 1-2 महीने।" },
        { question: "चूर्ण रोज लेना है?", answer: "हाँ, पाचन सही रहेगा तो दवाई जल्दी असर करेगी।" },
      ]
    }
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
    image: liverPittaComboImg,
    richContent: {
      problemSection: {
        title: "जब पाचन, लिवर और गर्मी सब परेशान करें",
        description: "A triple threat condition involving acidity, fatty liver, and constipation requires a holistic approach.",
        problems: [
          { title: "Excess Heat", description: "Acidity & Burning", icon: "flame" },
          { title: "Liver Stress", description: "Fatigue & Heaviness", icon: "activity" },
          { title: "Constipation", description: "Irregular Bowels/Bloating", icon: "alert-circle" },
        ],
        problemImage: "/images/generated/liver-pitta-combo-problem.png"
      },
      solutionSection: {
        title: "Ultimate Detox & Cooling Kit",
        subTitle: "Complete Restoration Therapy",
        description: "The perfect synergy of Liver Care (Repair), Pitta Care (Cooling), and Nitya Churan (Cleansing) to reset your entire system.",
        features: ["Total Detox", "Deep Cooling", "Digestive Reset"],
        solutionImage: "/images/generated/liver-pitta-combo-solution.png"
      },
      mechanismSection: {
        title: "3-Step Healing Process",
        steps: [
          { title: "Cooling", description: "Pitta Care shant karta hai excessive heat ko.", icon: "thermometer" },
          { title: "Detox", description: "Liver Cap toxins nikalta hai aur metabolism badhata hai.", icon: "activity" },
          { title: "Cleansing", description: "Nitya Churan pet saaf karke gas/bloating khatam karta hai.", icon: "wind" },
        ]
      },
      featuresSection: ["Holistic Healing", "Triple Action", "Money Saver"],
      certifications: ["Ayush Approved", "GMP Certified", "100% Herbal"],
      testimonials: [
        { name: "Rahul", location: "Pune", age: 34, rating: 5, content: "Life changing combo. Acidity aur sujan dono gayab." },
        { name: "Suman", location: "Mumbai", age: 45, rating: 5, content: "Best detox kit. Energy levels wapas aa gaye." },
        { name: "Amit", location: "Indore", age: 29, rating: 5, content: "Teeno ka asar zabardast hai. Must buy." }
      ],
      faqs: [
        { question: "How to take this combo?", answer: "Liver Cap morning, Pitta Care afternoon, Nitya Churan night." },
        { question: "Is it safe?", answer: "Yes, 100% natural and safe for long term use." },
        { question: "Can I take with other meds?", answer: "Keep 1 hour gap from allopathic medicines." }
      ],
      usageSection: {
        title: "Daily Routine for Best Results",
        steps: [
          { title: "Morning", description: "Take 1 Liver Care Capsule with warm water" },
          { title: "Afternoon", description: "Take 10-15ml Pitta Care Syrup after lunch" },
          { title: "Night", description: "Take 1/2 tsp Nitya Churan with warm water at bedtime" }
        ]
      },
      ingredientsSection: {
        title: "Power of 3 Formulas",
        ingredients: [
          { name: "Liver Care", description: "Kalmegh, Kutki, Bhumi Amla" },
          { name: "Pitta Care", description: "Praval Pishti, Mukta Shukti, Giloy" },
          { name: "Nitya Churan", description: "Senna, Haritaki, Saunf" }
        ]
      },
      principlesSection: {
        title: "Ayurvedic Principles",
        description: "Restoring balance through ancient wisdom.",
        problems: [
          { title: "Toxic Buildup", description: "Accumulation of toxins in liver", icon: "alert-circle" },
          { title: "Excess Heat", description: "High Pitta dosha causing acidity", icon: "flame" },
          { title: "Sluggish Digestion", description: "Slow metabolism and constipation", icon: "activity" }
        ],
        solutions: [
          { title: "Shodhan (Detox)", description: "Removing deep-seated toxins", icon: "check" },
          { title: "Shaman (Cooling)", description: "Balancing excess heat", icon: "thermometer" },
          { title: "Rasayana (Repair)", description: "Rejuvenating organ function", icon: "heart" }
        ]
      },
      comparisonSection: {
        title: "Why Choose The Kit?",
        modernTreatment: {
          title: "Symptomatic Relief",
          points: [
            { label: "Focus", value: "Temporary Relief" },
            { label: "Side Effects", value: "Common" },
            { label: "Holistic", value: "No" },
            { label: "Cost", value: "Recurring" }
          ]
        },
        ourProduct: {
          title: "Holistic 360° Cure",
          points: [
            { label: "Focus", value: "Root Cause Cure" },
            { label: "Side Effects", value: "None" },
            { label: "Holistic", value: "Yes" },
            { label: "Cost", value: "One-time" }
          ]
        }
      }
    }
  },
  {
    id: "manvigor-plus",
    name: "ManVigor Plus",
    description: "Premium wellness and vitality supplement for men.",
    longDescription: "A comprehensive formulation to support men's health, energy, and overall vitality.",
    price: "₹2500",
    category: "Wellness",
    ingredients: [],
    benefits: ["Supports energy and stamina", "Promotes overall vitality"],
    usage: "Take as directed by your healthcare professional.",
    image: manvigorImg,
    richContent: {
      problemSection: {
        title: "थकान, कमजोरी और ऊर्जा की कमी?",
        description: "आज की भागदौड़ भरी जिंदगी में तनाव और काम के दबाव से शारीरिक कमजोरी और थकान एक आम समस्या बन गई है।",
        problems: [
          { title: "Low Energy", description: "दिन भर थकान महसूस होना", icon: "battery-low" },
          { title: "Stress Levels", description: "मानसिक तनाव और चिंता", icon: "frown" },
          { title: "Physical Weakness", description: "काम में मन न लगना और स्टैमिना की कमी", icon: "alert-circle" },
          { title: "Joint & Muscle Pain", description: "शारीरिक दर्द और सुस्ती", icon: "activity" }
        ],
        problemImage: "/images/generated/manvigor-problem.png"
      },
      solutionSection: {
        title: "ManVigor Plus",
        subTitle: "शक्ति और ऊर्जा का प्राकृतिक स्रोत",
        description: "ManVigor Plus आयुर्वेदिक जड़ी-बूटियों का बेहतरीन मिश्रण है जो शरीर में प्राकृतिक रूप से ऊर्जा, शक्ति और स्टैमिना बढ़ाता है।",
        features: ["100% Ayurvedic", "Safe for Daily Use", "Natural Stamina Booster"],
        solutionImage: "/images/generated/manvigor-solution.png"
      },
      mechanismSection: {
        title: "यह कैसे काम करता है?",
        steps: [
          { title: "Boosts Immunity", description: "रोग प्रतिरोधक क्षमता बढ़ाता है।", icon: "shield" },
          { title: "Reduces Stress", description: "तनाव और एंग्जायटी को कम करता है।", icon: "wind" },
          { title: "Enhances Vitality", description: "शारीरिक और मानसिक ऊर्जा प्रदान करता है।", icon: "activity" },
          { title: "Improves Digestion", description: "पाचन सुधरता है जिससे शरीर को पूरा पोषण मिलता है।", icon: "droplet" }
        ]
      },
      ingredientsSection: {
        title: "आयुर्वेदिक घटक",
        ingredients: []
      },
      comparisonSection: {
        title: "ManVigor Plus vs Energy Drinks",
        modernTreatment: {
          title: "Energy Drinks/Pills",
          points: [
            { label: "Sugar Content", value: "High sugar and caffeine" },
            { label: "Results", value: "Short term energy crash" },
            { label: "Side Effects", value: "Possible jitters/insomnia" }
          ]
        },
        ourProduct: {
          title: "ManVigor Plus",
          points: [
            { label: "Sugar Content", value: "No sugar or artificial stimulants" },
            { label: "Results", value: "Long lasting vitality" },
            { label: "Side Effects", value: "100% Safe and Natural" }
          ]
        }
      },
      usageSection: {
        title: "सेवन विधि",
        steps: [
          { title: "खुराक", description: "1-2 कैप्सूल", note: "Dose" },
          { title: "समय", description: "दिन में दो बार", note: "Frequency" },
          { title: "कैसे लें", description: "दूध या गुनगुने पानी के साथ", note: "Instruction" }
        ]
      },
      principlesSection: {
        title: "स्वस्थ शरीर का आधार",
        description: "आयुर्वेद के अनुसार, ओजस (Vitality) ही जीवन का आधार है।",
        problems: [
          { title: "Ojas Depletion", description: "Lack of core energy", icon: "battery-low" },
          { title: "Vata Imbalance", description: "Causes stress and anxiety", icon: "wind" }
        ],
        solutions: [
          { title: "Rasayana", description: "Rejuvenates tissues", icon: "activity" },
          { title: "Balancing Doshas", description: "Restores natural harmony", icon: "heart" }
        ]
      },
      featuresSection: ["Natural Ingredients", "Clinically Tested", "Premium Quality"],
      certifications: ["FSSAI Certified", "GMP Certified", "100% Herbal"],
      testimonials: [
        { name: "Rahul Sharma", location: "Delhi", age: 34, rating: 5, content: "Great product for daily energy!" }
      ],
      faqs: [
        { question: "Are there any side effects?", answer: "No, it is safe and natural." }
      ]
    }
  },
  {
    id: "am-liv-ds-syrup",
    name: "AM-Liv DS Syrup",
    description: "Double strength liver support syrup.",
    longDescription: "An advanced liver care syrup to support healthy liver function and improve metabolism.",
    price: "₹150",
    category: "Liver & Pitta Care",
    ingredients: [],
    benefits: ["Supports liver health", "Improves metabolism"],
    usage: "Take as directed by your healthcare professional.",
    image: amlivdsImg,
    richContent: {
      problemSection: {
        title: "पाचन संबंधी समस्या और फैटी लिवर?",
        description: "लिवर शरीर का मुख्य अंग है जो पाचन और मेटाबॉलिज्म के लिए बहुत जरूरी है। गलत खानपान लिवर को कमजोर कर सकता है।",
        problems: [
          { title: "Fatty Liver", description: "लिवर में फैट का जमा होना", icon: "alert-circle" },
          { title: "Digestion Issues", description: "खाना ठीक से न पचना", icon: "activity" },
          { title: "Loss of Appetite", description: "भूख न लगना", icon: "frown" },
          { title: "Sluggish Metabolism", description: "वजन बढ़ना और सुस्ती", icon: "battery-low" }
        ],
        problemImage: "/images/generated/amliv-problem.png"
      },
      solutionSection: {
        title: "AM-Liv DS Syrup",
        subTitle: "Double Strength Liver Care",
        description: "AM-Liv DS शक्तिशाली जड़ी-बूटियों का सिरप है जो लिवर को डिटॉक्स करने और उसकी कार्यक्षमता को सुधारने में मदद करता है।",
        features: ["Double Strength Formula", "Liver Detox", "Enhances Digestion"],
        solutionImage: "/images/generated/amliv-solution.png"
      },
      mechanismSection: {
        title: "कैसे काम करता है?",
        steps: [
          { title: "Detoxifies Liver", description: "शरीर से विषैले पदार्थों को निकालता है।", icon: "droplet" },
          { title: "Improves Enzymes", description: "लिवर एंजाइम को संतुलित करता है।", icon: "activity" },
          { title: "Boosts Immunity", description: "रक्त साफ़ करता है।", icon: "shield" },
          { title: "Improves Digestion", description: "भूख और पाचन को प्राकृतिक रूप से बढ़ाता है।", icon: "heart" }
        ]
      },
      ingredientsSection: {
        title: "आयुर्वेदिक घटक",
        ingredients: []
      },
      comparisonSection: {
        title: "Regular Syrups vs AM-Liv DS",
        modernTreatment: {
          title: "Regular Syrups",
          points: [
            { label: "Potency", value: "Standard Strength" },
            { label: "Chemicals", value: "May contain synthetic additives" }
          ]
        },
        ourProduct: {
          title: "AM-Liv DS",
          points: [
            { label: "Potency", value: "Double Strength (DS) Extract" },
            { label: "Chemicals", value: "100% Herbal Formula" }
          ]
        }
      },
      usageSection: {
        title: "सेवन विधि",
        steps: [
          { title: "खुराक", description: "2 चम्मच (10ml)", note: "Dose" },
          { title: "समय", description: "दिन में 2 से 3 बार", note: "Frequency" },
          { title: "कैसे लें", description: "खाना खाने से पहले या बाद में", note: "Instruction" }
        ]
      },
      principlesSection: {
        title: "आयुर्वेदिक दृष्टिकोण",
        description: "लिवर (यकृत) पित्त का मुख्य स्थान है।",
        problems: [
          { title: "Pitta Imbalance", description: "Excess heat causing liver issues", icon: "flame" }
        ],
        solutions: [
          { title: "Detoxification", description: "Purifies toxins (Ama)", icon: "droplet" }
        ]
      },
      featuresSection: ["Doctor Recommended", "No added artificial sugar", "Fast Acting"],
      certifications: ["GMP Certified", "Ayush Approved"],
      testimonials: [
        { name: "Suresh Gupta", location: "Pune", age: 45, rating: 5, content: "Excellent results for my digestion." }
      ],
      faqs: [
        { question: "Is it safe for diabetics?", answer: "Please consult your doctor." }
      ]
    }
  },
  {
    id: "leucare-plus",
    name: "Leucare Plus",
    description: "Advanced support for women's health and wellness.",
    longDescription: "A specialized formulation to support women's health, vitality, and well-being.",
    price: "₹799",
    category: "Women's Health",
    ingredients: [],
    benefits: ["Promotes women's health", "Supports vitality"],
    usage: "Take as directed by your healthcare professional.",
    image: leucareImg,
    richContent: {
      problemSection: {
        title: "महिलाओं की अंदरूनी समस्याएं?",
        description: "महिलाओं में कमजोरी, अनियमितता और ल्यूकोरिया जैसी समस्याएं स्वास्थ्य और जीवन की गुणवत्ता को प्रभावित करती हैं।",
        problems: [
          { title: "Leucorrhea", description: "सफेद पानी की समस्या", icon: "droplet" },
          { title: "Weakness", description: "शारीरिक थकान और कमर दर्द", icon: "battery-low" },
          { title: "Irregularities", description: "अनियमित चक्र", icon: "activity" },
          { title: "Stress", description: "चिड़चिड़ापन", icon: "frown" }
        ],
        problemImage: "/images/generated/leucare-problem.png"
      },
      solutionSection: {
        title: "Leucare Plus",
        subTitle: "महिलाओं के संपूर्ण स्वास्थ्य का रक्षक",
        description: "Leucare Plus आयुर्वेदिक औषधियों का सुरक्षित मिश्रण है जो महिलाओं की समस्याओं को जड़ से खत्म करने में मदद करता है।",
        features: ["100% Safe Herbs", "Holistic Wellness", "Balances Hormones"],
        solutionImage: "/images/generated/leucare-solution.png"
      },
      mechanismSection: {
        title: "Leucare Plus कैसे काम करता है?",
        steps: [
          { title: "Hormonal Balance", description: "हार्मोनल असंतुलन को ठीक करता है।", icon: "activity" },
          { title: "Strengthens Body", description: "कमर दर्द और कमजोरी में आराम देता है।", icon: "shield" },
          { title: "Clears Toxins", description: "इंफेक्शन से बचाता है।", icon: "droplet" },
          { title: "Restores Health", description: "नियमितता लाता है और ऊर्जा देता है।", icon: "heart" }
        ]
      },
      ingredientsSection: {
        title: "आयुर्वेदिक घटक",
        ingredients: []
      },
      comparisonSection: {
        title: "Temporary Solutions vs Leucare Plus",
        modernTreatment: {
          title: "Temporary Solutions",
          points: [
            { label: "Approach", value: "Symptom suppression" },
            { label: "Side Effects", value: "Can disturb stomach" }
          ]
        },
        ourProduct: {
          title: "Leucare Plus",
          points: [
            { label: "Approach", value: "Root cause treatment" },
            { label: "Side Effects", value: "Zero side effects" }
          ]
        }
      },
      usageSection: {
        title: "सेवन विधि",
        steps: [
          { title: "खुराक", description: "1-2 कैप्सूल", note: "Dose" },
          { title: "समय", description: "दिन में दो बार", note: "Frequency" },
          { title: "कैसे लें", description: "पानी के साथ", note: "Instruction" }
        ]
      },
      principlesSection: {
        title: "मातृ और स्त्री स्वास्थ्य",
        description: "आयुर्वेद के अनुसार महिलाओं का स्वास्थ्य उनके समग्र संतुलन पर निर्भर करता है।",
        problems: [
          { title: "Dosha Imbalance", description: "Vata & Pitta imbalance", icon: "activity" }
        ],
        solutions: [
          { title: "Rasayana", description: "Rejuvenating herbs for reproductive system", icon: "heart" }
        ]
      },
      featuresSection: ["Natural Recovery", "Gynecologist Recommended", "Safe for daily use"],
      certifications: ["FSSAI Certified", "GMP Approved"],
      testimonials: [
        { name: "Priya Singh", location: "Jaipur", age: 29, rating: 5, content: "Bahut achha product hai, back pain aur weakness me aaram mila." }
      ],
      faqs: [
        { question: "How long should I take it?", answer: "Usually recommended for 2-3 months for lasting results." }
      ]
    }
  }
];

export const categories = [
  "All",
  "Digestive",
  "Kidney Care",
  "Liver & Pitta Care",
  "Combos",
  "Wellness",
  "Women's Health"
];
