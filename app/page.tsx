"use client";

import { useState } from "react";

const adventures = [
  {
    number: "01",
    title: "Toddler Groups",
    text: "Regular opportunities to play, explore and make friends within the local community.",
  },
  {
    number: "02",
    title: "Outdoor Adventures",
    text: "Parks, forests, beaches and paddling pools give little ones plenty of space to explore.",
  },
  {
    number: "03",
    title: "Learning Through Play",
    text: "Everyday play, interaction and discovery help children learn naturally at their own pace.",
  },
];

const outings = [
  {
    title: "The Beach",
    image: "/images/beach.jpg",
  },
  {
    title: "Forest Days",
    image: "/images/forest.jpg",
  },
  {
    title: "Parks",
    image: "/images/park.jpg",
  },
  {
    title: "Museums",
    image: "/images/museum.jpg",
  },
];

const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "Adele is an amazing and knowledgeable childminder. Our son has been going to her since he was 10 months old. She takes the children on fun and exciting trips to toddler groups, parks and beaches.",
    quoteTwo:
      "Adele keeps us up to date with their learning, progress and development. She really cares for all of the children and her home is a warm and nurturing environment.",
    quoteThree:
      "Our little boy thoroughly enjoys going to Adele and has really developed in so many ways. We are very happy and confident in the care she provides. Would highly recommend!",
    name: "Parent review",
  },
  {
    id: "testimonial-2",
    quote:
      "Our little girl has been going to Adele since she was 10 months old. The first thing she asks when she wakes up is if she is going to “Del's House” with the most excited smile on her face!",
    quoteTwo:
      "Our daughter loves Adele as if she was family and is clearly comfortable and confident in her care, which we have seen right from the start.",
    name: "Parent review",
  },
  {
    id: "testimonial-3",
    quote:
      "Adele really cares for all of the children and her home is a warm and nurturing environment.",
    quoteTwo:
      "Our children thoroughly enjoy their time at Del's House, and we are very happy and confident in the care she provides. We would highly recommend her.",
    name: "Parent review",
  },
];

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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F0E8] text-[#241C2B]">

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <header className="absolute left-0 right-0 top-0 z-[100] px-6 py-6 md:px-10 md:py-8 pointer-events-auto">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between">

          <a
            href="/"
            className="text-[1.15rem] font-semibold tracking-[-0.04em] transition-opacity hover:opacity-60 md:text-[1.3rem]"
          >
            Del&apos;s House
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 text-[0.72rem] font-medium uppercase tracking-[0.12em] md:flex">
            <a
              href="/#about"
              className="transition-opacity hover:opacity-50"
            >
              About
            </a>

            <a
              href="/#day"
              className="transition-opacity hover:opacity-50"
            >
              Del&apos;s House
            </a>

            <a
              href="/#pricing"
              className="transition-opacity hover:opacity-50"
            >
              Pricing
            </a>

            <a
              href="/#hours"
              className="transition-opacity hover:opacity-50"
            >
              Working Hours
            </a>

            <a
              href="/testimonials"
              className="transition-opacity hover:opacity-50"
            >
              Testimonials
            </a>

            <a
              href="/enquire"
              className="group ml-2 flex items-center gap-3 border-b border-[#241C2B]/30 pb-1 transition-colors hover:border-[#241C2B]"
            >
              <span>Enquire</span>
              <Arrow />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-[110] flex h-12 w-12 items-center justify-center text-xl md:hidden touch-manipulation"
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </nav>

        {/* Mobile navigation */}
{menuOpen && (
  <div
    className="
      absolute
      left-4
      right-4
      top-[4.5rem]
      z-[105]
      overflow-hidden
      rounded-[1.5rem]
      border
      border-[#241C2B]/10
      bg-[#F4F0E8]
      text-[#241C2B]
      shadow-[0_20px_60px_rgba(36,28,43,0.14)]
      md:hidden
    "
  >
    <div className="p-6">

      {/* Navigation links */}
      <div className="flex flex-col">

        {[
          ["About", "/#about"],
          ["Del's House", "/#day"],
          ["Pricing", "/#pricing"],
          ["Working Hours", "/#hours"],
          ["Testimonials", "/testimonials"],
        ].map(([label, href], index) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`
              flex
              items-center
              justify-between
              py-4
              text-[1.05rem]
              font-bold
              tracking-[-0.02em]
              transition-opacity
              hover:opacity-50
              ${index !== 0 ? "border-t border-[#241C2B]/10" : ""}
            `}
          >
            <span>{label}</span>

            <span className="text-[#907A91]">
              <Arrow />
            </span>
          </a>
        ))}

      </div>


      {/* Enquiry */}
      <a
        href="/enquire"
        onClick={() => setMenuOpen(false)}
        className="
          group
          mt-6
          flex
          items-center
          justify-between
          rounded-full
          bg-[#241C2B]
          px-6
          py-4
          text-sm
          font-bold
          uppercase
          tracking-[0.12em]
          text-[#F4F0E8]
          transition-transform
          duration-300
          hover:scale-[1.01]
        "
      >
        <span>Enquire about a place</span>

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            transition-transform
            duration-300
            group-hover:rotate-[-12deg]
          "
        >
          <Arrow />
        </span>
      </a>


      {/* Social links */}
      <div className="mt-7 border-t border-[#241C2B]/10 pt-6">

        <p
          className="
            mb-4
            text-[0.62rem]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#907A91]
          "
        >
          Follow Del&apos;s House
        </p>

        <div className="flex gap-3">

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#907A91]/30
              bg-[#E7D9E8]
              text-[#806A82]
              transition-all
              duration-300
              hover:bg-[#806A82]
              hover:text-[#F4F0E8]
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.3"
                cy="6.7"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>


          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#907A91]/30
              bg-[#E7D9E8]
              text-[#806A82]
              transition-all
              duration-300
              hover:bg-[#806A82]
              hover:text-[#F4F0E8]
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.3l.7-4H13V9c0-.7.3-1 1-1Z" />
            </svg>
          </a>

        </div>

      </div>

    </div>
  </div>
)}
        
      </header>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          h-[100svh]
          min-h-[600px]
          overflow-hidden
          px-6
          md:px-10
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[28rem]
            w-[28rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#E8D8E8]/35
            blur-3xl
            md:h-[40rem]
            md:w-[40rem]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            flex
            w-[calc(100%-3rem)]
            max-w-[1000px]
            -translate-x-1/2
            -translate-y-[43%]
            flex-col
            items-center
            text-center
            md:w-[calc(100%-5rem)]
            md:-translate-y-[40%]
          "
        >

          <p
            className="
              mb-5
              text-[0.58rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#766A76]
              md:mb-7
              md:text-[0.68rem]
            "
          >
            Childminding · Urmston · Manchester
          </p>

          <h1
            className="
              max-w-[850px]
              text-[clamp(3.2rem,7.3vw,7.5rem)]
              font-medium
              leading-[0.86]
              tracking-[-0.075em]
            "
          >
            A child&apos;s
            <br />
            home from home.
          </h1>

          <div
            className="
              relative
              mt-7
              flex
              w-[250px]
              items-center
              justify-center
              md:mt-8
              md:w-[350px]
              lg:w-[410px]
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                inset-[-12%]
                rounded-full
                bg-[#D9C4E2]/20
                blur-3xl
              "
            />

            <img
              src="/images/logo1.png"
              alt="Del's House"
              className="
                relative
                z-10
                h-auto
                w-full
                object-contain
                transition-transform
                duration-700
                ease-out
                hover:-translate-y-1
              "
            />

          </div>

        </div>


        {/* Bottom hero controls */}

        <a
          href="#about"
          className="
            absolute
            bottom-6
            left-6
            z-30
            hidden
            items-center
            gap-3
            text-[0.58rem]
            font-medium
            uppercase
            tracking-[0.2em]
            text-[#766A76]
            md:bottom-7
            md:left-10
            md:flex
          "
        >
          <span className="h-px w-8 bg-[#766A76]/40" />
          Scroll to explore
        </a>


        <a
          href="/enquire"
          className="
            group
            absolute
            bottom-5
            right-6
            z-30
            flex
            items-center
            gap-3
            text-[0.61rem]
            font-semibold
            uppercase
            tracking-[0.12em]
            md:bottom-6
            md:right-10
            md:text-[0.68rem]
          "
        >

          <span
            className="
              border-b
              border-[#241C2B]/35
              pb-1
              transition-colors
              group-hover:border-[#241C2B]
            "
          >
            Enquire about a place
          </span>

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#241C2B]/25
              transition-all
              duration-300
              group-hover:-rotate-12
              group-hover:bg-[#241C2B]
              group-hover:text-white
            "
          >
            <Arrow />
          </span>

        </a>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="bg-[#DDE5D7] px-6 py-24 md:px-10 md:py-36"
      >

      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 md:items-center md:gap-16">

  <div className="order-2 mx-auto w-[78%] overflow-hidden md:order-1 md:mx-0 md:w-full">
    <img
      src="/images/adele.jpg"
      alt="Adele Taylor"
      className="aspect-[4/5] w-full object-cover"
    />
  </div>

  <div className="order-1 md:order-2 md:pl-8 lg:pl-14"> 
            <h2
              className="
                max-w-xl
                text-[clamp(3rem,6vw,6rem)]
                font-bold
                leading-[0.88]
                tracking-[-0.065em]
                text-[#241C2B]
              "
            >
              My name&apos;s
              <br />
              Adele.
            </h2>


            <div
              className="
                mt-8
                max-w-xl
                space-y-5
                text-[1.08rem]
                font-semibold
                leading-[1.75]
                tracking-[-0.015em]
                text-[#4F5B52]
                md:text-[1.18rem]
                md:leading-[1.7]
              "
            >

              <p>
                I&apos;ve been a childminder for over 20 years, and I absolutely
                love what I do.
              </p>

              <p>
                Del&apos;s House is a place where children can feel happy, safe
                and completely themselves. I love watching their little
                personalities grow, helping them learn through play and giving
                them plenty of opportunities to explore the world around them.
              </p>

              <p>
                We&apos;re out and about most days, whether that&apos;s meeting
                friends at toddler groups, exploring the local community or
                heading off on an exciting adventure during the holidays.
              </p>

              <p>
                I&apos;m also lucky to work alongside a lovely group of local
                childminders, so the children have the chance to make lots of
                friendships and become part of a really close community.
              </p>

            </div>


            <a
              href="/about"
              className="
                group
                mt-10
                inline-flex
                items-center
                border-b
                border-[#241C2B]/40
                pb-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                transition-colors
                hover:border-[#241C2B]
              "
            >
              Learn more about me

              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEL'S HOUSE
      ====================================================== */}

      <section
        id="day"
        className="bg-[#F4F0E8] px-6 py-24 md:px-10 md:py-36"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">

            <div>

              <p
                className="
                  text-[0.82rem]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#907A91]
                  md:text-[0.9rem]
                "
              >
                Del&apos;s House
              </p>

              <h2
                className="
                  mt-6
                  max-w-5xl
                  text-[clamp(3.4rem,6.5vw,7.5rem)]
                  font-bold
                  leading-[0.88]
                  tracking-[-0.07em]
                  text-[#241C2B]
                "
              >
                A place to play,
                <br />
                explore &amp; grow.
              </h2>

            </div>


            <div className="md:pb-3">

              <p
                className="
                  max-w-md
                  text-[1.05rem]
                  font-semibold
                  leading-[1.75]
                  tracking-[-0.01em]
                  text-[#4F5750]
                  md:text-[1.15rem]
                  md:leading-[1.7]
                "
              >
                Del&apos;s House is a welcoming home-from-home where children
                can learn through play, spend time outdoors and become part of
                a close little community.
              </p>

              <a
                href="/dels-house"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  border-b
                  border-[#241C2B]/40
                  pb-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.13em]
                  transition-colors
                  hover:border-[#241C2B]
                "
              >
                Explore Del&apos;s House

                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>

            </div>

          </div>


          <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-[1.35fr_0.65fr]">

            <div className="group overflow-hidden">
              <img
                src="/images/setting-5.jpg"
                alt="The setting at Del's House"
                className="
                  aspect-[4/3]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.025]
                "
              />
            </div>

            <div className="group overflow-hidden md:mt-16">
              <img
                src="/images/setting.jpg"
                alt="Inside Del's House"
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.025]
                "
              />
            </div>

          </div>


          <div
            className="
              mt-12
              flex
              flex-col
              gap-5
              border-t
              border-[#241C2B]/10
              pt-6
              md:mt-16
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#907A91]
              "
            >
              Days at Del&apos;s House
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRICING
      ====================================================== */}

      <section
        id="pricing"
        className="bg-[#E7D9E8] px-6 py-28 md:px-10 md:py-40"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr] md:items-center">

            <div>

              <p
                className="
                  text-[0.72rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#806A82]
                "
              >
                Pricing
              </p>

              <h2
                className="
                  mt-5
                  max-w-4xl
                  text-[clamp(4rem,7vw,8rem)]
                  font-bold
                  leading-[0.82]
                  tracking-[-0.08em]
                  text-[#241C2B]
                "
              >
                Childcare
                <br />
                that feels
                <br />
                <span className="font-medium italic">
                  right.
                </span>
              </h2>

            </div>


            <div className="md:pt-16">

              <p
                className="
                  max-w-md
                  text-[1.15rem]
                  font-semibold
                  leading-[1.65]
                  tracking-[-0.015em]
                  text-[#514C53]
                  md:text-[1.3rem]
                "
              >
                I understand how expensive childcare can be. As a mum myself,
                I know how important it is to find something that works for
                your family.
              </p>

              <p
                className="
                  mt-6
                  max-w-md
                  text-[1.05rem]
                  font-medium
                  leading-[1.7]
                  text-[#68606A]
                  md:text-[1.1rem]
                "
              >
                I always try to keep my prices as attractive as possible,
                while giving the children a fun, active and nurturing place
                to spend their days.
              </p>

              <a
                href="/pricing"
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  border-b
                  border-[#241C2B]/40
                  pb-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                "
              >
                See our pricing

                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>

            </div>

          </div>

        </div>
      </section>

    
{/* =====================================================
    WORKING HOURS
====================================================== */}

<section
  id="hours"
  className="bg-[#F4F0E8] px-6 py-28 md:px-10 md:py-40"
>
  <div className="mx-auto max-w-[1400px]">

    <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-end">

      {/* Heading */}
      <div>
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#907A91]">
          Working hours
        </p>

        <h2
          className="
            mt-6
            max-w-2xl
            text-[clamp(4rem,8vw,9rem)]
            font-bold
            leading-[0.82]
            tracking-[-0.085em]
          "
        >
          Time to
          <br />
          <span className="font-medium italic">
            play.
          </span>
        </h2>
      </div>


      {/* Content */}
      <div className="md:pb-2">

        <p
          className="
            max-w-2xl
            text-[clamp(1.5rem,2.4vw,2.25rem)]
            font-bold
            leading-[1.2]
            tracking-[-0.035em]
            text-[#241C2B]
          "
        >
          At Del&apos;s House, I like to be available whenever
          your family needs me.
        </p>

        <p
          className="
            mt-7
            max-w-xl
            text-base
            font-bold
            leading-7
            text-[#68606A]
            md:text-lg
            md:leading-8
          "
        >
          I&apos;m open Monday to Friday, with flexible times available
          where possible. School holiday care is also available, so
          children can continue to enjoy their time at Del&apos;s House
          when school is out.
        </p>


        {/* CTA */}
        <a
          href="/hours"
          className="
            group
            mt-10
            inline-flex
            items-center
            gap-4
            border-b
            border-[#241C2B]/40
            pb-3
            text-sm
            font-bold
            uppercase
            tracking-[0.14em]
            transition-colors
            hover:border-[#241C2B]
          "
        >
          View working hours

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#241C2B]/25
              text-base
              transition-all
              duration-300
              group-hover:-rotate-12
              group-hover:bg-[#241C2B]
              group-hover:text-white
            "
          >
            <Arrow />
          </span>
        </a>

      </div>

    </div>

  </div>
</section>


  {/* =====================================================
    TESTIMONIALS
====================================================== */}

<section
  id="testimonials"
  className="bg-[#E7D9E8] px-6 py-28 md:px-10 md:py-40"
>
  <div className="mx-auto max-w-[1400px]">

    {/* Section heading */}
    <div className="flex flex-col gap-8 border-b border-[#241C2B]/15 pb-10 md:flex-row md:items-end md:justify-between">

      <div>
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#806A82]">
          Testimonials
        </p>

        <h2
          className="
            mt-5
            text-[clamp(3.8rem,7vw,8rem)]
            font-bold
            leading-[0.82]
            tracking-[-0.075em]
            text-[#241C2B]
          "
        >
          What parents
          <br />
          say.
        </h2>
      </div>

      <a
        href="/testimonials"
        className="
          group
          inline-flex
          w-fit
          shrink-0
          items-center
          border-b
          border-[#241C2B]/40
          pb-2
          text-xs
          font-bold
          uppercase
          tracking-[0.14em]
        "
      >
        View testimonials

        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
          <Arrow />
        </span>
      </a>

    </div>


    {/* Reviews */}
    <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-3">

      {/* Review 1 */}
      <div className="flex flex-col bg-[#F4F0E8] p-8 md:p-10">

        <div className="text-3xl font-bold leading-none text-[#806A82]">
          “
        </div>

        <p className="mt-6 text-[0.98rem] font-semibold leading-7 text-[#514C53]">
          Adele is an amazing and knowledgeable childminder. Our son has been
          with her since he was 10 months old and absolutely loves going.
          She takes the children on wonderful trips to toddler groups, parks
          and beaches, while keeping us updated on their learning and
          development.
        </p>

        <p className="mt-6 text-[0.98rem] font-semibold leading-7 text-[#514C53]">
          Her home is warm and nurturing, and she genuinely cares about every
          child. We are incredibly happy and confident in the care she provides.
        </p>

        <div className="mt-auto pt-10">
          <div className="flex gap-1 text-[#806A82]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#68606A]">
            Parent review
          </p>
        </div>

      </div>


      {/* Review 2 */}
      <div className="flex flex-col bg-[#F4F0E8] p-8 md:p-10">

        <div className="text-3xl font-bold leading-none text-[#806A82]">
          “
        </div>

        <p className="mt-6 text-[0.98rem] font-semibold leading-7 text-[#514C53]">
          Our little girl has been going to Adele since she was 10 months old.
          The first thing she asks when she wakes up is whether she is going to
          “Del&apos;s House”, with the biggest smile on her face.
        </p>

        <p className="mt-6 text-[0.98rem] font-semibold leading-7 text-[#514C53]">
          She loves Adele as if she were family and has always been comfortable
          and confident in her care.
        </p>

        <div className="mt-auto pt-10">
          <div className="flex gap-1 text-[#806A82]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#68606A]">
            Parent review
          </p>
        </div>

      </div>


      {/* Review 3 */}
      <div className="flex flex-col bg-[#F4F0E8] p-8 md:p-10">

        <div className="text-3xl font-bold leading-none text-[#806A82]">
          “
        </div>

        <p className="mt-6 text-[0.98rem] font-semibold leading-7 text-[#514C53]">
          Adele creates such a warm, caring and stimulating environment. The
          children are always out exploring, meeting friends and enjoying new
          experiences, while being supported to learn and develop at their
          own pace.
        </p>

        <p className="mt-6 text-[0.98rem] font-semibold leading-7 text-[#514C53]">
          We would highly recommend Del&apos;s House to any family looking for
          a safe, nurturing and genuinely enjoyable place for their child.
        </p>

        <div className="mt-auto pt-10">
          <div className="flex gap-1 text-[#806A82]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#68606A]">
            Parent review
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
  
  {/* =====================================================
    ENQUIRE
====================================================== */}

<section
  id="enquire"
  className="bg-[#DDE5D7] px-6 py-28 md:px-10 md:py-40"
>
  <div className="mx-auto max-w-[1400px]">

    <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-end">

      {/* Heading */}
      <div>

        <p
          className="
            text-[0.72rem]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#687F6A]
            md:text-[0.82rem]
          "
        >
          Enquiries
        </p>

        <h2
          className="
            mt-6
            max-w-5xl
            text-[clamp(4rem,8vw,9rem)]
            font-bold
            leading-[0.82]
            tracking-[-0.085em]
            text-[#241C2B]
          "
        >
          Let&apos;s talk
          <br />
          <span className="font-medium italic">
            about your little one.
          </span>
        </h2>

      </div>


      {/* Content */}
      <div className="md:pb-2">

        <p
          className="
            max-w-md
            text-[1.15rem]
            font-bold
            leading-[1.55]
            tracking-[-0.015em]
            text-[#4F5750]
            md:text-[1.3rem]
            md:leading-[1.6]
          "
        >
          If you&apos;re looking for a warm, welcoming place for your child,
          I&apos;d love to hear from you.
        </p>

        <p
          className="
            mt-6
            max-w-md
            text-base
            font-semibold
            leading-7
            text-[#68706A]
            md:text-lg
            md:leading-8
          "
        >
          Tell me a little about your family and what you&apos;re looking for,
          and I&apos;ll get back to you as soon as I can.
        </p>

        <a
          href="/enquire"
          className="
            group
            mt-10
            inline-flex
            items-center
            gap-4
            border-b
            border-[#241C2B]/40
            pb-3
            text-sm
            font-bold
            uppercase
            tracking-[0.14em]
            transition-colors
            hover:border-[#241C2B]
          "
        >
          Make an enquiry

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#241C2B]/25
              transition-all
              duration-300
              group-hover:-rotate-12
              group-hover:bg-[#241C2B]
              group-hover:text-white
            "
          >
            <Arrow />
          </span>
        </a>

      </div>

    </div>

    {/* Bottom marker */}
    <div
      className="
        mt-20
        flex
        items-center
        justify-between
        border-t
        border-[#241C2B]/10
        pt-6
        md:mt-28
      "
    >
      <p
        className="
          text-xs
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#687F6A]
        "
      >
        Del&apos;s House
      </p>

      <p
        className="
          text-xs
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#687F6A]
        "
      >
        Urmston · Manchester
      </p>
    </div>

  </div>
</section>
  
      {/* =====================================================
          FOOTER
      ====================================================== */}

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

            <a href="/#about" className="hover:text-white">
              About
            </a>

            <a href="/#day" className="hover:text-white">
              Del&apos;s House
            </a>

            <a href="/#pricing" className="hover:text-white">
              Pricing
            </a>

            <a href="/#hours" className="hover:text-white">
              Working Hours
            </a>

            <a href="/testimonials" className="hover:text-white">
              Testimonials
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

            <a href="#" className="hover:text-white">
              Privacy
            </a>

          </div>

        </div>

      </footer>

    </main>
  );

}