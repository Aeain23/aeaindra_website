import React from "react";

function Hero() {
  return (
    <section id="hero" className="text-center mb-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
        Team Lead Developer | Senior Mobile Developer
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
        Mobile Architect specializing in Flutter, Clean Architecture, and
        FinTech solutions.
      </p>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/a-eain-dra-ethan-eain-54811b147"
          target="_blank"
          className="text-slate-500 hover:text-amber-600 icon-link"
        >
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </a>
        <a
          href="https://bold.pro/my/aeain-dra-240307140740"
          target="_blank"
          className="text-slate-500 hover:text-amber-600 icon-link"
        >
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </a>
        <a
          href="https://bold.pro/my/aeain-dra-240307140740"
          target="_blank"
          className="text-slate-500 hover:text-amber-600 icon-link font-medium text-lg"
        >
          Portfolio
        </a>

        <a
          href="mailto:aeaindra22@gmail.com"
          className="text-slate-500 hover:text-amber-600 icon-link font-medium text-lg"
        >
          aeaindra22@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Hero;
