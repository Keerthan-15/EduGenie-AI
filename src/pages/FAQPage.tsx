import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does the AI Tutor work?',
    answer: 'Our AI Tutor is powered by advanced language models trained on educational content. It can explain concepts, answer questions, and provide feedback on your practice exercises in real-time.'
  },
  {
    question: 'Are the certificates industry-recognized?',
    answer: 'Yes, Capabl AI certificates are recognized by leading tech companies. We partner with industry experts to ensure our curriculum meets current market demands.'
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'We offer a 7-day money-back guarantee. If you\'re not satisfied with the course content, you can request a full refund within the first week of enrollment.'
  },
  {
    question: 'How long do I have access to the course?',
    answer: 'Once you enroll in a course, you get lifetime access to all its materials, including any future updates and the AI Tutor support.'
  },
  {
    question: 'Is there any prerequisite for the courses?',
    answer: 'Prerequisites vary by course. Most of our beginner courses require no prior knowledge, while advanced courses may require basic understanding of certain concepts.'
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-indigo-100">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-gray-500 text-lg">Everything you need to know about Capabl AI.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left group"
              >
                <span className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8 text-gray-500 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-indigo-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">Still have questions?</h2>
          <p className="text-indigo-100 mb-8 relative z-10 opacity-90">Our support team is here to help you 24/7.</p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all relative z-10 shadow-xl">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
