function Footer() {
  return (
    <footer
      id="contact"
      className="mt-10 bg-slate-950 text-slate-300"
    >

      <div className="section-container py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-2">

              <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-xl font-bold text-white">
                D
              </div>

              <span className="text-xl font-bold text-white">
                Dev Stack
              </span>

            </div>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Discover modern development
              technologies and create your own
              perfect technology stack.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                GH
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                X
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                in
              </a>

            </div>

          </div>

          {/* Product */}
          <div>

            <h3 className="font-semibold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">

              <li>
                <a href="#technologies">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#projects">
                  Projects
                </a>
              </li>

              <li>
                <a href="#home">
                  Features
                </a>
              </li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="font-semibold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">

              <li>
                <a href="#about">
                  About
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

              <li>
                <a href="#home">
                  Careers
                </a>
              </li>

            </ul>

          </div>

          {/* Legal */}
          <div>

            <h3 className="font-semibold text-white">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">

              <li>
                <a href="#home">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#home">
                  Terms
                </a>
              </li>

              <li>
                <a href="#home">
                  License
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a href="#home">
              Privacy
            </a>

            <a href="#home">
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;