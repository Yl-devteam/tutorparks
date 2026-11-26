import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-canvas px-gutter-mobile md:px-gutter">
      <main className="flex flex-1 w-full max-w-content flex-col items-center justify-center gap-space-xl py-margin-mobile md:py-margin">
        <Image
          className="h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex w-full max-w-prose flex-col items-center gap-space-md text-center sm:items-start sm:text-left">
          <h1 className="type-headline-lg text-ink">
            To get started, edit the{" "}
            <code className="rounded bg-canvas-inset px-space-sm py-space-xs type-body-sm font-mono">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="type-body-lg text-ink-subtle">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-primary"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-primary"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-space-sm sm:flex-row">
          <a
            className="btn-primary"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="btn-outline"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
