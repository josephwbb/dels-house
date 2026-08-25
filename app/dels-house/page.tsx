"use client";

import { useState } from "react";

const photos = Array.from({ length: 20 }, (_, index) => ({
  number: String(index + 1).padStart(2, "0"),
  src: `/images/dels-house/dels-house-${String(index + 1).padStart(
    2,
    "0"
  )}.jpg?v=2`,
}));

const settingNumbers = ["03", "06", "07", "17", "20"];

const settingPhotos = photos.filter((photo) =>
  settingNumbers.includes(photo.number)
);

const activityPhotos = photos.filter(
  (photo) => !settingNumbers.includes(photo.number)
);

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

export default function DelsHousePage() {
  const [activePhoto, setActivePhoto] = useState(1);
  const [expandedSettingPhoto, setExpandedSettingPhoto] = useState<string | null>(
    null
  );

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
              transition-all
              duration-300
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

      <section className="px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">

        <div className="mx-auto max-w-[1400px]">

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#907A91]" />

            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#907A91]">
              Del&apos;s House
            </p>
          </div>

          <div className="mt-6 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">

            <h1
              className="
                max-w-5xl
                text-[clamp(4rem,8vw,9rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.085em]
              "
            >
              A home to
              <br />
              play &amp; grow.
            </h1>

            <div className="max-w-md md:pb-2">

              <p className="text-[1.08rem] font-bold leading-[1.65] tracking-[-0.015em] text-[#514C53] md:text-[1.2rem]">
                Del&apos;s House is a warm, welcoming home-from-home where
                little ones can play, explore, learn and simply enjoy being
                children.
              </p>

              <p className="mt-5 text-sm font-semibold leading-7 text-[#68606A]">
                A safe and stimulating space, filled with opportunities for
                imaginative play, discovery and plenty of time outdoors.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          THE SETTING
      ====================================================== */}

      <section className="pb-28 md:pb-40">

        <div className="mx-auto max-w-[1400px] px-6 md:px-10">

          <div className="flex items-end justify-between border-t border-[#241C2B]/15 pt-5">

            <div>
              <p className="text-[clamp(2.8rem,5vw,5.5rem)] font-bold leading-[0.88] tracking-[-0.075em] text-[#687F6A]">
                The setting
              </p>

              <p className="mt-4 max-w-lg text-xs font-medium leading-5 text-[#68606A] md:text-sm">
                A closer look at the warm, welcoming spaces that make
                Del&apos;s House feel like home.
              </p>
            </div>

          </div>


          {/* Main setting image */}

          <button
            type="button"
            onClick={() => setExpandedSettingPhoto(settingPhotos[0].src)}
            className="mt-8 block w-full text-left md:mt-10"
            aria-label="Expand setting photo"
          >
            <figure
              className="
                group
                relative
                h-[52vh]
                max-h-[680px]
                min-h-[360px]
                overflow-hidden
                bg-[#E7D9E8]
                shadow-[0_18px_45px_rgba(36,28,43,0.10)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_24px_55px_rgba(36,28,43,0.16)]
                md:h-[64vh]
              "
            >

              <img
                src={settingPhotos[0].src}
                alt="Del's House setting"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.025]
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#241C2B]/25 via-transparent to-transparent opacity-60" />

              <div className="pointer-events-none absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#F4F0E8]/70 bg-[#F4F0E8]/85 text-[#241C2B] opacity-0 shadow-[0_6px_18px_rgba(36,28,43,0.12)] backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-lg leading-none">+</span>
              </div>

            </figure>
          </button>


          {/* Supporting setting images */}

          <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">

            {settingPhotos.slice(1).map((photo) => (

              <button
                type="button"
                key={photo.number}
                onClick={() => setExpandedSettingPhoto(photo.src)}
                className="block w-full text-left"
                aria-label="Expand setting photo"
              >
                <figure
                  className="
                    group
                    relative
                    h-[30vh]
                    min-h-[220px]
                    overflow-hidden
                    bg-[#E7D9E8]
                    shadow-[0_14px_35px_rgba(36,28,43,0.09)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_45px_rgba(36,28,43,0.14)]
                    md:h-[34vh]
                  "
                >

                  <img
                    src={photo.src}
                    alt="Del's House setting"
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#241C2B]/20 via-transparent to-transparent opacity-60" />

                  <div className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#F4F0E8]/70 bg-[#F4F0E8]/85 text-[#241C2B] opacity-0 shadow-[0_5px_15px_rgba(36,28,43,0.10)] backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-base leading-none">+</span>
                  </div>

                </figure>
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SETTING LIGHTBOX
      ====================================================== */}

      {expandedSettingPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#241C2B]/90 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setExpandedSettingPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded setting photo"
        >

          <button
            type="button"
            onClick={() => setExpandedSettingPhoto(null)}
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/25
              bg-[#F4F0E8]/90
              text-2xl
              font-light
              leading-none
              text-[#241C2B]
              shadow-[0_8px_25px_rgba(0,0,0,0.18)]
              transition-transform
              duration-300
              hover:rotate-90
            "
            aria-label="Close expanded photo"
          >
            ×
          </button>

          <img
            src={expandedSettingPhoto}
            alt="Del's House setting"
            className="
              max-h-[92vh]
              max-w-[96vw]
              object-contain
              shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              md:max-h-[88vh]
              md:max-w-[92vw]
            "
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}


      {/* =====================================================
          HORIZONTAL GALLERY
      ====================================================== */}

      <section className="pb-28 md:pb-40">

        <div className="mx-auto max-w-[1400px] px-6 md:px-10">

          <div className="flex items-end justify-between border-t border-[#241C2B]/15 pt-5">

            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#907A91]">
                Around Del&apos;s House
              </p>

              <p className="mt-2 text-xs font-medium text-[#68606A]">
                A closer look at the spaces children enjoy every day.
              </p>
            </div>

            <div className="hidden items-center gap-4 md:flex">

              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#68606A]">
                Scroll to explore
              </p>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#241C2B]/20">
                <Arrow />
              </span>

            </div>

          </div>

        </div>


        {/* Gallery */}

        <div
          className="
            mt-8
            flex
            gap-5
            overflow-x-auto
            px-6
            pb-6
            scrollbar-hide
            md:mt-10
            md:gap-7
            md:px-10
          "
          onScroll={(event) => {
            const element = event.currentTarget;

            const maxScroll =
              element.scrollWidth - element.clientWidth;

            const progress =
              maxScroll > 0
                ? element.scrollLeft / maxScroll
                : 0;

            const index =
              Math.round(
                progress * (activityPhotos.length - 1)
              ) + 1;

            setActivePhoto(
              Math.max(
                1,
                Math.min(activityPhotos.length, index)
              )
            );
          }}
        >

          {activityPhotos.map((photo) => (

            <figure
              key={photo.number}
              className="
                group
                relative
                h-[58vh]
                max-h-[720px]
                min-h-[420px]
                shrink-0
                overflow-hidden
                bg-[#E7D9E8]
                shadow-[0_18px_45px_rgba(36,28,43,0.10)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_24px_55px_rgba(36,28,43,0.16)]
                md:h-[68vh]
              "
            >

              <img
                src={photo.src}
                alt={`Del's House ${photo.number}`}
                className="
                  block
                  h-full
                  w-auto
                  max-w-[78vw]
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.025]
                  md:max-w-[48vw]
                "
              />

              {/* Soft overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#241C2B]/20 via-transparent to-transparent opacity-60" />

              {/* Number */}

              <figcaption
                className="
                  absolute
                  bottom-4
                  left-4
                  flex
                  h-9
                  min-w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F4F0E8]/90
                  px-3
                  text-[0.62rem]
                  font-bold
                  tracking-[0.12em]
                  shadow-[0_6px_18px_rgba(36,28,43,0.12)]
                  backdrop-blur-sm
                "
              >
                {photo.number}
              </figcaption>

            </figure>

          ))}

        </div>


        {/* Gallery progress */}

        <div className="mx-auto mt-3 flex max-w-[1400px] items-center gap-5 px-6 md:px-10">

          <div className="h-px flex-1 bg-[#241C2B]/10">

            <div
              className="h-px bg-[#241C2B]/45 transition-all duration-300"
              style={{
                width: `${
                  (activePhoto / activityPhotos.length) * 100
                }%`,
              }}
            />

          </div>

          <p className="min-w-[55px] text-right text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#68606A]">
            {String(activePhoto).padStart(2, "0")} /{" "}
            {activityPhotos.length}
          </p>

        </div>


        {/* Mobile scroll hint */}

        <div className="mx-auto mt-5 flex max-w-[1400px] items-center gap-3 px-6 md:hidden">

          <span className="h-px w-8 bg-[#241C2B]/25" />

          <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#68606A]">
            Swipe to explore
          </p>

        </div>

      </section>


      {/* =====================================================
          ABOUT THE SPACE
      ====================================================== */}

      <section className="bg-[#DDE5D7] px-6 py-24 md:px-10 md:py-36">

        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">

          <div>

            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-full bg-[#687F6A]" />

              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#687F6A]">
                The setting
              </p>

            </div>

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
              Made for
              <br />
              little people.
            </h2>

          </div>


          <div className="max-w-2xl md:pb-2">

            <p className="text-[1.15rem] font-bold leading-[1.65] tracking-[-0.015em] text-[#4F5B52] md:text-[1.3rem]">
              Everything at Del&apos;s House is designed around the children.
              There is space to play, create, rest and discover, with a calm
              and welcoming environment that feels like home.
            </p>

            <p className="mt-6 text-base font-semibold leading-7 text-[#596359]">
              From imaginative play and toys to books, activities and
              opportunities to explore outside, each day gives children the
              freedom to learn and have fun at their own pace.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          LITTLE DETAILS
      ====================================================== */}

      <section className="px-6 py-20 md:px-10 md:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid border-y border-[#241C2B]/15 md:grid-cols-3">

            <div className="border-b border-[#241C2B]/15 px-1 py-8 md:border-b-0 md:border-r md:px-8 md:py-10">

              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#907A91]">
                01
              </p>

              <h3 className="mt-4 text-xl font-bold tracking-[-0.035em]">
                Space to play
              </h3>

              <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-[#68606A]">
                A home environment with room for imaginative play, activities
                and everyday adventures.
              </p>

            </div>


            <div className="border-b border-[#241C2B]/15 px-1 py-8 md:border-b-0 md:border-r md:px-8 md:py-10">

              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#907A91]">
                02
              </p>

              <h3 className="mt-4 text-xl font-bold tracking-[-0.035em]">
                Safe &amp; welcoming
              </h3>

              <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-[#68606A]">
                A familiar setting where children can settle in, feel
                comfortable and enjoy their day.
              </p>

            </div>


            <div className="px-1 py-8 md:px-8 md:py-10">

              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#907A91]">
                03
              </p>

              <h3 className="mt-4 text-xl font-bold tracking-[-0.035em]">
                A place to discover
              </h3>

              <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-[#68606A]">
                Toys, books, activities and opportunities to learn through
                curiosity and play.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#E7D9E8] px-6 py-28 md:px-10 md:py-40">

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#806A82]" />

                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#806A82]">
                  Come and see for yourself
                </p>

              </div>

              <h2
                className="
                  mt-5
                  max-w-4xl
                  text-[clamp(3.8rem,7vw,8rem)]
                  font-bold
                  leading-[0.82]
                  tracking-[-0.08em]
                "
              >
                A little place
                <br />
                to feel at home.
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
                border-[#241C2B]/40
                pb-3
                text-sm
                font-bold
                uppercase
                tracking-[0.14em]
                transition-opacity
                hover:opacity-70
              "
            >
              Enquire about a place

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

            <a href="/about" className="transition-colors hover:text-white">
              About
            </a>

            <a
              href="/dels-house"
              className="transition-colors hover:text-white"
            >
              Del&apos;s House
            </a>

            <a
              href="/pricing"
              className="transition-colors hover:text-white"
            >
              Pricing
            </a>

            <a
              href="/hours"
              className="transition-colors hover:text-white"
            >
              Working Hours
            </a>

            <a
              href="/testimonials"
              className="transition-colors hover:text-white"
            >
              Testimonials
            </a>

            <a
              href="/enquire"
              className="transition-colors hover:text-white"
            >
              Enquire
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}