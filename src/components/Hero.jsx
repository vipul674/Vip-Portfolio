function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative pt-24 pb-10 px-4">
      <div className="text-center max-w-2xl mx-auto bg-white/80 rounded-2xl shadow-xl p-10 backdrop-blur">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-4 drop-shadow-lg">Vipul Ponugoti</h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">Aspiring Machine Learning Engineer</p>
        <p className="text-md md:text-lg text-gray-600 mb-4">Vadodara, Gujarat, India</p>
        <a href="https://www.linkedin.com/in/vipul-ponugoti-3a731928b/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold shadow hover:scale-105 transition">LinkedIn Profile</a>
      </div>
    </section>
  );
}

export default Hero;