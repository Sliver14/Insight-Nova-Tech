"use client";

import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../components/projectCard";
import { getFeaturedProjects } from "../lib/projects";
import Header from "@/components/header";
import WhatWeDo from "../components/whatWeDo"
import Footer from "@/components/footer";
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
      <section className="relative flex flex-col w-full pt-36 md:pt-48 text-center gap-20 bg-black/98">
          {/* PNG Texture Overlay */}
          <Image
              src="/hero-background-gradient.png"
              alt="Background texture"
              fill
              priority
              className="object-contain mix-blend-screen pointer-events-none select-none opacity-100"
            />
          

          {/* Hero Content */}
          <div className="flex w-full">
            <div className="relative px-20 z-10 max-w-3xl">  {/* Limits width and centers the block */}
              <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight text-left">
                Web and Mobile Application
              </h1>

              <p className="text-xl text-white/50 mb-10 text-left">
                A modern tech agency specializing in high-performance
                applications, enterprise platforms, and transformative digital
                experiences.
              </p>
            </div>
          </div>
          

          {/* CTA WITH VIDEO */}
          <div className="flex w-full h-auto px-12 gap-20">
            <div className="relative w-full h-[520px] flex flex-1">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-br-[150px] opacity-50"
              >
                <source src="/5c76ce4998ac6bcff7b7f60d_67e1e08d1c69ff97c254a4c9_Preview-U-Crop-Updated-optmized-transcode.mp4" type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <div className="absolute inset-0 bg-black/60" />
              </video>
              <div className="absolute top-0 left-0 bg-black z-20  w-52 h-62">
                <button className="text-white bg-neutral-600 px-3 w-auto py-3 rounded-full hover:text-white/90">
                  Work with us
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start px-20">
              {/* Headline */}
              <h1 className="text-2xl lg:text-3xl xl:text-4xl text-left font-medium text-white leading-tight max-w-2xl mb-14">
                We build innovative digital products with forward-thinking partners.
              </h1>

              {/* Services */}
              <div className="grid grid-cols-2 gap-x-20 gap-y-6 mb-14">
                <div className="flex items-center gap-4 text-neutral-400">
                  <Cpu className="w-5 h-5" />
                  <span>Tech Development</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <PencilRuler className="w-5 h-5" />
                  <span>Product Design</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <Sparkles className="w-5 h-5" />
                  <span>AI Solutions</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <TrendingUp className="w-5 h-5" />
                  <span>Growth Marketing</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <RefreshCcw className="w-5 h-5" />
                  <span>Digital Transformation</span>
                </div>
              </div>

              {/* CTA */}
              <button className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                View all services
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

          </div>

          {/* Trusted By / Partner Logos Section */}
          <section className="py-16 md:pt-24 overflow-hidden">
            <div className=" mx-auto px-12 sm:px-6 lg:px-8">

              {/* Marquee Container */}
              <div className="relative">
                {/* Overflow hidden for clean edges */}
                <div className="overflow-hidden">
                  <div className="
                    flex items-center gap-16 md:gap-24
                    animate-marquee md:animate-none  /* Scroll only on mobile/small screens */
                    whitespace-nowrap
                  ">
                    {/* First set of logos */}
                    <Image src="/brands logo/67608fbae911f6aaf6dd24ca_Logo Samsung.svg" alt="Client 1" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/67608fe5dab4348d94ee6cc9_Coca-Cola Brand.svg" alt="Client 2" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/67608ff410d975107897344c_Brand Verizon.svg" alt="Client 3" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/676090109234d980622102dd_Brand DirecTV.svg" alt="Client 4" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/6760902d036c8f0efdfa14b7_Warner Music Group.svg" alt="Client 5" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />

                    {/* Duplicate set for seamless infinite loop */}
                    <Image src="/brands logo/67608fbae911f6aaf6dd24ca_Logo Samsung.svg" alt="Client 1" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/67608fe5dab4348d94ee6cc9_Coca-Cola Brand.svg" alt="Client 2" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/67608ff410d975107897344c_Brand Verizon.svg" alt="Client 3" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/676090109234d980622102dd_Brand DirecTV.svg" alt="Client 4" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/6760902d036c8f0efdfa14b7_Warner Music Group.svg" alt="Client 5" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
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
    <section className="relative bg-gray-100 py-32 md:py-48 overflow-hidden">
      {/* Subtle abstract background */}
      {/* <Image
        src="https://www.shutterstock.com/image-illustration/abstract-white-grey-background-subtle-260nw-2467796823.jpg"
        alt="Subtle abstract background"
        fill
        className="object-cover opacity-50"
        priority
      /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl md:text-3xl text-gray-600 mb-6">Let's talk</p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight">
          We'd love to hear about your project
        </h2>

        <Link
          href="/start-project"
          className="group inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300"
        >
          Start your project
          <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
        </Link>
      </div>
    </section>

    {/* Footer */}
    <Footer/>
    </main>
  );
}
