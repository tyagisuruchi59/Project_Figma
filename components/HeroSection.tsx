'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    projectBrief: ''
  });

  return (
    <section
      className="relative overflow-hidden py-16 bg-no-repeat bg-cover bg-center"
      style={{
        // make sure this file exists in /public
        backgroundImage: "url('/background.png')"
      }}
    >
      {/* subtle tint to improve contrast on top of the image (optional) */}
      <div className="pointer-events-none absolute inset-0 bg-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-emerald-500">HIRE DEDICATED</span>
                <br />
                <span className="text-gray-800">DEVELOPERS</span>
              </h1>

              <p className="text-lg text-gray-700 font-medium">
                Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
              </p>

              <p className="text-gray-700 leading-relaxed">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem
                Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since The 1500s, When
                An Unknown Printer Took A Galley Of Type And Scrambled
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-medium"
              >
                View More
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>

              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-medium"
                >
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right form card */}
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Create Your Team</h3>
                  <p className="text-gray-600 text-sm">Lorem Ipsum Is Simply Dummy Text Of The Printing</p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter You Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                        className="border-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter You Email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="border-gray-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone No</Label>
                      <Input
                        id="phone"
                        placeholder="Enter You Number"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="border-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}
                      >
                        <SelectTrigger className="border-gray-200">
                          <SelectValue placeholder="Enter You Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectBrief">Project Brief</Label>
                    <Textarea
                      id="projectBrief"
                      placeholder="Enter You Project Brief"
                      value={formData.projectBrief}
                      onChange={(e) => setFormData((prev) => ({ ...prev, projectBrief: e.target.value }))}
                      rows={4}
                      className="border-gray-200"
                    />
                  </div>

                  <Button className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded-lg font-medium" size="lg">
                    Hire Software Developer
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
