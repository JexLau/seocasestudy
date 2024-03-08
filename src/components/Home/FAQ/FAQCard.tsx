export const FAQCard = ({ faq }: { faq: { q: string, a: string } }) => {
  return <div className="py-5">
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
        <span> {faq.q} </span>
        <span className="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="1.5" viewBox="0 0 24 24" width="24">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p className="group-open:animate-fadeIn mt-3 text-neutral-600" dangerouslySetInnerHTML={{ __html: faq.a}}>
      </p>
    </details>
  </div>
}
