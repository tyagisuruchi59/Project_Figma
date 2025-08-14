import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';

export default function TrustedCompanies() {
  return (
    <section
      className="py-20"
      style={{
        background: 'linear-gradient(90deg, #fefcfb 0%, #fefcfb 75%, #fdeff2 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                alt="Companies trust us"
                className="rounded-2xl shadow-2xl w-full max-w-md object-cover h-80"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-green-600 fill-current" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Companies Trust ValueCoders For Hiring Software Developers
              </h2>
              <p className="text-gray-600 mb-8">
                Global Brands Turn to be Experienced Software Programmers at Our Competence Industry. From
                Startups to Enterprise Prime All the Companies Growing Fast Use Others at 100% Jobs,
                Completed and Delivered on time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center text-emerald-600">
                  <CheckCircle size={16} className="mr-2" />
                  <span className="text-sm font-medium">Client-Centric Approach</span>
                </div>
                <div className="flex items-center text-emerald-600">
                  <CheckCircle size={16} className="mr-2" />
                  <span className="text-sm font-medium">Global Quality Standards</span>
                </div>
                <div className="flex items-center text-emerald-600">
                  <CheckCircle size={16} className="mr-2" />
                  <span className="text-sm font-medium">Cutting-Edge Infrastructure</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-emerald-600">
                  <CheckCircle size={16} className="mr-2" />
                  <span className="text-sm font-medium">Best-in-Class Project Management</span>
                </div>
                <div className="flex items-center text-emerald-600">
                  <CheckCircle size={16} className="mr-2" />
                  <span className="text-sm font-medium">Time Zone Compatibility</span>
                </div>
                <div className="flex items-center text-emerald-600">
                  <CheckCircle size={16} className="mr-2" />
                  <span className="text-sm font-medium">Agile Adaptability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
