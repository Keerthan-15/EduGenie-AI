import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { Clock, Users, Star, CheckCircle2, PlayCircle, ShieldCheck, ArrowRight, ChevronRight, MessageSquare, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
          <Link to="/courses" className="text-indigo-600 font-bold hover:underline">Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* Course Banner */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-indigo-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                  {course.category}
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">(4.9/5.0)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                {course.title}
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-400" />
                  1,245 Students Enrolled
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  Certificate of Completion
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-sm">01</span>
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-sm">02</span>
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((section, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                      <h3 className="font-bold text-gray-900">{section.title}</h3>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {section.lessons.length} Lessons
                      </span>
                    </div>
                    <div className="p-4 space-y-2">
                      {section.lessons.map((lesson, j) => (
                        <div key={j} className="flex items-center justify-between p-3 hover:bg-indigo-50 rounded-xl transition-colors group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900">{lesson}</span>
                          </div>
                          <span className="text-xs text-gray-400">15:00</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-sm">03</span>
                About the Instructor
              </h2>
              <div className="bg-indigo-50/50 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start border border-indigo-100">
                <img
                  src={`https://i.pravatar.cc/150?u=${course.instructor}`}
                  alt={course.instructor}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.instructor}</h3>
                  <p className="text-indigo-600 text-sm font-medium mb-4">Senior Industry Expert & Mentor</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    With over 10 years of experience in the field, {course.instructor} has helped thousands of students master complex skills and transition into high-paying careers.
                  </p>
                  <div className="flex gap-4">
                    <button className="text-xs font-bold text-indigo-600 hover:underline">View Profile</button>
                    <button className="text-xs font-bold text-indigo-600 hover:underline">Contact Instructor</button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Pricing */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-indigo-100 p-8">
                <div className="mb-8">
                  <span className="text-gray-400 text-sm block mb-1">Lifetime Access</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                    <span className="text-gray-400 line-through text-lg">₹{(course.price * 1.5).toLocaleString()}</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-bold">
                    <Zap className="w-3 h-3" />
                    33% OFF - Limited Time
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full bg-white text-gray-900 border border-gray-200 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                    Add to Cart
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-sm">This course includes:</h4>
                  {[
                    { icon: Clock, text: 'Full lifetime access' },
                    { icon: MessageSquare, text: '24/7 AI Tutor Support' },
                    { icon: ShieldCheck, text: 'Certificate of completion' },
                    { icon: PlayCircle, text: 'Access on mobile and TV' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <item.icon className="w-4 h-4 text-indigo-600" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-4 relative z-10">Need a custom roadmap?</h4>
                <p className="text-indigo-100 text-sm mb-6 relative z-10 opacity-90">
                  Let our AI analyze your goals and create a personalized learning path just for you.
                </p>
                <Link
                  to="/tutor"
                  className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-all relative z-10"
                >
                  Generate Roadmap
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
