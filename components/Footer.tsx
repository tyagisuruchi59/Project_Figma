import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">Logipsum</span>
            </div>
            <p className="text-gray-400 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer transition-colors">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer transition-colors">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer transition-colors">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer transition-colors">
                <span className="text-xs">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Software Team</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Hiring</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Company</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Dedicated Development</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Staff Augmentation</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Development Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <Phone className="w-4 h-4 mt-1 mr-3 text-emerald-400" />
                <div>
                  <p className="text-sm">English (India): 91-9:30-04:30</p>
                  <p className="text-sm">Monday - Friday (India)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mt-1 mr-3 text-emerald-400" />
                <p className="text-sm">+91 9891 344 278</p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-3 text-emerald-400" />
                <p className="text-sm">sales@logipsum.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Logipsum. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}