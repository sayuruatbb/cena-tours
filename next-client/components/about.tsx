import React from "react";

function About() {
  return (
    <div className="bg-slate-200">
    <div
      className=" max-w-4xl mx-auto p-8 shadow-lg rounded-lg relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about3.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative p-8">
        <h2
          className="text-4xl font-bold text-white mb-4"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
        >
          About Me
        </h2>
        <h3 className="text-2xl font-semibold text-white mb-4">
          Hello, Adventurers!
        </h3>
        <p className="text-white mb-6">
          I’m <strong>[Your Name]</strong>, the wanderer behind{" "}
          <strong>Cena Tours</strong>. From the bustling streets of Tokyo to
          the serene beaches of the Maldives, my passion for exploring the
          world knows no bounds. This website is my love letter to the endless
          beauty and diversity our planet offers.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">
          My Mission
        </h3>
        <p className="text-white mb-6">
          At <strong>Cena Tours</strong>, my mission is to inspire and guide
          you through your own adventures. I aim to provide you with
          insightful travel guides, practical tips, and a dash of wanderlust
          to fuel your journeys.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">
          What Awaits You Here
        </h3>
        <ul className="list-disc list-inside text-white mb-6">
          <li>
            <strong>Epic Travel Guides:</strong> Your compass to navigating
            new lands.
          </li>
          <li>
            <strong>Personal Chronicles:</strong> Tales from my journeys that
            spark curiosity and excitement.
          </li>
          <li>
            <strong>Traveler's Toolkit:</strong> Handy tips and tricks to make
            your trips smooth and memorable.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-white mb-4">
          Why Travel with Me?
        </h3>
        <p className="text-white mb-6">
          With over <strong>[number]</strong> countries stamped on my passport
          and a treasure trove of experiences, I bring you the best of travel
          wisdom and inspiration. Join me as I uncover hidden gems and
          timeless classics, one trip at a time.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">
          Be Part of the Adventure
        </h3>
        <p className="text-white mb-6">
          The <strong>[Your Website Name]</strong> community is a vibrant group
          of travel enthusiasts just like you. Connect with us, share your
          stories, and let’s explore the world together!
        </p>

        <h5 className="font-semibold text-white mb-4 text-center">
          Thank you for stopping by! Here’s to new adventures and unforgettable
          memories.
        </h5>
      </div>
    </div>
  </div>
  );
}

export default About;
