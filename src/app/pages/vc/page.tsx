'use client';

import { HEADINGS } from '../../constants/Headings';
import { Navbar } from '../../components/Header';

export default function CV() {
  return (
    <>
      <Navbar />

      <div className="w-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center py-16">
        <div className="max-w-3xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">{HEADINGS.name}</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">{HEADINGS.about}</h2>
            <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna augue, condimentum a pharetra id, cursus vel erat.</p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">{HEADINGS.experience}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">Software Engineer at XYZ Company</li>
              <li className="text-lg text-gray-700">Frontend Developer at ABC Corp</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">{HEADINGS.education}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">Bachelor of Science in Computer Science, University of ABC</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">{HEADINGS.skills}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">JavaScript, React, Node.js</li>
              <li className="text-lg text-gray-700">HTML, CSS, Tailwind CSS</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">{HEADINGS.contact}</h3>
            <ul className="space-y-2">
              <li className="text-lg text-gray-700">Email: abdulrahman.devp@gmail.com</li>
              <li className="text-lg text-gray-700">Phone: (+92) 334-1763363</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
