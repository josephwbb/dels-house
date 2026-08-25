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

const sections = [
  {
    number: "01",
    title: "Safeguarding, Child Protection & Prevent",
    items: [
      {
        title: "Safeguarding and Child Protection",
        text: `I am responsible for safeguarding children in my care and act as the Designated Safeguarding Lead (DSL).

I will take concerns seriously, record them promptly and refer concerns to the appropriate safeguarding partners. I will maintain appropriate safeguarding training, safer recruitment and suitability arrangements. I will listen to disclosures calmly, avoid leading questions, record facts accurately and seek safeguarding advice where required. Parents will not be informed where doing so could increase risk to a child or compromise a safeguarding response.`,
      },
      {
        title: "Prevent Duty",
        text: `I will take reasonable steps to protect children from being drawn into terrorism or extremist activity. I will promote inclusion, respect, tolerance and safe expression of views. Concerns about radicalisation or extremist grooming will be managed through safeguarding procedures and current local/national guidance.`,
      },
      {
        title: "Allegations Against Adults & Whistleblowing",
        text: `Any allegation that an adult has harmed, may have harmed, or may pose a risk to a child will be treated seriously. I will follow Local Authority Designated Officer (LADO) and safeguarding procedures and will not conduct an inappropriate investigation myself. Concerns about unsafe practice may be raised through appropriate external safeguarding or regulatory routes.`,
      },
    ],
  },
  {
    number: "02",
    title: "Safer Sleep, Health & Welfare",
    items: [
      {
        title: "Safer Sleep",
        text: `Babies will be placed on their backs to sleep on a firm, flat, clear and waterproof sleep surface. Sleep spaces will be free from pillows, duvets, quilts, cot bumpers, loose soft items and avoidable hazards. Babies' faces and heads will remain uncovered and overheating will be avoided. Babies will not routinely sleep in car seats, buggies, bouncy chairs or other sitting/inclined products. Any medical exception will be supported by appropriate professional advice and risk assessment.`,
      },
      {
        title: "Health, Illness & Infection Control",
        text: `I will maintain a clean and hygienic environment, promote handwashing and respiratory hygiene, and follow current public-health guidance on illness and exclusion. Parents will be contacted when a child is too unwell to participate safely. Infection-control measures will be reviewed when guidance changes.`,
      },
      {
        title: "Medication",
        text: `Medication will normally be administered only with appropriate parental consent and in accordance with instructions. Prescribed medication will be kept in its original labelled container. Administration will be recorded, including date, time and dose where applicable. Emergency medication and healthcare plans will be accessible when required.`,
      },
      {
        title: "First Aid, Accidents & Incidents",
        text: `I will maintain appropriate paediatric first-aid arrangements and equipment. Injuries and significant incidents will be recorded and parents informed. Serious incidents will be reported to Ofsted or other authorities where required.`,
      },
      {
        title: "Food, Allergies & Mealtimes",
        text: `Food will be prepared, stored and served hygienically. I will obtain information about allergies and dietary requirements. Children will be supervised while eating and drinking and choking risks considered. Individual healthcare plans will be followed where applicable.`,
      },
      {
        title: "Hygiene & Nappy Changing",
        text: `I will maintain high standards of personal hygiene, handwashing, toileting and nappy changing. Changing areas will be cleaned between uses and children treated respectfully and privately.`,
      },
      {
        title: "Sun & Hot Weather",
        text: `I will use shade, suitable clothing and age-appropriate sunscreen arrangements agreed with parents. Children will have access to drinking water and activities will be adapted during very hot weather. Babies will be kept out of direct sunlight wherever possible.`,
      },
    ],
  },
  {
    number: "03",
    title: "Health & Safety, Risk & Emergencies",
    items: [
      {
        title: "Health & Safety",
        text: `I will provide a safe, clean and suitable environment and take reasonable steps to prevent accidents and injury. Equipment will be maintained and used safely and children appropriately supervised.`,
      },
      {
        title: "Risk Assessment",
        text: `I will identify hazards, assess risks, implement proportionate controls and review them regularly. Risk assessments will cover premises, outings, transport, animals, water, sleep, food/allergies, equipment, visitors and individual needs.`,
      },
      {
        title: "Fire Safety & Emergency Evacuation",
        text: `I will maintain suitable fire safety arrangements, keep escape routes clear and ensure children can be evacuated safely. Emergency procedures will cover fire, serious injury, utility failure and other foreseeable emergencies. Children will be accounted for throughout.`,
      },
      {
        title: "Missing Child & Collection",
        text: `If a child is missing, I will immediately search safely, maintain supervision of other children and contact emergency services where appropriate. Children will only be released to authorised persons. Any unauthorised collection attempt will be managed as a safeguarding matter.`,
      },
      {
        title: "Outings, Outdoor Play & Transport",
        text: `I will provide suitable outdoor experiences and assess risks before outings. Supervision, travel, weather, location, first aid and emergency contacts will be considered. Transport will comply with applicable child restraint and road-safety requirements.`,
      },
      {
        title: "Animals & Dogs",
        text: `Animals will only be accessed where risks are assessed and suitable hygiene and supervision are in place. Children will not be left unsupervised with an animal. Dogs will be managed to prevent injury and fear, kept securely away from children where required, and current legal restrictions concerning prohibited types of dog will be followed.`,
      },
      {
        title: "Business Continuity",
        text: `I will plan for illness, emergencies, severe weather, utility failure and other disruption. Parents will be informed promptly if childcare cannot safely continue.`,
      },
    ],
  },
  {
    number: "04",
    title: "Safeguarding Technology, Privacy & Information",
    items: [
      {
        title: "Mobile Phones, Cameras & Digital Devices",
        text: `Personal devices will be managed so they do not compromise children's safety, privacy or supervision. I will not use devices to photograph or record children except for legitimate purposes under the setting's arrangements and appropriate consent. Devices will be kept securely.`,
      },
      {
        title: "Online Safety & Social Media",
        text: `Children will receive age-appropriate and supervised access to technology. Inappropriate online content will not be deliberately exposed to children. I will not publish identifiable information about children on personal social media.`,
      },
      {
        title: "Screen Use & Digital Technology",
        text: `I will have regard to current guidance on children's screen use. Technology will be purposeful, age-appropriate and balanced with active play, communication, outdoor learning and hands-on experiences.`,
      },
      {
        title: "Photography & Consent",
        text: `Photographs will only be taken for legitimate childminding purposes and with appropriate consent. Images will be stored securely and not shared publicly without appropriate permission.`,
      },
      {
        title: "Privacy, Confidentiality & Data Protection",
        text: `Personal information will be processed fairly, securely and only for legitimate purposes. Confidential information will not be discussed publicly or shared unnecessarily. Safeguarding information may be shared where necessary to protect a child.`,
      },
      {
        title: "Record Keeping",
        text: `I will maintain required records, including attendance, safeguarding, accidents, medication, complaints, permissions and relevant learning records. Records will be accurate, secure and retained for the required period.`,
      },
      {
        title: "Visitors",
        text: `Visitors will be appropriately identified, supervised and prevented from having inappropriate unsupervised access to children. Required suitability checks will be completed where applicable.`,
      },
    ],
  },
  {
    number: "05",
    title: "Children's Learning, Development & Inclusion",
    items: [
      {
        title: "EYFS Curriculum & Learning",
        text: `I will provide a broad, balanced and developmentally appropriate curriculum based on the EYFS educational programmes and children's interests, needs and stages of development. Learning will take place through play, interactions, routines and planned experiences.`,
      },
      {
        title: "Observation, Assessment & Planning",
        text: `I will use proportionate observation and professional knowledge to understand children's development and plan appropriate experiences and next steps. Parents will receive meaningful information about their child's learning.`,
      },
      {
        title: "Two-Year Progress Check",
        text: `Where required, I will work with parents and relevant professionals to complete the statutory two-year progress check, identifying strengths, emerging needs and appropriate support.`,
      },
      {
        title: "SEND & Inclusion",
        text: `I welcome children with special educational needs and/or disabilities and will make reasonable adjustments where appropriate. I will work with parents, the local authority and professionals and follow the SEND Code of Practice.`,
      },
      {
        title: "Equality, Diversity & British Values",
        text: `Every child and family will be treated fairly and with dignity. I will challenge discrimination and provide an inclusive environment reflecting different families, cultures, backgrounds and abilities. Children will be supported to develop respect, empathy and an understanding of fairness and rules.`,
      },
      {
        title: "Positive Behaviour & Physical Contact",
        text: `I will promote kind, respectful behaviour through modelling, praise and consistent boundaries. I will never use corporal punishment, humiliation or degrading treatment. Physical intervention will only be used when necessary to prevent injury or serious harm, will be proportionate and will be recorded.`,
      },
      {
        title: "Key Person, Settling In & Transitions",
        text: `I will work with parents to help children settle safely and confidently. Routines and individual needs will be discussed. I will support transitions, including starting school, and share relevant information with receiving settings through appropriate information-sharing arrangements.`,
      },
      {
        title: "Emotional Wellbeing",
        text: `I will provide a nurturing environment where children can express feelings and develop resilience. Changes in behaviour or wellbeing will be considered sensitively and safeguarding procedures followed where concerns indicate possible harm.`,
      },
    ],
  },
  {
    number: "06",
    title: "Parents, Admissions, Complaints & Business",
    items: [
      {
        title: "Admissions & Registration",
        text: `Before a child starts, I will obtain required EYFS information, including emergency contacts, health, dietary and relevant consent information. Fees, hours, policies and contractual arrangements will be explained clearly.`,
      },
      {
        title: "Parent Partnership",
        text: `I value parents as partners in children's care and learning. I will communicate regularly and seek information about routines, health, culture, language, development and individual needs.`,
      },
      {
        title: "Complaints",
        text: `I welcome feedback and will try to resolve concerns promptly and fairly. Complaints will be recorded and responded to appropriately. Unresolved concerns may be escalated through the relevant regulatory route. Safeguarding concerns will be dealt with immediately under safeguarding procedures.`,
      },
      {
        title: "Fees & Payment",
        text: `Fees, payment dates, deposits, funded-hours arrangements, late-payment terms and cancellation arrangements will be agreed in writing with parents. Financial records will be maintained.`,
      },
      {
        title: "Positive Relationship With Families",
        text: `I will treat families respectfully and communicate professionally. Information about children will be discussed privately and appropriately.`,
      },
      {
        title: "Continuity & Closure",
        text: `If circumstances prevent safe childcare, I will inform parents promptly and follow contractual arrangements. I will maintain emergency contact information and continuity arrangements appropriate to a childminding setting.`,
      },
    ],
  },
  {
    number: "07",
    title: "Policies & Review",
    items: [
      {
        title: "Policy Review",
        text: `This combined policy pack will be reviewed at least annually and sooner if EYFS requirements, legislation, safeguarding guidance or the needs of children in the setting change. The intended review date is August 2027.`,
      },
      {
        title: "Childminder Declaration",
        text: `I confirm that I have read, understood and will follow this policy pack and keep my knowledge up to date.`,
      },
      {
        title: "Parent/Carer Acknowledgement",
        text: `Parents/carers will be given access to the relevant policies and may discuss any aspect of their child's care, safety, learning or wellbeing with the childminder.`,
      },
    ],
  },
];

export default function ChildcarePolicyPage() {
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
            href="/enquire"
            className="group flex items-center gap-3 border-b border-[#241C2B]/30 pb-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-colors hover:border-[#241C2B]"
          >
            <span>Back to enquiry</span>

            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              <Arrow />
            </span>
          </a>
        </nav>
      </header>

      {/* INTRO */}
      <section className="px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#907A91]">
                Del&apos;s House · Childcare Policy
              </p>

              <h1 className="mt-6 max-w-5xl text-[clamp(3.8rem,8vw,8.5rem)] font-bold leading-[0.84] tracking-[-0.085em]">
                Caring for
                <br />
                your little one.
              </h1>
            </div>

            <div className="max-w-md md:pb-2">
              <p className="text-[1.08rem] font-bold leading-[1.65] tracking-[-0.015em] text-[#514C53] md:text-[1.2rem]">
                A clear guide to how children are cared for, supported and
                kept safe at Del&apos;s House.
              </p>

              <div className="mt-7 border-l-2 border-[#D6C4D8] pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#806A82]">
                  Policy pack
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-[#68606A]">
                  Effective 1 September 2026
                  <br />
                  Next review: August 2027
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24 md:px-10 md:pb-36">
        <div className="mx-auto max-w-[1200px] space-y-5">
          {sections.map((section) => (
            <section
              key={section.number}
              className="overflow-hidden border border-[#241C2B]/10 bg-[#EEE8E0]"
            >
              <div className="border-b border-[#241C2B]/10 bg-[#DDE5D7] px-6 py-7 md:px-10 md:py-9">
                <div className="flex gap-5 md:gap-8">
                  <span className="pt-1 text-[0.68rem] font-bold tracking-[0.18em] text-[#687F6A]">
                    {section.number}
                  </span>

                  <h2 className="max-w-4xl text-[clamp(2rem,4vw,4rem)] font-bold leading-[0.92] tracking-[-0.06em]">
                    {section.title}
                  </h2>
                </div>
              </div>

              <div>
                {section.items.map((item, index) => (
                  <article
                    key={item.title}
                    className={`px-6 py-7 md:px-10 md:py-9 ${
                      index !== section.items.length - 1
                        ? "border-b border-[#241C2B]/10"
                        : ""
                    }`}
                  >
                    <div className="grid gap-5 md:grid-cols-[0.32fr_0.68fr] md:gap-12">
                      <h3 className="text-lg font-bold leading-tight tracking-[-0.025em] md:text-xl">
                        {item.title}
                      </h3>

                      <div className="space-y-4">
                        {item.text.split("\n\n").map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-sm font-semibold leading-7 text-[#625B63] md:text-[0.96rem]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#E7D9E8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#806A82]">
            Del&apos;s House
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
            <h2 className="max-w-4xl text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[0.86] tracking-[-0.075em]">
              Your child&apos;s
              <br />
              care matters.
            </h2>

            <div className="border-l border-[#241C2B]/20 pl-6 md:pb-2">
              <p className="text-sm font-semibold leading-7 text-[#625B63]">
                Parents and carers are always welcome to discuss any aspect of
                their child&apos;s care, safety, learning or wellbeing.
              </p>

              <a
                href="/enquire"
                className="group mt-7 inline-flex items-center gap-4 border-b border-[#241C2B]/35 pb-2 text-xs font-bold uppercase tracking-[0.14em]"
              >
                Back to enquiry

                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  <Arrow />
                </span>
              </a>
            </div>
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