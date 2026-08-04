"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="state-page" aria-labelledby="error-title">
      <div className="container">
        <p className="eyebrow">Something went wrong</p>
        <h1 id="error-title">We could not load this page.</h1>
        <p>Please try again. No technical details have been displayed.</p>
        <button className="button" type="button" onClick={reset}>Try again</button>
      </div>
    </section>
  );
}
