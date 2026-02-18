"use client";

import React from 'react';
import { Apple, Calendar, ChevronLeft, Edit3, Play } from 'lucide-react'; // Using Lucide for store-like icons

export default function MobileSection() {
  return (
    <section className="bg-[#FFD54F] py-24 px-6 relative overflow-hidden flex flex-col items-center text-center">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 border-[20px] border-white/20 rounded-full -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 border-[30px] border-orange-400/20 rounded-full translate-x-1/2" />

      <div className="max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 text-[#1A1A1A]">
          Whenever. Wherever.
        </h2>
        <p className="text-lg font-bold text-black/60 max-w-xl mx-auto leading-relaxed">
          Download our native apps to manage projects. Chore on mobile supports 
          real-time collaboration.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="bg-black text-white flex items-center gap-3 px-6 py-3 rounded-xl hover:scale-105 transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" className="w-6 h-6 invert" alt="Apple" />
            <div className="text-left leading-none">
              <div className="text-[10px] uppercase font-bold opacity-60">Download on the</div>
              <div className="text-lg font-black tracking-tight">App Store</div>
            </div>
          </button>
          
          <button className="bg-black text-white flex items-center gap-3 px-6 py-3 rounded-xl hover:scale-105 transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" className="w-6 h-6" alt="Play Store" />
            <div className="text-left leading-none">
              <div className="text-[10px] uppercase font-bold opacity-60">Get it on</div>
              <div className="text-lg font-black tracking-tight">Google Play</div>
            </div>
          </button>
        </div>
      </div>

      {/* Phone Mockup Container */}
      <div className="relative max-w-[320px] w-full mx-auto mt-8">
        {/* Physical Phone Frame */}
        <div className="bg-[#0D0D0D] border-[8px] border-[#1F1F1F] rounded-[3rem] shadow-2xl overflow-hidden aspect-[9/19] relative">
          {/* Top Notch/Speaker */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1F1F1F] rounded-b-2xl z-20" />
          
          {/* Screen Content */}
          <div className="bg-[#0F1115] h-full p-6 flex flex-col text-left">
            <div className="flex justify-between items-center mt-4 mb-8">
              <ChevronLeft className="text-gray-500" />
              <span className="text-white font-bold text-sm">Today Task</span>
              <Edit3 size={18} className="text-gray-500" />
            </div>

            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-white text-2xl font-black">October, 20 ✍️</h3>
                <p className="text-red-400 text-xs font-bold">15 tasks today</p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Calendar size={16} className="text-gray-400" />
              </div>
            </div>

            {/* Date Picker Mockup */}
            <div className="flex gap-2 mb-10">
              <DateCard day="19" label="Sat" />
              <DateCard day="20" label="Sun" active />
              <DateCard day="21" label="Mon" />
              <DateCard day="22" label="Tue" />
            </div>

            {/* Task Timeline Mockup */}
            <div className="space-y-4">
              <TimelineTask time="10 am" title="Wireframe elements 🎨" color="bg-blue-400" />
              <TimelineTask time="11 am" title="Mobile app Design 😍" color="bg-[#78D98C]" />
              <TimelineTask time="01 pm" title="Design Team call 🤝" color="bg-[#FF8A65]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{/* Helper Components for the Phone Screen */}
function DateCard({ day, label, active = false }: any) {
  return (
    <div className={`flex-1 py-4 rounded-2xl flex flex-col items-center gap-1 border ${active ? 'bg-blue-600 border-transparent shadow-lg shadow-blue-600/20' : 'border-white/5 bg-white/5'}`}>
      <span className="text-gray-500 text-[10px] font-bold">{day}</span>
      <span className={`text-sm font-black ${active ? 'text-white' : 'text-gray-400'}`}>{label}</span>
    </div>
  );
}

function TimelineTask({ time, title, color }: any) {
  return (
    <div className="flex gap-4 items-center">
      <span className="text-[10px] font-bold text-gray-500 w-10">{time}</span>
      <div className={`${color} flex-1 p-3 rounded-xl text-black font-black text-[11px] shadow-lg`}>
        {title}
      </div>
    </div>
  );
}