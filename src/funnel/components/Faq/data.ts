
export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export const faqHeader = {
    title: "Clearing Up Common",
    subtitle: "Queries",
    description:
      "Dive into our FAQ section for insights into our services. We've compiled answers to common questions to ensure you're well-informed.",
  };
  
  export const faqs: FAQItem[] = [
    {
      question: "How long does it take to complete a project?",
      answer:
        "The duration varies depending on the scope and complexity of the project. We strive to deliver high-quality work within a reasonable timeframe, ensuring both efficiency and excellence.",
    },
    {
      question: "What is your design process like?",
      answer:
        "Our design process is collaborative and transparent. It typically involves initial consultation, concept development, feedback iterations, and finalization. We prioritize client input and strive to exceed expectations at every stage.",
    },
    {
      question: "Can I request revisions to the design?",
      answer:
        "Absolutely. We encourage feedback and offer revisions to ensure the final design aligns perfectly with your vision.",
    },
    {
      question: "Do you provide support after project completion?",
      answer:
        "Yes, we provide post-launch support and maintenance options to ensure everything continues to run smoothly after the project is delivered.",
    },
    {
      question: "Can I see examples of your previous work?",
      answer:
        "Certainly! We’re happy to share our portfolio showcasing past projects upon request.",
    },
  ];
  