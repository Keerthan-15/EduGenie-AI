import { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function CourseListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Business', 'Marketing'];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Browse All Courses</h1>
          <p className="text-gray-500 text-lg">Explore our curated collection of industry-leading courses enhanced by AI.</p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for courses, skills, or instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>

          <div className="flex gap-4">
            <div className="relative group">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none pl-6 pr-12 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm font-medium text-gray-700 cursor-pointer min-w-[180px]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-hover:text-indigo-600 transition-colors" />
            </div>

            <button className="flex items-center gap-2 px-6 py-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all shadow-sm font-medium text-gray-700">
              <SlidersHorizontal className="w-5 h-5 text-indigo-600" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-100 p-20 text-center">
            <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-8 text-indigo-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
