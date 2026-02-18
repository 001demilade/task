"use client";

import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image with Decorative Blue Box */}
        <div className="relative group">
          {/* The blue decorative square behind the photo */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#7E9CFF] rounded-xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform" />
          
          <div className="rounded-[40px] overflow-hidden border-2 border-black shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" 
              alt="Testimonial User" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Right Side: Quote and Attribution */}
        <div className="flex flex-col justify-center">
          <blockquote className="text-3xl md:text-4xl font-medium leading-snug text-[#1A1A1A] mb-10">
            “I cannot stress how important it is to have all of our 
            information in one central place. We use Asana to capture 
            all of our documents, notes, and next steps so we keep 
            consistency.”
          </blockquote>
          
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-gray-300" />
            <p className="font-bold text-lg text-gray-600">
              Ashlee George // <span className="text-gray-400 font-medium">Associate Director at Impact Justice</span>
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-100">
            {/* Pagination Dots */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-black' : 'bg-gray-200'}`} />
              ))}
            </div>
            
            {/* Arrows */}
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-90">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}