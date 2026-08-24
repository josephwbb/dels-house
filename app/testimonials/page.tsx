"use client";

import { useState } from "react";

const reviews = [
  {
    title: "Fantastic Childminder",
    excerpt:
      "Adele is an absolutely fantastic childminder. She has been looking after our son since he was 11 months old. I was nervous about his settling in as he was not the most confident and Adele managed this perfectly.",
    body: `Adele is an absolutely fantastic childminder. She has been looking after our son since he was 11 months old. I was nervous about his settling in as he was not the most confident and Adele managed this perfectly. She was so reassuring and kept me updated all the time with his settling plan. He is incredibly happy in her setting and goes to her with open arms which is so reassuring to see as a parent.

Adele takes the kids on lots of outings, they have trips to toddler groups, out to the park, on the bus, there’s a lot of exposure they get and they have so much fun together.

He is always extremely well fed and again Adele provided a brilliant varied diet for him so always nice to hear and see how well he’s been eating.

In my experience Adele has always provided excellent communication which again is really reassuring as a parent.

I’m so incredibly happy with the care our son receives and would recommend Adele’s setting wholeheartedly.`,
    author: "Annie",
    date: "05/01/2026",
  },
  {
    title: "Amazing childminder!!!",
    excerpt:
      "Adele is an amazing and knowledgeable childminder. Our son has been going to her since he was 10 months old. She is always taking them out on fun and exciting trips to toddler groups, parks, beaches etc.",
    body: `Adele is an amazing and knowledgeable childminder. Our son has been going to her since he was 10 months old. She is always taking them out on fun and exciting trips to toddler groups, parks, beaches etc.

Adele is great with her communication keeping us upto date with what they are currently learning, their progress and development. Adele really cares for all of the children and her home is a really warm and nurturing environment.

Our little boy thoroughly enjoys going to Adele and has really developed in various ways and we are really happy and confident in the care she is providing. Would highly recommend!`,
    author: "Victoria",
    date: "29/06/2025",
  },
  {
    title: "Excellent childminder!",
    excerpt:
      'Our little girl has been going to Adele since she was 10 months old. The first thing she asks when she wakes up is if she is going to "Del\'s house" with the most excited smile on her face!',
    body: `Our little girl has been going to Adele since she was 10 months old. The first thing she asks when she wakes up is if she is going to "Del's house" with the most excited smile on her face!

Our daughter loves Adele as if she was family and is clearly comfortable and confident in her care, which we have seen right from the get go.

Adele has been amazing for us as a family. She has supported with feeding advice when we were transitioning from bottles to pure solid food, attempts at potty training, as well as helpful prompts for sun cream or wellies. She keeps us up to date with activities that are happening and is always planning something exciting for the children to nurture them and help them develop.

Adele also provided regular updates when we were getting settled in and arranged for half days to transition to ensure a smooth handing over period in the first few weeks.

Adele arranges regular development updates and is transparent with her paperwork, reports and costs.

We can't imagine our daughter being looked after by anybody else & I would recommend her in a heartbeat.`,
    author: "Vix",
    date: "02/04/2025",
  },
  {
    title: "Amazing, nurturing childminder",
    excerpt:
      "Adele is a fantastic childminder to my son who has been going to her since he was about 9 months old and is now almost 3. He adores her she's like an extension of the family.",
    body: `Adele is a fantastic childminder to my son who has been going to her since he was about 9 months old and is now almost 3. He adores her she's like an extension of the family.

Her home is a lovely warm environment where all the children seem to learn so much. My son's language developed so well with Adele and he's always excited and happy to go to her house which makes it a million times easier as a parent to send them somewhere they love while you're at work.

Adele always seems to have fun activities and trips out planned, they go to lots of different toddler groups and they have fun playing in her garden loads when the weather is better. She's great at communicating with us, keeping us up to date with what they're learning, what and how much they have eaten and she was so helpful and supportive during potty training, it was made much easier than expected!

I would wholeheartedly recommend her as a childminder to any friends or family.`,
    author: "Liz",
    date: "25/03/2025",
  },
  {
    title: "Fantastic Childminder",
    excerpt:
      "I can't fault Adele. She has done a fantastic job of looking after our now three year old son since he was two. She fosters great relationships between the children.",
    body: `I can't fault Adele. She has done a fantastic job of looking after our now three year old son since he was two. She fosters great relationships between the children, she is caring and our son settled in so quickly. They are always busy, going to toddler groups or on days out to the beach and park in the Summer.

Our son has had a much better experience of childcare than if he had stayed in a large nursery which he was in previously.`,
    author: "Rachel",
    date: "14/03/2025",
  },
  {
    title: "Highly recommended",
    excerpt:
      "I genuinely cannot praise Adele enough. It’s hard for any mum to leave their child with somebody else when going back to work but I was put at ease with Adele straight away.",
    body: `I genuinely cannot praise Adele enough. It’s hard for any mum to leave their child with somebody else when going back to work but I was put at ease with Adele straight away.

She treated my child with great affection, made his day’s fun and interesting and was really keen on learning and development. She’s super safety conscious and always makes sure the children she childminds for are fed well and looked after.

She also takes them out on lovely trips during the holidays. My child thrived in her care - one of the hardest things about leaving the area was having to lose Adele as a childminder!`,
    author: "Parent",
    date: "30/03/2017",
  },
  {
    title: "Nurturing and caring carer",
    excerpt:
      "Brilliant child minder. My son has been with Adele for 6 years. She is a very calm and caring child minder. She is really on the ball when it comes to all safety aspects.",
    body: `Brilliant child minder. My son has been with Adele for 6 years. She is a very calm and caring child minder. She is really on the ball when it comes to all safety aspects.

Her home is a really nurturing environment, children are all very gentle with each other. She encourages kindness and empathy.

As if all that wasn't enough she shows great flexibility which is great for working parents. I would highly recommend Adele and her welcoming home, she is clearly fond of all the children she looks after and this shows.

She is good at dealing with teachers at school and information is always passed on. Adele has helped my son grow into a very kind child who shows great empathy to the younger children, we will be sad when he finishes junior school and leaves her care.`,
    author: "Parent",
    date: "24/03/2017",
  },
  {
    title: "Excellent childminder",
    excerpt:
      "Adele looked after my daughter whilst she was in primary school and did an excellent job. My daughter was a very shy child who didn't talk much but grew in confidence in Adele's care.",
    body: `Adele looked after my daughter whilst she was in primary school and did an excellent job. My daughter was a very shy child who didn't talk much but grew in confidence in Adele's care.

Adele is a such a lovely person and will do anything to help you out when you need it. She is caring and loves the children she looks after as her own.

She spends lots of time doing fun activities with the children and takes them on lovely day trips in the school holidays which my daughter used to love.

I would definitely recommend her as a childminder she is Fantastic.`,
    author: "Parent",
    date: "19/03/2017",
  },
  {
    title: "Fantastic Childminder",
    excerpt:
      "Adele has been looking after my 2 girls for nearly a year and the girls love going to her house. She is very flexible, kind and caring.",
    body: `Adele has been looking after my 2 girls for nearly a year and the girls love going to her house. She is very flexible, kind and caring.

The children take part in a range of activities in such a short space of time and have lots of fun. These range from baking to arts and crafts.

During the holidays they go out on adventures and have lots to talk about when I pick them up.

Adele looks after the girls like they are her own and nothing is too much for her. She makes excellent home cooked meals which both my children eat and enjoy.

My youngest child is at nursery and Adele works closely with the school to work on her developmental targets.

I would highly recommend Adele as a childminder, she is fantastic.`,
    author: "Parent",
    date: "16/03/2017",
  },
  {
    title: "Childminder Review",
    excerpt:
      "Adele is a fabulous child minder. She looks after both my girls aged 3 and 6 and has done for the past 4 years. We have nothing but praise for Adele.",
    body: `Adele is a fabulous child minder. She looks after both my girls aged 3 and 6 and has done for the past 4 years. We have nothing but praise for Adele.

I would recommend Adele to anyone needing childcare.`,
    author: "Parent",
    date: "15/03/2017",
  },
  {
    title: "Excellent",
    excerpt:
      "Adele is fantastic with my little girl. She treats her like she is one of the family and provides outstanding care.",
    body: `Adele is fantastic with my little girl. She treats her like she is one of the family and provides outstanding care.

I would recommend Adele to anybody for looking after their children.`,
    author: "Parent",
    date: "10/02/2017",
  },
  {
    title: "outstanding childminder",
    excerpt:
      "Adele has looked after my little boy since he was 9 months old, he is now almost 4. He loves going to play and thinks of Adele as his friend.",
    body: `Adele has looked after my little boy since he was 9 months old, he is now almost 4. He loves going to play and thinks of Adele as his friend.

Adele plans lots of exciting activities. She reguarly takes the kids on days out to museums, farms, swimming, soft play. She meets up her childminder friends daily so the kids get a chance to socialise with lots of other children.

She is very safety conscious and ensures her children are safe at all times. She cooks healthy dinners, she limits sugary foods and will follow any requests (e.g. no juice just water).

Adele is very experienced and vigilant to the welfare of her children. She picked up a eye disorder in our little boy we did and early treatment improved his outcome so we are extremely grateful for her advice.

I do not hesitate to recommend Adele. You could not leave your child with a more caring, knowledgeable and fun person!`,
    author: "Parent",
    date: "04/02/2017",
  },
  {
    title: "Amazing childminder who has become a good family friend",
    excerpt:
      "Adele has been looking after my two children for just over a year now and I can not fault the care that is given. My little boy was only 6 months old when he began and from the moment he started has settled in so well.",
    body: `Adele has been looking after my two children for just over a year now and I can not fault the care that is given. My little boy was only 6 months old when he began and from the moment he started has settled in so well.

Adele takes him to toddler groups each week and is always busy taking him out and letting him interact with others. Activities are always carried out at home and my son is always encouraged to participate with the other children.

His progression has been outstanding and he was walking at 11 months and starting to talk soon after.

My daughter also attends and is taken to school and collected. She loves going to Adele's and enjoys her time with the other children. They will bake, craft and go to the park on occasions after school. A meal is always provided which is lovely and healthy.

The biggest thing for me is the care and attention. Adele always puts the children first and is more than willing to go over and above to help in difficult situations. She will notice things before I do which is so reassuring i.e when my son is unwell.

My children are happy and that is what matters, Adele is like a second mother to them who they look up to and depend on.`,
    author: "Parent",
    date: "03/02/2017",
  },
  {
    title: "Fantastic Childminder - makes a working life so much easier",
    excerpt:
      "Adele has been our childminder for over 9 years and it is very easy to say that life as a working mum would not be possible without her quality of care, flexibility and overall kindness.",
    body: `Adele has been our childminder for over 9 years and it is very easy to say that life as a working mum would not be possible without her quality of care, flexibility and overall kindness.

I feel very confident in her capacity to take the very best care of our children. She goes beyond what you would expect from a childminder and has brought lots of calm to my working life and lots of happiness to our kid's lives.

I thank her our lucky stars we found her and I certainly won't be going anywhere else until the children stop needing a childminder.

I am more than happy to speak to anyone direct if they want a reference for Adele.`,
    author: "Parent",
    date: "03/02/2017",
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

function Stars() {
  return (
    <div
      className="flex items-center gap-1"
      aria-label="5 out of 5 stars"
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="text-[1.05rem] leading-none text-[#806A82]"
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof reviews)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="
        flex
        min-h-[520px]
        w-[min(86vw,500px)]
        shrink-0
        flex-col
        justify-between
        border
        border-[#241C2B]/15
        bg-[#F4F0E8]
        p-7
        md:min-h-[570px]
        md:p-9
      "
    >
      <div>
        <div className="flex items-start justify-between gap-5">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#907A91]">
            Review {String(index + 1).padStart(2, "0")}
          </span>

          <Stars />
        </div>

        <h3 className="mt-8 max-w-md text-[2rem] font-bold leading-[0.95] tracking-[-0.055em] text-[#241C2B] md:text-[2.3rem]">
          {review.title}
        </h3>

        <div className="mt-7">
          <p
            className={`whitespace-pre-line text-[0.96rem] font-medium leading-7 text-[#514C53] ${
              open ? "" : "line-clamp-6"
            }`}
          >
            {open ? review.body : review.excerpt}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="
            mt-6
            inline-flex
            items-center
            gap-3
            border-b
            border-[#241C2B]/30
            pb-1.5
            text-[0.65rem]
            font-bold
            uppercase
            tracking-[0.14em]
            transition-opacity
            hover:opacity-60
          "
        >
          <span>{open ? "Show less" : "Read full review"}</span>
          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>
      </div>

      <div className="mt-10 border-t border-[#241C2B]/12 pt-5">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold text-[#241C2B]">
              {review.author}
            </p>
            <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#68606A]">
              {review.date}
            </p>
          </div>

          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#68606A]">
            5 / 5
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsPage() {
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


      {/* HERO */}

      <section className="px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-[1400px]">

          <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#907A91]">
            Testimonials
          </p>

          <div className="mt-7 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">

            <h1
              className="
                max-w-5xl
                text-[clamp(4rem,8vw,9rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.085em]
              "
            >
              Trusted by
              <br />
              families.
            </h1>

            <div className="max-w-md md:pb-2">
              <div className="flex items-center gap-4">
                <Stars />

                <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#68606A]">
                  14 reviews
                </span>
              </div>

              <p className="mt-6 text-[1.08rem] font-bold leading-[1.65] tracking-[-0.015em] text-[#514C53] md:text-[1.2rem]">
                Every review provided here is rated five stars, reflecting
                the experiences of families who have trusted Adele with
                their children.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* OFSTED */}

      <section className="border-y border-[#241C2B]/10 bg-[#DDE5D7] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#687F6A]">
                Ofsted
              </p>

              <h2 className="mt-5 max-w-xl text-[clamp(3.5rem,6vw,6.5rem)] font-bold leading-[0.84] tracking-[-0.075em]">
                Three
                <br />
                inspections.
                <br />
                Three goods.
              </h2>
            </div>

            <div>

              <div className="grid border-t border-[#241C2B]/15">

                {[
                  ["08 May 2015", "GOOD"],
                  ["27 November 2018", "GOOD"],
                  ["13 September 2024", "GOOD"],
                ].map(([date, rating]) => (
                  <div
                    key={date}
                    className="flex items-center justify-between gap-6 border-b border-[#241C2B]/15 py-6 md:py-8"
                  >
                    <p className="text-base font-bold text-[#4F5B52] md:text-lg">
                      {date}
                    </p>

                    <span className="border border-[#687F6A]/40 bg-[#F4F0E8]/60 px-4 py-2 text-[0.68rem] font-bold tracking-[0.16em] text-[#687F6A]">
                      {rating}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-10 border border-[#241C2B]/12 bg-[#F4F0E8]/55 p-7 md:p-9">

                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#687F6A]">
                  Most recent inspection · 13 September 2024
                </p>

                <p className="mt-5 text-[1rem] font-semibold leading-7 text-[#4F5B52] md:text-[1.08rem]">
                  A recent inspection report highlights the strengths and
                  areas for improvement of the childcare provider. The
                  curriculum effectively develops children&apos;s personal,
                  social, and emotional skills, with a focus on supporting
                  emotional well-being.
                </p>

                <p className="mt-5 text-[0.95rem] font-medium leading-7 text-[#596359]">
                  Good behavior is promoted, and children are encouraged to
                  be independent. Partnerships with parents are strong, with
                  regular information sharing and suggestions for continuing
                  learning at home.
                </p>

                <p className="mt-5 text-[0.95rem] font-medium leading-7 text-[#596359]">
                  The provider acknowledges the need to refine teaching
                  skills to further enhance the quality of education.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* REVIEWS INTRO */}

      <section className="px-6 pb-10 pt-24 md:px-10 md:pb-12 md:pt-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-6 border-t border-[#241C2B]/15 pt-5 md:flex-row md:items-end">

            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#907A91]">
                From families
              </p>

              <h2 className="mt-4 text-[clamp(3rem,5vw,5.5rem)] font-bold leading-[0.86] tracking-[-0.07em]">
                What parents say.
              </h2>
            </div>

            <p className="max-w-sm text-sm font-semibold leading-6 text-[#68606A] md:pb-1">
              Fourteen reviews, all rated five stars. Scroll through the
              experiences of families who have used Del&apos;s House.
            </p>

          </div>
        </div>
      </section>


      {/* REVIEW SCROLLER */}

      <section className="pb-28 md:pb-40">

        <div
          className="
            flex
            gap-5
            overflow-x-auto
            px-6
            pb-6
            scrollbar-hide
            md:gap-7
            md:px-10
          "
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={`${review.title}-${index}`}
              review={review}
              index={index}
            />
          ))}
        </div>

        <div className="mx-auto mt-2 flex max-w-[1400px] items-center gap-3 px-6 md:px-10">
          <span className="h-px w-8 bg-[#241C2B]/25" />

          <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#68606A]">
            Swipe to explore reviews
          </p>
        </div>

      </section>


      {/* FINAL CTA */}

      <section className="bg-[#E7D9E8] px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1400px]">

          <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#806A82]">
            Come and see for yourself
          </p>

          <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <h2 className="max-w-4xl text-[clamp(3.8rem,7vw,8rem)] font-bold leading-[0.82] tracking-[-0.08em]">
              A place your
              <br />
              child can love.
            </h2>

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