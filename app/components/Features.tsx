"use client"

import React from 'react';
import { 
  LayoutGrid, CheckSquare, Calendar, Inbox, Users, BarChart3,
  Search, Bell, Plus, ArrowRight, MoreHorizontal, ChevronLeft, 
  ChevronRight, RotateCw, Share, Sidebar, Link2, Flame, Rocket,
  Workflow, Zap, Shield, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

function FeatureStep({ number, title, desc, active = false, onClick }: { number: string; title: string; desc: string; active?: boolean; onClick?: () => void }) {
  return (
    <div className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
        active
         ? "border-2 border-[#1A1A1A] bg-white shadow-sm"
         : "border border-gray-200 hover:bg-gray-400"
        }`}
      onClick={onClick}
    >
        {/* Number Box */}
      {/* <div 
        className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-bold
        ${
            active
                ? "bg-[#F4C76B] text-black"
                : "bg-gray-100 text-gray-600"
        }`}
    >
        {number}
      </div> */}

       <div className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${active ? 'bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border-transparent opacity-50'}`}>
      <div className="flex items-center gap-4">
        <span className="w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center font-black text-sm">{number}</span>
        <div>
          <h4 className="font-black text-lg">{title}</h4>
          <p className="text-xs font-bold text-gray-400">{desc}</p>
        </div>
      </div>
    </div>

      {/* Text Content */}
      <div>
        <h3 className="font-normal text-[#1A1A1A]">{title}</h3>
        <p className="text-sm text-gray-500 tracking-tighter">{desc}</p>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
      active ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"
    }`}>
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function ProjectCard({ title, color, progress, highlighted = false }: { title: string; color: string; progress: number; highlighted?: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${highlighted ? "border-white/20 bg-white/5" : "border-white/10"}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white text-sm font-medium">{title}</h4>
        <MoreHorizontal size={16} className="text-gray-500" />
      </div>
      <div className="w-full bg-gray-700 rounded-full h-1.5">
        <div className={`${color} h-1.5 rounded-full`} style={{ width: `${progress}%` }} />
      </div>
      <p className="text-gray-400 text-xs mt-2">{progress}%</p>
    </div>
  );
}

export default function Features() {
    const [active, setActive] = React.useState(0);

    return(
        <div className="min-h-screen cursor-pointer bg-orange-50 text-[#1A1A1A] font-sans selection:bg-orange-200 overflow-x-hidden">

            {/* Project that work section */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h2 className="text-5xl font-medium tracking-tighter mb-4">Projects That Work.</h2>
                <p className="text-gray-500 max-w-2xl mx-auto font-light tracking-tighter mb-16">
                    Whether you're managing your next big project or digitalizing task management for
                    your team's daily business, you need to know who's doing what, when.
                </p>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* List of features */}
                    <div className="space-y-4 text-left max-w-sm">
                        <FeatureStep number="1" title="Dashboard" desc="Everything in one place" />
                        <FeatureStep number="2" title="Projects" desc="Clear overview, full efficiency" />
                        <FeatureStep number="3" title="Tasks" desc="Where work gets done" active={active === 2} onClick={() => setActive(2)} />
                        <FeatureStep number="4" title="Agenda" desc="Your own personal board" />
                    </div>

                    {/* Large Visual Card */}
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
                        {/* --- DASHBOARD WITH BROWSER HEADER --- */}
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
                                  <div className="w-4 h-4 bg-gray-600 rounded-full" />
                                  <RotateCw size={14} />
                                </div>
                                <div className="text-xs tracking-tight">sure.app/dashboard/recent</div>
                                <div className="w-4" />
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
                      </motion.div>
                    </section>

                    {/* Task Management Section */}
                    <section className="max-w-7xl mx-auto px-6 mb-12">
                        <div className="bg-[#78D98C] rounded-[40px] border-2 border-black p-12 md:p-20 relative overflow-hidden">
                            <div className="max-w-md relative z-10">
                                <h3 className="text-4xl font-black mb-6">Task Management</h3>
                                <p className="text-[#1A1A1A]/80 font-medium mb-8">
                                    Productive. Efficient. On time. Task management software helps you guide tasks effortlessly from to-do, to doing, to done.
                                </p>
                                <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                                    Learn More <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </section>

                     <section className="max-w-7xl mx-auto px-6 mb-12">
                        <div className="bg-white rounded-[40px] border-2 border-black p-12 md:p-20 relative overflow-hidden">
                            <div className="max-w-md relative z-10">
                                <h3 className="text-4xl font-black mb-6">New Members</h3>
                                <p className="text-[#1A1A1A]/80 font-medium mb-8">
                                    Invite your team members to collaborate on projects, assign tasks, and track progress together.
                                </p>
                                <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                                    Learn More <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Remote Teams & Teamwork */}
                    <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-24">

                        {/* Remote Teams (Yellow) */}
                        <div className="bg-[#FFD54F] rounded-[40px] border-2 border-black p-12 relative overflow-hidden min-h-[500px]">
                            <h3 className="text-3xl font-black mb-4">Remote Teams</h3>
                            <p className="text-sm font-medium mb-8 text-black/70">
                                Can't find a taskmanagement software that enables your team to work just as well remotely? With Sure, you'll ensure workflows are seamless.
                            </p>
                            <button className="flex items-center gap-2 font-bold mb-12">Learn More <ArrowRight size={18} /></button>
                        </div>
                    </section>

                    {/* Mock Task List UI */}
          <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[6px_6px_00px_0px_rgba(0,0,0,1)] max-w-[280px] ml-auto">
             <div className="text-xs font-bold mb-4 flex justify-between">Today Task <span className="text-red-400">●</span></div>
             <div className="space-y-3">
               <TaskItem label="Meeting with paperpillar" checked />
               <TaskItem label="Meeting with BigBang" checked />
               <TaskItem label="Internal Meeting" />
               <TaskItem label="Workshop Design System" />
             </div>
          </div>
        </div>

        {/* Teamwork (White) */}
        <div className="bg-white rounded-[40px] border-2 border-black p-12 relative min-h-[500px]">
          <div className="mb-12 space-y-3">
             <div className="flex gap-4">
                <ProjectPill label="App Development" color="bg-green-100" icon={<Zap size={14}/>} />
                <ProjectPill label="Web Design" color="bg-blue-100" icon={<Globe size={14}/>} />
             </div>
             <div className="flex gap-4">
                <ProjectPill label="Marketing & Sales" color="bg-orange-100" icon={<Rocket size={14}/>} />
                <ProjectPill label="Creative Project" color="bg-purple-100" icon={<Workflow size={14}/>} />
             </div>
          </div>
          <h3 className="text-3xl font-black mb-4">Teamwork</h3>
          <p className="text-sm font-medium mb-8 text-gray-500">
            Inefficient team collaboration and email overload can destroy your team's productivity and cost you money...
            but they don't have to. Digital task management software helps align your team and boost transparency.
            Get more done with Sure!
          </p>
          <button className="flex items-center gap-2 font-bold">Learn More <ArrowRight size={18} /></button>
          
          {/* Avatars Cluster */}
          <div className="mt-8 flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-200 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="user" />
                </div>
              ))}
            </div>
            <span className="text-sm font-black">+25</span>
            <button className="ml-auto bg-[#FF8A65] border-2 border-black px-4 py-1.5 rounded-full text-xs font-black uppercase">Add</button>
          </div>
        </div>
      </section>


    </div>
  );
}

{/* --- HELPER COMPONENTS --- */}

function TaskItem({ label, checked = false }: any) {
  return (
        <div className="flex items-center gap-3">
            <div className={`w-4 h-4 border-2 border-black rounded flex items-center justify-center ${checked ? 'bg-blue-500' : 'bg-transparent'}`}>
                {checked && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
            </div>
                <span className={`text-[10px] font-bold ${checked ? 'line-through text-gray-300' : 'text-gray-700'}`}>{label}</span>
        </div>
        );
    }
            function ProjectPill({ label, color, icon }: any) {
                return (
                    <div className={`flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full font-black text-xs ${color}`}>
                        {icon} {label}
                    </div>
        
    );
}