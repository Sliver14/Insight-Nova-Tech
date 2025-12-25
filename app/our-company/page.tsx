"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const teamData = [
  { id: 1, name: "Matt Knell", title: "VP, Social Media", image: "/team1.jpg" },
  { id: 2, name: "David J. Carr", title: "VP, Strategy", image: "/team2.jpg" },
  { id: 3, name: "Kari Seerup", title: "Account Director", image: "/team3.jpg" },
  { id: 4, name: "Ebony Grimsley", title: "Creative Director", image: "/team4.jpg" },
  // ... more data
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      {/* HERO SECTION - White Background like the image */}
      <section className="flex flex-col bg-white text-black pt-32 pb-20 gap-12 px-6">
        <h1 className="text-6xl px-12 items-start">Obsessed with Impact <br /> and Results</h1>
        <div className="mx-12 grid md:grid-cols-2 gap-12 items-start">
          <video
            src="/5c76ce4998ac6bcff7b7f60d_67ddd1d601f40f589cc3507b_about_hero_video_02-transcode.mp4"
            autoPlay
            muted
            loop
            playsInline
            width={600}
            height={400}
            className="rounded-md"
          />
          <div className="flex flex-col justify-between space-y-6">
            <p className="text-xl text-gray-600 max-w-md">
              We are a collective of creators, strategists, and technologists 
              building digital products that matter.
            </p>
            <div className="flex items-center justify-center rounded-[5px] gap-4 bg-black w-[290px] h-[180px]">
               <span className="font-black text-5xl uppercase text-white tracking-tighter italic">Insight</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US - Black Background */}
      <section className="bg-black py-20">
        <div className="w-full px-6">
          <h1 className="relative text-white/30 text-5xl text-[22vw] text-center">About Us</h1>
          
          <div className="grid md:grid-cols-2 gap-16 -mt-10 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold tracking-tight">We care deeply <br /> about outcome</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our approach is rooted in partnership, focusing on high-level strategy 
                to ensure your digital products succeed in a crowded market.
              </p>
              <div className="flex gap-12 pt-4">
                <div className="flex flex-col gap-5">
                  <div className="text-8xl">07</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-2">Team Members</div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="text-8xl">15</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-2">Projects Completed</div>
                </div>
              </div>
            </div>
            
            {/* The signature "Utility" curved image */}
            <div className="relative aspect-4/5 rounded-bl-[120px] overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1522071823992-b48e0dfb0ed2?auto=format&fit=crop&w=800" 
                alt="Collaboration" 
                fill 
                className="object-cover grayscale" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE - White Background */}
      <section className="bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-none text-gray-100">People</h2>
            <p className="text-2xl font-bold -mt-8 ml-2">Digital creators & strategists</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {teamData.map((member) => (
              <div key={member.id} className="group">
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="mt-4 border-l-2 border-transparent group-hover:border-black pl-3 transition-colors">
                  <h4 className="font-bold text-lg leading-none uppercase tracking-tight">{member.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-black py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-12">Our Locations</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all">
                <Image src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800" alt="NYC" fill className="object-cover" />
              </div>
              <p className="text-xl font-bold uppercase tracking-tighter">New York City</p>
              <p className="text-gray-500 text-sm">Headquarters</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all">
                <Image src="https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800" alt="LA" fill className="object-cover" />
              </div>
              <p className="text-xl font-bold uppercase tracking-tighter">Los Angeles</p>
              <p className="text-gray-500 text-sm">West Coast Office</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}