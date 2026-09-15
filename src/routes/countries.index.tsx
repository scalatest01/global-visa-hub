import { createFileRoute, Link } from "@tanstack/react-router";
import { countries } from "@/lib/data";

export const Route = createFileRoute("/countries/")({
  head: () => ({
    meta: [
      {
        title: "Destinations — Poland, Germany, Ukraine & More | ABC Immigration",
      },
      {
        name: "description",
        content:
          "Explore visa and immigration routes for Poland, Ukraine, Germany, Netherlands, Romania, Bulgaria, Serbia and Denmark — work, study, business and family.",
      },
      {
        property: "og:title",
        content: "Destinations — Poland, Germany, Ukraine & More | ABC Immigration",
      },
      {
        property: "og:description",
        content:
          "Visa and immigration routes for 8 European destinations: work, study, business and family.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CountriesPage,
});

function CountriesPage() {
  return (
    <div>
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-14 lg:py-20">
          <p className="eyebrow">Destinations</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            Eight countries, one team
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Each destination has its own rules, quotas and timelines. Pick a country to
            see the routes we handle there.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <Link
              key={country.slug}
              to="/countries/$slug"
              params={{ slug: country.slug }}
              className="card-surface flex flex-col transition-colors hover:border-primary/40 hover:bg-accent/40"
            >
              <span className="text-4xl" aria-hidden="true">
                {country.code}
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold">{country.name}</h2>
              <p className="mt-1 text-sm text-primary">{country.tagline}</p>
              <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                {country.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {country.popularVisas.map((visa) => (
                  <span
                    key={visa}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {visa}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
