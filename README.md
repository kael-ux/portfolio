# Your site — how to run it and change it

Plain HTML, CSS and JavaScript. No build step, no npm, nothing to install.
Open `js/main.js` and everything you'll ever need to edit is in the block at the top marked **EDIT HERE**.

---

## Run it locally

From the `claude-cael` folder:

```
python -m http.server 4173 --directory personal-portfolio
```

Then open `http://localhost:4173`.

**Keep that terminal window open.** Close it and the server stops — the browser will
say "localhost refused to connect". That isn't a broken site, it's just nothing
listening. Re-run the command and refresh.

**Double-clicking `index.html` also works** for a quick look. Everything on this page
runs locally, so the layout, images, theme toggle, job log and form validation all
behave normally. Use the server when you want to see it served the way the live site
will serve it.

---

## The four things you'll actually change

All four are at the top of `js/main.js`.

### 1. Your contact details

```js
const CONTACT = {
  email: '',
  whatsappDisplay: '',
  whatsappLink: ''
};
```

Change it in this one place and it updates the contact section, the footer, and the form fallback.

**They're empty on purpose.** Filling either one back in makes it appear on the
page again. Leave them empty and the contact section says so plainly instead of
showing dead links. A form endpoint (below) is the better option: people can
reach you without your address ever being in the code. `whatsappLink` is the international format — no `+`, no spaces.

### 2. Where the form sends

```js
const FORM_ENDPOINT = '';
```

**Leave it empty and the form still works.** It validates, then opens the visitor's email app with their message already written. Nobody hits a dead end.

**To get messages straight to your inbox:** go to formspree.io, sign up free, create a form, copy the endpoint URL it gives you, and paste it between the quotes. Nothing else changes.

### 3. Your photo

```js
const PORTRAIT = null;
```

While it's `null` the About section runs full width — no empty box, no "photo coming soon" placeholder.

When you have one: save it as `assets/img/cael-portrait.jpg` (and `.webp` if you can), then:

```js
const PORTRAIT = { image: 'cael-portrait', alt: 'Cael, wearing...' };
```

Write a real `alt` — describe what's actually in the picture.

### 4. Adding a job to the work log

Find `const PROJECTS = [` and copy any existing block. Change the text:

```js
{
  id: '09',
  category: 'tech',        // 'tech' | 'web' | 'video'
  status: 'live',          // 'live' | 'soon'
  title: 'Short, plain-language title',
  problem: 'What was wrong, in the client\'s words.',
  did: 'What you actually did.',
  result: 'What changed. Use a real number if you have one.',
  image: 'file-name-without-extension',
  alt: 'Describe what is in the photo.',
  extras: []
}
```

That's it. No HTML, no CSS. The filter chips pick up new categories automatically.

**Two of these blocks have `status: 'soon'`** — the web and video slots. Change `'soon'` to `'live'` and fill in the fields once you have real work to put there.

---

## Preparing photos before you add them

Images go in `assets/img/`. Before dropping one in:

1. **Landscape, cropped to 4:3.** The cards are built for it.
2. **1200px on the long edge.** Bigger just makes the page slow.
3. **Save as `.webp` and `.jpg` with the same name.** The site serves WebP and falls back to JPEG automatically.
4. **Under 200KB each.**

There's a script that does all of this at
`../Projects/Plan Mode/` — ask Claude to re-run the Phase 0 image prep and point it at the new files.

---

## Shooting better evidence — read this before your next job

Everything weak about the current photo set comes from how the shots were taken, not the work:

- **Shoot landscape.** Vertical phone shots lose half the frame when cropped.
- **Shoot BEFORE and after.** You currently have zero "before" photos, so you can never show a transformation — the most persuasive thing in PC servicing.
- **Turn a light on.** Three of your photos needed exposure correction to be usable.
- **Screenshot the numbers.** Temperatures, boot times, benchmark scores. You have exactly one number across your whole archive (54°C) and it's carrying the entire site.
- **Keep other people out of frame** unless they've said yes in writing.

---

## Publishing it

Free, no card needed:

1. Go to **Cloudflare Pages** (or Netlify).
2. Drag the whole `personal-portfolio` folder onto the upload area.
3. You get a live HTTPS URL in about a minute.
4. Add a custom domain later when you buy one — nothing in the code needs to change.

**Before you publish, check:** is `FORM_ENDPOINT` set, or are you happy with the email fallback? Either is fine — just know which one you shipped.

---

## What's deliberately not here

- No testimonials — you don't have any yet, and a fake one would sink the whole page.
- No stat counters — one real number isn't a dashboard.
- No before/after slider — you have no "before" photos.
- No photo on the BIOS job — the only shot showed someone else's face.

All four come back the moment you have the real thing.
