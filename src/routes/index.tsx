import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { countries, visaServices } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ABC Immigration — Work, Student & Business Visas in Europe",
      },
      {
        name: "description",
        content:
          "Expert help with work, student, business and spouse visas plus extensions for Poland, Germany, Ukraine, Netherlands, Romania, Bulgaria, Serbia and Denmark.",
      },
      {
        property: "og:title",
        content: "ABC Immigration — Work, Student & Business Visas in Europe",
      },
      {
        property: "og:description",
        content:
          "Work, student, business and family visas for 8 European destinations — plus extensions and any kind of visa help.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ABC Immigration — European Visa Experts" },
      {
        name: "twitter:description",
        content:
          "Visa help for Poland, Germany, Ukraine, Netherlands, Romania, Bulgaria, Serbia and Denmark.",
      },
    ],
  }),
  component: Index,
});

const steps = [
  {
    number: "01",
    title: "Free consultation",
    text: "Tell us your situation and destination. We assess your options and recommend the strongest visa route.",
  },
  {
    number: "02",
    title: "Documents & application",
    text: "We prepare, translate and legalise every document, then submit a complete, refusal-proof application.",
  },
  {
    number: "03",
    title: "Approval & aftercare",
    text: "We follow up with the authorities, and keep your status safe with renewals and extensions later on.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Immigration consultancy</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.1] sm:text-5xl">
              Your trusted path to work, study and life in Europe
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Job, student, business and spouse visas — plus extensions and any kind of
              visa help — across 8 European destinations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Book a free consultation
              </Link>
              <Link to="/countries" className="btn-outline">
                Explore destinations
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={hero}
              alt="Passport, visa stamp and travel documents on a bright desk"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Destinations</p>
              <h2 className="mt-2 text-3xl font-bold">Where we take you</h2>
            </div>
            <Link
              to="/countries"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all countries →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {countries.map((country) => (
              <Link
                key={country.slug}
                to="/countries/$slug"
                params={{ slug: country.slug }}
                className="card-surface transition-colors hover:border-primary/40 hover:bg-accent/40"
              >
                <span className="text-3xl" aria-hidden="true">
                  {country.flag}
                </span>
                <h3 className="mt-3 font-display font-semibold">{country.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {country.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visa services */}
      <section className="border-y border-border bg-muted/40 py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-2 text-3xl font-bold">Visa services for every situation</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visaServices.map((service) => (
              <Link
                key={service.slug}
                to="/services"
                className="card-surface transition-colors hover:border-primary/40 hover:bg-accent/40"
              >
                <h3 className="font-display font-semibold">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{service.tagline}</p>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-2 text-3xl font-bold">Three steps to your visa</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="card-surface">
                <span className="font-display text-sm font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 lg:pb-24">
        <div className="container-page">
          <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="text-3xl font-bold">Not sure which visa you need?</h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
              Send us your situation and we'll tell you exactly which route fits — free of
              charge.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Get free advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
