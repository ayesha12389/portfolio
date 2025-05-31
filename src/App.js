import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans p-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-lg text-gray-600">Frontend Developer</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">About Me</h2>
        <p>I’m a passionate developer with a love for building clean and user-friendly web interfaces.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-xl">Portfolio Website</h3>
            <p>A personal website to showcase my skills and projects.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-xl">Todo App</h3>
            <p>A simple task manager built with React and Tailwind CSS.</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-16 text-sm text-gray-500">
        © 2025 John Doe. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
