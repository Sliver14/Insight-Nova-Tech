"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const teamData = [
  { id: 1, name: "Alex", title: "CEO", image: "/placeholder-member-1.jpg" },
  { id: 2, name: "Sarah", title: "Lead Dev", image: "/placeholder-member-2.jpg" },
  { id: 3, name: "Max", title: "Designer", image: "/placeholder-member-3.jpg" },
  { id: 4, name: "Jens", title: "PM", image: "/placeholder-member-4.jpg" },
  { id: 5, name: "Lia", title: "Copywriter", image: "/placeholder-member-5.jpg" },
  { id: 6, name: "Ben", title: "Engineer", image: "/placeholder-member-6.jpg" },
  { id: 7, name: "Eva", title: "Analyst", image: "/placeholder-member-7.jpg" },
  { id: 8, name: "Toby", title: "QA", image: "/placeholder-member-8.jpg" },
  { id: 9, name: "Mia", title: "Marketing", image: "/placeholder-member-9.jpg" },
  { id: 10, name: "Leo", title: "Product", image: "/placeholder-member-10.jpg" },
];

const TeamMember = ({ name, title, image }) => (
  <div className="text-center">
    <div className="relative aspect-square overflow-hidden rounded-md">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>
    <p className="mt-3 font-semibold text-white">{name}</p>
    <p className="text-sm text-gray-400">{title}</p>
  </div>
);

export default function AboutPage() {
  return (
    <main className="bg-white text-black">

      {/* HEADER */}
      <Header/>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Accelerated with impact and results
          </h1>
          <p className="text-gray-400 mb-8">
            We are a collective of creators, strategists, and technologists
            building digital products that matter.
          </p>
          <button className="bg-white text-black px-8 py-3 font-semibold rounded-full">
            UTILITY
          </button>
        </div>

        <div className="relative h-[360px] rounded-xl overflow-hidden">
          <Image
            src="/placeholder-hero.jpg"
            alt="Team meeting"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ABOUT / STATS */}
      <section className="py-32 overflow-hidden">
        <h2 className="text-[4rem] md:text-[6rem] font-extralight text-gray-800 text-center uppercase mb-16">
          About Us
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-4xl font-bold">150</p>
              <p className="text-gray-400 text-sm uppercase">Awards Won</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">100+</p>
              <p className="text-gray-400 text-sm uppercase">Clients Served</p>
            </div>
          </div>

          <div className="md:col-span-2 relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder-stats-team.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl font-medium mb-4">
            We know our approach is simple.
          </h3>
          <p className="text-gray-400">
            Our method is iterative and human-centered, ensuring every product
            resonates deeply with its users.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[
            { num: "12", label: "Years Experience" },
            { num: "25", label: "Active Projects" },
            { num: "1", label: "Office Location" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold">{item.num}</p>
              <p className="text-xs uppercase text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PEOPLE */}
      <section className="py-32">
        <h2 className="text-[4rem] md:text-[6rem] font-extralight text-gray-800 text-center uppercase">
          People
        </h2>
        <p className="text-center text-lg text-white mb-16">
          Driven by creativity. Focused on results.
        </p>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {teamData.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-32 max-w-7xl mx-auto px-6 space-y-24">
        <h2 className="text-[4rem] md:text-[6rem] font-extralight text-gray-800 text-center uppercase">
          Culture
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl mb-4">Work smart, not hard.</h3>
            <p className="text-gray-400">
              We prioritize focus, efficiency, and autonomy over long hours.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image src="/placeholder-culture-1.jpg" alt="" fill className="object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image src="/placeholder-culture-2.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl mb-3">Our vision</h4>
              <p className="text-gray-400">
                To exceed expectations and redefine digital excellence.
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-3">Our mission</h4>
              <p className="text-gray-400">
                Build scalable, human-first digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer/>
    </main>
  );
}
