import { Header } from "@/components/Header";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What services do you provide?",
      answer: "We offer comprehensive wealth management services including investment management, financial planning, tax strategy, retirement planning, and estate planning. Our approach is holistic, considering all aspects of your financial life to create a cohesive strategy aligned with your goals."
    },
    {
      id: "2",
      question: "What is your investment philosophy?",
      answer: "Our investment philosophy is grounded in evidence-based investing, focusing on long-term wealth building through diversification, cost efficiency, and tax awareness. We believe in creating portfolios that align with your risk tolerance and financial goals, rather than trying to time the market or chase performance."
    },
    {
      id: "3",
      question: "How do you charge for your services?",
      answer: "We operate on a transparent, fee-only basis. Our fee structure is based on a percentage of assets under management, ensuring our interests are aligned with yours. We don't receive commissions or kickbacks from any products we recommend, eliminating potential conflicts of interest."
    },
    {
      id: "4",
      question: "What is your client onboarding process?",
      answer: "Our onboarding process begins with a comprehensive discovery meeting to understand your goals, current financial situation, and risk tolerance. We then develop a tailored financial plan and investment strategy, which we review together before implementation. Once approved, we handle all aspects of account setup and transfers."
    },
    {
      id: "5",
      question: "How often do you meet with clients?",
      answer: "We typically meet with clients quarterly to review portfolio performance, discuss any life changes, and adjust strategies as needed. However, we're always available for additional meetings or conversations when important questions or decisions arise. Our goal is to be proactive in our communication while remaining accessible when you need us."
    },
    {
      id: "6",
      question: "What makes your approach different?",
      answer: "Our approach combines sophisticated investment strategies with personalized attention. We limit our client base to ensure each relationship receives the focus it deserves. We also emphasize education and transparency, ensuring you understand and are comfortable with every aspect of your financial plan."
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mt-8">
            <Link
              href="/"
              className="group inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              <FaArrowLeft className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" />
              Back to home
            </Link>

            <div className="space-y-8 mt-12">
              <div>
                <h1 className="text-4xl font-semibold text-neutral-900">Frequently Asked Questions</h1>
              </div>

              <div className="grid gap-6">
                {faqs.map((faq) => (
                  <div 
                    key={faq.id}
                    className="bg-white shadow-[0_0_30px_rgba(0,0,0,0.08)] rounded-lg p-6 sm:p-8 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]"
                  >
                    <Accordion type="single" collapsible>
                      <AccordionItem value={faq.id} className="border-none">
                        <AccordionTrigger className="text-lg hover:no-underline hover:text-orange-600 py-2">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-600 pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>

              <div className="text-center pt-8">
                <p className="text-neutral-600 mb-4">
                  Have more questions? 
                  <br />
                  Let's discuss how we can work together.
                </p>
                <Link 
                  href="/contact"
                  className="group inline-flex items-center text-[#FB651F] hover:text-[#FB651F] font-medium"
                >
                  See if you're a fit
                  <FaArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
