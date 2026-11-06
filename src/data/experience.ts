export interface ClientEngagement {
  client: string;
  context?: string;
  description: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary?: string;
  clients?: ClientEngagement[];
}

export const experience: Experience[] = [
  {
    company: "Wolters Kluwer España",
    role: "Senior Product Software Engineer · Tech Lead",
    period: "Feb 2026 — Present",
    location: "Tenerife, Spain",
    current: true,
  },
  {
    company: "Lean Mind",
    role: "Software Developer",
    period: "2020 — Feb 2026",
    location: "Tenerife, Spain",
    summary:
      "Worked embedded with client teams, designing and shipping mobile and backend software.",
    clients: [
      {
        client: "Barkibu",
        context: "Pet insurance",
        description:
          "Worked on the Flutter app for a pet insurance startup, integrated with Barkibu’s product team.",
        tags: ["Flutter", "Dart", "Mobile"],
      },
      {
        client: "Barkibu · US partner",
        context: "Vet assistance",
        description:
          "Built embedded web widgets for a US strategic partner, giving pet parents access to vet assistance via chat across partner websites.",
        tags: ["Web widgets", "Chat", "Angular Dart", "Integrations"],
      },
      {
        client: "TII",
        context: "Technology Innovation Institute",
        description:
          "Built proof-of-concept multi-party computation implementations for mobile apps and Kotlin-based APIs with TII’s cryptography research team.",
        tags: ["Kotlin", "MPC", "Cryptography"],
      },
      {
        client: "TII",
        context: "Technology Innovation Institute",
        description:
          "Contributor to FANNG-MPC, an open-source C++ framework for neural networks and general secure multi-party computation, built by TII’s Cryptography Research team.",
        tags: ["C++", "MPC", "Machine Learning", "Python"],
      },
    ],
  },
];
