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

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const availability = [
  {
    label: "Before School",
    values: [false, false, false, false, false, false, false],
  },
  {
    label: "Morning",
    values: [true, true, true, true, true, false, false],
  },
  {
    label: "Afternoon",
    values: [true, true, true, true, true, false, false],
  },
  {
    label: "After School",
    values: [true, true, true, true, true, false, false],
  },
  {
    label: "Evening",
    values: [false, false, false, false, false, false, false],
  },
  {
    label: "Overnight",
    values: [false, false, false, false, false, false, false],
  },
];

export default function HoursPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F0E8] text-[#241C2B]">

      {/* =====================================================
          HEADER
      ====================================================== */}

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
            className="
              group
              flex
              items-center
              gap-3
              border-b
              border-[#241C2B]/30
              pb-1
              text-[0.68rem]
              font-bold
              uppercase
              tracking-[0.12em]
              transition-colors
              hover:border-[#241C2B]
            "
          >
            <span>Back to home</span>

            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              <Arrow />
            </span>
          </a>

        </nav>
      </header>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">

        <div className="mx-auto max-w-[1400px]">

          <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#687F6A]">
            My Availability
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">

            <h1
              className="
                max-w-5xl
                text-[clamp(4rem,8vw,9rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.085em]
              "
            >
              Here when
              <br />
              you need me.
            </h1>

            <div className="max-w-md md:pb-2">

              <p className="text-[1.08rem] font-bold leading-[1.65] tracking-[-0.015em] text-[#514C53] md:text-[1.2rem]">
                I am available Monday to Friday, from 8:00am to 5:30pm,
                with some flexibility where possible.
              </p>

              <p className="mt-5 text-sm font-semibold leading-7 text-[#68606A]">
                My usual hours are shown below. If you need something a
                little different, please get in touch and we can talk it
                through.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN AVAILABILITY
      ====================================================== */}

      <section className="px-6 pb-24 md:px-10 md:pb-36">

        <div className="mx-auto max-w-[1400px]">

          {/* Section heading */}

          <div className="flex items-end justify-between border-t border-[#241C2B]/15 pt-5">

            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#907A91]">
                Weekly availability
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                Monday to Friday
              </h2>
            </div>

            <div className="hidden items-center gap-4 md:flex">

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#AFC2AE]" />
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#68606A]">
                  Available
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#E5DED8]" />
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#68606A]">
                  Not available
                </span>
              </div>

            </div>

          </div>


          {/* =================================================
              DESKTOP TABLE
          ================================================== */}

          <div className="mt-8 hidden overflow-hidden border border-[#241C2B]/15 bg-[#EEE9E1] md:block">

            {/* Days */}

            <div className="grid grid-cols-[1.5fr_repeat(7,1fr)] border-b border-[#241C2B]/15">

              <div className="border-r border-[#241C2B]/15 px-6 py-5">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#907A91]">
                  Availability
                </span>
              </div>

              {days.map((day) => (
                <div
                  key={day}
                  className="
                    border-r
                    border-[#241C2B]/15
                    px-3
                    py-5
                    text-center
                    last:border-r-0
                  "
                >
                  <span className="text-sm font-bold tracking-[-0.02em]">
                    {day}
                  </span>
                </div>
              ))}

            </div>


            {/* Rows */}

            {availability.map((row) => (
              <div
                key={row.label}
                className="
                  grid
                  grid-cols-[1.5fr_repeat(7,1fr)]
                  border-b
                  border-[#241C2B]/15
                  last:border-b-0
                "
              >

                <div className="flex items-center border-r border-[#241C2B]/15 px-6 py-7">

                  <span className="text-[0.88rem] font-bold tracking-[-0.02em]">
                    {row.label}
                  </span>

                </div>

                {row.values.map((isAvailable, index) => (
                  <div
                    key={`${row.label}-${days[index]}`}
                    className={`
                      flex
                      min-h-[76px]
                      items-center
                      justify-center
                      border-r
                      border-[#241C2B]/15
                      last:border-r-0
                      ${isAvailable ? "bg-[#DDE5D7]" : "bg-[#E9E3DD]"}
                    `}
                  >
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-[0.72rem]
                        font-bold
                        ${
                          isAvailable
                            ? "border-[#829783]/40 bg-[#AFC2AE] text-[#314233]"
                            : "border-[#241C2B]/10 bg-[#DDD5CE] text-[#8B8580]"
                        }
                      `}
                    >
                      {isAvailable ? "✓" : "–"}
                    </span>
                  </div>
                ))}

              </div>
            ))}

          </div>


          {/* =================================================
              MOBILE TABLE
          ================================================== */}

          <div className="mt-8 space-y-3 md:hidden">

            {availability.map((row) => (
              <div
                key={row.label}
                className="overflow-hidden border border-[#241C2B]/12 bg-[#EEE9E1]"
              >

                <div className="border-b border-[#241C2B]/12 px-5 py-4">

                  <p className="text-[0.82rem] font-bold tracking-[-0.02em]">
                    {row.label}
                  </p>

                </div>

                <div className="grid grid-cols-7">

                  {row.values.map((isAvailable, index) => (
                    <div
                      key={`${row.label}-${days[index]}`}
                      className={`
                        border-r
                        border-[#241C2B]/10
                        last:border-r-0
                        ${
                          isAvailable
                            ? "bg-[#DDE5D7]"
                            : "bg-[#E9E3DD]"
                        }
                      `}
                    >

                      <div className="flex flex-col items-center gap-2 px-1 py-4">

                        <span className="text-[0.58rem] font-bold uppercase tracking-[0.08em] text-[#68606A]">
                          {days[index]}
                        </span>

                        <span
                          className={`
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            border
                            text-[0.65rem]
                            font-bold
                            ${
                              isAvailable
                                ? "border-[#829783]/40 bg-[#AFC2AE] text-[#314233]"
                                : "border-[#241C2B]/10 bg-[#DDD5CE] text-[#8B8580]"
                            }
                          `}
                        >
                          {isAvailable ? "✓" : "–"}
                        </span>

                      </div>

                    </div>
                  ))}

                </div>

              </div>
            ))}


            {/* Mobile legend */}

            <div className="flex flex-wrap items-center gap-5 px-1 pt-3">

              <div className="flex items-center gap-2">

                <span className="h-3 w-3 rounded-full bg-[#AFC2AE]" />

                <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#68606A]">
                  Available
                </span>

              </div>

              <div className="flex items-center gap-2">

                <span className="h-3 w-3 rounded-full bg-[#DDD5CE]" />

                <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#68606A]">
                  Not available
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOURS SUMMARY
      ====================================================== */}

      <section className="bg-[#DDE5D7] px-6 py-20 md:px-10 md:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-center">

            <div>

              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#687F6A]">
                My usual hours
              </p>

              <h2
                className="
                  mt-4
                  max-w-xl
                  text-[clamp(3.5rem,6vw,6.5rem)]
                  font-bold
                  leading-[0.85]
                  tracking-[-0.075em]
                "
              >
                8am
                <br />
                to 5.30pm.
              </h2>

            </div>


            <div className="grid gap-5 sm:grid-cols-2">

              <div className="border-t border-[#687F6A]/30 pt-5">

                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#687F6A]">
                  Days
                </p>

                <p className="mt-3 text-xl font-bold tracking-[-0.035em] text-[#4F5B52]">
                  Monday – Friday
                </p>

              </div>


              <div className="border-t border-[#687F6A]/30 pt-5">

                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#687F6A]">
                  Hours
                </p>

                <p className="mt-3 text-xl font-bold tracking-[-0.035em] text-[#4F5B52]">
                  8:00am – 5:30pm
                </p>

              </div>


              <div className="border-t border-[#687F6A]/30 pt-5 sm:col-span-2">

                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#687F6A]">
                  Flexibility
                </p>

                <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-[#596359]">
                  These are my usual working hours, but I can be flexible
                  with times where possible. Please get in touch to discuss
                  what you need.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SCHOOL HOLIDAYS
      ====================================================== */}

      <section className="bg-[#E7D9E8] px-6 py-20 md:px-10 md:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end">

            <div>

              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#806A82]">
                School holidays
              </p>

              <h2
                className="
                  mt-5
                  max-w-4xl
                  text-[clamp(3.5rem,6.5vw,7rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.075em]
                "
              >
                Holiday care
                <br />
                can be possible.
              </h2>

            </div>


            <div className="max-w-xl md:pb-2">

              <p className="text-[1.1rem] font-bold leading-[1.65] tracking-[-0.015em] text-[#514A54] md:text-[1.25rem]">
                I can offer childcare during school holidays, subject to
                availability.
              </p>

              <p className="mt-5 text-base font-semibold leading-7 text-[#68606A]">
                If you need care during the holidays, just get in touch.
                We can discuss the dates you need and what would work best
                for you.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#241C2B] px-6 py-24 text-[#F4F0E8] md:px-10 md:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#B9A7B9]">
                Need to check a day?
              </p>

              <h2
                className="
                  mt-5
                  max-w-4xl
                  text-[clamp(3.5rem,6.5vw,7rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.075em]
                "
              >
                Let&apos;s find
                <br />
                what works.
              </h2>

            </div>


            <a
              href="/enquire"
              className="
                group
                inline-flex
                w-fit
                shrink-0
                items-center
                gap-4
                border-b
                border-[#F4F0E8]/40
                pb-3
                text-sm
                font-bold
                uppercase
                tracking-[0.14em]
                transition-colors
                hover:border-[#F4F0E8]
              "
            >
              Enquire

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#F4F0E8]/25
                  transition-all
                  duration-300
                  group-hover:-rotate-12
                  group-hover:bg-[#F4F0E8]
                  group-hover:text-[#241C2B]
                "
              >
                <Arrow />
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#241C2B] px-6 pb-10 text-[#F4F0E8] md:px-10">

        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="text-2xl font-semibold tracking-[-0.04em]">
              Del&apos;s House
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40">
              Childminding · Urmston · Manchester
            </p>

          </div>


          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.1em] text-white/55">

            <a href="/about" className="transition-colors hover:text-white">
              About
            </a>

            <a
              href="/dels-house"
              className="transition-colors hover:text-white"
            >
              Del&apos;s House
            </a>

            <a href="/pricing" className="transition-colors hover:text-white">
              Pricing
            </a>

            <a href="/hours" className="transition-colors hover:text-white">
              Working Hours
            </a>

            <a
              href="/testimonials"
              className="transition-colors hover:text-white"
            >
              Testimonials
            </a>

            <a href="/enquire" className="transition-colors hover:text-white">
              Enquire
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}