// Edit this file to update your career timeline, skills and typed roles.
// No build step needed — just save and refresh the page.

const TYPED_ROLES = [
  "Solution Design",
  "Cloud & AI",
  "GenAI / LLMs"
];

const CAREER_TIMELINE = [
  {
    period: "Jul 2009 — Present",
    role: "Application Architect",
    company: "Enterprise Software (India)",
    description: "Progressed from Senior Software Engineer to Application Architect, overseeing multiple enterprise products end-to-end. Active member of the Enterprise Architects' team, led cloud transformation (lift-and-shift, serverless, AWS modernization), championed AI adoption via GenAI-powered automation, MCP-based tooling and an org-wide AI platform on Databricks, and resolved critical bottlenecks by splitting monolithic APIs into high-performance microservices.",
    tags: [".NET / C#", "AWS", "Databricks", "Azure OpenAI", "Microservices", "GenAI / LLMs"],
    projects: [
      { period: "Aug 2025 — Present", title: "Enterprise AI Platform", description: "Centralized AI platform on Databricks to onboard AI-featured initiatives across the organization." },
      { period: "Apr 2025 — Jul 2025", title: "MCP-based Web Navigation", description: "Proof-of-concept using the Model Context Protocol (MCP) for automated web navigation, solving frequent site layout changes." },
      { period: "Jan 2025 — Mar 2025", title: "GenAI-powered Data Automation", description: "Proof-of-concept leveraging GenAI models for intelligent data extraction; validated and moved to full implementation." },
      { period: "Dec 2024 — Jan 2025", title: "Serverless Migration", description: "Designed migration of legacy services to serverless architecture (AWS Lambda + containerization) aligned to the AWS Well-Architected Framework." },
      { period: "Apr 2022 — Present", title: "Document Delivery Automation", description: "Architected and automated document delivery via a new internal API; resolved critical timeouts by decomposing into microservices." },
      { period: "Aug 2022 — May 2023", title: "Cloud-Native Modernization", description: "Led cloud-native modernization using AWS services to build a scalable, resilient, highly available system." },
      { period: "May 2021 — Mar 2022", title: "Microservices Platform Redesign", description: "Spearheaded a microservices solution replacing a legacy monolithic system; integrated multiple data providers with robust enterprise-level API design." },
      { period: "Apr 2019 — Feb 2021", title: "Cloud Lift & Shift", description: "Architected lift-and-shift of a monolithic application to AWS; redesigned desktop apps as Windows services and improved logging and unit testing coverage." },
      { period: "Jan 2013 — Dec 2017", title: "Cross-Browser Modernization", description: "Modernized 1000+ automation scripts from a legacy browser-only stack to cross-browser compatible; drove agile practices across the team." },
      { period: "Jul 2009 — Dec 2012", title: "Legacy Platform Migration", description: "Migrated 8 major backend services from Delphi to C# .NET as Senior Developer, guiding the team through technical challenges." }
    ]
  },
  {
    period: "Sep 2004 — Jul 2009",
    role: "Senior Software Engineer",
    company: "IT Services Firm",
    description: "Joined as an intern and progressed to Senior Software Engineer across the full SDLC — requirements, development, deployment and support. Delivered key modules for international clients across manufacturing and financial services, with multiple onsite visits to the USA for release support and project delivery.",
    tags: ["Delphi", ".NET / C#", "SDLC", "Client Delivery"]
  }
];

const SKILLS = [
  { name: ".NET / C#", level: 95 },
  { name: "SQL Server / PostgreSQL", level: 90 },
  { name: "AWS Cloud", level: 88 },
  { name: "Databricks / Snowflake", level: 82 },
  { name: "Azure AI / Azure OpenAI", level: 80 },
  { name: "GenAI / LLMs / MCP", level: 85 },
  { name: "Microservices / Serverless", level: 90 },
  { name: "Python", level: 75 },
  { name: "Terraform", level: 70 },
  { name: "NoSQL", level: 72 }
];