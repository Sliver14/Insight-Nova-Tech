"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- START: UPDATED teamData with working image URLs ---
const teamData = [
  {
    id: 1,
    name: "Sylver",
    title: "CEO, Lead Dev",
    image: "/sylver potrait.png",
  },
  // {
  //   id: 2,
  //   name: "Sarah",
  //   title: "Lead Dev",
  //   image: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHw4fHxjbGVhbiUyMHByb2ZpbGUlMjBwb3J0cmFpdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcwNzEzMzQ4OXww&ixlib=rb-4.0.3&q=80&w=200",
  // },
  // {
  //   id: 3,
  //   name: "Max",
  //   title: "Designer",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a812d36c534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHwzfHxjbGVhbiUyMHByb2ZpbGUlMjBwb3J0cmFpdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcwNzEzMzQ4OXww&ixlib=rb-4.0.3&q=80&w=200",
  // },
  // {
  //   id: 4,
  //   name: "Jens",
  //   title: "PM",
  //   image: "https://images.unsplash.com/photo-1568602471926-89d812328400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHw0fHxjbGVhbiUyMHByb2ZpbGUlMjBwb3J0cmFpdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcwNzEzMzQ4OXww&ixlib=rb-4.0.3&q=80&w=200",
  // },
  // {
  //   id: 5,
  //   name: "Lia",
  //   title: "Copywriter",
  //   image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHw1fHxjbGVhbiUyMHByb2ZpbGUlMjBwb3J0cmFpdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcwNzEzMzQ4OXww&ixlib=rb-4.0.3&q=80&w=200",
  // },
  // {
  //   id: 6,
  //   name: "Ben",
  //   title: "Engineer",
  //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHw2fHxjbGVhbiUyMHByb2ZpbGUlMjBwb3J0cmFpdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcwNzEzMzQ4OXww&ixlib=rb-4.0.3&q=80&w=200",
  // },
  // {
  //   id: 7,
  //   name: "Eva",
  //   title: "Analyst",
  //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHw3fHxjbGVhbiUyMHByb2ZpbGUlMjBwb3J0cmFpdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcwNzEzMzQ4OXww&ixlib=rb-4.0.3&q=80&w=200",
  // },
  // {
  //   id: 8,
  //   name: "Toby",
  //   title: "QA",
  //   image: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHw4fHxjbGVhbiUyMHByb2ZpbGUlMjBwb3J0cmFpdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcwNzEzMzQ4OXww&ixlib=rb-4.0.3&q=80&w=200",
  // },
  // {
  //   id: 9,
  //   name: "Mia",
  //   title: "Marketing",
  //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHw5fHxjbGVhbiUyMHByb2ZpbGUlMjBwb3J0cmFpdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcwNzEzMzQ4OXww&ixlib=rb-4.0.3&q=80&w=200",
  // },
  // {
  //   id: 10,
  //   name: "Leo",
  //   title: "Product",
  //   image: "https://images.unsplash.com/photo-1522075469751-3a6694fa2a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHwxMHx8Y2xlYW4lMjBwcm9maWxlJTIwcG9ydHJhaXQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDcxMzM0ODl8MA&ixlib=rb-4.0.3&q=80&w=200",
  // },
];
// --- END: UPDATED teamData with working image URLs ---

const TeamMember = ({ name, title, image }) => (
  <div className="text-center">
    <div className="relative aspect-square overflow-hidden rounded-md">
      {/* Note: When using external URLs in Next.js Image component, you may need to
          configure the `next.config.js` file with the domain(s) in `images: { domains: [...] }` */}
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
      <Header />

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
            INSIGHT
          </button>
        </div>

        <div className="relative h-[360px] rounded-xl overflow-hidden">
          <Image
            // --- UPDATED IMAGE URL ---
            src="https://unsplash.com/photos/a-group-of-people-standing-around-a-table-with-a-laptop-qY8AWXa3Le4"
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
              // --- UPDATED IMAGE URL ---
              src="https://images.unsplash.com/photo-1522071820081-009f0129c7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGxhcmdlfGVufDB8fHx8MTcwNzEzMzYxNXww&ixlib=rb-4.0.3&q=80&w=1200"
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
            <Image
              // --- UPDATED IMAGE URL ---
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHwxfHxjdWx0dXJlJTIwd29ya2luZyUyMHBhbm9yYW1hfGVufDB8fHx8MTcwNzEzMzY1NXww&ixlib=rb-4.0.3&q=80&w=1200"
              alt="People collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              // --- UPDATED IMAGE URL ---
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfGFsbHwxfHxjdWx0dXJlJTIwb2ZmaWNlJTIwZGVza3N8ZW58MHx8fHwxNzA3MTMzNjcwfDA&ixlib=rb-4.0.3&q=80&w=1200"
              alt="Clean office space"
              fill
              className="object-cover"
            />
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
      <Footer />
    </main>
  );
}