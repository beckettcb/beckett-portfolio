export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1
          className="text-xl font-bold tracking-wide"
          style={{ fontFamily: "'Zen Dots', sans-serif" }}
        >
          BECKETT BATEMAN
        </h1>

        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:text-gray-400">ABOUT</a>
          <a href="#portfolio" className="hover:text-gray-400">SHOWCASE</a>
          <a href="#services" className="hover:text-gray-400">SERVICES</a>
          <a href="#contact" className="hover:text-gray-400">CONTACT</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden flex items-end">
        <video
          src="/DISKFULL.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative z-10 p-10">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Intention in Everything
          </h2>
          <p
            className="mt-2 text-gray-400 max-w-xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            I craft artistic, rhythmic, and emotionally charged edits with impact.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black text-white py-20 px-6 md:px-24 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
          <img
            src="/vvv.png"
            alt="Beckett Bateman"
            className="w-80 h-80 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm Beckett Bateman — a video editor who blends rhythm, mood, and motion to craft edits that hit on both an emotional and visual level. Whether it's a fast-cut reel or a slow cinematic piece, every frame I cut serves a purpose.
            </p>
            <p className="text-gray-500 text-md leading-relaxed mb-8">
              I work primarily in Adobe Premiere Pro, After Effects, and Photoshop — but what matters most isn't the tool, it's the taste. My style draws from modern aesthetics: analog textures, glitch overlays, and clean pacing that leaves a mark.
            </p>
            <blockquote className="italic text-gray-600 border-l-4 border-gray-700 pl-4 text-md">
              Editing isn't about what you show — it's about what you leave out.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="portfolio" className="bg-black text-white py-20 px-6 md:px-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">SHOWCASE</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://vimeo.com/yourproject1" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg border border-gray-800">
              <img src="/thumb1.jpg" alt="Project 1" className="object-cover w-full h-60 transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-medium">Music Video: Pulse</span>
              </div>
            </a>

            <a href="https://vimeo.com/yourproject2" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg border border-gray-800">
              <img src="/thumb2.jpg" alt="Project 2" className="object-cover w-full h-60 transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-medium">Commercial Edit: Kinetic</span>
              </div>
            </a>

            <a href="https://vimeo.com/yourproject3" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg border border-gray-800">
              <img src="/thumb3.jpg" alt="Project 3" className="object-cover w-full h-60 transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-medium">Short Film: Disrupt</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section id="creators" className="bg-black text-white py-20 px-6 md:px-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold mb-10">Creators I've Worked With</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:bg-gray-900 transition">
              <h4 className="text-xl font-semibold mb-2">@visual.marcus</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                “Beckett turned my raw footage into something emotionally gripping. My reel never hit harder.”
              </p>
            </div>

            <div className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:bg-gray-900 transition">
              <h4 className="text-xl font-semibold mb-2">@noir.motion</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fast, clean, and completely understood my style. One of the best editors I've collaborated with.
              </p>
            </div>

            <div className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:bg-gray-900 transition">
              <h4 className="text-xl font-semibold mb-2">@kai.shotit</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                “I gave him vibes and beats — he gave me cinema. This guy *gets* it.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-20 px-6 md:px-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Let's Work</h3>
          <p className="text-gray-400 mb-8 text-md">
            Ready to collaborate, create, or just say what's up? Reach out — I'm open to commissions, freelance gigs, or creative projects that need a solid editor.
          </p>
          <div className="flex justify-center gap-6 text-gray-300 text-xl">
            <a href="mailto:youremail@example.com" className="hover:text-white transition">Email</a>
            <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
            <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YouTube</a>
          </div>
        </div>
      </section>
    </div>
  );
}
