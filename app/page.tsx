import Image from "next/image";
import { ContactForm } from "./components/landing/contact-form";
import { DemoForm } from "./components/landing/demo-form";
import { LandingFooter } from "./components/landing/footer";
import { LandingHeader } from "./components/landing/header";
import { Icon } from "./components/landing/icon";
import { TeacherForm } from "./components/landing/teacher-form";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main
        id="top"
        className="w-full min-h-[calc(100vh-20rem)] bg-canvas pt-20"
      >
        <div className="flex w-full flex-col">
          <Hero />
          <Metrics />
          <Subjects />
          <HowItWorks />
          <DemoBooking />
          <Reviews />
          <TeachWithUs />
          <Faq />
          <Contact />
        </div>
      </main>
      <LandingFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-canvas via-canvas-raised/40 to-canvas pb-16">
      <div className="pointer-events-none absolute -top-24 right-1/4 -z-0 h-96 w-96 rounded-full bg-chip-ochre/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-20 -z-0 h-80 w-80 rounded-full bg-chip-emerald/30 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start pr-0 lg:col-span-7 lg:pr-6">
            <p className="mb-4 type-label-sm font-bold tracking-wider text-primary uppercase">
              Learn · Grow · Brighter Tomorrow
            </p>
            <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.15]">
              Personalized{" "}
              <span className="text-primary italic underline decoration-secondary/60 underline-offset-8">
                1-on-1 online tutoring
              </span>{" "}
              for a brighter future
            </h1>
            <p className="mt-6 max-w-xl type-body-lg leading-relaxed text-ink-subtle">
              Live K-12 classes in Maths, English, Science, languages, and more.
              Trusted by families across the UAE, Saudi Arabia, Qatar, Kuwait,
              and Oman.
            </p>
            <p className="mt-3 type-label-sm text-ink-subtle">
              UAE · Saudi Arabia · Qatar · Kuwait · Oman
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <a className="btn-primary group" href="#demo-booking">
                <span>Book a free trial class</span>
                <Icon
                  name="arrow_forward"
                  className="text-[18px] transition-transform group-hover:translate-x-1"
                />
              </a>
              <a className="btn-outline text-center" href="#subjects-section">
                Explore subjects
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 type-body-sm text-ink-subtle">
              <Icon name="check_circle" className="text-[16px] text-primary" />
              <span>No credit card needed</span>
              <span className="text-rule">•</span>
              <span>Free trial class</span>
              <span className="text-rule">•</span>
              <span>3 extra classes on enrollment</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <div className="flex items-center gap-2 rounded border border-border/80 bg-canvas px-3.5 py-1.5 type-label-sm text-ink-subtle shadow-sm">
                <Icon name="school" className="text-[16px] text-primary" />
                <span>Experienced &amp; verified tutors</span>
              </div>
              <div className="flex items-center gap-2 rounded border border-border/80 bg-canvas px-3.5 py-1.5 type-label-sm text-ink-subtle shadow-sm">
                <Icon
                  name="calendar_clock"
                  className="text-[16px] text-secondary"
                />
                <span>Flexible timings</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:col-span-5 lg:mt-0 lg:block">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative h-[520px] overflow-hidden rounded-xl border-4 border-canvas bg-canvas-inset shadow-float">
                <Image
                  src="/images/hero-student.jpg"
                  alt="Teen student in a green hoodie and headphones at a sunlit desk, writing geometry notes while a laptop shows a triangle lesson"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>
              <div className="mt-4 flex flex-col gap-3 lg:mt-0">
                <div className="surface-card flex items-start gap-3 p-space-md lg:absolute lg:-top-4 lg:-left-4 lg:max-w-[240px]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-chip-emerald text-primary">
                    <Icon name="person_check" className="text-[22px]" />
                  </div>
                  <div>
                    <p className="font-sans type-label-lg text-ink">
                      1-on-1 live classes
                    </p>
                    <p className="mt-1 type-body-sm leading-tight text-ink-subtle">
                      Matched to your child&apos;s learning style.
                    </p>
                  </div>
                </div>
                <div className="surface-card flex items-start gap-3 p-space-md lg:absolute lg:right-0 lg:-bottom-4 lg:max-w-[240px]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-chip-ochre text-chip-ochre-fg">
                    <Icon name="calendar_clock" className="text-[22px]" />
                  </div>
                  <div>
                    <p className="font-sans type-label-lg text-ink">
                      Flexible timings
                    </p>
                    <p className="mt-1 type-body-sm leading-tight text-ink-subtle">
                      Evening slots that fit families in the Gulf.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="w-full border-y border-rule/70 bg-canvas-raised py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center p-4 md:items-start">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chip-emerald text-primary">
              <Icon name="event_available" className="text-[26px]" />
            </div>
            <p className="font-display text-2xl font-semibold text-ink lg:text-3xl">
              Free trial
            </p>
            <p className="mt-1 font-sans text-base font-bold text-ink">
              Live class
            </p>
            <p className="type-body-sm text-ink-subtle">
              No credit card. Meet a tutor in a 1:1 session.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 md:items-start">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chip-emerald text-primary">
              <Icon name="person_check" className="text-[26px]" />
            </div>
            <p className="font-display text-2xl font-semibold text-ink lg:text-3xl">
              1-on-1
            </p>
            <p className="mt-1 font-sans text-base font-bold text-ink">
              Live classes
            </p>
            <p className="type-body-sm text-ink-subtle">
              One matched tutor, one student.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 md:items-start">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chip-ochre text-chip-ochre-fg">
              <Icon name="calendar_clock" className="text-[26px]" />
            </div>
            <p className="font-display text-2xl font-semibold text-ink lg:text-3xl">
              Flexible
            </p>
            <p className="mt-1 font-sans text-base font-bold text-ink">
              Timings
            </p>
            <p className="type-body-sm text-ink-subtle">
              Evening and weekend slots for families in the Gulf.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 md:items-start">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chip-ochre text-chip-ochre-fg">
              <Icon name="card_giftcard" className="text-[26px]" />
            </div>
            <p className="font-display text-2xl font-semibold text-ink lg:text-3xl">
              3 extra
            </p>
            <p className="mt-1 font-sans text-base font-bold text-ink">
              Classes on enrollment
            </p>
            <p className="type-body-sm text-ink-subtle">
              Added when you enroll in a 24-session or any package.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  return (
    <section
      className="w-full scroll-mt-20 bg-canvas py-20"
      id="subjects-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded bg-canvas-inset px-3 py-1 type-label-sm font-bold tracking-wider text-primary uppercase">
              Subjects we teach
            </div>
            <h2 className="font-display text-3xl font-semibold text-ink lg:text-4xl">
              K-12 classes matched to your board
            </h2>
            <p className="mt-3 type-body-md leading-relaxed text-ink-subtle">
              Catch-up, homework help, or exam prep — we follow the syllabus
              your school actually uses, across grades K-5, 6-8, and 9-12.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="type-label-sm tracking-wider text-ink-subtle uppercase">
              Boards:
            </span>
            {["CBSE", "ICSE", "IB", "IGCSE", "State Boards"].map((board) => (
              <span
                key={board}
                className="rounded border border-border bg-canvas px-3 py-1 type-label-sm text-ink shadow-sm"
              >
                {board}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <article className="group relative flex flex-col justify-between rounded-lg border border-border-card bg-canvas-raised p-8 shadow-card">
            <div className="absolute -top-3 right-6 rounded bg-secondary px-3 py-1 type-label-sm text-on-secondary shadow-sm">
              Most Popular
            </div>
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-border/60 bg-canvas-inset text-primary">
                <Icon name="calculate" className="text-[28px]" />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-sans text-2xl font-bold text-ink">Maths</h3>
                <span className="rounded border border-border/60 bg-canvas-inset px-2.5 py-1 type-label-sm text-primary">
                  Grades K–12
                </span>
              </div>
              <p className="mb-6 type-body-sm leading-relaxed text-ink-subtle">
                Build number sense, step-by-step problem solving, and exam
                confidence for school quizzes and board papers.
              </p>
              <div className="mb-6 rounded-lg border border-border/50 bg-canvas-inset p-4">
                <p className="mb-2.5 type-label-sm tracking-wider text-ink uppercase">
                  Topics covered
                </p>
                <ul className="space-y-2 type-body-sm text-ink-subtle">
                  {[
                    "Early numeracy & mental maths",
                    "Fractions, algebra & geometry",
                    "Trigonometry & higher secondary maths",
                    "Board exam and test revision",
                  ].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <Icon
                        name="check_circle"
                        className="text-[16px] text-primary"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <a className="btn-primary w-full" href="#demo-booking">
                Book a Maths trial
              </a>
              <a
                className="flex items-center justify-center gap-1 text-center type-body-sm font-semibold text-primary hover:text-primary-hover"
                href="#contact-advisors"
              >
                <span>Ask about your Maths syllabus</span>
                <Icon name="arrow_right_alt" className="text-[16px]" />
              </a>
            </div>
          </article>
          <article className="group relative flex flex-col justify-between rounded-lg border border-border-card bg-canvas-raised p-8 shadow-card">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-chip-ochre bg-chip-ochre text-tertiary">
                <Icon name="auto_stories" className="text-[28px]" />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-sans text-2xl font-bold text-ink">
                  English
                </h3>
                <span className="rounded border border-chip-ochre bg-chip-ochre px-2.5 py-1 type-label-sm text-tertiary">
                  Grades K–12
                </span>
              </div>
              <p className="mb-6 type-body-sm leading-relaxed text-ink-subtle">
                Reading, writing, grammar, and speaking — so students can
                follow class, write clearly, and sit language papers with ease.
              </p>
              <div className="mb-6 rounded-lg border border-border/50 bg-canvas-inset p-4">
                <p className="mb-2.5 type-label-sm tracking-wider text-ink uppercase">
                  Topics covered
                </p>
                <ul className="space-y-2 type-body-sm text-ink-subtle">
                  {[
                    "Phonics & early reading",
                    "Comprehension & literature",
                    "Essay, creative & exam writing",
                    "Grammar, vocabulary & speaking",
                  ].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <Icon
                        name="check_circle"
                        className="text-[16px] text-primary"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <a className="btn-primary w-full" href="#demo-booking">
                Book an English trial
              </a>
              <a
                className="flex items-center justify-center gap-1 text-center type-body-sm font-semibold text-primary hover:text-primary-hover"
                href="#contact-advisors"
              >
                <span>Ask about English support</span>
                <Icon name="arrow_right_alt" className="text-[16px]" />
              </a>
            </div>
          </article>
          <article className="group relative flex flex-col justify-between rounded-lg border border-border-card bg-canvas-raised p-8 shadow-card">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-chip-emerald bg-chip-emerald text-primary">
                <Icon name="biotech" className="text-[28px]" />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-sans text-2xl font-bold text-ink">
                  Science
                </h3>
                <span className="rounded border border-chip-emerald bg-chip-emerald px-2.5 py-1 type-label-sm text-primary">
                  Grades K–12
                </span>
              </div>
              <p className="mb-6 type-body-sm leading-relaxed text-ink-subtle">
                Interactive lessons that make concepts stick — from primary
                inquiry through biology, chemistry, and physics.
              </p>
              <div className="mb-6 rounded-lg border border-border/50 bg-canvas-inset p-4">
                <p className="mb-2.5 type-label-sm tracking-wider text-ink uppercase">
                  Topics covered
                </p>
                <ul className="space-y-2 type-body-sm text-ink-subtle">
                  {[
                    "EVS & primary science",
                    "Life & physical science",
                    "Biology, chemistry & physics",
                    "Board and IB / IGCSE revision",
                  ].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <Icon
                        name="check_circle"
                        className="text-[16px] text-primary"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <a className="btn-primary w-full" href="#demo-booking">
                Book a Science trial
              </a>
              <a
                className="flex items-center justify-center gap-1 text-center type-body-sm font-semibold text-primary hover:text-primary-hover"
                href="#contact-advisors"
              >
                <span>Ask about Science support</span>
                <Icon name="arrow_right_alt" className="text-[16px]" />
              </a>
            </div>
          </article>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <article className="flex flex-col rounded-lg border border-border-card bg-canvas-raised p-8 shadow-card">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-border/60 bg-canvas-inset text-primary">
              <Icon name="translate" className="text-[28px]" />
            </div>
            <h3 className="font-sans text-2xl font-bold text-ink">Languages</h3>
            <p className="mt-3 type-body-sm leading-relaxed text-ink-subtle">
              French, Spanish, and other languages — conversation, school
              coursework, and exam practice.
            </p>
            <a
              className="mt-6 type-body-sm font-semibold text-primary hover:text-primary-hover"
              href="#demo-booking"
            >
              Book a language trial
            </a>
          </article>
          <article className="flex flex-col rounded-lg border border-border-card bg-canvas-raised p-8 shadow-card">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-chip-ochre bg-chip-ochre text-tertiary">
              <Icon name="public" className="text-[28px]" />
            </div>
            <h3 className="font-sans text-2xl font-bold text-ink">
              EVS &amp; Social Studies
            </h3>
            <p className="mt-3 type-body-sm leading-relaxed text-ink-subtle">
              Environmental studies, history, geography, and civics aligned to
              your school board.
            </p>
            <a
              className="mt-6 type-body-sm font-semibold text-primary hover:text-primary-hover"
              href="#demo-booking"
            >
              Book an EVS trial
            </a>
          </article>
          <article className="flex flex-col rounded-lg border border-border-card bg-canvas-raised p-8 shadow-card">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-chip-emerald bg-chip-emerald text-primary">
              <Icon name="menu_book" className="text-[28px]" />
            </div>
            <h3 className="font-sans text-2xl font-bold text-ink">
              Homework &amp; exam prep
            </h3>
            <p className="mt-3 type-body-sm leading-relaxed text-ink-subtle">
              Daily homework help plus focused revision for CBSE, ICSE, IB,
              IGCSE, and state board exams.
            </p>
            <a
              className="mt-6 type-body-sm font-semibold text-primary hover:text-primary-hover"
              href="#demo-booking"
            >
              Book exam-prep trial
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      className="w-full scroll-mt-20 border-y border-rule/70 bg-canvas-raised py-20"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded bg-canvas-inset px-3 py-1 type-label-sm font-bold tracking-wider text-primary uppercase">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink lg:text-4xl">
            From a free trial to confident, independent learners
          </h2>
          <p className="mt-3 type-body-md leading-relaxed text-ink-subtle">
            Five simple steps. Parents stay informed; students build skills in
            live 1:1 classes.
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
          {[
            {
              n: "01",
              tone: "text-primary",
              title: "Book a free trial",
              body: "Share grade, subject, and a time that fits. No credit card.",
              icon: "event_available",
              note: "Zero obligation",
            },
            {
              n: "02",
              tone: "text-secondary",
              title: "Meet your teacher",
              body: "A live 1:1 class on the interactive board so you can see the fit.",
              icon: "person",
              note: "Interactive session",
            },
            {
              n: "03",
              tone: "text-tertiary",
              title: "Get a personal plan",
              body: "Lessons mapped to your board, goals, and weekly routine.",
              icon: "edit_note",
              note: "Personal plan",
            },
            {
              n: "04",
              tone: "text-primary",
              title: "Regular classes",
              body: "Weekly 1:1 sessions with homework help built in.",
              icon: "school",
              note: "Weekly 1:1",
            },
            {
              n: "05",
              tone: "text-secondary",
              title: "Track progress",
              body: "Parents get updates without sitting in on class.",
              icon: "insights",
              note: "Parent updates",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="relative flex flex-col rounded-lg border border-border-card bg-canvas p-6 shadow-card xl:p-6"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-border/60 bg-canvas-raised font-display text-2xl font-bold ${step.tone}`}
              >
                {step.n}
              </div>
              <h3 className="mb-3 font-sans text-xl font-bold text-ink">
                {step.title}
              </h3>
              <p className="type-body-sm leading-relaxed text-ink-subtle">
                {step.body}
              </p>
              <div className="mt-6 flex items-center gap-2 rounded border border-border/50 bg-canvas-raised p-3 type-body-sm text-ink-subtle">
                <Icon name={step.icon} className="text-[18px] text-primary" />
                <span>{step.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoBooking() {
  return (
    <section className="w-full scroll-mt-20 bg-canvas py-20" id="demo-booking">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 p-0 lg:grid-cols-12 lg:rounded-xl lg:border lg:border-border-card lg:bg-canvas-raised lg:p-14 lg:shadow-card">
          <div className="flex flex-col lg:col-span-5">
            <span className="mb-4 self-start rounded border border-chip-ochre-fg/30 bg-chip-ochre px-3 py-1 type-label-sm text-chip-ochre-fg">
              Free trial class
            </span>
            <h2 className="font-display text-3xl font-semibold text-ink lg:text-4xl">
              Book a free trial class
            </h2>
            <p className="mt-4 type-body-md leading-relaxed text-ink-subtle">
              A private 1:1 session with an experienced tutor. Enroll after the
              trial and get 3 extra classes on any package.
            </p>
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Meet your teacher:",
                  body: "See how a live interactive class feels before you commit.",
                },
                {
                  title: "Personalized learning plan:",
                  body: "Mapped to your board — CBSE, ICSE, IB, IGCSE, or state.",
                },
                {
                  title: "3 extra classes on enrollment:",
                  body: "Added when you join a 24-session or any package.",
                },
                {
                  title: "No credit card required:",
                  body: "The trial is free, with no automatic subscription.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chip-emerald text-primary">
                    <Icon name="check" className="text-[16px]" />
                  </div>
                  <p className="type-body-sm text-ink">
                    <strong>{item.title}</strong> {item.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4 rounded-lg border border-border/60 bg-canvas-inset p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-sans font-bold text-on-primary">
                +3
              </div>
              <div>
                <p className="type-label-lg text-ink">
                  3 extra classes when you enroll
                </p>
                <p className="type-body-sm text-ink-subtle">
                  Complimentary classes added on a 24-session or any package.
                </p>
              </div>
            </div>
          </div>
          <div className="p-0 lg:col-span-7 lg:rounded-lg lg:border lg:border-border/70 lg:bg-canvas-inset lg:p-10 lg:shadow-sm">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section
      className="w-full scroll-mt-20 border-y border-rule/70 bg-canvas-raised py-20"
      id="reviews"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="rounded bg-canvas-inset px-3 py-1 type-label-sm font-bold tracking-wider text-primary uppercase">
              Family stories
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink lg:text-4xl">
              Trusted by families across UAE and the GCC
            </h2>
            <p className="mt-2 type-body-sm text-ink-subtle">
              UAE · Saudi Arabia · Qatar · Kuwait · Oman
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <article className="flex flex-col justify-between rounded-lg border border-border-card bg-canvas p-8 shadow-sm">
            <div>
              <div className="mb-4 flex items-center gap-1 text-secondary">
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
              </div>
              <p className="font-display type-body-sm italic leading-relaxed text-ink">
                &ldquo;Our son was anxious about Maths before tests. His
                TutorParks tutor made the lessons clear and calm. He now asks
                for extra practice instead of putting it off.&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-lg border-t border-rule/40 bg-canvas-raised/50 p-3 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chip-emerald type-label-lg text-primary">
                AM
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="type-label-lg text-ink">Amal Al-Mansoori</p>
                  <Icon name="verified" className="text-[16px] text-primary" />
                </div>
                <p className="type-body-sm text-ink-subtle">
                  Parent of Grade 7 · Maths · UAE
                </p>
              </div>
            </div>
          </article>
          <article className="flex flex-col justify-between rounded-lg border border-border-card bg-canvas p-8 shadow-sm">
            <div>
              <div className="mb-4 flex items-center gap-1 text-secondary">
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
              </div>
              <p className="font-display type-body-sm italic leading-relaxed text-ink">
                &ldquo;The tutors explain IB Science properly instead of
                rushing to answers. Evening slots work around our week in
                Riyadh, and we get progress updates without sitting in.&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-lg border-t border-rule/40 bg-canvas-raised/50 p-3 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chip-ochre type-label-lg text-chip-ochre-fg">
                OH
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="type-label-lg text-ink">Omar Al-Harbi</p>
                  <Icon name="verified" className="text-[16px] text-primary" />
                </div>
                <p className="type-body-sm text-ink-subtle">
                  Parent of Grade 10 · Science · Saudi Arabia
                </p>
              </div>
            </div>
          </article>
          <article className="flex flex-col justify-between rounded-lg border border-border-card bg-canvas p-8 shadow-sm">
            <div>
              <div className="mb-4 flex items-center gap-1 text-secondary">
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
              </div>
              <p className="font-display type-body-sm italic leading-relaxed text-ink">
                &ldquo;Homework help and English together made a real
                difference. When exams approached we switched to revision
                without changing tutors.&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-lg border-t border-rule/40 bg-canvas-raised/50 p-3 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-error-container type-label-lg text-tertiary">
                MN
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="type-label-lg text-ink">Meera Nair</p>
                  <Icon name="verified" className="text-[16px] text-primary" />
                </div>
                <p className="type-body-sm text-ink-subtle">
                  Parent of Grade 4 · English · Qatar
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function TeachWithUs() {
  return (
    <section
      className="w-full scroll-mt-20 border-t border-rule/70 bg-canvas-raised py-20"
      id="teach-with-us"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/80 bg-canvas-inset px-3.5 py-1.5 type-label-sm font-bold tracking-wider text-primary uppercase">
            <Icon
              name="workspace_premium"
              className="text-[16px] text-secondary"
            />
            <span>For Passionate Educators</span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-ink lg:text-4xl">
            Teach K-12 students across UAE and the GCC
          </h2>
          <p className="mt-3 type-body-md leading-relaxed text-ink-subtle">
            Inspire learners in Maths, English, Science, languages, and exam
            boards. Competitive pay, flexible hours, and a supportive teaching
            community.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="flex flex-col space-y-6 lg:col-span-5">
            {[
              {
                icon: "payments",
                tone: "bg-chip-ochre text-chip-ochre-fg",
                title: "Competitive pay",
                body: "Fair compensation with reliable payouts. Teach full-time or a few evening hours each week.",
              },
              {
                icon: "auto_stories",
                tone: "bg-canvas-inset text-primary",
                title: "Board-aligned lessons",
                body: "Interactive whiteboard tools and lesson support for CBSE, ICSE, IB, IGCSE, and state boards — spend less time prepping.",
              },
              {
                icon: "calendar_month",
                tone: "bg-chip-emerald text-primary",
                title: "Flexible hours",
                body: "Teach remotely. Choose your availability and we match students whose timings fit yours.",
              },
              {
                icon: "groups",
                tone: "bg-error-container text-tertiary",
                title: "A teaching community",
                body: "Work alongside experienced K-12 educators, share practice, and get mentoring feedback.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-lg border border-border-card bg-canvas p-6 shadow-sm"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${item.tone}`}
                >
                  <Icon name={item.icon} className="text-[24px]" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 type-body-sm leading-relaxed text-ink-subtle">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-0 lg:col-span-7 lg:rounded-xl lg:border lg:border-border-card lg:bg-canvas lg:p-10 lg:shadow-card">
            <div className="mb-6">
              <span className="rounded border border-chip-ochre-fg/30 bg-chip-ochre px-3 py-1 type-label-sm text-chip-ochre-fg">
                Fast-Track Application
              </span>
              <h3 className="mt-2 font-sans text-2xl font-bold text-ink">
                Teacher Application &amp; Onboarding
              </h3>
              <p className="mt-1 type-body-sm text-ink-subtle">
                Complete the initial screening below to connect with our
                academic hiring committee.
              </p>
            </div>
            <TeacherForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "What happens during the free trial class?",
      a: "The trial is a live 1:1 mini-class. Your matched tutor works through a real topic or homework item with your child on the interactive board. Near the end, the tutor speaks with the parent about what they noticed and a suggested learning plan.",
    },
    {
      q: "How are tutors selected?",
      a: "Every tutor is background-checked, subject-tested, and evaluated in a live teaching session before they meet students.",
    },
    {
      q: "Can we switch tutors, subjects, or boards?",
      a: "Yes. If your child needs a different teaching style, or you want to move from Maths to Science, English, or another board (CBSE, ICSE, IB, IGCSE, or state) before exams, your coordinator will rematch without a penalty.",
    },
    {
      q: "Do you teach students in more than one country?",
      a: "Yes. We run live online classes for K-12 families across the UAE, Saudi Arabia, Qatar, Kuwait, and Oman. Timings are scheduled in Gulf time (GMT+3), which those countries share.",
    },
    {
      q: "What technology do we need for classes?",
      a: "A laptop, desktop, or tablet with a camera, microphone, and a stable internet connection. The interactive whiteboard runs in Chrome or Safari — no bulky downloads.",
    },
  ];

  return (
    <section className="w-full bg-canvas py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="rounded bg-canvas-inset px-3 py-1 type-label-sm font-bold tracking-wider text-primary uppercase">
            Got Questions?
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 type-body-sm leading-relaxed text-ink-subtle">
            Everything you need to know about the free trial, tutors, boards,
            and class format.
          </p>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.q}
              className="group cursor-pointer rounded-lg border border-border-card bg-canvas-raised p-6 shadow-sm transition-all duration-200 open:shadow-card"
            >
              <summary className="flex list-none items-center justify-between font-sans text-base font-bold text-ink select-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <Icon
                  name="expand_more"
                  className="text-ink-subtle transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="mt-4 border-t border-rule/40 pt-3 type-body-sm leading-relaxed text-ink-subtle">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      className="w-full scroll-mt-20 border-t border-rule/70 bg-canvas-raised py-20"
      id="contact-advisors"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 p-0 lg:grid-cols-12 lg:rounded-xl lg:border lg:border-border-card lg:bg-canvas lg:p-14 lg:shadow-card">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <span className="rounded bg-canvas-inset px-3 py-1 type-label-sm font-bold tracking-wider text-primary uppercase">
                Direct Support
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink lg:text-4xl">
                Speak with Our Academic Advisors
              </h2>
              <p className="mt-4 type-body-sm leading-relaxed text-ink-subtle">
                Questions about boards, subjects, timings, or how a trial class
                works? Our advisors help families across the UAE, Saudi Arabia,
                Qatar, Kuwait, and Oman.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  className="flex items-center gap-4 rounded-lg border border-border/60 bg-canvas-raised p-4 transition-colors hover:bg-canvas-inset"
                  href="mailto:advisors@tutorparks.com"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-canvas text-primary">
                    <Icon name="mail" className="text-[24px]" />
                  </div>
                  <div>
                    <p className="font-sans text-base font-bold text-ink">
                      advisors@tutorparks.com
                    </p>
                    <p className="type-body-sm text-ink-subtle">
                      Sun – Thu, 4:00 PM – 9:00 PM Gulf time (GMT+3)
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3 pt-6">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              <span className="type-body-sm font-semibold text-ink">
                Advisors typically reply during Gulf evenings
              </span>
            </div>
          </div>
          <div className="p-0 lg:col-span-6 lg:rounded-lg lg:border lg:border-border/60 lg:bg-canvas-raised lg:p-8">
            <h3 className="mb-2 font-sans text-xl font-bold text-ink">
              Send a Quick Message
            </h3>
            <p className="mb-6 type-body-sm text-ink-subtle">
              Leave your contact details and our curriculum specialist will
              reach out with tailor-made options.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
