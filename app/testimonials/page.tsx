const testimonials = [
  {
    quote:
      "Add a genuine parent testimonial here. Adele can provide the wording once the site is ready.",
    name: "Parent testimonial",
    detail: "Parent of a child at Del's House",
  },
  {
    quote:
      "Another genuine testimonial can be added here to describe the experience of being part of Del's House.",
    name: "Parent testimonial",
    detail: "Parent of a child at Del's House",
  },
  {
    quote:
      "A third testimonial could highlight Adele's experience, communication and the relationships she builds with families.",
    name: "Parent testimonial",
    detail: "Parent of a child at Del's House",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] text-[#20352F]">
      {/* Header */}
      <header className="px-4 pt-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/5 bg-white/60 px-5 py-3 backdrop-blur-xl md:px-7">
          <a
            href="/"
            className="font-serif text-xl tracking-tight md:text-2xl"
          >
            Del&apos;s House
          </a>

          <div className="hidden items-center gap-7 text-sm md:flex">
            <a href="/#about" className="hover:opacity-60">
              About
            </a>

            <a href="/#day" className="hover:opacity-60">
              Del&apos;s House
            </a>

            <a href="/#gallery" className="hover:opacity-60">
              Gallery
            </a>

            <a href="/testimonials" className="font-medium">
              Testimonials
            </a>

            <a href="/#parents" className="hover:opacity-60">
              For Parents
            </a>

            <a
              href="/enquire"
              className="rounded-full bg-[#20352F] px-5 py-2.5 text-white"
            >
              Enquire
            </a>
          </div>

          <a
            href="/"
            className="rounded-full bg-[#20352F] px-5 py-2.5 text-sm text-white md:hidden"
          >
            Home
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#76917F]">
            From families
          </p>

          <div className="mt-5 grid gap-10 md:grid-cols-[1fr_0.6fr] md:items-end">
            <h1 className="font-serif text-6xl leading-[0.92] tracking-tight md:text-8xl">
              What parents
              <br />
              say.
            </h1>

            <p className="max-w-md text-base leading-7 text-[#52635C]">
              Choosing someone to care for your child is a big decision.
              These are the experiences and words that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto grid max-w-7xl gap-5">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`rounded-[2rem] p-7 md:p-12 ${
                index === 0
                  ? "bg-[#DDE8D9]"
                  : index === 1
                    ? "bg-[#F0E5DB]"
                    : "bg-[#E7E8DE]"
              }`}
            >
              <div className="grid gap-10 md:grid-cols-[0.25fr_1fr]">
                <div className="font-serif text-6xl">“</div>

                <div>
                  <blockquote className="max-w-4xl font-serif text-3xl leading-tight tracking-tight md:text-5xl">
                    {testimonial.quote}
                  </blockquote>

                  <div className="mt-8">
                    <p className="text-sm font-medium">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-[#52635C]">
                      {testimonial.detail}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <a
            href="/enquire"
            className="group block overflow-hidden rounded-[2.5rem] bg-[#20352F] px-7 py-14 text-white md:px-16 md:py-20"
          >
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Thinking about Del&apos;s House?
                </p>

                <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
                  Come and have a look around.
                </h2>
              </div>

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#F4C95D] text-2xl text-[#20352F] transition-transform duration-500 group-hover:rotate-[-10deg]">
                ↗
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#172923] px-5 py-8 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl">Del&apos;s House</p>

            <p className="mt-1 text-sm text-white/45">
              Childminding in Urmston, Manchester
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-white/65">
            <a href="/" className="hover:text-white">
              Home
            </a>

            <a href="/enquire" className="hover:text-white">
              Enquire
            </a>

            <a href="#" className="hover:text-white">
              Instagram
            </a>

            <a href="#" className="hover:text-white">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}