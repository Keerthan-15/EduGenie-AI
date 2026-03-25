import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { courses } from '../data/courses';
import { ArrowRight, BrainCircuit, Target, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="bg-slate-50">
      <Hero />

      {/* Featured Courses Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Master the Most <br /> In-Demand Skills
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Our courses are designed by industry experts and enhanced by AI to ensure you learn what matters most for your career.
              </p>
            </div>
            <Link
              to="/courses"
              className="group flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors bg-indigo-50 px-6 py-3 rounded-2xl"
            >
              View All Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              How EduGenie AI Works
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              A seamless, AI-driven learning experience designed for high retention and career success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Target,
                title: 'Set Your Goal',
                desc: 'Tell our AI what you want to achieve, and we\'ll build a personalized learning roadmap just for you.'
              },
              {
                icon: BrainCircuit,
                title: 'Learn with AI Tutor',
                desc: 'Access world-class content with a 24/7 AI tutor that explains complex concepts in simple terms.'
              },
              {
                icon: Trophy,
                title: 'Practice & Master',
                desc: 'Complete interactive labs and quizzes with instant feedback to solidify your knowledge.'
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-center mb-10 group-hover:bg-indigo-600 group-hover:rotate-6 transition-all duration-500">
                  <step.icon className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </div>
  );
}
