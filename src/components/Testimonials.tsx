import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Full-Stack Developer',
    text: 'Capabl AI transformed my learning journey. The AI tutor was like having a personal mentor available 24/7. I landed my dream job in 3 months!',
    avatar: 'https://i.pravatar.cc/150?u=anjali'
  },
  {
    name: 'Rahul Verma',
    role: 'Data Science Student',
    text: 'The personalized roadmap is a game-changer. It identified my weak areas and provided targeted practice. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    name: 'Priya Das',
    role: 'UI/UX Designer',
    text: 'The courses are top-notch, but the practice lab is where the real learning happens. Instant feedback on my designs was invaluable.',
    avatar: 'https://i.pravatar.cc/150?u=priya'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Loved by Thousands of Learners
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Hear from our community about how Capabl AI is helping them achieve their career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative group hover:shadow-xl transition-all duration-300">
              <Quote className="absolute top-6 right-8 w-10 h-10 text-indigo-100 group-hover:text-indigo-200 transition-colors" />
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-indigo-600 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
