import {
  Shield,
  Users,
  Award,
  BookOpen,
  Target,
  Heart,
  Building2,
  Home,
  ShieldCheck,
  Truck,
  Clock,
  UserCheck,
  FileCheck,
  FileText,
  Eye,
  Scale,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

export const navLinks = [
  { link: "Home", path: "/" },
  { link: "About Us", path: "/about" },
  { link: "Services", path: "/service" },
  { link: "Governance", path: "/governance" },
  { link: "Careers", path: "/careers" },
];

export const values = [
  {
    icon: Shield,
    title: "Comprehensive Care",
    description:
      "We guarantee the well-being and dignity of every individual we support.",
  },
  {
    icon: Users,
    title: "Safety First",
    description:
      "Creating secure environments where vulnerable individuals can thrive.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "Our in-house experts deliver high-quality, evidence-based support services.",
  },
  {
    icon: BookOpen,
    title: "Regulatory Compliance",
    description:
      "We maintain strict adherence to regulatory compliance with all regulatory requirements.",
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    description:
      "We measure success by the positive outcomes achieved for those we support.",
  },
  {
    icon: Heart,
    title: "Community Investment",
    description:
      "We are invested in building the communities, our services and community impact.",
  },
];

// Our Approach Section Data
export const ourApproachData = [
  {
    id: 1,
    icon: Building2, // Bank/institution icon
    title: "24/7 Support",
    description:
      "We prioritize the well-being. Staff trained in de-escalation, safeguarding & supervision.",
  },
  {
    id: 2,
    icon: Home, // House/home icon
    title: "Comfortable Living Spaces",
    description:
      "Warm, welcoming environments that promote stability and wellbeing.",
  },
  {
    id: 3,
    icon: ShieldCheck, // Shield with checkmark icon
    title: "Safeguarding First",
    description:
      "Every decision puts resident safety and dignity at the centre.",
  },
  {
    id: 4,
    icon: Target, // Target/bullseye icon
    title: "Recovery-Focused",
    description: "We support people to move forward at their own pace.",
  },
  {
    id: 5,
    icon: Truck, // Transport/vehicle icon
    title: "Strong Transport Links",
    description: "Easy access to buses, trains, and connections across London.",
  },
  {
    id: 6,
    icon: Users, // People/community icon
    title: "Community Integration",
    description:
      "Every decision puts resident safety and dignity at the centre.",
  },
];

// Additional Services Section Data
export const additionalServicesData = [
  {
    id: 1,
    icon: Clock, // Clock icon
    title: "24/7 Emergency Referrals",
    description:
      "Round-the-clock availability for urgent placement and care needs.",
  },
  {
    id: 2,
    icon: Shield, // Shield icon
    title: "Risk Assessment & Management",
    description:
      "Comprehensive assessment and ongoing risk management protocols.",
  },
  {
    id: 3,
    icon: UserCheck, // User with checkmark icon
    title: "Multi-Disciplinary Team Support",
    description:
      "Collaboration with NHS, social services, and community teams.",
  },
  {
    id: 4,
    icon: Heart, // Heart icon
    title: "Person-Centred Planning",
    description:
      "Individual care plans tailored to each person's unique needs and goals.",
  },
  {
    id: 5,
    icon: Home, // House icon
    title: "Transition Support",
    description:
      "Specialized support for transitions between care settings and independence.",
  },
  {
    id: 6,
    icon: FileCheck, // Document with checkmark icon
    title: "Regulatory Compliance",
    description:
      "Full compliance with all relevant care standards and regulations.",
  },
];

// Governance Framework Section Data
export const governanceFrameworkData = [
  {
    id: 1,
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Full compliance with CQC, Ofsted, and other relevant regulatory bodies governing our care services.",
  },
  {
    id: 2,
    icon: Users,
    title: "Board Oversight",
    description:
      "Independent board members providing strategic direction and oversight of our operations.",
  },
  {
    id: 3,
    icon: FileText,
    title: "Policy Framework",
    description:
      "Comprehensive policies and procedures ensuring consistent, high-quality service delivery.",
  },
  {
    id: 4,
    icon: Award,
    title: "Quality Assurance",
    description:
      "Continuous monitoring and improvement processes to maintain exceptional care standards.",
  },
  {
    id: 5,
    icon: Eye,
    title: "Transparency",
    description:
      "Open reporting and accountability mechanisms as required for Community Interest Companies.",
  },
  {
    id: 6,
    icon: Scale,
    title: "Risk Management",
    description:
      "Systematic approach to identifying, assessing, and mitigating operational and care risks.",
  },
];

// Benefits & Perks Section Data
export const benefitsPerksData = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Comprehensive training programs and continuous professional development opportunities.",
  },
  {
    id: 2,
    icon: Award,
    title: "Competitive Packages",
    description:
      "Competitive salaries, pension schemes, and performance-based incentives.",
  },
  {
    id: 3,
    icon: Clock,
    title: "Flexible Working",
    description:
      "Flexible schedules, part-time options, and work-life balance support.",
  },
  {
    id: 4,
    icon: Heart,
    title: "Meaningful Work",
    description:
      "Make a real difference in vulnerable individuals' lives while building a rewarding career.",
  },
  {
    id: 5,
    icon: Users,
    title: "Supportive Team",
    description:
      "Join a collaborative, supportive team committed to excellence in care.",
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Career Progression",
    description:
      "Clear pathways for advancement and professional growth within the organization.",
  },
];

export const governanceGridData = [
  {
    id: 1,
    icon: Shield, // or you can use a custom shield icon
    title: "Community Interest Company",
    description:
      "PathWell Group CIC is structured as a Community Interest Company, ensuring our profits are reinvested into improving services and creating positive social impact.",
    sections: [
      {
        heading: "CIC Requirements:",
        items: [
          "Asset lock preventing profit extraction",
          "Annual community interest reporting",
          "CIC Regulator oversight and compliance",
          "Reinvestment of profits for social benefit",
        ],
      },
      {
        heading: "",
        description:
          "Our CIC structure ensures accountability, transparency, and genuine commitment to serving the communities we support.",
      },
    ],
  },
  {
    id: 2,
    icon: Users, // or you can use a custom governance icon
    title: "Governance Structure",
    description:
      "Our governance structure provides independent oversight, strategic direction, and ensures we maintain the highest standards of care and business practice.",
    sections: [
      {
        heading: "Leadership Structure:",
        items: [
          "Independent board of directors",
          "Executive management team",
          "Clinical governance committee",
          "External regulatory oversight",
        ],
      },
      {
        heading: "",
        description:
          "Regular board meetings, independent audits, and transparent reporting ensure accountability and continuous improvement.",
      },
    ],
  },
];

export const gridData = [
  {
    id: 1,
    icon: Users,
    title: "About PathWell Group",
    description:
      "PathWell Group CIC is a Community Interest Company dedicated to providing high-quality care and support services for vulnerable individuals across child care, adult care, and supported living sectors.",
    sections: [
      {
        heading: "Our Focus Areas:",
        items: [
          "Children in care placement services",
          "Adult home care and live-in support",
          "Supported living for complex needs",
          "24/7 emergency referral hotline",
        ],
      },
      {
        heading: "",
        description:
          "As a CIC, we reinvest our profits back into improving services and creating positive community impact, ensuring sustainability and continuous improvement in care delivery.",
      },
    ],
  },
  {
    id: 2,
    icon: Target,
    title: "Our Mission & Vision",
    sections: [
      {
        heading: "Mission",
        description:
          "To provide safe, dignified, and person-centred care that empowers vulnerable individuals to achieve their full potential and live fulfilling lives.",
      },
      {
        heading: "Vision",
        description:
          "To be the leading provider of specialised care services, recognised for our commitment to excellence, innovation, and positive outcomes.",
      },
      {
        heading: "Our Commitment:",
        items: [
          "Maintaining regulatory compliance",
          "Continuous staff training & development",
          "Evidence-based practice approaches",
          "Transparent governance & accountability",
        ],
      },
    ],
  },
];

export const careerGridData = [
  {
    id: 1,
    icon: Heart, // or you can use a custom heart icon
    title: "Why Choose PathWell Group?",
    description:
      "As a Community Interest Company, PathWell Group offers more than just a job - we offer the opportunity to be part of something meaningful that creates positive social impact.",
    sections: [
      {
        heading: "What Makes Us Different:",
        items: [
          "Mission-driven organization with social purpose",
          "Commitment to staff development & training",
          "Supportive, collaborative work environment",
          "Opportunity to make a real difference",
        ],
      },
      {
        heading: "",
        description:
          "Join a team where your contributions directly impact the quality of life for some of society's most vulnerable individuals.",
      },
    ],
  },
  {
    id: 2,
    icon: Award, // or you can use a custom award/medal icon
    title: "What We Look For",
    description:
      "We seek passionate individuals who share our commitment to excellence, compassion, and making a positive difference in people's lives.",
    sections: [
      {
        heading: "Essential Qualities:",
        items: [
          "Genuine care and compassion for others",
          "Professional integrity and reliability",
          "Commitment to continuous learning",
          "Strong communication and teamwork skills",
        ],
      },
      {
        heading: "",
        description:
          "We provide comprehensive training and support to help you develop the skills needed to excel in your role.",
      },
    ],
  },
];
