// Poora content yahin se aata hai. Text badalna ho to sirf yahi file edit karo.
export const profile = {
  name: "Syed Huzef Ali",
  role: "MERN Stack Developer · 2025 Graduate",
  tagline: "I build full-stack web applications with React, Node.js, and MongoDB, with a focus on practical, user-friendly experiences.",
  intro: "A B.Tech graduate excited to contribute, keep learning, and grow with a collaborative engineering team.",
  email: "alihuzef2002@gmail.com",
  phone: "+91 7869461240",
  github: "https://github.com/Syedhuzefali",
  linkedin: "https://www.linkedin.com/in/syed-huzef-ali-85622722a/",
  resume: "Syed_Huzef_Ali_update_resume.pdf",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const about = [
  "I'm Syed Huzef Ali, a 2025 Computer Science and Engineering graduate focused on full-stack web development.",
  
  "Motivated Computer Science graduate (B.Tech 2025, CGPA 7.79/10) and aspiring Full-Stack Developer, eager to start a career in software development. MERN stack web development, with strong problem-solving skills and a quick-learning mindset. Looking for an entry-level opportunity to learn, contribute and grow within a collaborative team.",
];

export const skills = {
  Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap","Tailwind CSS", "Vite"],
  Backend: ["Node.js", "Express", "REST APIs", "JWT Auth"],
  Database: ["MongoDB", "MongoDB Atlas", "MySQL"],
  "Tools & Deploy": ["Git", "GitHub", "Vercel", "Render", "VS Code"],
  Languages: ["Java", "Python", "C", "C++"],
};

export const projects = [
  {
    title: "Inventory Management System",
    featured: true,
    when: "09/2026",
    text: "A full-stack application for managing products and user accounts through a secure, authenticated workflow.",
    points: [
      "JWT authentication with protected API routes",
      "Create, read, update, and delete workflows for products and users",
      "Form validation, including a six-digit minimum for barcodes",
      "Deployed with Vercel, Render, and MongoDB Atlas",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "http://ims-mern.vercel.app/",
    code: "", // apna GitHub repo link yahan paste karo
  },
  {
    title: "Weather Application",
    featured: false,
    when: "01/2025",
    text: "Built a responsive weather application with React and Tailwind CSS, using the OpenWeatherMap REST API to display real-time temperature, conditions, and dynamic weather icons for cities worldwide.",
    stack: ["React.js", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
    live: "https://syedhuzefali.github.io/weatherApp/",
    code: "",
  },
];

export const experience = [
  {
    title: "Customer Support Associate",
    place: "Technotask Business Solutions (Dermatouch Process), Bhopal, India",
    when: "12/2025 – 08/2026",
    points: [
      "Delivered customer support across inbound and outbound calls, handling 100+ customer interactions daily and troubleshooting product queries end-to-end.",
      "Resolved 90% of customer complaints on first contact by coordinating with internal teams, applying structured problem-solving, and communicating clearly and professionally.",
    ],
  },
  {
    title: "Full-Stack Web Development & DSA",
    place: "Raj Institute of Coding & Robotics (RICR)",
    when: "June 2024 – June 2025",
    points: [
      "Completed an intensive professional training program covering Java, Data Structures & Algorithms (DSA), and MERN Full-Stack Web Development.",
      "Successfully designed and delivered multiple real-world projects, demonstrating excellent performance and hands-on application development skills throughout the training.",
    ],
  },
];

export const education = [
  {
    level: "Graduation",
    title: "B.Tech, Computer Science & Engineering",
    place: "Technocrats Institute of Technology, Affiliated to RGPV, Bhopal, Madhya Pradesh",
    when: "2021 - 2025",
    score: "7.79 CGPA · 77.90%",
   certificate: "https://drive.google.com/file/d/1G7q-G4uthk1PDgoUJjSo6YlPI6v_vgK6/view?usp=sharing",
  },
  {
    level: "Higher Secondary · Class XII",
    title: "Higher Secondary (12th)",
    place: "Pushpa Sr. Sec School Ashta Sehore, Madhya Pradesh",
    when: "2020 - 2021",
    score: "66.00%",
    certificate: "https://drive.google.com/file/d/148zjUm4Cn_sMtlI2FV38wC97fApH1IQf/view?usp=sharing",
  },
  {
    level: "Senior Secondary · Class X",
    title: "Senior Secondary (10th)",
    place: "Pushpa Sr. Sec School Ashta Sehore, Madhya Pradesh",
    when: "2018 - 2019",
    score: "72.20%",
    certificate: "https://drive.google.com/file/d/1YxFppMvrMAB2dqPrXJjnPRJmGdAY03Ew/view?usp=sharing",
  },
];

export const certificates = [
  {
    title: "Java, Data Structures & Algorithms, and MERN Full-Stack Web Development",
    issuer: "Raj Institute of Coding & Robotics (RICR)",
    when: "12-month certification program · 2025",
    link: "https://drive.google.com/file/d/1gWX-D4Eik0rK40ArKPmiSj15rnd2YqOu/view?usp=sharing",
  },
  {
    title: "All India Naukri Campus Aptitude Test (AINCAT)",
    issuer: "AINCAT",
    when: "2025",
    link: "https://drive.google.com/file/d/1Mo2iQDbeR-6xf7IlaVb1eF7iUu29LdiP/view?usp=sharing",
  },
  {
    title: "C, C++ & Competitive Programming",
    issuer: "RAMRAJ Technology Solutions",
    when: "2022",
    link: "https://drive.google.com/file/d/1uWk9zzYYskZZHIaeVm59RU-cRodn12Qv/view?usp=sharing",
  },
  {
    title: "1st Rank — Techfest IIT Bombay",
    issuer: "Meshmerize Zonal Round",
    when: "2024",
    link: "https://drive.google.com/file/d/1G2zrQSsj653jcBuGbkFR8JLeK9aAaEpc/view?usp=sharing",
  },
];
