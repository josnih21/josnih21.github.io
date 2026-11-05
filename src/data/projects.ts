export interface Project {
  name: string;
  description: string;
  tags: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    name: "FANNG-MPC",
    description:
      "Contributor to TII’s open-source C++ framework for neural networks and general secure multi-party computation. It extends SCALE-MAMBA with Mamba-based tooling and libraries for ML operations.",
    tags: ["C++", "MPC", "Cryptography", "Machine Learning"],
    href: "https://github.com/Crypto-TII/FANNG-MPC",
  },
  {
    name: "Depth Squat",
    description:
      "Personal powerlifting project that analyzes squat videos and checks whether each rep meets IPF depth rules. Uses MediaPipe pose estimation, a rep state machine, annotated video output, and JSON reports.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
  },
  {
    name: "Flutter Clean Architecture",
    description:
      "A working Flutter example of Clean Architecture, used as reference material in the mobile architecture training sessions I ran for teams.",
    tags: ["Flutter", "Dart", "Clean Architecture"],
    href: "https://github.com/josnih21/music-app-clean-architecture-example",
  },
  {
    name: "RAE_bot",
    description:
      "A Telegram bot that returns Spanish word definitions from the RAE dictionary via API.",
    tags: ["TypeScript", "Telegram API"],
    href: "https://github.com/josnih21/RAE_bot",
  },
];
