"use client";

import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="bg-[#121212] py-24 px-6 rounded-t-[60px] mt-20">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter mb-6">
          Easily organize your work. Start free.
        </h2>
        <p className="text-gray-400 text-lg font-medium">
          Access Sure's features. No credit card required.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-0 items-stretch">
        {/* BASIC TIER */}
        <PricingCard 
          tier="Basic"
          price="$0"
          desc="For individuals or teams just getting started with project management."
          color="bg-[#78D98C]"
          features={[
            "Unlimited tasks", "Unlimited messages", "Unlimited activity log",
            "File storage (100MB per file)", "List view projects", "Calendar view", "Project Overview"
          ]}
          buttonStyle="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black"
        />

        {/* PREMIUM TIER */}
        <PricingCard 
          tier="Premium"
          price="$10"
          desc="For teams that need to create project plans with confidence."
          color="bg-[#FF8A65]"
          features={[
            "Timeline", "Workflow Builder", "Unlimited Dashboards",
            "Reporting across unlimited", "Advanced search", "Unlimited free guests", "Forms", "Admin Console"
          ]}
          buttonStyle="bg-[#FF8A65] border border-white/20 text-white"
        />

        {/* SCALE TIER (MOST POPULAR) */}
        <PricingCard 
          tier="Scale"
          price="$25"
          desc="For teams and companies that need to manage across initiatives."
          color="bg-[#FFD54F]"
          isPopular={true}
          features={[
            "Portfolios", "Goals", "Workload", "Custom rules builder",
            "Forms branching", "Approvals", "Proofing", "Lock custom fields"
          ]}
          buttonStyle="bg-[#FFD54F] border border-black/20 text-black"
        />

        {/* ENTERPRISE TIER */}
        <PricingCard 
          tier="Enterprise"
          price="$25"
          desc="For large companies with specific requirements."
          color="bg-[#7E9CFF]"
          features={[
            "Unlimited tasks", "Unlimited messages", "Unlimited activity log",
            "File storage (100MB per file)", "List view projects", "Calendar view", "Project Overview"
          ]}
          buttonStyle="bg-[#7E9CFF] border border-white/20 text-white font-bold"
        />
      </div>
    </section>
  );
}

interface PricingProps {
  tier: string;
  price: string;
  desc: string;
  color: string;
  features: string[];
  buttonStyle: string;
  isPopular?: boolean;
}

function PricingCard({ tier, price, desc, color, features, buttonStyle, isPopular }: PricingProps) {
  return (
    <div className="flex flex-col group">
      {/* Top Half - Color section */}
      <div className={`${color} p-10 rounded-t-3xl border-x border-t border-black/10 flex-1 flex flex-col relative`}>
        {isPopular && (
          <div className="absolute -top-12 left-0 right-0 bg-[#FFD54F] py-3 rounded-t-2xl border-x border-t border-black/10 text-center font-black text-sm uppercase tracking-widest">
            Most Popular
          </div>
        )}
        <h3 className="text-3xl font-black mb-4">{tier}</h3>
        <p className="text-sm font-bold opacity-70 mb-8 leading-relaxed">{desc}</p>
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-5xl font-black italic">{price}</span>
            <div className="text-[10px] font-bold leading-none opacity-60">
              Excl. VAT<br/>Per month
            </div>
          </div>
          <button className={`w-full py-4 rounded-full font-black text-sm uppercase tracking-tighter transition-all hover:scale-[1.02] active:scale-95 ${buttonStyle}`}>
            Get Started
          </button>
        </div>
      </div>

      {/* Bottom Half - Feature List (White/Off-white) */}
      <div className="bg-white/5 p-10 rounded-b-3xl border-x border-b border-white/5">
        <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-6">
          {tier === 'Scale' ? 'Everything in Premium:' : tier === 'Enterprise' ? 'Custom to-dos:' : 'Manage tasks to-dos:'}
        </p>
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-300">
              <Sparkles className="shrink-0 mt-0.5" size={14} fill="currentColor" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}