"use client";

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="relative block h-3.5 w-3.5 shrink-0"
    >
      <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
      <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-current" />
    </span>
  );
}

const included = [
  "Toddler groups",
  "Parks & outdoor play",
  "Paddling pools in summer",
  "Beach trips & summer outings",
  "Learning & play activities",
  "Quiet / sleep time when needed",
  "School pick-ups",
  "Afternoon snacks",
];

const day = [
  {
    time: "Morning",
    title: "Out & about",
    text: "Toddler groups, parks, outdoor play and activities. During the warmer months, this can also include paddling pools, beaches and other summer outings.",
  },
  {
    time: "Lunch",
    title: "Home & reset",
    text: "Back home for lunch, followed by quiet time or a nap where needed.",
  },
  {
    time: "Afternoon",
    title: "Play & learn",
    text: "A mixture of learning, creative activities, imaginative play and time to simply enjoy being at home.",
  },
  {
    time: "School run",
    title: "Pick-up & snack",
    text: "School pick-up followed by a snack and some relaxed time together before parents arrive.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F0E8] text-[#241C2B]">

      {/* HEADER */}
      <header className="px-6 py-6 md:px-10 md:py-8">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between">
          <a
            href="/"
            className="text-[1.15rem] font-semibold tracking-[-0.04em] transition-opacity hover:opacity-60 md:text-[1.3rem]"
          >
            Del&apos;s House
          </a>

          <a
            href="/"
            className="group flex items-center gap-3 border-b border-[#241C2B]/30 pb-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-colors hover:border-[#241C2B]"
          >
            <span>Back to home</span>

            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              <Arrow />
            </span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-[1400px]">

          <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#907A91]">
            Pricing
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">

            <h1
              className="
                max-w-5xl
                text-[clamp(4rem,8vw,9rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.085em]
              "
            >
              Simple
              <br />
              childcare.
            </h1>

            <div className="max-w-md md:pb-2">
              <p className="text-[1.08rem] font-bold leading-[1.65] tracking-[-0.015em] text-[#514C53] md:text-[1.2rem]">
                Straightforward pricing, with plenty included in the day.
              </p>

              <p className="mt-5 text-sm font-semibold leading-7 text-[#68606A]">
                Whether you need a few hours or a full day, the essentials
                are simple and easy to understand.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="px-6 pb-24 md:px-10 md:pb-36">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-5 md:grid-cols-2">

            {/* HOURLY */}
            <div className="relative overflow-hidden bg-[#DDE5D7] p-7 md:p-12">
              <div className="flex items-start justify-between">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#687F6A]">
                  Hourly childcare
                </p>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#687F6A]/30 text-xs font-bold">
                  01
                </span>
              </div>

              <div className="mt-16 md:mt-24">
                <p className="text-[clamp(5rem,10vw,9rem)] font-bold leading-none tracking-[-0.09em]">
                  £6
                </p>

                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-[#596359]">
                  per hour
                </p>
              </div>

              <div className="mt-16 border-t border-[#687F6A]/20 pt-5">
                <p className="max-w-md text-sm font-semibold leading-7 text-[#596359]">
                  Flexible childcare for families who need a few hours of
                  care around their day.
                </p>
              </div>
            </div>

            {/* DAILY */}
            <div className="relative overflow-hidden bg-[#E7D9E8] p-7 md:p-12">
              <div className="flex items-start justify-between">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#806A82]">
                  Full day
                </p>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#806A82]/30 text-xs font-bold">
                  02
                </span>
              </div>

              <div className="mt-16 md:mt-24">
                <p className="text-[clamp(5rem,10vw,9rem)] font-bold leading-none tracking-[-0.09em]">
                  £50
                </p>

                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-[#6F5E70]">
                  per day
                </p>
              </div>

              <div className="mt-16 border-t border-[#806A82]/20 pt-5">
                <p className="max-w-md text-sm font-semibold leading-7 text-[#6F5E70]">
                  A full day of childcare, activities, outings and everything
                  that comes with a normal day at Del&apos;s House.
                </p>
              </div>
            </div>

          </div>

          <p className="mt-5 text-xs font-semibold leading-6 text-[#68606A]">
            Please get in touch for availability and to discuss your
            individual childcare requirements.
          </p>

        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-[#241C2B] px-6 py-24 text-[#F4F0E8] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#C7B5C8]">
                Included
              </p>

              <h2
                className="
                  mt-5
                  max-w-xl
                  text-[clamp(3.5rem,6vw,7rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.075em]
                "
              >
                More than
                <br />
                just childcare.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-[1.1rem] font-semibold leading-8 text-white/70 md:text-[1.25rem]">
                A day at Del&apos;s House is about much more than simply
                being looked after. Children have opportunities to play,
                learn, explore and spend time outdoors.
              </p>

              <div className="mt-12 border-t border-white/15">
                {included.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/15 py-5"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[0.62rem] font-bold tracking-[0.15em] text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-bold uppercase tracking-[0.08em] md:text-base">
                        {item}
                      </span>
                    </div>

                    <span className="text-white/30">+</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TYPICAL DAY */}
      <section className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col gap-6 border-b border-[#241C2B]/15 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#907A91]">
                A typical day
              </p>

              <h2 className="mt-4 text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[0.85] tracking-[-0.075em]">
                How the day
                <br />
                comes together.
              </h2>
            </div>

            <p className="max-w-sm text-sm font-semibold leading-7 text-[#68606A] md:pb-1">
              Every day is a little different, but there is a familiar rhythm
              to the time spent at Del&apos;s House.
            </p>
          </div>

          <div className="mt-10">
            {day.map((item, index) => (
              <article
                key={item.time}
                className="grid gap-5 border-b border-[#241C2B]/15 py-8 md:grid-cols-[180px_0.8fr_1.2fr] md:items-start md:py-10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#241C2B]/20 text-[0.62rem] font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#907A91]">
                    {item.time}
                  </p>
                </div>

                <h3 className="text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-xl text-sm font-semibold leading-7 text-[#68606A]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PRACTICAL */}
      <section className="bg-[#DDE5D7] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-end">

            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#687F6A]">
                The simple bit
              </p>

              <h2 className="mt-5 max-w-xl text-[clamp(3.5rem,6vw,7rem)] font-bold leading-[0.84] tracking-[-0.075em]">
                One price.
                <br />
                Lots to do.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-[1.1rem] font-bold leading-8 tracking-[-0.015em] text-[#4F5B52] md:text-[1.25rem]">
                The daily fee covers the normal activities and outings that
                make up a day at Del&apos;s House.
              </p>

              <p className="mt-6 text-sm font-semibold leading-7 text-[#596359]">
                From toddler groups and trips to the park, to creative play,
                learning and relaxed afternoons at home, children have a
                mixture of experiences throughout the day.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E7D9E8] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#806A82]">
                Have a question?
              </p>

              <h2 className="mt-5 max-w-4xl text-[clamp(3.8rem,7vw,8rem)] font-bold leading-[0.82] tracking-[-0.08em]">
                Let&apos;s talk
                <br />
                childcare.
              </h2>
            </div>

            <a
              href="/enquire"
              className="group inline-flex w-fit shrink-0 items-center gap-4 border-b border-[#241C2B]/40 pb-3 text-sm font-bold uppercase tracking-[0.14em]"
            >
              Enquire about a place

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#241C2B]/25 transition-all duration-300 group-hover:-rotate-12 group-hover:bg-[#241C2B] group-hover:text-white">
                <Arrow />
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#241C2B] px-6 py-10 text-[#F4F0E8] md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-2xl font-semibold tracking-[-0.04em]">
              Del&apos;s House
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40">
              Childminding · Urmston · Manchester
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.1em] text-white/55">
            <a href="/about" className="hover:text-white">
              About
            </a>

            <a href="/dels-house" className="hover:text-white">
              Del&apos;s House
            </a>

            <a href="/pricing" className="hover:text-white">
              Pricing
            </a>

            <a href="/hours" className="hover:text-white">
              Working Hours
            </a>

            <a href="/testimonials" className="hover:text-white">
              Testimonials
            </a>

            <a href="/enquire" className="hover:text-white">
              Enquire
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}