'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Play, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Krish Bruynson',
      position: 'Director, Storloft',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 5
    },
    {
      name: 'Krish Bruynson',
      position: 'Director, Storloft',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 5
    },
    {
      name: 'Krish Bruynson',
      position: 'Director, Storloft',
      image: 'https://images.pexels.com/photos/3782217/pexels-photo-3782217.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 5
    },
    {
      name: 'Krish Bruynson',
      position: 'Director, Storloft',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 4
    }
  ];

  return (
    <section
      className="py-20"
      style={{
        background: 'linear-gradient(90deg, #fff6f7 0%, #f6fdf9 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Have To Say About Us
          </h2>
          <p className="text-base text-gray-600">
            Take A Look At Our Simple And Straightforward Process To Hire Software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-0">
                <div className="relative group overflow-hidden rounded-lg">
                  {/* Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Green play circle (top left) */}
                  <div className="absolute top-3 left-3 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-emerald-500 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
