import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-indigo-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border border-indigo-50">
            {course.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs text-gray-400 ml-1">(4.9)</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
          {course.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            1.2k+ Students
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div>
            <span className="text-xs text-gray-400 block">Course Fee</span>
            <span className="text-xl font-bold text-indigo-600">₹{course.price.toLocaleString()}</span>
          </div>
          <Link
            to={`/courses/${course.id}`}
            className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
