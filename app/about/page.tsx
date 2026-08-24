import Link from "next/link";

const summary = [
  "Ofsted Registered",
  "First Aid Training",
  "DBS Check",
  "Newborn Experience",
  "Full Driving Licence",
  "Own Car",
  "School Pickups",
  "Childcare Qualifications",
  "2 Year Old Funded Childcare",
  "3 & 4 Year Old Funded Childcare",
  "Tax-Free Childcare",
  "9 Months Old Funded Childcare",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F0E8] text-[#241C2B]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="px-6 py-6 md:px-10 md:py-8">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between">

          <Link
            href="/"
            className="text-[1.15rem] font-semibold tracking-[-0.04em] transition-opacity hover:opacity-60 md:text-[1.3rem]"
          >
            Del&apos;s House
          </Link>

          <Link
            href="/"
            className="
              text-[0.68rem]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#68606A]
              transition-opacity
              hover:opacity-50
            "
          >
            Back home
          </Link>

        </nav>
      </header>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-20">

        <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-20">

          {/* IMAGE */}

          <div className="mx-auto w-[82%] md:mx-0 md:w-full">
            <div className="overflow-hidden">
              <img
                src="/images/adele.jpg"
                alt="Adele Taylor"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#907A91]">
              Del&apos;s House · Urmston · Manchester
            </p>
          </div>


          {/* INTRO COPY */}

          <div>

            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#907A91]">
              About me
            </p>

            <h1
              className="
                mt-5
                max-w-4xl
                text-[clamp(4rem,7vw,8rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.08em]
              "
            >
              My name&apos;s
              <br />
              Adele.
            </h1>

            <div
              className="
                mt-9
                max-w-2xl
                space-y-5
                text-[1.08rem]
                font-semibold
                leading-[1.7]
                tracking-[-0.01em]
                text-[#4F5B52]
                md:text-[1.18rem]
              "
            >
              <p>
                I&apos;m a registered childminder in the Urmston and Stretford
                area, and I&apos;ve been working in childcare for over 20 years.
              </p>

              <p>
                I have one daughter, who is now 23, and she is also registered
                as my assistant. She has completed her first aid training and
                has a full DBS check. As she is currently at university
                training to be a paramedic, she occasionally helps me when
                needed.
              </p>

              <p>
                Del&apos;s House is a warm, home-from-home setting where
                children can feel safe, happy and completely themselves.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MY SUMMARY
      ====================================================== */}

      <section className="bg-[#DDE5D7] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#687F6A]">
                My summary
              </p>

              <h2
                className="
                  mt-5
                  max-w-lg
                  text-[clamp(3.5rem,6vw,6.5rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.075em]
                "
              >
                Experience
                <br />
                you can
                <br />
                trust.
              </h2>
            </div>


            <div className="grid border-t border-[#241C2B]/15 sm:grid-cols-2">

              {summary.map((item, index) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    border-b
                    border-[#241C2B]/15
                    py-5
                    sm:odd:border-r
                    sm:even:pl-7
                  "
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#687F6A]/40 text-[0.65rem] font-black text-[#687F6A]">
                    ✓
                  </span>

                  <span className="text-sm font-bold tracking-[-0.01em] text-[#344036] md:text-[0.95rem]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      <section className="px-6 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#907A91]">
                My experience
              </p>

              <h2
                className="
                  mt-5
                  max-w-xl
                  text-[clamp(3.5rem,6vw,6.5rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.075em]
                "
              >
                20 years
                <br />
                of caring
                <br />
                for little ones.
              </h2>
            </div>


            <div className="max-w-2xl space-y-6 text-[1.05rem] font-semibold leading-[1.75] text-[#4F5750] md:text-[1.15rem]">

              <p>
                I have always worked in childcare. I started my career as a
                childminder&apos;s assistant before becoming a nanny for nine
                years.
              </p>

              <p>
                Since becoming a childminder, I have gained my NVQ Level 3 and
                Level 4 qualifications, alongside further training in food
                hygiene, safeguarding children and first aid. These
                qualifications are renewed regularly to keep my knowledge and
                training up to date.
              </p>

              <p>
                I have also recently had my Ofsted inspection and received a
                good grade. I can provide excellent references from both
                previous and current families.
              </p>

              <p>
                I also work with Highfield Primary School, providing school
                pickups for after-school children alongside the preschool
                children I care for during the day.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TYPICAL DAY
      ====================================================== */}

      <section className="bg-[#E7D9E8] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#806A82]">
                A typical day
              </p>

              <h2
                className="
                  mt-5
                  text-[clamp(3.5rem,6vw,6.5rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.075em]
                "
              >
                Play.
                <br />
                Explore.
                <br />
                Grow.
              </h2>
            </div>

            <p className="max-w-xl text-[1.05rem] font-semibold leading-[1.7] text-[#514C53] md:text-[1.15rem]">
              Our days are active, relaxed and built around what the children
              need. We might start at a toddler group, come home for lunch and
              quiet time, then spend the afternoon learning and playing before
              heading out for the school run.
            </p>

          </div>


          <div className="mt-14 grid gap-px border border-[#241C2B]/10 bg-[#241C2B]/10 md:grid-cols-3">

            <div className="bg-[#F4F0E8] p-7 md:p-9">
              <span className="text-xs font-black uppercase tracking-[0.15em] text-[#907A91]">
                Morning
              </span>

              <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em]">
                Out &amp; about
              </h3>

              <p className="mt-3 text-sm font-semibold leading-6 text-[#68606A]">
                Toddler groups, local adventures and plenty of opportunities
                to play and make friends.
              </p>
            </div>

            <div className="bg-[#F4F0E8] p-7 md:p-9">
              <span className="text-xs font-black uppercase tracking-[0.15em] text-[#907A91]">
                Afternoon
              </span>

              <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em]">
                Learn &amp; play
              </h3>

              <p className="mt-3 text-sm font-semibold leading-6 text-[#68606A]">
                Lunch, quiet or sleep time where needed, followed by learning,
                playing and exploring.
              </p>
            </div>

            <div className="bg-[#F4F0E8] p-7 md:p-9">
              <span className="text-xs font-black uppercase tracking-[0.15em] text-[#907A91]">
                After school
              </span>

              <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em]">
                Home together
              </h3>

              <p className="mt-3 text-sm font-semibold leading-6 text-[#68606A]">
                School pickup, a little snack and a relaxed end to the day
                before parents arrive.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENQUIRY CTA
      ====================================================== */}

      <section className="bg-[#241C2B] px-6 py-24 text-[#F4F0E8] md:px-10 md:py-32">

        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#C7B3C9]">
              Come and say hello
            </p>

            <h2
              className="
                mt-5
                max-w-3xl
                text-[clamp(3.5rem,6vw,7rem)]
                font-bold
                leading-[0.84]
                tracking-[-0.075em]
              "
            >
              Looking for a
              <br />
              home from home?
            </h2>

          </div>


          <Link
            href="/enquire"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-4
              border-b
              border-white/30
              pb-3
              text-sm
              font-bold
              uppercase
              tracking-[0.14em]
              transition-colors
              hover:border-white
            "
          >
            Enquire about a place

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:-rotate-12 group-hover:bg-white group-hover:text-[#241C2B]">
              →
            </span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#241C2B] px-6 pb-8 text-[#F4F0E8] md:px-10">

        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">

          <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
            Del&apos;s House · Urmston · Manchester
          </p>

          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 transition-colors hover:text-white"
          >
            Back to home
          </Link>

        </div>

      </footer>

    </main>
  );
}