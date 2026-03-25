import { Link } from 'react-router-dom';
import { BrainCircuit, Target, ShieldCheck, Zap, Globe, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export default function OverviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section */}
        <section className="mb-20">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="max-w-3xl relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                About EduGenie <span className="text-indigo-600">AI</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
                EduGenie AI is a next-generation edtech platform designed to democratize high-quality education through the power of artificial intelligence. We believe that every student deserves a personalized learning journey that adapts to their unique pace, style, and goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="bg-indigo-50 p-3 rounded-2xl h-fit">
                    <Target className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">To empower 1 billion learners with AI-driven tools that make mastering complex skills intuitive and accessible.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-indigo-50 p-3 rounded-2xl h-fit">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Global Reach</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Connecting experts and students across 150+ countries in a vibrant, collaborative ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'AI Roadmaps', desc: 'Instantly generate structured paths for any skill, from Python to Product Design.' },
              { icon: BrainCircuit, title: '24/7 AI Tutor', desc: 'Get instant explanations and feedback on complex topics anytime, anywhere.' },
              { icon: ShieldCheck, title: 'Verified Content', desc: 'Learn from industry-vetted curriculum designed for real-world career success.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="bg-indigo-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support & Contact */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white">
            <h2 className="text-3xl font-bold mb-8">Support & Contact</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Support</h4>
                  <p className="text-slate-400 text-sm">hello@edugenie.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Office</h4>
                  <p className="text-slate-400 text-sm">123 AI Boulevard, Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 rounded-[3rem] p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Connect with Us</h2>
              <p className="text-indigo-100 mb-8 leading-relaxed">Join our community on social media to stay updated with the latest AI learning trends and platform updates.</p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all">
                Send a Message
                <Zap className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
