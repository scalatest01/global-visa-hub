import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255)
    .transform((v) => v.toLowerCase()),
  phone: z.string().trim().max(40, "Phone number is too long").optional().default(""),
  country: z.string().trim().max(80).optional().default(""),
  visaType: z.string().trim().max(80).optional().default(""),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters)")
    .max(2000, "Message is too long"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      country: data.country || null,
      visa_type: data.visaType || null,
      message: data.message,
    });

    if (error) {
      throw new Error("We couldn't save your enquiry. Please try again in a moment.");
    }

    return { ok: true as const };
  });
