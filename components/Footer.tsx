import React from 'react';
import { GithubIcon, TwitterIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-500">
            <p>&copy; {new Date().getFullYear()} IndieFlix Studio. All rights reserved.</p>
            <p className="text-sm mt-1">A demo project showcasing React, Tailwind CSS, and Gemini API.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-500">
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-500">
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;