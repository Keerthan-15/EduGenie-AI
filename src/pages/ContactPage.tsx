import { Mail, Phone, MapPin, Send, MessageSquare, Twitter, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Get in Touch</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Have a question or need help? Our team is here to support your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {[
              { icon: Mail, title: 'Email Us', detail: 'support@capabl.ai', desc: 'We\'ll respond within 24 hours.' },
              { icon: Phone, title: 'Call Us', detail: '+91 98765 43210', desc: 'Mon-Fri from 9am to 6pm.' },
              { icon: MapPin, title: 'Visit Us', detail: 'HSR Layout, Bangalore', desc: 'Come say hello at our office.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-6">
                <div className="bg-indigo-50 p-3 rounded-2xl">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-indigo-600 font-bold text-sm mb-1">{item.detail}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="bg-gray-900 p-8 rounded-3xl text-white">
              <h3 className="font-bold mb-6">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-indigo-600 transition-all"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-indigo-600 transition-all"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-indigo-600 transition-all"><Github className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-indigo-100/50 p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                  />
                </div>

                <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
