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
      <main id="top" className="w-full min-h-[calc(100vh-20rem)] bg-canvas pt-20">
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
            <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.15]">
              Master Math, English &amp; Science with Expert{" "}
              <span className="text-primary italic underline decoration-secondary/60 underline-offset-8">
                1-on-1 Online Mentors
              </span>
            </h1>
            <p className="mt-6 max-w-xl type-body-lg leading-relaxed text-ink-subtle">
              Personalized interactive lessons for Grades K-12. Build rock-solid
              foundational concepts, boost school grades, and spark lifelong
              academic curiosity in a supportive environment.
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <a className="btn-primary group" href="#demo-booking">
                <span>Book Your 30-Min Free Demo</span>
                <Icon
                  name="arrow_forward"
                  className="text-[18px] transition-transform group-hover:translate-x-1"
                />
              </a>
              <a className="btn-outline text-center" href="#subjects-section">
                Explore Subjects &amp; Curriculum
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 type-body-sm text-ink-subtle">
              <Icon name="check_circle" className="text-[16px] text-primary" />
              <span>No credit card needed</span>
              <span className="text-rule">•</span>
              <span>Instant calendar confirmation</span>
              <span className="text-rule">•</span>
              <span>100% Free lesson</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <div className="flex items-center gap-2 rounded border border-border/80 bg-canvas px-3.5 py-1.5 type-label-sm text-ink-subtle shadow-sm">
                <Icon name="school" className="text-[16px] text-primary" />
                <span>100% Vetted Teachers</span>
              </div>
              <div className="flex items-center gap-2 rounded border border-border/80 bg-canvas px-3.5 py-1.5 type-label-sm text-ink-subtle shadow-sm">
                <Icon name="calendar_clock" className="text-[16px] text-secondary" />
                <span>Flexible Scheduling</span>
              </div>
            </div>
          </div>
          <div className="relative mt-6 lg:col-span-5 lg:mt-0">
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
                      1-on-1 Dedicated Classes
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
                      Flexible Scheduling
                    </p>
                    <p className="mt-1 type-body-sm leading-tight text-ink-subtle">
                      Sessions that fit the family calendar.
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center p-4 md:items-start">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chip-emerald text-primary">
              <Icon name="event_available" className="text-[26px]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-primary lg:text-5xl">
                30
              </span>
              <span className="text-2xl font-bold text-primary">Min</span>
            </div>
            <p className="mt-1 font-sans text-base font-bold text-ink">
              Free Demo Session
            </p>
            <p className="type-body-sm text-ink-subtle">
              No credit card. Baseline skill report included.
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
              Dedicated Classes
            </p>
            <p className="type-body-sm text-ink-subtle">
              Live sessions with one matched mentor.
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
              Scheduling
            </p>
            <p className="type-body-sm text-ink-subtle">
              Times that fit the family week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  return (
    <section className="w-full scroll-mt-20 bg-canvas py-20" id="subjects-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded bg-canvas-inset px-3 py-1 type-label-sm font-bold tracking-wider text-primary uppercase">
              Academic Focus Areas
            </div>
            <h2 className="font-display text-3xl font-semibold text-ink lg:text-4xl">
              Tailored Instruction Built for K-12 Mastery
            </h2>
            <p className="mt-3 type-body-md leading-relaxed text-ink-subtle">
              Whether catching up on fundamental concepts or accelerating into
              Advanced Placement tracks, our curricula match your school&apos;s
              exact standards.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="type-label-sm tracking-wider text-ink-subtle uppercase">
              Aligned with:
            </span>
            <span className="rounded border border-border bg-canvas px-3 py-1 type-label-sm text-ink shadow-sm">
              Common Core
            </span>
            <span className="rounded border border-border bg-canvas px-3 py-1 type-label-sm text-ink shadow-sm">
              NGSS
            </span>
            <span className="rounded border border-border bg-canvas px-3 py-1 type-label-sm text-ink shadow-sm">
              AP / IB
            </span>
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
                <h3 className="font-sans text-2xl font-bold text-ink">
                  Mathematics
                </h3>
                <span className="rounded border border-border/60 bg-canvas-inset px-2.5 py-1 type-label-sm text-primary">
                  Grades K–12
                </span>
              </div>
              <p className="mb-6 type-body-sm leading-relaxed text-ink-subtle">
                Cultivate deep problem-solving intuition, step-by-step arithmetic
                logic, and full confidence for classroom quizzes and standardized
                exams.
              </p>
              <div className="mb-6 rounded-lg border border-border/50 bg-canvas-inset p-4">
                <p className="mb-2.5 type-label-sm tracking-wider text-ink uppercase">
                  Curriculum Topics Covered
                </p>
                <ul className="space-y-2 type-body-sm text-ink-subtle">
                  {[
                    "Early Numeracy & Mental Math",
                    "Pre-Algebra & Geometry Foundations",
                    "Algebra I, II & Trigonometry",
                    "Pre-Calculus, AP Calculus & Statistics",
                  ].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <Icon name="check_circle" className="text-[16px] text-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <a className="btn-primary w-full" href="#demo-booking">
                Book Math Free Demo
              </a>
              <a
                className="flex items-center justify-center gap-1 text-center type-body-sm font-semibold text-primary hover:text-primary-hover"
                href="#contact-advisors"
              >
                <span>View Math Syllabus &amp; Diagnostic Info</span>
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
                  English Arts
                </h3>
                <span className="rounded border border-chip-ochre bg-chip-ochre px-2.5 py-1 type-label-sm text-tertiary">
                  Grades K–12
                </span>
              </div>
              <p className="mb-6 type-body-sm leading-relaxed text-ink-subtle">
                Master confident verbal articulation, nuanced literary text
                analysis, robust grammar mechanics, and persuasive essay
                composition.
              </p>
              <div className="mb-6 rounded-lg border border-border/50 bg-canvas-inset p-4">
                <p className="mb-2.5 type-label-sm tracking-wider text-ink uppercase">
                  Curriculum Topics Covered
                </p>
                <ul className="space-y-2 type-body-sm text-ink-subtle">
                  {[
                    "Phonics & Early Reading Fluency",
                    "Reading Comprehension & Critical Analysis",
                    "Creative, Expository & Essay Writing",
                    "Vocabulary, Grammar & AP Lit Prep",
                  ].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <Icon name="check_circle" className="text-[16px] text-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <a className="btn-primary w-full" href="#demo-booking">
                Book English Free Demo
              </a>
              <a
                className="flex items-center justify-center gap-1 text-center type-body-sm font-semibold text-primary hover:text-primary-hover"
                href="#contact-advisors"
              >
                <span>View English Syllabus &amp; Reading Lists</span>
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
                  Science &amp; STEM
                </h3>
                <span className="rounded border border-chip-emerald bg-chip-emerald px-2.5 py-1 type-label-sm text-primary">
                  Grades K–12
                </span>
              </div>
              <p className="mb-6 type-body-sm leading-relaxed text-ink-subtle">
                Explore hands-on interactive simulations, develop
                hypothesis-testing habits, and master chemistry equations and
                physics theorems with ease.
              </p>
              <div className="mb-6 rounded-lg border border-border/50 bg-canvas-inset p-4">
                <p className="mb-2.5 type-label-sm tracking-wider text-ink uppercase">
                  Curriculum Topics Covered
                </p>
                <ul className="space-y-2 type-body-sm text-ink-subtle">
                  {[
                    "Elementary Inquiry & Earth Science",
                    "Middle School Life & Physical Science",
                    "High School Biology & Chemistry",
                    "Honors/AP Physics & STEM Prep",
                  ].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <Icon name="check_circle" className="text-[16px] text-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <a className="btn-primary w-full" href="#demo-booking">
                Book Science Free Demo
              </a>
              <a
                className="flex items-center justify-center gap-1 text-center type-body-sm font-semibold text-primary hover:text-primary-hover"
                href="#contact-advisors"
              >
                <span>View Science Lab Modules &amp; Specs</span>
                <Icon name="arrow_right_alt" className="text-[16px]" />
              </a>
            </div>
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
            Frictionless Onboarding
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink lg:text-4xl">
            How TutorParks Works in 3 Simple Steps
          </h2>
          <p className="mt-3 type-body-md leading-relaxed text-ink-subtle">
            We combine human teaching empathy with rigorous tracking so parents
            can step back while grades step up.
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="relative flex flex-col rounded-lg border border-border-card bg-canvas p-8 shadow-card">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-border/60 bg-canvas-raised font-display text-2xl font-bold text-primary">
              01
            </div>
            <h3 className="mb-3 font-sans text-xl font-bold text-ink">
              Book a 30-Min Free Demo
            </h3>
            <p className="type-body-sm leading-relaxed text-ink-subtle">
              Tell us your child’s grade, subject focus, and specific hurdles.
              Pick a convenient time slot that fits seamlessly into your family
              routine.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded border border-border/50 bg-canvas-raised p-3 type-body-sm text-ink-subtle">
              <Icon name="event_available" className="text-[18px] text-primary" />
              <span>Zero obligation • Instant setup</span>
            </div>
          </div>
          <div className="relative flex flex-col rounded-lg border border-border-card bg-canvas p-8 shadow-card">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-border/60 bg-canvas-raised font-display text-2xl font-bold text-secondary">
              02
            </div>
            <h3 className="mb-3 font-sans text-xl font-bold text-ink">
              Meet Your Matched Expert Tutor
            </h3>
            <p className="type-body-sm leading-relaxed text-ink-subtle">
              Experience a live, interactive 1-on-1 session on our digital
              whiteboard. Your mentor assesses core skills and provides a written
              baseline diagnostic.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded border border-border/50 bg-canvas-raised p-3 type-body-sm text-ink-subtle">
              <Icon name="assessment" className="text-[18px] text-primary" />
              <span>Free Baseline Diagnostic Report</span>
            </div>
          </div>
          <div className="relative flex flex-col rounded-lg border border-border-card bg-canvas p-8 shadow-card">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-border/60 bg-canvas-raised font-display text-2xl font-bold text-tertiary">
              03
            </div>
            <h3 className="mb-3 font-sans text-xl font-bold text-ink">
              Unlock Academic Growth
            </h3>
            <p className="type-body-sm leading-relaxed text-ink-subtle">
              Choose your flexible weekly schedule. Follow a custom curriculum
              roadmap with regular homework guidance and weekly parent progress
              digests.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded border border-border/50 bg-canvas-raised p-3 type-body-sm text-ink-subtle">
              <Icon name="insights" className="text-[18px] text-primary" />
              <span>Weekly Parent Reports &amp; Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoBooking() {
  return (
    <section className="w-full scroll-mt-20 bg-canvas py-20" id="demo-booking">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 rounded-xl border border-border-card bg-canvas-raised p-8 shadow-card lg:grid-cols-12 lg:p-14">
          <div className="flex flex-col lg:col-span-5">
            <span className="mb-4 self-start rounded border border-chip-ochre-fg/30 bg-chip-ochre px-3 py-1 type-label-sm text-chip-ochre-fg">
              Zero-Risk Trial
            </span>
            <h2 className="font-display text-3xl font-semibold text-ink lg:text-4xl">
              Schedule Your Free 30-Minute Trial Session
            </h2>
            <p className="mt-4 type-body-md leading-relaxed text-ink-subtle">
              In this private 1-on-1 trial, your child works through a topic of
              their choice with an experienced subject tutor.
            </p>
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Complimentary Baseline Diagnostic:",
                  body: "Discover precise strengths and hidden curriculum gaps.",
                },
                {
                  title: "Custom Curriculum Roadmap:",
                  body: "Tailored study plan aligned with your school district syllabus.",
                },
                {
                  title: "No Credit Card Required:",
                  body: "100% free experience with no automatic subscription trap.",
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
                24h
              </div>
              <div>
                <p className="type-label-lg text-ink">Need a session today?</p>
                <p className="type-body-sm text-ink-subtle">
                  Same-day appointments available for urgent homework or test
                  prep.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-border/70 bg-canvas-inset p-6 shadow-sm lg:col-span-7 lg:p-10">
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
              Verified Family Reviews
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink lg:text-4xl">
              Loved by Over 3,000 Families Across the Country
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-lg border border-border/80 bg-canvas px-4 py-2.5 shadow-sm">
              <div className="flex text-secondary">
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
                <Icon name="star" filled className="text-[18px]" />
              </div>
              <span className="type-label-lg text-ink">4.9 Overall Parent Score</span>
            </div>
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
                &ldquo;Lucas was falling behind in Pre-Algebra and feeling anxious
                before tests. Within 8 weeks with his TutorParks tutor, his test
                score jumped from 68% to 92%. He actually enjoys math now!&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-lg border-t border-rule/40 bg-canvas-raised/50 p-3 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chip-emerald type-label-lg text-primary">
                SJ
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="type-label-lg text-ink">Sarah Jenkins</p>
                  <Icon name="verified" className="text-[16px] text-primary" />
                </div>
                <p className="type-body-sm text-ink-subtle">
                  Parent of 7th Grader • Math Focus
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
                &ldquo;The quality of tutors is exceptional. They don’t just give
                answers; they teach foundational principles and test strategy for
                AP Chemistry &amp; Physics. Outstanding platform!&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-lg border-t border-rule/40 bg-canvas-raised/50 p-3 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chip-ochre type-label-lg text-chip-ochre-fg">
                DC
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="type-label-lg text-ink">Dr. David Chen</p>
                  <Icon name="verified" className="text-[16px] text-primary" />
                </div>
                <p className="type-body-sm text-ink-subtle">
                  Parent of 10th &amp; 11th Graders • Science
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
                &ldquo;My daughter was struggling with reading fluency. Her tutor
                made every 45-minute lesson feel like a fun game. Her teacher
                remarked on her remarkable vocabulary jump!&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-lg border-t border-rule/40 bg-canvas-raised/50 p-3 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-error-container type-label-lg text-tertiary">
                MG
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="type-label-lg text-ink">Maria Gonzalez</p>
                  <Icon name="verified" className="text-[16px] text-primary" />
                </div>
                <p className="type-body-sm text-ink-subtle">
                  Parent of 4th Grader • Reading &amp; ELA
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
            <Icon name="workspace_premium" className="text-[16px] text-secondary" />
            <span>For Passionate Educators</span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-ink lg:text-4xl">
            Join Our Network of Elite K-12 Mentors
          </h2>
          <p className="mt-3 type-body-md leading-relaxed text-ink-subtle">
            Inspire young minds in Math, English, and Science. Enjoy competitive
            pay ($35-$65/hr), flexible hours, curated curricula, and a supportive
            educator community.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="flex flex-col space-y-6 lg:col-span-5">
            {[
              {
                icon: "payments",
                tone: "bg-chip-ochre text-chip-ochre-fg",
                title: "Top Tier Compensation",
                body: "$35–$65/hr with direct bi-weekly deposits and performance bonuses for high student milestone achievements.",
              },
              {
                icon: "auto_stories",
                tone: "bg-canvas-inset text-primary",
                title: "Curated Lesson Toolkits",
                body: "Interactive STEM labs, digital whiteboard toolkits, and school-aligned lesson slides provided upfront—spend less time prepping.",
              },
              {
                icon: "calendar_month",
                tone: "bg-chip-emerald text-primary",
                title: "Ultimate Flexibility",
                body: "Teach remotely from home. Choose your availability between 5 to 30 hours per week with students matched to your optimal hours.",
              },
              {
                icon: "groups",
                tone: "bg-error-container text-tertiary",
                title: "Community of Scholars",
                body: "Collaborate with fellow state-certified K-12 educators, participate in pedagogical workshops, and receive mentoring feedback.",
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
          <div className="rounded-xl border border-border-card bg-canvas p-8 shadow-card lg:col-span-7 lg:p-10">
            <div className="mb-6">
              <span className="rounded border border-chip-ochre-fg/30 bg-chip-ochre px-3 py-1 type-label-sm text-chip-ochre-fg">
                Fast-Track Application
              </span>
              <h3 className="mt-2 font-sans text-2xl font-bold text-ink">
                Teacher Application &amp; Onboarding
              </h3>
              <p className="mt-1 type-body-sm text-ink-subtle">
                Complete the initial screening below to connect with our academic
                hiring committee.
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
      q: "What happens during the 30-minute free demo?",
      a: "The demo is an actual live 1-on-1 mini-class. Your matched tutor will review a real topic or homework concept with your child on our collaborative digital board. During the last 5–10 minutes, the tutor connects with the parent to share their diagnostic assessment and recommend a personalized plan.",
    },
    {
      q: "How are your tutors selected and vetted?",
      a: "We accept fewer than 3% of tutor applicants. Every tutor undergoes stringent background checks, academic degree verification from top universities, rigorous subject knowledge tests, and a live pedagogical teaching evaluation conducted by our senior curriculum board.",
    },
    {
      q: "Can we switch tutors or subjects if our needs change?",
      a: "Yes, anytime. We provide 100% flexibility. If your child requires a different teaching style or wants to transition from Math to AP Biology or English writing before exam week, your dedicated academic coordinator will reassign or balance subject credits instantly without penalty.",
    },
    {
      q: "What technology or software do we need for classes?",
      a: "No bulky downloads or complex setups are required. All you need is a laptop, desktop computer, or iPad/tablet with a working web camera, microphone, and stable internet connection. Our interactive whiteboard works directly in Google Chrome or Safari.",
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
            Everything you need to know about our demo process, tutor vetting,
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
        <div className="grid grid-cols-1 gap-12 rounded-xl border border-border-card bg-canvas p-8 shadow-card lg:grid-cols-12 lg:p-14">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <span className="rounded bg-canvas-inset px-3 py-1 type-label-sm font-bold tracking-wider text-primary uppercase">
                Direct Support
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink lg:text-4xl">
                Speak with Our Academic Advisors
              </h2>
              <p className="mt-4 type-body-sm leading-relaxed text-ink-subtle">
                Have specific questions about state standards, gifted programs,
                or IEP accommodations? Our academic guidance team is ready to
                help you formulate the best pathway for your child.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  className="flex items-center gap-4 rounded-lg border border-border/60 bg-canvas-raised p-4 transition-colors hover:bg-canvas-inset"
                  href="tel:8005550199"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-canvas text-primary">
                    <Icon name="call" className="text-[24px]" />
                  </div>
                  <div>
                    <p className="font-sans text-base font-bold text-ink">
                      (800) 555-0199
                    </p>
                    <p className="type-body-sm text-ink-subtle">
                      Mon – Fri, 8:00 AM – 8:00 PM EST (Toll-Free)
                    </p>
                  </div>
                </a>
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
                      Typical response within 2 hours
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
                Live Chat Advisor Available Now (Average wait &lt; 2 mins)
              </span>
            </div>
          </div>
          <div className="rounded-lg border border-border/60 bg-canvas-raised p-6 lg:col-span-6 lg:p-8">
            <h3 className="mb-2 font-sans text-xl font-bold text-ink">
              Send a Quick Message
            </h3>
            <p className="mb-6 type-body-sm text-ink-subtle">
              Leave your contact details and our curriculum specialist will reach
              out with tailor-made options.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
