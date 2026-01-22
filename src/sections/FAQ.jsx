import { useState } from "react";
import Container from "../shared/Container";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How secure is my financial data on this platform?",
    answer:
      "We prioritize security by using military-grade AES-256 encryption. Your investment portfolios and personal financial data are stored securely and are never shared with third parties without your consent."
  },
  {
    question: "What types of investment assets can I track?",
    answer:
      "Our platform allows you to track a wide range of assets, including global stocks, cryptocurrencies, mutual funds, and fixed deposits, all updated in real-time."
  },
  {
    question: "Are there any hidden fees for freelance payments?",
    answer:
      "No. We pride ourselves on transparency. You only pay a flat service fee per transaction, and we provide a full breakdown of any exchange rates before you confirm a transfer."
  },
  {
    question: "Can I manage multiple business profiles under one account?",
    answer:
      "Yes. Our unified dashboard is designed for multi-tasking. You can create different profiles for your freelance business and personal wealth management within a single login."
  },
  {
    question: "How often is the market data updated?",
    answer:
      "Market trends and asset prices are updated in real-time or with a maximum delay of 60 seconds, depending on the global exchange, to ensure you make informed decisions."
  },
  {
    question: "Do you provide tax compliance reports for freelancers?",
    answer:
      "Absolutely. Our system can generate automated monthly and yearly financial reports that help you simplify your tax filing process and stay compliant with local regulations."
  }
];

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="text-center space-y-3">
        <h3 className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Frequently Asked <span className="text-primary">Questions</span>
        </h3>

        <p className="text-gray-600 dark:text-gray-400 max-w-[55ch] mx-auto text-lg">
          Find answers to common questions about our financial ecosystem and how we help you manage wealth effectively.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-300 ${
              activeIndex === index 
                ? "border-primary bg-primary/5 dark:bg-primary/10 shadow-lg" 
                : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className={`font-bold text-lg ${
                activeIndex === index ? "text-primary" : "text-gray-800 dark:text-gray-200"
              }`}>
                {faq.question}
              </span>
              <div className={`p-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
              }`}>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Smooth transition simulation */}
            <div className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 text-base leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4 mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQS;