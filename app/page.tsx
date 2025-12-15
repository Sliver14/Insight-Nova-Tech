"use client";

import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../components/projectCard";
import { getFeaturedProjects } from "../lib/projects";
import Header from "@/components/header";
import WhatWeDo from "../components/whatWeDo"
import Footer from "@/components/footer";
import ContactCTASection from "../components/contactCTASection"
import {
  Cpu,
  PencilRuler,
  Sparkles,
  TrendingUp,
  RefreshCcw,
  ArrowUpRight,
} from "lucide-react";


export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="w-screen flex flex-col bg-white">
      <Header />

      {/* 1. Hero Section */}
      <section id="hero" className="relative w-full pt-24 md:pt-32 lg:pt-48 pb-16 md:pb-24 bg-black/98 overflow-hidden">
        {/* PNG Texture Overlay */}
        <Image
          src="/hero-background-gradient.png"
          alt="Background texture"
          fill
          priority
          className="object-contain mix-blend-screen pointer-events-none select-none opacity-100"
        />

        {/* Hero Headline & Description */}
        <div className="relative z-10 max-w-5xl px-6 sm:px-8 lg:px-12 text-start lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Custom Web & Mobile Software Solutions
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto lg:mx-0">
            A modern tech agency specializing in high-performance applications, enterprise platforms, and transformative digital experiences.
          </p>
        </div>

        {/* Video + Services Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-20 lg:mt-32">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: Video */}
            <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] flex-shrink-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-br-[100px] sm:rounded-br-[150px] opacity-50"
              >
                <source src="/5c76ce4998ac6bcff7b7f60d_67e1e08d1c69ff97c254a4c9_Preview-U-Crop-Updated-optmized-transcode.mp4" type="video/mp4" />
                <div className="absolute inset-0 bg-black/60" />
              </video>

              {/* Work with us button overlay */}
              <div className="absolute top-8 left-8 z-20">
                <button className="bg-neutral-600 text-white px-6 py-4 rounded-full font-medium hover:bg-neutral-500 transition">
                  Work with us
                </button>
              </div>
            </div>

            {/* Right: Text & Services */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-10 lg:mb-14 text-start lg:text-left">
                We build innovative digital products with forward-thinking partners.
              </h2>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 mb-12">
                <div className="flex items-center gap-4 text-neutral-400">
                  <Cpu className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Tech Development</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <PencilRuler className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Product Design</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <Sparkles className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">AI Solutions</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <TrendingUp className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Growth Marketing</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <RefreshCcw className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Digital Transformation</span>
                </div>
              </div>

              {/* View all services CTA */}
              <button className="group mx-auto w-full lg:mx-0 flex items-start text-start gap-3 text-neutral-400 hover:text-white transition-colors">
                View all services
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Trusted By / Partner Logos Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-20 lg:mt-32">
          <div className="overflow-hidden">
            <div className="flex items-center gap-12 sm:gap-16 md:gap-24 animate-marquee md:animate-none whitespace-nowrap">
              {/* First set */}
              <Image src="/brands logo/67608fbae911f6aaf6dd24ca_Logo Samsung.svg" alt="Samsung" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/67608fe5dab4348d94ee6cc9_Coca-Cola Brand.svg" alt="Coca-Cola" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/67608ff410d975107897344c_Brand Verizon.svg" alt="Verizon" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/676090109234d980622102dd_Brand DirecTV.svg" alt="DirecTV" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/6760902d036c8f0efdfa14b7_Warner Music Group.svg" alt="Warner Music Group" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />

              {/* Duplicate set for seamless loop */}
              <Image src="/brands logo/67608fbae911f6aaf6dd24ca_Logo Samsung.svg" alt="Samsung" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/67608fe5dab4348d94ee6cc9_Coca-Cola Brand.svg" alt="Coca-Cola" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/67608ff410d975107897344c_Brand Verizon.svg" alt="Verizon" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/676090109234d980622102dd_Brand DirecTV.svg" alt="DirecTV" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/6760902d036c8f0efdfa14b7_Warner Music Group.svg" alt="Warner Music Group" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top Featured Projects */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-30">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                isFeatured={true}
              />
            ))}
          </div>

        </div>
      </section>

      {/* NEW: What We Do / Methodologies Section */}
      <WhatWeDo />
      
      {/* AboutUsSection */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle curved background overlay */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/hero-background-gradient2.png"
          alt="Subtle curved lines background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-20">
          {/* Left: Image with rounded right curve */}
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-full overflow-hidden rounded-l-full md:rounded-l-none">
              <Image
                src="https://media.istockphoto.com/id/1372067104/photo/studio-shot-of-a-young-businessman-cheering-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=CpLEYyzUVIggz_EARHPd2nrL9MJeBAR8v4a85C7KLXM="
                alt="Excited professional celebrating success"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-12">
            <p className="text-lg text-gray-500">About Us</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              We look for interesting challenges that move people forward.
            </h2>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/careers"
                className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition duration-300"
              >
                Careers
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-gray-700 font-medium hover:text-gray-900 transition duration-300"
              >
                About us
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ContactCTASection */}
    <ContactCTASection />


    {/* Footer */}
    <Footer/>
    </main>
  );
}
