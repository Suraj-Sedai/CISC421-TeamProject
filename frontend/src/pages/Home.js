import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Track Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your personal fitness companion to log workouts, track progress, and achieve your health goals.
          </p>
          <div className="flex justify-center space-x-4">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-lg"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-lg"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/login"
                  className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg text-lg font-medium hover:bg-blue-50 transition"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold mb-2">Track Workouts</h3>
            <p className="text-gray-600">
              Log your daily exercises, duration, and calories burned to stay on top of your fitness routine.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Set Goals</h3>
            <p className="text-gray-600">
              Create personalized fitness goals and track your progress with visual indicators and milestones.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Analyze Progress</h3>
            <p className="text-gray-600">
              View detailed analytics with charts and graphs to understand your fitness trends over time.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-8">More Amazing Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-2xl mr-3">🥗</span>
              <div>
                <h4 className="font-bold">Nutrition Tracking</h4>
                <p className="text-gray-600 text-sm">Monitor your meals and daily calorie intake</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">⚖️</span>
              <div>
                <h4 className="font-bold">BMI & BMR Calculator</h4>
                <p className="text-gray-600 text-sm">Auto-calculate health statistics</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📅</span>
              <div>
                <h4 className="font-bold">Activity Calendar</h4>
                <p className="text-gray-600 text-sm">Visual calendar showing your workout days</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🤖</span>
              <div>
                <h4 className="font-bold">AI Recommendations</h4>
                <p className="text-gray-600 text-sm">Get personalized workout suggestions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;