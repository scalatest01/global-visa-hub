export type VisaService = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
};

export type Country = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  popularVisas: string[];
};

export const countries: Country[] = [
  {
    slug: "poland",
    code: "PL",
    name: "Poland",
    flag: "🇵🇱",
    tagline: "Fast-growing EU job market with accessible work permits",
    description:
      "Poland is one of Europe's fastest-growing economies and a top destination for workers and students. Its employer-driven work permit system makes it one of the most accessible routes into the EU, with a growing demand for skilled and seasonal workers alike.",
    highlights: [
      "EU member state with Schengen access",
      "Employer-sponsored work permits processed in weeks",
      "Low cost of living compared to Western Europe",
      "Growing demand in IT, logistics, manufacturing and healthcare",
    ],
    popularVisas: ["Work visa", "Student visa", "Business visa"],
  },
  {
    slug: "ukraine",
    code: "UA",
    name: "Ukraine",
    flag: "🇺🇦",
    tagline: "Residence permits and long-term stay options",
    description:
      "Ukraine offers a range of residence and long-stay options for those with work, family or study ties to the country. We help you navigate residence permits, extensions and the paperwork involved at every step.",
    highlights: [
      "Temporary and permanent residence permits",
      "Affordable living costs and large cities",
      "Family reunification options available",
      "Full support with document legalisation and translation",
    ],
    popularVisas: ["Residence permit", "Family visa", "Visa extension"],
  },
  {
    slug: "germany",
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    tagline: "Europe's largest economy — skilled worker routes and EU Blue Card",
    description:
      "Germany's Skilled Immigration Act opens the door for qualified professionals, students and entrepreneurs. From the EU Blue Card to the job seeker route and vocational training visas, Germany rewards well-prepared applications.",
    highlights: [
      "EU Blue Card for university graduates with job offers",
      "Job seeker and opportunity card routes",
      "World-class tuition-free or low-cost universities",
      "Path to permanent residence in as little as 21–33 months",
    ],
    popularVisas: ["EU Blue Card", "Job seeker visa", "Student visa"],
  },
  {
    slug: "netherlands",
    code: "NL",
    name: "Netherlands",
    flag: "🇳🇱",
    tagline: "Highly skilled migrant route and English-friendly workplaces",
    description:
      "The Netherlands is ideal for international professionals and students, with a huge English-speaking job market. The highly skilled migrant programme and orientation year make it one of the smoothest EU systems when your file is prepared correctly.",
    highlights: [
      "Highly skilled migrant visa with fast processing",
      "Orientation year (zoekjaar) for recent graduates",
      "Startup and self-employment routes",
      "30% tax ruling may apply for incoming professionals",
    ],
    popularVisas: ["Highly skilled migrant visa", "Student visa", "Startup visa"],
  },
  {
    slug: "romania",
    code: "RO",
    name: "Romania",
    flag: "🇷🇴",
    tagline: "Low-cost EU base with steady work permit approvals",
    description:
      "Romania combines EU membership with one of the lowest costs of living in Europe. Work permits are issued steadily year-round, making it a popular first step into the EU for workers and their families.",
    highlights: [
      "EU member state — long-term path to EU residence",
      "Year-round work permit quota availability",
      "Family members can join the main applicant",
      "Booming IT, construction and service sectors",
    ],
    popularVisas: ["Work visa", "Family visa", "Business visa"],
  },
  {
    slug: "bulgaria",
    code: "BG",
    name: "Bulgaria",
    flag: "🇧🇬",
    tagline: "Business-friendly EU residence with low setup costs",
    description:
      "Bulgaria is one of the most affordable ways to establish EU residence — through employment, company registration or study. Its flat tax and low company setup costs make it attractive for entrepreneurs.",
    highlights: [
      "EU residence through work, business or study",
      "Flat 10% income tax — lowest in the EU",
      "Company registration route for entrepreneurs",
      "Low living and operating costs",
    ],
    popularVisas: ["Business visa", "Work visa", "Residence permit"],
  },
  {
    slug: "serbia",
    code: "RS",
    name: "Serbia",
    flag: "🇷🇸",
    tagline: "Flexible non-EU residence with fast processing",
    description:
      "Serbia offers some of the most flexible residence options in Europe without EU-level quotas. Ideal for freelancers, company owners and remote workers who want a European base with quick approvals.",
    highlights: [
      "Temporary residence through employment, company or study",
      "No EU quotas — faster and more flexible decisions",
      "Popular base for freelancers and remote workers",
      "Visa-free or simplified entry for many nationalities",
    ],
    popularVisas: ["Temporary residence", "Business visa", "Freelancer permit"],
  },
  {
    slug: "denmark",
    code: "DK",
    name: "Denmark",
    flag: "🇩🇰",
    tagline: "High salaries and structured work & study schemes",
    description:
      "Denmark's Positive List and Pay Limit Scheme give clear, rules-based paths for skilled workers. Combined with top-ranked universities and strong workers' rights, it's a premium destination for those who qualify.",
    highlights: [
      "Pay Limit Scheme — no job list needed above salary threshold",
      "Positive List for occupations with shortages",
      "Excellent universities with English-taught programmes",
      "Clear path to permanent residence",
    ],
    popularVisas: ["Pay Limit work permit", "Positive List permit", "Student visa"],
  },
];

export const visaServices: VisaService[] = [
  {
    slug: "job-work-visa",
    title: "Job & Work Visa",
    tagline: "For employment abroad",
    description:
      "We match your profile to the right work route, guide your employer through the sponsorship paperwork, and prepare a complete application — from work permit to visa stamp.",
    includes: [
      "Eligibility check for work routes in all 8 destinations",
      "Employer sponsorship and work permit guidance",
      "Complete document preparation and legalisation",
      "Application submission and embassy follow-up",
    ],
  },
  {
    slug: "student-visa",
    title: "Student Visa",
    tagline: "For universities and colleges",
    description:
      "From choosing a university to your enrolment letter, blocked account, and embassy interview — we handle the full student journey so you can focus on your studies.",
    includes: [
      "University and programme shortlisting",
      "Admission and enrolment letter support",
      "Financial proof and blocked account guidance",
      "Visa application and interview preparation",
    ],
  },
  {
    slug: "business-visa",
    title: "Business Visa",
    tagline: "For founders and investors",
    description:
      "Register a company, invest, or attend business meetings abroad. We set up the right business structure and the residence or entry visa that goes with it.",
    includes: [
      "Company registration in Bulgaria, Serbia, Romania and more",
      "Investor and entrepreneur residence routes",
      "Business visit visas for meetings and trade",
      "Ongoing compliance and renewal support",
    ],
  },
  {
    slug: "spouse-family-visa",
    title: "Spouse & Family Visa",
    tagline: "For reunification",
    description:
      "Bring your spouse, children or parents with you. We prepare family reunification applications that meet income, housing and documentation requirements.",
    includes: [
      "Eligibility and relationship documentation review",
      "Sponsor income and housing requirements guidance",
      "Full application file preparation",
      "Appeals and reapplication support if refused",
    ],
  },
  {
    slug: "visa-extension",
    title: "Visa Extension",
    tagline: "Stay longer, legally",
    description:
      "Running out of time on your current visa or residence permit? We prepare extension and renewal applications well before deadlines so you never fall out of status.",
    includes: [
      "Deadline tracking and early renewal planning",
      "Extension of work, student and residence permits",
      "Change of status between visa categories",
      "Refusal-prevention review of your whole file",
    ],
  },
  {
    slug: "other-visa-help",
    title: "Any Other Visa Help",
    tagline: "Every situation covered",
    description:
      "Transit visas, tourist visas, document legalisation, appeals after refusal, or a situation that doesn't fit a box — tell us what you need and we'll build a plan.",
    includes: [
      "Free assessment of your specific case",
      "Document legalisation, translation and apostille",
      "Refusal analysis and appeal preparation",
      "Personalised step-by-step action plan",
    ],
  },
];

export const contactEmail = "info@abcimmigration.com";

export function getCountry(slug: string | undefined): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getVisaService(slug: string | undefined): VisaService | undefined {
  return visaServices.find((v) => v.slug === slug);
}
