import { createFileRoute, Link } from "@tanstack/react-router";
import { visaServices } from "@/lib/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Visa Services — Job, Student, Business & Family Visas | ABC Immigration" },
      {
        name: "description",
        content:
          "Work permits, student visas, business visas, spouse and family visas, visa extensions and help with any other visa situation across 8 European countries.",
      },
      {
        property: "og:title",
        content: "Visa Services — Job, Student, Business & Family Visas | ABC Immigration",
      },
      {
        property: "og:description",
        content:
          "Work permits, student visas, business visas, family visas, extensions and any other visa help across Europe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-14 lg:py-20">
          <p className="eyebrow">Visa services</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            Every kind of visa help, in one place
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Whether you're moving for a job, a degree, a business or your family — or you
            just need more time on a visa you already have — we handle the paperwork from
            start to finish.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page flex flex-col gap-6">
          {visaServices.map((service) => (
            <article key={service.slug} className="card-surface">
              <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
                <div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-muted-foreground">{service.description}</p>
                </div>
                <div className="rounded-xl bg-muted/60 p-5">
                  <h3 className="text-sm font-semibold">What's included</h3>
                  <ul className="mt-3 space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <span aria-hidden="true" className="text-primary">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          <div className="mt-4 rounded-2xl border border-primary/30 bg-accent/40 p-8 text-center">
            <h2 className="text-2xl font-semibold">
              Don't see your situation? We still can help.
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              Refusals, appeals, document legalisation, transit visas — describe your case
              and we'll build a plan.
            </p>
            <Link to="/contact" className="btn-primary mt-6">
              Describe your case
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
