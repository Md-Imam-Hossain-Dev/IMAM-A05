function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-white"
    >
      <div className="section-container grid min-h-[600px] items-center gap-10 py-16 lg:grid-cols-2">

        {/* Left */}
        <div>

          <div className="mb-5 inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-500">
            BUILD YOUR STACK
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">

            Build Your

            <br />

            <span className="gradient-text">
              Developer Stack
            </span>

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
            Discover the technologies that power
            modern software development. Choose your
            favorite tools and create your own
            technology stack.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="technolgy"
              className="gradient-bg rounded-full px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-orange-400 hover:text-orange-500"
            >
              Learn More
            </a>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">

          <div className="relative w-full max-w-[520px]">

            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 opacity-50 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-4 shadow-2xl">

              <img
                src="./public/banner-stack.png"
                alt="Developer workspace"
                className="min-h-[350px] w-full rounded-2xl object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;