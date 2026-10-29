import {
  Droplets,
  Wrench,
  Heater,
  Flame,
  Bath,
  GlassWater,
  Pipette,
  Construction,
} from "lucide-react";
export const services = [
  {
    name: "Leak detection & repair",
    icon: Droplets,
    description:
      "Locate the source of a leak and discuss repair options before any work begins.",
  },
  {
    name: "Preventive maintenance",
    icon: Wrench,
    description:
      "A planned check of fixtures and visible pipework to help spot problems early.",
  },
  {
    name: "Water heater services",
    icon: Heater,
    description:
      "Describe your hot-water issue so a qualified professional can assess the next step.",
  },
  {
    name: "Gas line enquiries",
    icon: Flame,
    description:
      "Gas work requires an appropriately licensed specialist. This demo does not arrange emergency assistance.",
  },
  {
    name: "Toilet & flush repair",
    icon: Bath,
    description:
      "Get help describing running toilets, weak flushes and worn fittings.",
  },
  {
    name: "Water quality & filtration",
    icon: GlassWater,
    description: "Explore an enquiry about filtration options for your home.",
  },
  {
    name: "Fixture installation",
    icon: Pipette,
    description:
      "Plan a tap, sink or shower installation and outline the fixtures you have selected.",
  },
  {
    name: "Pipework & inspections",
    icon: Construction,
    description:
      "Request a discussion of visible pipework, access requirements and inspection needs.",
  },
];
export const cities = [
  "Dallas",
  "Fort Worth",
  "Plano",
  "Irving",
  "Arlington",
  "Garland",
  "Richardson",
  "Carrollton",
  "Frisco",
  "Allen",
  "McKinney",
  "Lewisville",
];
export const faqs = [
  {
    question: "Do I need a professional for a clogged drain?",
    answer:
      "A recurring blockage, several affected fixtures or a leak can need a professional assessment. This portfolio demo cannot diagnose a plumbing problem; describe the issue in the sample quote form to try the enquiry flow.",
  },
  {
    question: "How often should I maintain my water heater?",
    answer:
      "Follow the manufacturer’s guidance for your model and ask a qualified professional about local water conditions and maintenance needs. The demo does not provide appliance-specific instructions.",
  },
  {
    question: "Are the plumbers licensed and insured?",
    answer:
      "This is a fictional business, so no licensing or insurance claim is made. For a real service, verify the provider’s current credentials before arranging work.",
  },
  {
    question: "Does this form book an appointment?",
    answer:
      "No. It creates a sample confirmation in your browser. Nothing is sent or stored on a server, and no plumber is booked. Use fictional details when trying it.",
  },
];
export const articles = [
  {
    title: "Common plumbing issues and what to note",
    image: "work-5.jpg",
    text: "Before contacting a professional, note which fixtures are affected, when the issue began and whether it is recurring. Photos and a clear description can make an initial conversation more useful. This is general sample content, not a diagnosis.",
  },
  {
    title: "Planning a maintenance conversation",
    image: "article-2.jpg",
    text: "Keep appliance details and previous service records together. A qualified provider can advise on manufacturer guidance, your property and any local requirements. This fictional website does not replace professional advice.",
  },
  {
    title: "Choosing fixtures for a bathroom update",
    image: "work-4.jpg",
    text: "Discuss compatibility, available space, installation access and the scope of work before purchasing new fixtures. Ask your installer to confirm what is included. Images here are illustrative template assets, not completed client projects.",
  },
];
export const gallery = Array.from({ length: 8 }, (_, i) => `work-${i + 1}.jpg`);
