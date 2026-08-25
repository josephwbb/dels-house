
"use client";

import { useForm, ValidationError } from "@formspree/react";

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

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.7"
        r="0.7"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8h3.4Z" />
    </svg>
  );
}

const inputClass =
  "mt-2 w-full rounded-2xl border border-[#241C2B]/12 bg-[#F4F0E8] px-4 py-3.5 text-[0.95rem] font-medium text-[#241C2B] outline-none transition-all placeholder:text-[#241C2B]/35 focus:border-[#907A91] focus:bg-white focus:ring-4 focus:ring-[#907A91]/10";

const textareaClass =
  "mt-2 min-h-[120px] w-full resize-y rounded-2xl border border-[#241C2B]/12 bg-[#F4F0E8] px-4 py-3.5 text-[0.95rem] font-medium leading-7 text-[#241C2B] outline-none transition-all placeholder:text-[#241C2B]/35 focus:border-[#907A91] focus:bg-white focus:ring-4 focus:ring-[#907A91]/10";

const labelClass =
  "text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#514C53]";

export default function EnquirePage() {
  const [state, handleSubmit] = useForm("xdenqglz");

  if (state.succeeded) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#F4F0E8] text-[#241C2B]">
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
              className="group flex items-center gap-3 border-b border-[#241C2B]/30 pb-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
            >
              <span>Back to home</span>
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                <Arrow />
              </span>
            </a>
          </nav>
        </header>

        <section className="px-6 pb-28 pt-16 md:px-10 md:pb-40 md:pt-24">
          <div className="mx-auto max-w-[1000px]">
            <div className="rounded-[2rem] border border-[#687F6A]/20 bg-[#DDE5D7] px-7 py-16 text-center md:px-16 md:py-24">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#687F6A]">
                Enquiry received
              </p>

              <h1 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.88] tracking-[-0.07em]">
                Thank you.
              </h1>

              <p className="mx-auto mt-7 max-w-xl text-base font-semibold leading-7 text-[#596359] md:text-lg">
                Thank you for taking the time to tell me about your child.
                I&apos;ll read through your enquiry and get back to you as soon
                as possible.
              </p>

              <a
                href="/"
                className="group mx-auto mt-10 inline-flex items-center gap-4 border-b border-[#241C2B]/35 pb-2 text-xs font-bold uppercase tracking-[0.14em]"
              >
                Back to home
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-[#241C2B]/10 bg-[#DDE5D7] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-12 md:grid-cols-2 md:items-end">
              <div>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#687F6A]">
                  Keep in touch
                </p>

                <h2 className="mt-5 max-w-3xl text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[0.86] tracking-[-0.075em]">
                  Find Del&apos;s
                  <br />
                  House online.
                </h2>
              </div>

              <div className="md:pb-2">
                <p className="max-w-md text-base font-semibold leading-7 text-[#596359]">
                  You can also follow along and get a feel for life at
                  Del&apos;s House through social media.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/adele6202/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Del's House on Instagram"
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#241C2B]/20 bg-[#F4F0E8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#241C2B] hover:text-[#F4F0E8]"
                  >
                    <InstagramIcon />
                  </a>

                  <a
                    href="https://www.facebook.com/adele.taylor.54"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Del's House on Facebook"
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#241C2B]/20 bg-[#F4F0E8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#241C2B] hover:text-[#F4F0E8]"
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href="mailto:adeletaylor1976@gmail.com"
                    className="flex h-14 items-center rounded-full border border-[#241C2B]/20 bg-[#F4F0E8] px-6 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#241C2B] hover:text-[#F4F0E8]"
                  >
                    Email Adele
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F0E8] text-[#241C2B]">
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
            className="group flex items-center gap-3 border-b border-[#241C2B]/30 pb-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
          >
            <span>Back to home</span>
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              <Arrow />
            </span>
          </a>
        </nav>
      </header>

      <section className="px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#907A91]">
            Enquire
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="max-w-5xl text-[clamp(4rem,8vw,9rem)] font-bold leading-[0.82] tracking-[-0.085em]">
              Let&apos;s talk
              <br />
              childcare.
            </h1>

            <div className="max-w-md md:pb-2">
              <p className="text-[1.08rem] font-bold leading-[1.65] tracking-[-0.015em] text-[#514C53] md:text-[1.2rem]">
                Choosing the right childminder is a big decision. Tell me a
                little about your child, what you need and what you&apos;re
                looking for.
              </p>

              <p className="mt-5 text-sm font-semibold leading-7 text-[#68606A]">
                The enquiry form is deliberately detailed. Knowing as much as
                possible about your child beforehand helps me understand their
                needs and provide the best possible care from the very
                beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-[1180px]">
          <div className="overflow-hidden rounded-[2rem] border border-[#241C2B]/12 bg-[#E7D9E8] shadow-[0_20px_70px_rgba(36,28,43,0.08)]">
            <div className="border-b border-[#241C2B]/12 px-6 py-10 md:px-12 md:py-14">
              <div className="max-w-3xl">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#806A82]">
                  Your enquiry
                </p>

                <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.9] tracking-[-0.07em]">
                  Tell me about
                  <br />
                  your little one.
                </h2>

                <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-[#5E5660] md:text-base">
                  Please complete as much of the form as you can. You
                  don&apos;t need to have every answer, and anything you
                  would like to discuss can always be talked through later.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* SECTION 01 */}
              <fieldset className="border-b border-[#241C2B]/12 px-6 py-10 md:px-12 md:py-14">
                <legend className="sr-only">Child Information</legend>

                <div className="mb-8 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDE5D7] text-xs font-bold">
                    01
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                      Child information
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#68606A]">
                      Help me get to know your child.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="childName" className={labelClass}>
                      Child&apos;s full name
                    </label>
                    <input
                      id="childName"
                      name="Child's full name"
                      required
                      className={inputClass}
                      placeholder="Full name"
                    />
                    <ValidationError
                      prefix="Child's full name"
                      field="Child's full name"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredName" className={labelClass}>
                      Preferred name / nickname
                    </label>
                    <input
                      id="preferredName"
                      name="Preferred name / nickname"
                      className={inputClass}
                      placeholder="What do they like to be called?"
                    />
                  </div>

                  <div>
                    <label htmlFor="dob" className={labelClass}>
                      Date of birth / age
                    </label>
                    <input
                      id="dob"
                      name="Date of birth / age"
                      required
                      className={inputClass}
                      placeholder="e.g. 14 March 2023 / 3 years old"
                    />
                  </div>

                  <div>
                    <label htmlFor="languages" className={labelClass}>
                      Languages spoken at home
                    </label>
                    <input
                      id="languages"
                      name="Languages spoken at home"
                      className={inputClass}
                      placeholder="Primary and additional languages"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="personality" className={labelClass}>
                      Personality & temperament
                    </label>
                    <textarea
                      id="personality"
                      name="Personality & temperament"
                      className={textareaClass}
                      placeholder="Shy, energetic, cautious, outgoing, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="likes" className={labelClass}>
                      Likes & interests
                    </label>
                    <textarea
                      id="likes"
                      name="Likes & interests"
                      className={textareaClass}
                      placeholder="Favourite toys, activities, books, interests..."
                    />
                  </div>

                  <div>
                    <label htmlFor="dislikes" className={labelClass}>
                      Dislikes & comfort
                    </label>
                    <textarea
                      id="dislikes"
                      name="Dislikes & comfort"
                      className={textareaClass}
                      placeholder="Dislikes, comfort items or anything that may cause distress..."
                    />
                  </div>
                </div>
              </fieldset>

              {/* SECTION 02 */}
              <fieldset className="border-b border-[#241C2B]/12 bg-[#F4F0E8]/35 px-6 py-10 md:px-12 md:py-14">
                <legend className="sr-only">Care Schedule</legend>

                <div className="mb-8 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E7D9E8] text-xs font-bold">
                    02
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                      Care schedule
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#68606A]">
                      Tell me what childcare you need.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="startDate" className={labelClass}>
                      Required start date
                    </label>
                    <input
                      id="startDate"
                      name="Required start date"
                      className={inputClass}
                      placeholder="e.g. September 2026"
                    />
                  </div>

                  <div>
                    <label htmlFor="contractType" className={labelClass}>
                      Contract type
                    </label>
                    <select
                      id="contractType"
                      name="Contract type"
                      className={inputClass}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Please select
                      </option>
                      <option>Term-time only</option>
                      <option>Year-round care</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="daysTimes" className={labelClass}>
                      Days & exact drop-off / pick-up times
                    </label>
                    <textarea
                      id="daysTimes"
                      name="Days & exact drop-off / pick-up times"
                      className={textareaClass}
                      placeholder="e.g. Monday 8:00am–5:00pm, Wednesday 8:30am–5:30pm..."
                    />
                  </div>
                </div>
              </fieldset>

              {/* SECTION 03 */}
              <fieldset className="border-b border-[#241C2B]/12 px-6 py-10 md:px-12 md:py-14">
                <legend className="sr-only">
                  Medical Health and Dietary Needs
                </legend>

                <div className="mb-8 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDE5D7] text-xs font-bold">
                    03
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                      Health & dietary needs
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#68606A]">
                      Anything important for their health, safety or routine.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="medical" className={labelClass}>
                      Medical conditions / health concerns
                    </label>
                    <textarea
                      id="medical"
                      name="Medical conditions / health concerns"
                      className={textareaClass}
                      placeholder="Please include anything relevant to their care."
                    />
                  </div>

                  <div>
                    <label htmlFor="allergies" className={labelClass}>
                      Allergies & intolerances
                    </label>
                    <textarea
                      id="allergies"
                      name="Allergies & intolerances"
                      className={textareaClass}
                      placeholder="Food, skin, medication, environmental, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="medication" className={labelClass}>
                      Regular medication
                    </label>
                    <textarea
                      id="medication"
                      name="Regular medication"
                      className={textareaClass}
                      placeholder="Please include details if applicable."
                    />
                  </div>

                  <div>
                    <label htmlFor="diet" className={labelClass}>
                      Dietary requirements
                    </label>
                    <textarea
                      id="diet"
                      name="Dietary requirements"
                      className={textareaClass}
                      placeholder="Vegetarian, halal, specific restrictions or dislikes..."
                    />
                  </div>
                </div>
              </fieldset>

              {/* SECTION 04 */}
              <fieldset className="border-b border-[#241C2B]/12 bg-[#DDE5D7]/55 px-6 py-10 md:px-12 md:py-14">
                <legend className="sr-only">
                  Daily Routine and Development
                </legend>

                <div className="mb-8 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4F0E8] text-xs font-bold">
                    04
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                      Routine & development
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#596359]">
                      The little details that make their day easier.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="sleep" className={labelClass}>
                      Sleep / nap routine
                    </label>
                    <textarea
                      id="sleep"
                      name="Sleep / nap routine"
                      className={textareaClass}
                      placeholder="Times, duration and how they like to settle..."
                    />
                  </div>

                  <div>
                    <label htmlFor="potty" className={labelClass}>
                      Potty training
                    </label>
                    <select
                      id="potty"
                      name="Potty training"
                      className={inputClass}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Please select
                      </option>
                      <option>In nappies</option>
                      <option>Currently potty training</option>
                      <option>Fully independent</option>
                      <option>Other / not applicable</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="feeding" className={labelClass}>
                      Feeding routine
                    </label>
                    <textarea
                      id="feeding"
                      name="Feeding routine"
                      className={textareaClass}
                      placeholder="Breastfed, formula, bottles, meals, self-feeding..."
                    />
                  </div>

                  <div>
                    <label htmlFor="development" className={labelClass}>
                      Development & milestones
                    </label>
                    <textarea
                      id="development"
                      name="Development & milestones"
                      className={textareaClass}
                      placeholder="Walking, speech, social skills or anything you're working on..."
                    />
                  </div>
                </div>
              </fieldset>

              {/* SECTION 05 */}
              <fieldset className="border-b border-[#241C2B]/12 px-6 py-10 md:px-12 md:py-14">
                <legend className="sr-only">
                  Parent and Carer Details
                </legend>

                <div className="mb-8 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E7D9E8] text-xs font-bold">
                    05
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                      Parent & contact details
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#68606A]">
                      So I know how best to get back to you.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="parentName" className={labelClass}>
                      Parent / carer full name
                    </label>
                    <input
                      id="parentName"
                      name="Parent / carer full name"
                      required
                      className={inputClass}
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Contact number
                    </label>
                    <input
                      id="phone"
                      name="Contact number"
                      required
                      type="tel"
                      className={inputClass}
                      placeholder="Phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email address
                    </label>
                    <input
                      id="email"
                      name="Email address"
                      required
                      type="email"
                      className={inputClass}
                      placeholder="Email address"
                    />

                    <ValidationError
                      prefix="Email"
                      field="Email address"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className={labelClass}>
                      Home address
                    </label>
                    <input
                      id="address"
                      name="Home address"
                      className={inputClass}
                      placeholder="Home address"
                    />
                  </div>

                  <div>
                    <label htmlFor="emergency" className={labelClass}>
                      Emergency contact
                    </label>
                    <textarea
                      id="emergency"
                      name="Emergency contact"
                      className={textareaClass}
                      placeholder="Name, relationship and contact number..."
                    />
                  </div>

                  <div>
                    <label htmlFor="school" className={labelClass}>
                      School / preschool
                    </label>
                    <textarea
                      id="school"
                      name="School / preschool"
                      className={textareaClass}
                      placeholder="School or preschool name, if applicable."
                    />
                  </div>
                </div>
              </fieldset>

              {/* SECTION 06 */}
              <fieldset className="border-b border-[#241C2B]/12 bg-[#F4F0E8]/35 px-6 py-10 md:px-12 md:py-14">
                <legend className="sr-only">Additional Notes</legend>

                <div className="mb-8 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDE5D7] text-xs font-bold">
                    06
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                      A little more
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#68606A]">
                      Anything else you&apos;d like me to know.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div>
                    <label
                      htmlFor="previousChildcare"
                      className={labelClass}
                    >
                      Previous childcare experience
                    </label>
                    <textarea
                      id="previousChildcare"
                      name="Previous childcare experience"
                      className={textareaClass}
                      placeholder="Has your child been in formal childcare before? How did they settle?"
                    />
                  </div>

                  <div>
                    <label htmlFor="expectations" className={labelClass}>
                      What are you looking for in a childminder?
                    </label>
                    <textarea
                      id="expectations"
                      name="What are you looking for in a childminder?"
                      className={textareaClass}
                      placeholder="Outdoor play, learning approach, routine, activities, flexibility..."
                    />
                  </div>

                  <div>
                    <label htmlFor="additional" className={labelClass}>
                      Anything else?
                    </label>
                    <textarea
                      id="additional"
                      name="Anything else"
                      className={textareaClass}
                      placeholder="Anything else that would help me provide the best possible care?"
                    />
                  </div>
                </div>
              </fieldset>

              {state.errors && (
                <div className="mx-6 mt-8 rounded-2xl border border-red-900/10 bg-red-50 px-5 py-4 text-sm font-semibold text-red-900 md:mx-12">
                  Something went wrong while sending your enquiry. Please
                  check the form and try again.
                </div>
              )}

              <div className="px-6 py-10 md:px-12 md:py-14">
                <div className="rounded-[1.5rem] border border-[#241C2B]/10 bg-[#F4F0E8] px-6 py-7 md:px-8">
                  <p className="text-sm font-semibold leading-7 text-[#68606A]">
                    By submitting this enquiry, you are providing information
                    so that Adele can understand your childcare requirements
                    and respond to your enquiry.
                  </p>

                  <a
                    href="/childcare-policy"
                    className="mt-3 inline-block text-sm font-bold underline decoration-[#907A91] underline-offset-4"
                  >
                    View the childcare policy
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group mt-8 flex w-full items-center justify-center gap-5 rounded-full bg-[#241C2B] px-7 py-5 text-sm font-bold uppercase tracking-[0.14em] text-[#F4F0E8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#806A82] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>
                    {state.submitting ? "Sending enquiry..." : "Send enquiry"}
                  </span>

                  {!state.submitting && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  )}
                </button>

                <p className="mt-4 text-center text-xs font-semibold text-[#68606A]">
                  Your enquiry will be sent to Adele directly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-[#241C2B]/10 bg-[#DDE5D7] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#687F6A]">
                Keep in touch
              </p>

              <h2 className="mt-5 max-w-3xl text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[0.86] tracking-[-0.075em]">
                Find Del&apos;s
                <br />
                House online.
              </h2>
            </div>

            <div className="md:pb-2">
              <p className="max-w-md text-base font-semibold leading-7 text-[#596359]">
                You can also follow along and get a feel for life at Del&apos;s
                House through social media.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/adele6202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Del's House on Instagram"
                  className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#241C2B]/20 bg-[#F4F0E8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#241C2B] hover:text-[#F4F0E8]"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.facebook.com/adele.taylor.54"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Del's House on Facebook"
                  className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#241C2B]/20 bg-[#F4F0E8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#241C2B] hover:text-[#F4F0E8]"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="mailto:adeletaylor1976@gmail.com"
                  className="flex h-14 items-center rounded-full border border-[#241C2B]/20 bg-[#F4F0E8] px-6 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#241C2B] hover:text-[#F4F0E8]"
                >
                  Email Adele
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
