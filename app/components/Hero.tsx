"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Bell, LayoutGrid, CheckSquare, Calendar, Inbox, ArrowRight, Plus, RotateCw, Sidebar, ChevronLeft, ChevronRight, Share, Rocket, Link2, Flame } from "lucide-react";

// Tag component definition if missing
function Tag({ icon, text }: any) {
  return (
    <span className="flex items-center gap-1 bg-white/5 text-white px-2 py-1 rounded-full text-xs font-semibold">
      {icon}
      {text}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const yFloat = useTransform(scrollY, [0, 500], [0, 100]);

  // SidebarItem function moved above usage
  function SidebarItem({ icon, label, active = false }: any) {
    return (
      <div className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
        active ? "text-white bg-white/10" : "text-slate-400 hover:text-white"
      }`}>
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCF6] cursor-pointer text-[#1A1A1A] font-sans selection:bg-orange-200">
      
      {/* --- 1. NAVIGATION BAR --- */}
      <nav className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
            <div className="w-6 h-6 bg-[#FF8A65] rounded-sm rotate-12 border-2 border-black"></div>
            Sure
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-gray-600">
            <a href="#" className="hover:text-black">Product</a>
            <a href="#" className="hover:text-black">Templates</a>
            <a href="#" className="hover:text-black">Resources</a>
            <a href="#" className="hover:text-black">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-sm font-bold">Sign in</button>
          <button className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-black transition-colors">
            Start free <ArrowRight size={16} />
          </button>
        </div>
      </nav>

        {/* Parallax Calendar */}
        <motion.div
          style={{ y: yFloat }}
          className="absolute right-[10%] top-44 hidden lg:block rotate-6"
        >
          <div className="bg-[#FFD54F] border-2 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-40">
            <div className="text-xs font-black mb-2">2022</div>
            <div className="grid grid-cols-3 gap-2 text-[10px] font-bold">
              <span>Jan</span><span>Feb</span><span>Mar</span>
              <span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span>
              <span className="bg-black text-white rounded-full text-center">Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
        </motion.div>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6"
        >
          <h1 className="text-6xl md:text-[90px] font-black leading-[0.9] tracking-tight mb-6">
            Regain{" "}
            <span className="relative inline-block">
              <span className="relative z-10">control</span>
              <span className="absolute bottom-3 left-0 w-full h-4 bg-[#FFD54F] -z-0 rotate-1"></span>
            </span>{" "}
            over your days
          </h1>

          <p className="text-gray-500 text-xl max-w-xl mx-auto mb-10">
            Stop rushing — centralize, prioritize and progress on projects across apps.
          </p>

          <motion.button
            whileHover={{ y: 4 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#78D98C] border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] px-10 py-4 rounded-full font-black text-lg"
          >
            Get Started →
          </motion.button>
        </motion.div>
      </section>

      {/* ================= 3D DASHBOARD ================= */}

      <section className="relative max-w-5xl mx-auto px-6 mb-32">
        <motion.div
          whileHover={{
            rotateX: 6,
            rotateY: -6,
            scale: 1.02,
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#121212] rounded-4xl p-6 shadow-2xl border-[6px] border-[#1A1A1A] perspective-1000"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Mock Header */}
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex gap-4">
              <Search size={16} className="text-slate-400" />
              <Bell size={16} className="text-slate-400" />
            </div>
          </div>

          {/* --- DASHBOARD WITH BROWSER HEADER --- */}
          <section className="max-w-6xl mx-auto px-6 mb-24">
            <div className="bg-[#121212] rounded-2xl shadow-2xl border-[1px] border-white/10 overflow-hidden">
              {/* macOS Style Browser Header */}
              <div className="bg-[#1E1E1E] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-6">
                  {/* Window Controls */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  {/* Navigation Arrows */}
                  <div className="flex gap-4 text-gray-500">
                    <Sidebar size={18} />
                    <ChevronLeft size={18} />
                    <ChevronRight size={18} />
                  </div>
                </div>

                {/* URL / Search Bar */}
                <div className="flex-1 max-w-xl mx-4">
                  <div className="bg-[#121212] rounded-md py-1.5 px-3 flex items-center justify-between text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-600 rounded-full" /> {/* Favicon placeholder */}
                      <RotateCw size={14} />
                    </div>
                    <div className="text-xs tracking-tight">sure.app/dashboard/recent</div>
                    <div className="w-4" /> {/* Spacer */}
                  </div>
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-4 text-gray-400">
                  <Share size={18} />
                  <Plus size={18} />
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-sm" />
                </div>
              </div>

              <div className="flex gap-6">
                {/* Sidebar */}
                <aside className="w-40 hidden md:block space-y-4">
                  <SidebarItem icon={<LayoutGrid size={16}/>} label="Home" active />
                  <SidebarItem icon={<CheckSquare size={16}/>} label="My Tasks" />
                  <SidebarItem icon={<Calendar size={16}/>} label="My Plan" />
                  <SidebarItem icon={<Inbox size={16}/>} label="Inbox" />
                </aside>

                {/* Project Grid */}
                <main className="flex-1">
                  <h3 className="text-white font-semibold mb-4">Recent Project</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ProjectCard title="Web Design" color="bg-blue-500" progress={43} />
                    <ProjectCard title="App Development" color="bg-[#78D98C]" progress={65} highlighted />
                    <ProjectCard title="Marketing & Sales" color="bg-[#FF8A65]" progress={45} highlighted />
                    <ProjectCard title="Creative Project" color="bg-[#FFD54F]" progress={85} highlighted />
                    <ProjectCard title="Creative Project" color="bg-purple-500" progress={30} highlighted />
                    <ProjectCard title="Creative Project" color="bg-red-500" progress={19} highlighted />
                  </div>
                </main>
              </div>
            </div>
          </section>
        </motion.div>

          {/* NEW OFFER POPUP CARD (The item you just requested) */}
        <div className="absolute -left-10 top-90 z-20 w-80 bg-[#1A1D21] border border-white/10 rounded-[24px] p-6 shadow-2xl shadow-black/50 scale-90 md:scale-100">
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="text-orange-400" size={24} fill="currentColor" />
            <h3 className="text-white font-bold text-xl">New Offer</h3>
          </div>

          <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
            <Tag icon={<Link2 size={12}/>} text="Shared by" />
            <Tag icon={<Calendar size={12}/>} text="Planned" />
            <Tag icon={<Flame size={12}/>} text="Impact" />
          </div>

          {/* Bar Chart Section */}
          <div className="flex justify-between h-32 mb-6 px-2 border-l border-white/10 relative">
            {/* Grid lines */}
            <div className="absolute left-0 w-full h-[1px] bg-white/5 top-0" />
            <div className="absolute left-0 w-full h-[1px] bg-white/5 top-1/4" />
            <div className="absolute left-0 w-full h-[1px] bg-white/5 top-2/4" />
            <div className="absolute left-0 w-full h-[1px] bg-white/5 top-3/4" />

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 bg-[#78D98C] rounded-t-lg transition-all" style={{ height: '90%' }} />
              <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" className="w-6 h-6" alt="Slack" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 bg-white rounded-t-lg transition-all" style={{ height: '70%' }} />
              <img src="https://cdn.worldvectorlogo.com/logos/asana-1.svg" className="w-6 h-6" alt="Asana" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 bg-[#FFD54F] rounded-t-lg transition-all" style={{ height: '50%' }} />
              <img src="https://cdn.worldvectorlogo.com/logos/notion-2.svg" className="w-6 h-6 invert" alt="Notion" />
            </div>
          </div>
          
          <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase px-2">
            <span>Slack</span><span>Asana</span><span>Notion</span>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM TICKERS ================= */}
      <div className="space-y-2 pb-16">
        <Ticker bg="bg-[#FFD54F]" text="Tasks • Dashboard • Agenda • Projects" />
        <Ticker bg="bg-[#FF8A65]" text="Automations • Recurring Tasks • Timeline" reverse />
        <Ticker bg="bg-[#78D98C]" text="Task Management • Remote Teams • Teamwork" />
      </div>

    </main>
  );
}

function SidebarItem({ icon, label, active = false }: any) {
  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
      active ? "text-white bg-white/10" : "text-slate-400 hover:text-white"
    }`}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function ProjectCard({ title, color, progress, highlighted = false }: any) {
  return (
    <div className={`p-4 rounded-xl border border-white/10 ${highlighted ? "bg-white/5" : "bg-white/[0.02]"}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-3 h-3 rounded-full ${color}`} />
        <h4 className="text-white text-sm font-semibold">{title}</h4>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div className={`${color} h-full rounded-full`} style={{ width: `${progress}%` }} />
      </div>
      <p className="text-xs text-slate-400 mt-2">{progress}% Complete</p>
    </div>
  );
}

function Ticker({ bg, text, reverse = false }: any) {
  return (
    <div className={`${bg} py-4 border-y-2 border-black overflow-hidden whitespace-nowrap`}>
      <motion.div
        animate={{ x: reverse ? [0, -1000] : [0, -1000] }}
        transition={{ repeat: Infinity, duration: reverse ? 40 : 30, ease: "linear" }}
        className="flex gap-12 font-black uppercase text-sm italic"
      >
        {[...Array(20)].map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
}