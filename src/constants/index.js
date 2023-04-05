import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Technical Business Analyst",
    icon: web,
  },
  {
    title: "Software Test Engineer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: backend,
  },
  {
    title: "Biomedical Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: html,
  },
  {
    name: "Terraform",
    icon: css,
  },
  {
    name: "AWS",
    icon: javascript,
  },
  {
    name: "Ansible",
    icon: typescript,
  },
  {
    name: "Kubernetes",
    icon: reactjs,
  },
  {
    name: "Networking",
    icon: redux,
  },
  {
    name: "Linux",
    icon: tailwind,
  },
  {
    name: "CI/CD",
    icon: nodejs,
  },
  {
    name: "JIRA",
    icon: mongodb,
  },
  {
    name: "Microsoft Office",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sr. Technical Business Analyst",
    company_name: "Station Digital Media",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2022 - PRESENT",
    points: [
      "Lead all technical discussions and design requirements for ChargePoint Station Integration project.",
      "Contribute to the reorganization of product management team for efficient product development and release flows.",
      "Lead US-based QA efforts and support for client and vendor upon external app release.",
      "Assist in troubleshooting API and server issues with vendor.",
    ],
  },
  {
    title: "Technical Business Analyst",
    company_name: "Station Digital Media",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2021 - September 2022",
    points: [
      "Prepare documentation and set requirements for software applications for third-party automotive OEMs.",
      "Analyze and perform QA validation on software release builds + APIs using Postman.",
      "Lead the SaaS identity management system (Interchange ID) incorporating JIRA and Confluence.",
    ],
  },
  {
    title: "Software Engineer in Test",
    company_name: "Applied Medical",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2021 - August 2021",
    points: [
      "Design, build, and maintain test frameworks for surgical devices in an Agile Scrum environment.",
      "Utilize test automation for data analysis from enumerated SD contents using a Python script.",
      "Create and track defects through version control Gitlab and debug embedded software.",
      "Perform software maintenance on production-released software builds after regression analysis.",
      "Peer review and write test protocols and documents in PLM SAP and PTC Integrity workflow.",
      "Participate in daily Scum meetings and consistently communicate with stakeholders and developers.",
    ],
  },

];

const testimonials = [
  
];

const projects = [
  {
    name: "Hosted Web-Application on Local K8s Cluster	",
    description:
      "Utilized a template web portfolio summarizing key information using React.js. Containerized web application into a Docker container and pushed to Docker hub.Deployed container to AWS EC2/S3 provisioned through Terraform and configured using an Ansible playbook.  ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dockerize React.js Web Portfolio",
    description:
      "Built template web portfolio leveraging React.js and dockerized and pushed container to DockerHub.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Provision AWS Resources to run server using Terraform",
    description:
      "Utilized Terraform IaC to provision and deploy AWS EC2 instances, VPC, security groups, and VPC.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
