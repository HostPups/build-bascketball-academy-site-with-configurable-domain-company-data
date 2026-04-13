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
    name: "أكاديمية القاهرة",
    tagline: "حيث يصنع الأبطال",
    logo: "/logo.svg",
    email: "info@cairocourts.com",
    phone: "+20 10 1234 5678",
    address: "الشيخ زايد، القاهرة، مصر",
    social: {
      facebook: "https://facebook.com/cairocourts",
      instagram: "https://instagram.com/cairocourts",
      youtube: "https://youtube.com/cairocourts",
    },
  },
  programs: [
    {
      id: "1",
      title: "برنامج الناشئين",
      description: "بناء الأساسيات للرياضيين الصغار من عمر 6-12 سنة.",
      price: "1500 جم/月",
      duration: "4 أسابيع",
      ageGroup: "أعمار 6-12",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
      features: ["المهارات الأساسية", "تمارين ممتعة", "ألعاب جماعية"],
    },
    {
      id: "2",
      title: "التدريب المتقدم",
      description: "تدريب متقدم للرياضيين الجاديين من عمر 13-18 سنة.",
      price: "2500 جم/月",
      duration: "4 أسابيع",
      ageGroup: "أعمار 13-18",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&h=400&fit=crop",
      features: ["مهارات متقدمة", "لياقة بدنية", "تحليل الفيديو"],
    },
    {
      id: "3",
      title: "تدريب فردي",
      description: "تدريب شخصي واحد على واحد.",
      price: "300 جم/جلسة",
      duration: "ساعة واحدة",
      ageGroup: "جميع الأعمار",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop",
      features: ["تدريب فردي", "خطة مخصصة"],
    },
    {
      id: "4",
      title: "معسكر صيفي",
      description: "معسكر صيفي مكثف لجميع المستويات.",
      price: "4500 جم",
      duration: "أسبوعان",
      ageGroup: "أعمار 8-18",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      features: ["تدريب مكثف", "بطولات", "شهادة"],
    },
  ],
  coaches: [
    {
      id: "1",
      name: "أحمد محمد",
      title: "المدرب الرئيسي",
      specialization: "استراتيجية الهجوم",
      experience: "15+ سنة",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
      bio: "لاعب محترف سابق",
    },
    {
      id: "2",
      name: "كريم يوسف",
      title: "مدرب مساعد",
      specialization: "الدفاع واللياقة",
      experience: "10+ سنة",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "متخصص لياقة معتمد",
    },
    {
      id: "3",
      name: "عمر سعيد",
      title: "مدرب مهارات",
      specialization: "التصويب",
      experience: "8+ سنة",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "متخصص تصويب",
    },
    {
      id: "4",
      name: "منى أحمد",
      title: "مدربة ناشئين",
      specialization: "الأساسيات",
      experience: "12+ سنة",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "متخصصة في ناشئين",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "محمد عادل",
      role: "والد",
      content: "ابني تحسن بشكل كبير منذ انضمامه للأكاديمية.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: "2",
      name: "نور الدين",
      role: "طالب",
      content: "ساعدني على الالتحاق بالكلية!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: "3",
      name: "هالة محمد",
      role: "والدة",
      content: "أفضل أكاديمية كرة سلة في مصر!",
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
      title: "5 نصائح لتحسين التصويب",
      excerpt: "حسّن تقنية التصويب مع هذه النصائح المدروسة.",
      content: `<p>التصويب من أهم المهارات في كرة السلة.</p>
      <h2>1. المتابعة</h2>
      <p>تأكد من لف معصمك نحو السلة.</p>
      <h2>2. الحفاظ على العينين على الهدف</h2>
      <p>اختر نقطة محددة على الحلقة وركز عليها.</p>
      <h2>3. استخدام الساقين</h2>
      <p>القوة تأتي من ساقيك.</p>
      <h2>4. الممارسة اليومية</h2>
      <p>المفتاح هو التكرار.</p>
      <h2>5. الثقة بالنفس</h2>
      <p>الثقة ضرورية.</p>`,
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=400&fit=crop",
      author: "أحمد محمد",
      date: "10 أبريل 2026",
      category: "تدريب"
    },
    {
      id: "2",
      slug: "youth-athletics-why-start-early",
      title: "لماذا يجب أن يبدأ الأطفال مبكراً",
      excerpt: "اكتشف فوائد البداية في سن مبكر.",
      content: `<p>البدء في كرة السلة في سن مبكر يوفر فوائد عديدة.</p>
      <h2>1. التنمية الجسدية</h2>
      <p>تطور التنسيق والتوازن.</p>
      <h2>2. العمل الجماعي</h2>
      <p>تعلم كيفية العمل مع الآخرين.</p>
      <h2>3. الانضباط</h2>
      <p>تزرع الانضباط والتركيز.</p>
      <h2>4. الثقة بالنفس</h2>
      <p>تنمو مع التحسن.</p>
      <h2>5. حب الرياضية</h2>
      <p>خلق أساس لحياة نشطة.</p>`,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop",
      author: "منى أحمد",
      date: "8 أبريل 2026",
      category: "شباب"
    },
    {
      id: "3",
      slug: "nutrition-for-athletes",
      title: "التغذية السليمة للرياضيين",
      excerpt: "تعلم التغذية التي تحسن الأداء.",
      content: `<p>التغذية السليمة ضرورية للرياضيين.</p>
      <h2>1. الكربوهيدرات</h2>
      <p>مصدر الطاقة الرئيسي.</p>
      <h2>2. البروتين</h2>
      <p>لبناء العضلات.</p>
      <h2>3. الترطيب</h2>
      <p>الماء أساسي.</p>
      <h2>4. قبل التدريب</h2>
      <p>وجبة متتوازنة.</p>
      <h2>5. بعد التدريب</h2>
      <p>بروتين وكربوهيدرات.</p>`,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
      author: "كريم يوسف",
      date: "5 أبريل 2026",
      category: "تغذية"
    }
  ],
};