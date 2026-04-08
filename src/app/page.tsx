import {
  Briefcase,
  FolderGit2,
  FingerprintIcon,
  MapPin,
  CircleUserRound,
  ExternalLink,
  MessageCircleQuestion,
  Calendar,
} from "lucide-react";

const experience = [
  {
    role: "Advisor",
    company: "tangible.pm",
    period: "2022 — Present",
    description:
      "Expert on B2B SaaS product growth. Providing holistic product expertise to B2B organizations, establishing product frameworks, and mentoring product orgs.",
  },
  {
    role: "AI Product Manager",
    company: "B2B & B2G Startup, Series A->B",
    period: "2025 — 2026",
    description:
      "Took an ambiguous shareholder directive of 'make something AI' (almost verbatim!) and turned it into the foundation for an industry-leading application.",
  },
  {
    role: "Advisor",
    company: "B2B IT Consultancy Firm",
    period: "2024-2025",
    description:
      "Established direction for the development of proprietary customer-facing sales tools, advised on software engineering engagements.",
  },
  {
    role: "Growth Product Manager",
    company: "Major IT Brokerage",
    period: "2024 — 2025",
    description:
      "Accelerated their market position via rapid product discovery, and ensured long-term, top-line growth — in a free-to-use app.",
  },
  {
    role: "Platform Product Manager",
    company: "IT Advisory Startup",
    period: "2021 — 2024",
    description:
      "Independently responsible for an industry-leading product platform. Multiple speaking and on-stage demo engagements.",
  },
  {
    role: "Security Product Owner",
    company: "F500 Consumer Credit Agency",
    period: "2020 — 2021",
    description:
      "Responsible for the efficient and stable deployment of global security applications.",
  },
  {
    role: "Master of Science Alumnus",
    company: "Columbia University",
    period: "2018 — 2019",
    description:
      "Accelerated my product management skillset. M.S. in Technology Management.",
  },
  {
    role: "Developer, Designer, Geek",
    company: "Multiple Engagements and Personal Pusuits",
    period: "2010 — 2018",
    description:
      "From coding virtual reality mobile apps to producing commercial web designs.",
  }
];

const projects = [
  {
    name: "This Site",
    description:
      "You Are Here — built with Next.js, Tailwind CSS, and deployed on Vercel.",
    tags: ["React", "Tailwind"]
  },
  {
    name: "Crowdsourced Table Editing Web App",
    description:
      "Lightweight, open-source communal table editing app. Built by me to scratch my own itch (I use tables for everything).",
    tags: ["Next.js", "Node", "Prisma", "Vercel", "Neon", "BetterAuth", "Open Source"],
    href: "https://tables.logan.pm",
  },
  {
    name: "AI-powered, Industry-specific Analytics Platform",
    description:
      "In progress, stealth mode.",
    tags: ["AI", "LLM", "0-to-1"],
    href: "",
  },  
  {
    name: "Network and Data Center Location Tool",
    description:
      "Evolution of the project below. Industry-first research and sales enablement app.",
    tags: ["APIs", "Fiber Routing", "Data Centers", "Colocation", "Satellite Connectivity", "Prototyping"],
    href: "https://www.prweb.com/releases/AVANT_Launches_Cutting_Edge_Connectivity_Decision_Making_Tool_Connectivity_Navigator/prweb18628713.htm",
  },
  {
    name: "Commercial Network Service Locator",
    description:
      "Map-based connectivity discovery tool. Played the role of PM, PMM, PO, and UX. No hands on code.",
    tags: ["APIs", "UX", "Marketing", "Analytics", "0-to-1"],
    href: "https://www.prweb.com/releases/AVANT_Launches_Cutting_Edge_Connectivity_Decision_Making_Tool_Connectivity_Navigator/prweb18628713.htm",
  },
  {
    name: "IT Service Analysis and Comparison Tool",
    description:
      "The most-used tool in its space. Product managed end-to-end; no hands on code.",
    tags: ["SPA", "React", "AI", "UX", "Data"],
    href: "https://goavant.net/pathfinder/",
  },
  {
    name: "Virtual Reality Mobile App",
    description:
      "Tech showcase to market the client's company at events hosted by aerospace companies. Developed independently, with major telco sponsorship.",
    tags: ["Virtual Reality", "Mobile", "C#", "Google SDKs"],
    href: "",
  }
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-zinc-100 tracking-tight flex items-center gap-3 text-xl">
          <CircleUserRound size={28} strokeWidth={0.75} />
          Logan Clark
        </h1>
        {/* Top-level info */}
        <div>
          <h2 className="text-zinc-400 mt-1 flex items-center gap-1.5 text-m">
            <FingerprintIcon size={14} />
            Product Guy
          </h2>
          <p className="text-zinc-400 mt-1 flex items-center gap-1.5 text-m">
            <MapPin size={14} />
            Pennsylvania, USA
          </p>
        </div>
        {/* Contact info */}
        <div className="flex gap-4 pt-1">
          {/* Email */}
          <a href="mailto:hi@logan.pm"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Email"
          >            <p>Email</p>
          </a>
          {/* GitHub */}
          <a href="https://github.com/LoganTheBuilder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="GitHub"
          ><p>GitHub</p>
          </a>
          {/* Linkedin */}
          <a href="https://linkedin.com/in/logan-d-clark"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="LinkedIn"
          ><p>Linkedin</p>
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="space-y-4">
        <h2 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <MessageCircleQuestion size={16} />
          You're here because...
        </h2>
          <div className="grid grid-cols-[110px_1fr]">
            <span className="text-s tracking-wide text-zinc-500 font-light italic">Most likely,</span>
            <span>I sent this to you, or you're here from LinkedIn,</span>
          </div>

          <div className="grid grid-cols-[110px_1fr]">
            <span className="text-s tracking-wide text-zinc-500 font-light italic">and</span>
            <span>You're looking for a <b>product leader</b>,</span>
          </div>

          <div className="grid grid-cols-[110px_1fr]">
            <span className="text-s tracking-wide  text-zinc-500 font-light italic">and</span>
            <span>You want to work with someone with a <b>sense of humor</b>,</span>
          </div>

          <div className="grid grid-cols-[110px_1fr]">
            <span className="text-s tracking-wide  text-zinc-500 font-light italic">and</span>
            <span>You need to work with someone who can work with <b>everyone</b></span>
          </div>

          <div className="grid grid-cols-[110px_1fr]">
            <span className="text-s tracking-wide  text-zinc-500 font-light italic">or</span>
            <span>You found this website by accident.</span>
          </div>

          <div className="text-lg space-y-4 mb-2">
              <p>That means there's an <b>83% chance you're here for a good reason</b>.</p>
              <p>Let's make it 100%.</p>
          </div>
      </section>

      {/* Experience */}
      <section id="experience" className="space-y-6">
        <h2 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <Briefcase size={16} />
          10 Years of Product-Specific Experience
        </h2>
        <ol className="space-y-8">
          {experience.map((job) => (
            <li key={job.company} className="relative pl-4 border-l border-zinc-800">
              <p className="text-lg font-medium text-zinc-100">{job.role}</p>
              <p className="text-sm text-zinc-400 mt-0.5 flex items-center gap-3">
                {job.company}
                <span className="flex items-center gap-3 text-sm">
                  <Calendar size={12} />
                  {job.period}
                </span>
              </p>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                {job.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Noteworthy Projects */}
      <section id="projects" className="space-y-6">
        <h2 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <FolderGit2 size={16} />
          Projects
        </h2>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.name}
              className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-zinc-100">
                    {project.name}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs group-hover:text-zinc-400 transition-colors mt-0.5"
                  aria-label={`View ${project.name}`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="pt-4 border-t border-zinc-800 text-xs text-xs">
        I can't copyright myself.
      </footer>
    </main>
  );
}
