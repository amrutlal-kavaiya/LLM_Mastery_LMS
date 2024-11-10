"use client";

import React, { useState, useEffect } from 'react';
import {
  FiUser,
  FiHelpCircle,
  FiShoppingCart,
  FiBell,
  FiBook,
  FiBarChart,
  FiMessageCircle,
  FiHeadphones,
  FiMonitor,
  FiUsers,
  FiFolder,
  FiSun,
  FiMoon,
} from 'react-icons/fi';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Gen AI Guru</h1>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#profile" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
            <FiUser className="mr-2" />
            Profile
          </a>
          <a href="#help" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
            <FiHelpCircle className="mr-2" />
            Help
          </a>
          <a href="#cart" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
            <FiShoppingCart className="mr-2" />
            Cart
          </a>
          <a href="#notifications" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
            <FiBell className="mr-2" />
            Notifications
          </a>
          <button onClick={toggleDarkMode} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
            {darkMode ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#all-courses" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <FiBook className="inline-block mr-3" />
                  All Courses
                </a>
              </li>
              <li>
                <a href="#my-learning" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <FiFolder className="inline-block mr-3" />
                  My Learning
                </a>
              </li>
              <li>
                <a href="#analytics" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <FiBarChart className="inline-block mr-3" />
                  Analytics
                </a>
              </li>
              <li>
                <a href="#ask-questions" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <FiMessageCircle className="inline-block mr-3" />
                  Ask A Question
                </a>
              </li>
              <li>
                <a href="#live-supports" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <FiHeadphones className="inline-block mr-3" />
                  Live Support
                </a>
              </li>
              <li>
                <a href="#online-labs" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <FiMonitor className="inline-block mr-3" />
                  Online Labs
                </a>
              </li>
              <li>
                <a href="#mentorship" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <FiUsers className="inline-block mr-3" />
                  1-1 Mentorship
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <FiFolder className="inline-block mr-3" />
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="flex-1 p-6">
          <div className="bg-white dark:bg-gray-800 shadow-md p-6 mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Welcome to Gen AI Guru</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">Your journey to mastering AI starts here.</p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Featured Courses</h3>
            <ul className="space-y-6">
              {[
                {
                  title: 'Machine Learning Fundamentals',
                  description: 'Master the basics of ML algorithms and implementations',
                  price: '$99',
                  duration: '8 weeks',
                  level: 'Beginner',
                },
                {
                  title: 'Deep Learning with PyTorch',
                  description: 'Build neural networks from scratch',
                  price: '$149',
                  duration: '10 weeks',
                  level: 'Intermediate',
                },
                {
                  title: 'Natural Language Processing',
                  description: 'Advanced NLP techniques and transformers',
                  price: '$199',
                  duration: '12 weeks',
                  level: 'Advanced',
                },
              ].map((course, index) => (
                <li key={index} className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{course.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded">{course.duration}</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded">{course.level}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800 dark:text-gray-200">{course.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enroll Now</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Learning Paths</h3>
            <ul className="space-y-6">
              {[
                {
                  title: 'AI Engineer Path',
                  description: 'Complete path to become an AI Engineer',
                  duration: '24 Weeks',
                  projects: '12 Projects',
                  certificates: '4 Certificates',
                },
                {
                  title: 'Data Scientist Path',
                  description: 'Comprehensive data science curriculum',
                  duration: '20 Weeks',
                  projects: '10 Projects',
                  certificates: '3 Certificates',
                },
              ].map((path, index) => (
                <li key={index} className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{path.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded">{path.duration}</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded">{path.projects}</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded">{path.certificates}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Path Details</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
