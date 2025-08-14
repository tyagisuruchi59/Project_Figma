'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Logoipsum</span>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <div className="flex items-center space-x-1">
              <Link href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Software Team
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Link href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Technologies
            </Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Resources
            </Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Company
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <Link href="/login">
              <Button 
                variant="outline" 
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-6 py-2 rounded-lg font-medium"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                Software Team
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                Services
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                Technologies
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                Resources
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                Company
              </Link>
              <Link href="/login" className="block px-3 py-2">
                <Button className="w-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50" variant="outline">
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}