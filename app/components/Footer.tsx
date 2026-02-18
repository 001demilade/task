"use client";

import React from 'react';
import { Facebook, Disc as Discord, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] pt-32 pb-12 px-6 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto">
        
        {/* Final CTA Section */}
        <div className="text-center mb-32">
          <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter mb-8">
            See everything the team’s working <br className="hidden md:block" /> on in one place.
          </h2>
          <p className="text-gray-400 font-medium mb-12">
            Smooth synchronization across 10+ platforms. Keep track of your tasks anytime, anywhere.
          </p>
          <button className="bg-[#78D98C] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-4 rounded-full font-black text-lg hover:translate-y-1 hover:shadow-none transition-all">
            Get Started
          </button>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-white/5 pt-24">
          <FooterColumn title="Home" links={["Product", "Pricing", "Premium", "Business", "Enterprise"]} active="Pricing" />
          <FooterColumn title="About Us" links={["Company", "Leadership", "Customers", "Diversity", "Careers"]} />
          <FooterColumn title="Workflow Solutions" links={["Project Management", "Goal Management", "Agile Management", "Task Management", "Project Planning"]} />
          <FooterColumn title="Resources" links={["Forum", "Support", "App Directory", "Partners", "Events"]} />
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 font-black text-white text-3xl tracking-tighter">
              <div className="w-8 h-8 bg-[#FF8A65] rounded-sm rotate-12 border-2 border-black"></div>
              Sure
            </div>
            <p className="text-gray-500 text-sm font-bold mt-2">© 2025</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-400 underline underline-offset-4 decoration-white/10">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <select className="bg-transparent border border-white/10 rounded px-2 py-1 text-xs outline-none">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>

          <div className="flex gap-4">
            <SocialIcon icon={<Facebook size={18} fill="currentColor" />} />
            <SocialIcon icon={<Twitter size={18} fill="currentColor" />} />
            <SocialIcon icon={<Linkedin size={18} fill="currentColor" />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, active }: { title: string, links: string[], active?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-white font-black uppercase text-xs tracking-widest">{title}</h4>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link}>
            <a 
              href="#" 
              className={`text-sm font-bold transition-colors hover:text-white ${link === active ? 'text-[#FFD54F]' : 'text-gray-500'}`}
            >
              {link}
              {link === "Events" && <span className="ml-2">🥳</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="text-[#FFD54F] hover:scale-110 transition-transform">
      {icon}
    </a>
  );
}