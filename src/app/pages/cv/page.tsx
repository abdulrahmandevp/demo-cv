'use client';

import { HEADINGS } from '../../utils/constants/Headings';
import { CONTENT } from '@/app/utils/constants/Content';

export default function CV() {
  const sections = [
    { heading: HEADINGS.about, content: CONTENT.summary },
    { heading: HEADINGS.experience, content: CONTENT.experience },
    { heading: HEADINGS.education, content: CONTENT.education },
    { heading: HEADINGS.skills, content: `${CONTENT.skills}, ${CONTENT.additional}` },
  ];

  return (
    // Further I can make the layout of below divs to eliminate the number of classes because its recomended to use 3 or for max.
    <div className="w-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center py-16">
      <div className="max-w-3xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">{HEADINGS.name}</h1>

        {sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">{section.heading}</h3>
            <p className="text-lg text-gray-700">{section.content}</p>
          </section>
        ))}

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">{HEADINGS.contact}</h3>
          <ul className="space-y-2">
            <li className="text-lg text-gray-700">Email: {CONTENT.email}</li>
            <li className="text-lg text-gray-700">Phone: {CONTENT.Phone}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
