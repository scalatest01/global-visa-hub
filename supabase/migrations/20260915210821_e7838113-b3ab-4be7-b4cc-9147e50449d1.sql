CREATE TABLE public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  country text,
  visa_type text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

GRANT INSERT ON public.contact_leads TO anon, authenticated;
GRANT ALL ON public.contact_leads TO service_role;

ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.contact_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);