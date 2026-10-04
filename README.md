# Holiday Imaginarium

A one-page site for outdoor Halloween and Christmas decorating in Oregon's Willamette Valley, with a simple option for Hanukkah window lights. The main action is texting a photo of the house.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run lint
npm run build
npm start
```

## Phone and email

Edit `src/config/business.ts`.

```ts
phone: "PHONE_NUMBER_HERE",
email: "EMAIL_HERE",
```

Replace those placeholders with the real phone and email. The phone can include formatting, such as `(503) 555-0199`. Every call and text button on the site uses this one value.

Text buttons open the phone's messaging app with this note already filled in:

> Hi! I'd like a quote for holiday decorating. Here's a photo of my house:

## Project photos

Drop files into `public/`:

- `public/hero.jpg` for the large photo beside the headline
- `public/projects/project-1.jpg` through `public/projects/project-6.jpg` for the inspiration grid

`.jpeg`, `.png`, `.webp`, and `.avif` work too. If a file is missing, the site shows a placeholder instead of a broken image. Refresh the page after adding photos. A production deploy needs a new build so the new files are included.

The photos already in those spots are free stock, used as inspiration until real project photos replace them. Unsplash and Pexels allow this use. Swap in your own files with the same names when you have them.

| File | Source |
| --- | --- |
| `hero.jpg` | [Unsplash](https://unsplash.com/photos/a-house-with-christmas-lights-XfmXO8BMrDs) — Gautam Krishnan |
| `project-1.jpg` | [Pexels](https://www.pexels.com/photo/13620529/) — glowing Halloween porch |
| `project-2.jpg` | [Unsplash](https://unsplash.com/photos/pine-tree-cover-by-string-lights-beside-house-ADeF0nyAvLo) — Wonderlane |
| `project-3.jpg` | [Pexels](https://www.pexels.com/photo/6937796/) — Halloween porch in daylight |
| `project-4.jpg` | [Unsplash](https://unsplash.com/photos/well-lit-house-at-night-NH7oHjePWUs) — Juliana Malta |
| `project-5.jpg` | [Unsplash](https://unsplash.com/photos/a-house-with-christmas-lights-EpjZhYC-hxU) — Gautam Krishnan |
| `project-6.jpg` | [Unsplash](https://unsplash.com/photos/white-and-brown-concrete-house-n_2GDrtTaXc) — Krzysztof Hepner |

## Service area

In `src/config/business.ts`, edit the `serviceAreas` list. Add or remove town names there. The service-area section and the business schema both read that list.

## Prices

In the same file, edit `startingPrices`:

- `holidayHelp`
- `classic`
- `festive`
- `custom`

Package cards and the pricing FAQ use these numbers.

## Quote form

The form is ready, but it does not send anywhere until a backend is configured. If someone submits it before that, the page says the request was not sent and points them to a text or call. It will not show a success message.

Copy `.env.example` to `.env.local` and set one option:

**Formspree**

```bash
QUOTE_BACKEND=formspree
FORMSPREE_FORM_ID=your_form_id
```

**Resend**

```bash
QUOTE_BACKEND=resend
RESEND_API_KEY=re_...
QUOTE_FROM_EMAIL=quotes@yourdomain.com
QUOTE_TO_EMAIL=you@yourdomain.com
```

`QUOTE_FROM_EMAIL` has to be a verified sender in Resend.

**Webhook** (Supabase, Zapier, Make, or another endpoint)

```bash
QUOTE_BACKEND=webhook
QUOTE_WEBHOOK_URL=https://example.com/quote
QUOTE_WEBHOOK_SECRET=optional-bearer-token
```

The same delivery code is used by the form and by `POST /api/quote`.

## Deploy

[Vercel](https://vercel.com) is the simplest host for Next.js. Import this project, then add the same environment variables from `.env.example` in the project settings. Also set `NEXT_PUBLIC_SITE_URL` to the live address, such as `https://yourdomain.com`, so the share card and business schema use the real URL.

Any host that can run a Node server works too:

```bash
npm run build
npm start
```
