import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { submitEnquiry } from "@/lib/contact.functions";
import { countries, contactEmail, visaServices } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Free Visa Consultation | ABC Immigration" },
      {
        name: "description",
        content:
          "Tell us about your visa situation and get a free consultation. Work, student, business and family visas plus extensions for 8 European countries.",
      },
      {
        property: "og:title",
        content: "Contact — Free Visa Consultation | ABC Immigration",
      },
      {
        property: "og:description",
        content:
          "Tell us about your visa situation and get a free consultation with our team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type FormValues = {
  name: string;
  email: string;
  phone: string;
  country: string;
  visaType: string;
  message: string;
};

const emptyForm: FormValues = {
  name: "",
  email: "",
  phone: "",
  country: "",
  visaType: "",
  message: "",
};

function ContactPage() {
  const submitEnquiryFn = useServerFn(submitEnquiry);
  const [form, setForm] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const mutation = useMutation({
    mutationFn: (values: FormValues) => submitEnquiryFn({ data: values }),
    onSuccess: () => {
      toast.success("Thank you! Your enquiry has been received.", {
        description: "Our team will get back to you within one business day.",
      });
      setForm(emptyForm);
      setErrors({});
    },
    onError: (error) => {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    },
  });

  function set<K extends keyof FormValues>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: typeof errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address";
    if (form.message.trim().length < 10)
      next.message = "Please tell us a little more (at least 10 characters)";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    mutation.mutate(form);
  }

  const inputClass =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div>
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-14 lg:py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            Get your free visa consultation
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us where you want to go and your situation. We reply within one business
            day with the best route forward.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={handleSubmit} noValidate className="card-surface">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Full name *
                </label>
                <input
                  id="name"
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Your name"
                  maxLength={100}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@example.com"
                  maxLength={255}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+00 000 000 000"
                  maxLength={40}
                />
              </div>
              <div>
                <label htmlFor="country" className="mb-1.5 block text-sm font-medium">
                  Destination country
                </label>
                <select
                  id="country"
                  className={inputClass}
                  value={form.country}
                  onChange={(e) => set("country", e.target.value)}
                >
                  <option value="">Not sure yet</option>
                  {countries.map((country) => (
                    <option key={country.slug} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="visaType" className="mb-1.5 block text-sm font-medium">
                  Visa type
                </label>
                <select
                  id="visaType"
                  className={inputClass}
                  value={form.visaType}
                  onChange={(e) => set("visaType", e.target.value)}
                >
                  <option value="">Not sure yet</option>
                  {visaServices.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Your situation *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={inputClass}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Tell us about your goal, current status, timeline and any previous applications…"
                  maxLength={2000}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              {mutation.isPending ? "Sending…" : "Send enquiry"}
            </button>
          </form>

          <aside className="flex flex-col gap-4">
            <div className="card-surface">
              <h2 className="font-display text-lg font-semibold">What happens next</h2>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>1. We review your situation within one business day.</li>
                <li>2. We reply with the visa routes that fit you.</li>
                <li>3. You get a free, no-obligation plan and quote.</li>
              </ol>
            </div>
            <div className="card-surface">
              <h2 className="font-display text-lg font-semibold">Prefer email?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Write to us directly at{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-primary hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
            </div>
            <div className="card-surface">
              <h2 className="font-display text-lg font-semibold">Quick links</h2>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link to="/countries" className="text-primary hover:underline">
                  Browse destination countries →
                </Link>
                <Link to="/services" className="text-primary hover:underline">
                  See all visa services →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
