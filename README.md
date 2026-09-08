# Streamli digital presence

A multi-page Next.js 15 / TypeScript / Tailwind site with an original editorial “signal system” art direction. It uses native CSS interaction patterns to keep the experience quick and accessible.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Configure contact email (Resend)

1. Copy `.env.example` to `.env.local`.
2. In [Resend](https://resend.com/domains), add and verify a domain you own. Add the provided DNS records at your DNS provider.
3. Set `RESEND_FROM_EMAIL` to a sender on that verified domain, such as `Streamli <hello@yourdomain.com>`.
4. Set `CONTACT_EMAIL` to the inbox that receives enquiries and add your Resend API key as `RESEND_API_KEY`.
5. Optionally set `NEXT_PUBLIC_CALENDLY_URL` to Streamli’s real Calendly event URL. Until it is configured, the schedule button explains what needs to be added instead of opening a fake link.

The contact endpoint validates all fields server-side, includes a honeypot field for simple bot filtering, and keeps Resend credentials entirely on the server.

## Before launch

- Replace `streamli.example` and `hello@streamli.example` with Streamli’s real domain and email.
- Add verified team data/portraits and approved client testimonials; the current presentation intentionally uses explicit placeholders rather than fabricated people or endorsements.
- Replace the legal-page placeholders with reviewed policy copy.
- Set `NEXT_PUBLIC_SITE_URL` in production for canonical metadata, sitemap and robots URLs.
