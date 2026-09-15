import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { countries, getCountry } from "@/lib/data";

export const Route = createFileRoute("/countries/$slug")({
  loader: ({ params }) => {
    const country = getCountry(params.slug);
    if (!country) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const country = loaderData ? getCountry(loaderData.slug) : undefined;
    if (!country) {
      return {
        meta: [
          { title: "Country not found | ABC Immigration" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        {
          title: `${country.name} Visas — Work, Study & Residence | ABC Immigration`,
        },
        {
          name: "description",
          content: `${country.tagline}. ABC Immigration handles work, student, business and family visas plus extensions for ${country.name}.`,
        },
        {
          property: "og:title",
          content: `${country.name} Visas — Work, Study & Residence | ABC Immigration`,
        },
        {
          property: "og:description",
          content: country.tagline,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CountryDetail,
  notFoundComponent: CountryNotFound,
});

function CountryDetail() {
  const { slug } = Route.useLoaderData();
  const country = getCountry(slug)!;
  const others = countries.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <div>
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-14 lg:py-20">
          <span
            aria-hidden="true"
            className="flex h-16 w-20 items-center justify-center rounded-2xl bg-background font-display text-2xl font-bold tracking-wide text-primary"
          >
            {country.code}
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{country.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {country.tagline}
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">
              Ask about {country.name}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold">
              Why people choose {country.name}
            </h2>
            <p className="mt-4 text-muted-foreground">{country.description}</p>
            <ul className="mt-6 space-y-3">
              {country.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="font-semibold text-primary">
                    ✓
                  </span>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="card-surface h-fit">
            <h2 className="font-display text-lg font-semibold">
              Popular visa routes
            </h2>
            <ul className="mt-4 space-y-3">
              {country.popularVisas.map((visa) => (
                <li
                  key={visa}
                  className="rounded-xl bg-muted/60 px-4 py-3 text-sm font-medium"
                >
                  {visa}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              We also handle extensions, renewals and any other visa question for{" "}
              {country.name}.
            </p>
            <Link to="/contact" className="btn-outline mt-5 w-full">
              Get a free assessment
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-12">
        <div className="container-page">
          <h2 className="text-lg font-semibold">Other destinations</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/countries/$slug"
                params={{ slug: other.slug }}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/40"
              >
                {other.code} · {other.name}
              </Link>
            ))}
            <Link
              to="/countries"
              className="rounded-full px-4 py-2 text-sm font-semibold text-primary hover:underline"
            >
              View all →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CountryNotFound() {
  return (
    <div className="container-page flex flex-col items-center py-24 text-center">
      <h1 className="text-3xl font-bold">Country not found</h1>
      <p className="mt-2 text-muted-foreground">
        We couldn't find that destination — but we may still help with it.
      </p>
      <div className="mt-6 flex gap-3">
        <Link to="/countries" className="btn-outline">
          All destinations
        </Link>
        <Link to="/contact" className="btn-primary">
          Contact us
        </Link>
      </div>
    </div>
  );
}
