import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Full-Stack Web Development with AI',
    description: 'Master modern web development using React, Node.js, and AI-powered coding tools.',
    instructor: 'Dr. Sarah Chen',
    price: 4999,
    duration: '12 Weeks',
    thumbnail: 'https://picsum.photos/seed/webdev/800/600',
    category: 'Web Development',
    outcomes: [
      'Build responsive React applications',
      'Develop robust Node.js backends',
      'Integrate AI models into your apps',
      'Deploy to cloud platforms'
    ],
    curriculum: [
      { title: 'Frontend Mastery', lessons: ['HTML5 & CSS3', 'Modern JavaScript', 'React Hooks & Context'] },
      { title: 'Backend Architecture', lessons: ['Node.js & Express', 'Database Design', 'RESTful APIs'] },
      { title: 'AI Integration', lessons: ['OpenAI API Basics', 'Prompt Engineering', 'Building AI Features'] }
    ]
  },
  {
    id: '2',
    title: 'Data Science & Machine Learning',
    description: 'Learn to analyze data and build predictive models using Python and Scikit-Learn.',
    instructor: 'Prof. Michael Ross',
    price: 5999,
    duration: '16 Weeks',
    thumbnail: 'https://picsum.photos/seed/datascience/800/600',
    category: 'Data Science',
    outcomes: [
      'Master Python for data analysis',
      'Understand statistical modeling',
      'Build and deploy ML models',
      'Visualize complex datasets'
    ],
    curriculum: [
      { title: 'Python for Data', lessons: ['NumPy & Pandas', 'Data Cleaning', 'Exploratory Data Analysis'] },
      { title: 'Machine Learning Fundamentals', lessons: ['Linear Regression', 'Classification', 'Clustering'] },
      { title: 'Advanced Topics', lessons: ['Neural Networks', 'Natural Language Processing', 'Model Deployment'] }
    ]
  },
  {
    id: '3',
    title: 'UI/UX Design for Modern Apps',
    description: 'Design beautiful and intuitive user interfaces using Figma and design principles.',
    instructor: 'Elena Rodriguez',
    price: 3999,
    duration: '8 Weeks',
    thumbnail: 'https://picsum.photos/seed/uiux/800/600',
    category: 'Design',
    outcomes: [
      'Master Figma for prototyping',
      'Understand user psychology',
      'Create accessible designs',
      'Build a professional portfolio'
    ],
    curriculum: [
      { title: 'Design Foundations', lessons: ['Color Theory', 'Typography', 'Grid Systems'] },
      { title: 'User Experience', lessons: ['User Research', 'Wireframing', 'Usability Testing'] },
      { title: 'Visual Design', lessons: ['High-Fidelity Mockups', 'Prototyping', 'Design Systems'] }
    ]
  }
];
