/* =========================================================================
 *
 *   EDIT HERE — everything you need to change lives in this block.
 *
 *   Contact details and the project list. Nothing below this block needs
 *   touching to add a job, change your email, or update your number.
 *
 * ========================================================================= */

/* Contact details.
 *
 * Deliberately empty — Cael removed them to keep his address and number off a
 * public repo and out of reach of scrapers. Fill either one back in and it
 * reappears on the page automatically; leave them empty and the contact
 * section says so honestly instead of showing dead links.
 *
 * Better option than putting the email back: set FORM_ENDPOINT below. A form
 * endpoint means people can message you and the messages land in your inbox,
 * without your address ever appearing in the code.
 */
const CONTACT = {
  email: '',
  // Display format is what people read. Link format is what the phone dials.
  whatsappDisplay: '',
  whatsappLink: '',                 // international, no + and no spaces

  /* LinkedIn. Paste the full profile URL -- the one the browser shows when
   * you are on your own profile, e.g. https://www.linkedin.com/in/your-name/
   * Leave it empty and the row removes itself; it never renders a dead link.
   * linkedinDisplay is what people read. Leave it blank to show the handle. */
  /* Percent-encoded rather than a literal n-tilde: the raw character works in
     a modern browser, but %C3%B1 also survives being copied, pasted into an
     email client, or read by anything older. Same profile either way. */
  linkedin: 'https://www.linkedin.com/in/cael-marvin-bola%C3%B1os-90a678191',
  linkedinDisplay: 'Cael Marvin Bolaños'
};

/* Where the contact form sends.
 *
 * Leave this empty and the form still works: it validates, then opens the
 * visitor's mail app with everything already filled in. Nobody hits a dead end.
 *
 * To get messages straight to your inbox instead, sign up at formspree.io,
 * create a form, and paste the endpoint URL here. Nothing else changes.
 */
const FORM_ENDPOINT = '';

/* Your photo for the About section. Leave null until you have one.
 * When null, About renders full width — no empty box, no placeholder.
 * To add: drop the file in assets/img/ and set
 *   { image: 'cael-portrait', alt: 'Cael, ...' }
 */
const PORTRAIT = null;

/* The work log. Add a job by copying one block and changing the text.
 * category: 'tech' | 'web' | 'video'
 * status:   'live' | 'soon'
 * image:    file name in assets/img/ without the extension (or null)
 *
 * Rendered in Phase 3 — the data lives here from Phase 1 so there is one
 * place to edit from the start.
 */
/* Real pixel dimensions of every image, so each one can declare its own
 * width and height. The browser reserves exactly the right box before the
 * file arrives (no layout shift) and the photo is shown whole instead of
 * being cropped to a shape it was never taken in.
 *
 * Regenerate by reading the files — never hand-edit these numbers.
 */
/* Image cache version. vercel.json serves images with a one-year immutable
 * cache, which is right for files that never change — but these did. Without
 * this, anyone who had already visited would keep the old cropped versions
 * until 2027. Bump it whenever a file in assets/img/ is replaced.
 */
const IMG_V = '?v=2';

const IMAGE_DIMS = {
  'iga-landing': [1200, 900],   // the still that loads first; the animated variant is 640x480, same 4:3,
  'laptop-teardown': [1800, 1013],
  'nvme-os-install': [1800, 1013],
  'office-build-finished': [1342, 1800],
  'office-build-interior': [1350, 1800],
  'own-rig-cablemgmt': [1012, 1800],
  'pc-cleaning-service': [1013, 1800],
  'valheim-dust': [1800, 1350],
  'valheim-finished': [1350, 1800],
  'valheim-service': [1350, 1800],
  'xeth-54c': [1350, 1800],
  'xeth-finished': [1012, 1800],
  'xeth-parts': [1800, 1350],
};

const PROJECTS = [
  {
    id: '01',
    category: 'tech',
    status: 'live',
    title: 'High-end gaming build, running 54°C on air',
    problem: 'A paying client wanted a high-end gaming PC in a white build, put together for them properly.',
    did: 'Specced and built the whole system: Ryzen 9 7900X, Sapphire Nitro+ RX 7800 XT 16GB, B650M Aorus Elite AX, Kingston Fury Beast DDR5, AK620 Digital air cooler, and a 750W Gold full-modular supply. Every cable sleeved and routed.',
    result: 'Sitting at 54°C on air — that reading is on the cooler\'s own display in the photo. No liquid cooling needed to get there.',
    check: "If a shop quotes you liquid cooling before showing you an air-cooled temperature, ask what the air number was. A good tower cooler handles most consumer CPUs, costs less, and has no pump to fail.",
    image: 'xeth-54c',
    alt: "Inside a white gaming PC: the CPU cooler's built-in display reads 54 degrees Celsius, next to white fans, orange-lit DDR5 memory and a Radeon graphics card.",
    extras: [
      { image: 'xeth-parts', alt: 'The full parts list for the XETH build laid out before assembly: Ryzen 9 processor, Radeon RX 7800 XT graphics card, B650M motherboard, 750-watt power supply, cooler, memory and case fans.' },
      { image: 'xeth-finished', alt: 'The finished XETH build powered on: white tower case with a glass side panel, lit fans and a mesh front.' }
    ]
  },
  {
    id: '04',
    category: 'tech',
    status: 'live',
    secondary: true,   // behind "more work" — real, just not the strongest three
    title: 'Full laptop teardown, clean and upgrade',
    ownMachine: true,
    problem: 'My own HP laptop had slowed to a crawl and was running hot.',
    did: 'Stripped it down to the bare motherboard, cleared out the dust, upgraded the RAM, and swapped the mechanical hard drive for an SSD.',
    result: 'Back together and back in daily use, booting and loading noticeably faster.',
    check: "Before paying for any upgrade, open Task Manager's Performance tab and look at your disk. If it says HDD rather than SSD, that is almost certainly your whole problem, and it is the cheapest thing on the list to fix.",
    image: 'laptop-teardown',
    alt: 'An HP laptop stripped down to the bare motherboard, with the keyboard, battery, hard drive caddy and memory module removed and laid out on the desk beside it.',
    extras: []
  },
  {
    id: '03',
    category: 'tech',
    status: 'live',
    secondary: true,   // behind "more work" — real, just not the one that leads
    title: 'Office desktop on a tight budget',
    problem: 'A client needed a desktop for office work and had a tight budget to do it in.',
    did: 'Mixed second-hand and brand-new parts to bring the cost down — used where it was safe to, new where it mattered. Built around a Gigabyte GA-H110M-HD2 with an Intel CPU on the stock cooler, DDR4, a Lexar NS100 SSD and an Inplay 550W 80+ Bronze supply.',
    result: 'A reliable office machine that came in on budget. The client knew which parts were used and which were new before they paid.',
    check: "Ask for the parts list with “used” or “new” written next to each line. Anyone who will not put that in writing is hiding where the margin is.",
    image: 'office-build-interior',
    alt: 'Inside a completed office desktop: Gigabyte motherboard with an Intel stock cooler, a Lexar solid-state drive, and a 550-watt 80-Plus Bronze power supply, with the cables routed and tied.',
    extras: [
      { image: 'office-build-finished', alt: 'The finished office desktop: a plain black mid-tower with its front power light on, sitting on a desk.' }
    ]
  },
  {
    id: '05',
    category: 'tech',
    status: 'live',
    secondary: true,   // behind "more work" — real, just not the strongest three
    title: 'Frame drops and stuttering — fixed without new parts',
    problem: 'Gab\'s PC was dropping frames and stuttering in games.',
    did: 'Full strip and clean, dust cleared out of the cooler and intakes, and repasted the CPU thermal compound. Cables tidied on reassembly.',
    result: 'It was heat, not failing hardware. Sorted without replacing a single part — which is the answer more often than people expect.',
    check: "Frame drops that get worse the longer you play are almost always heat. Frame drops that are there from the first minute are usually settings or drivers. The timing tells you which conversation to have.",
    image: 'pc-cleaning-service',
    alt: 'A cleaned desktop interior with an MSI motherboard and a large tower air cooler, dust removed and the side panel off.',
    extras: [
      { image: 'own-rig-cablemgmt', alt: 'A cleaned and cable-managed desktop interior with a black tower cooler, a Zotac GeForce graphics card and a 750-watt power supply.' }
    ]
  },
  {
    id: '06',
    category: 'tech',
    status: 'live',
    secondary: true,   // behind "more work" — real, just not the strongest three
    title: 'NVMe drive fitted and Windows installed clean',
    ownMachine: true,
    problem: 'My own PC needed faster storage, and a clean start instead of dragging an old install across.',
    did: 'Fitted an Edilaca EN600 PRO PCIe Gen3x4 NVMe drive, then did a clean Windows install and put the drivers on from scratch.',
    result: 'Faster storage and a system with none of the old clutter carried over.',
    check: "Cloning an old Windows install onto a new drive carries every old problem with it. A clean install takes about an hour, costs nothing, and is usually the difference between “faster” and “like new”.",
    image: 'nvme-os-install',
    alt: 'An Edilaca EN600 PRO PCIe NVMe solid-state drive mounted on the motherboard before a clean Windows install.',
    extras: []
  },
  {
    id: '07',
    category: 'tech',
    status: 'live',
    secondary: true,   // behind "more work" — real, just not the strongest three
    title: 'BIOS update so a new CPU would run',
    problem: 'A friend was swapping in a Ryzen 7 5700X, and his motherboard needed a BIOS update before it would recognise the new chip.',
    did: 'Checked the board revision, matched it to the right firmware version, and ran the flash through to completion without interrupting power.',
    result: 'Board updated and the 5700X ran. This is the job where one mistake bricks the motherboard — it gets done carefully or it doesn\'t get done.',
    check: "Before buying a CPU for a board you already own, find that board's CPU support list on the maker's site. It gives the minimum BIOS version for each chip. Two minutes of checking saves a dead build.",
    image: null,          // no photo: the only shot shows a third party
    alt: null,
    noPhoto: "No photo — this one was on someone else's machine.",
    extras: []
  },
  {
    id: '02',
    category: 'tech',
    status: 'live',
    secondary: true,   // behind "more work" — real, just not the one that leads
    title: 'Stuttering in Valheim, and 60–70°C sitting idle',
    problem: 'A friend\'s gaming PC was stuttering hard in Valheim. It was also sitting at 60–70°C just idling — before any game was even loaded, which is where the real problem showed.',
    did: 'Full strip and clean: dust out of the case, the filters and every fan. Then pulled the CPU cooler, cleaned off the dried-out thermal paste and repasted it.',
    result: 'Idle temps came down to the sub-50s, from 60–70°C. The stuttering went with the heat, and not a single part was replaced.',
    check: "Open Task Manager, Performance tab, and leave the machine alone for ten minutes. If it is over 60°C doing nothing, you have a cooling problem, not a hardware one — and cooling problems do not need new parts.",
    image: 'valheim-service',
    alt: 'Inside the machine mid-service: the CPU tower cooler and Radeon graphics card, case open and two fans removed.',
    extras: [
      { image: 'valheim-dust', alt: 'The case top panel lifted off, its mesh filter grey with built-up dust.' },
      { image: 'valheim-finished', alt: 'The machine back together and powered up, red case lighting on behind the glass side panel.' }
    ]
  },
  {
    id: '08',
    category: 'web',
    status: 'live',
    secondary: true,   // behind "more work" — real, just not the one that leads
    title: 'Landing pages that turn followers into enquiries',
    problem: 'A lot of businesses have an audience and no way to convert it. The posts get seen, people get interested, and then there is nowhere for them to go. IGA Kendo Club had exactly that — thousands of views a month and a bio link pointing at nothing, so every interested beginner hit a dead end.',
    did: 'This is what I build as a web developer: one page whose whole job is turning attention into enquiries. For IGA that meant their real brand colour sampled from their own logo file, the founder\'s history, the full instructor roster, their own photos and their real member testimonials — laid out so a first-time visitor knows within seconds what it is, where it happens, and how to start.',
    result: 'One page that does the job a bio link cannot. The same build works for anyone sitting on an audience they are not converting — clubs, gyms, shops, services. IGA\'s own version stays concept work until the club signs it off: their page, their call.',
    check: "Open your own analytics and find “link clicks” next to “views”. If the ratio is under about one in a thousand, the content is not the problem: there is nowhere to click.",
    image: 'iga-landing',
    // The page animates — two kendoka strike together (aiuchi) on a 4.6s loop.
    // A still picture of it undersells the work, so the card plays the loop.
    animated: true,
    alt: 'The IGA Kendo Club landing page: a deep navy hero reading "Enjoy Kendo!" over the club kamon, with two kendoka striking together below it.',
    link: { href: 'work/iga-kendo/', label: 'Open the live design', internal: true },
    extras: []
  },
  {
    id: '09',
    category: 'web',
    status: 'live',
    secondary: true,   // behind "more work" — real, just not the one that leads
    title: 'This site — designed, built and shipped',
    problem: 'I was offering web work with nothing to show for it. This slot said "coming soon", which is a bad look on the page that is supposed to prove you can do the job.',
    did: 'Designed and built it from scratch — plain HTML, CSS and JavaScript. No framework, no build step, no dependencies. Two themes, AAA contrast on every line of body text, keyboard navigable throughout, and it still works with JavaScript switched off. Deployed on Vercel with security headers and year-long image caching.',
    result: 'Live and loading in under half a second. The proof for this one is the page you are reading.',
    check: "View source on any site you are quoted for. If the page pulls in a megabyte of framework to show ten paragraphs, you are paying for someone's convenience, not yours.",
    image: null,
    alt: null,
    noPhoto: "No photo needed — you're looking at it.",
    link: { href: 'https://portfoliov2-jade-rho.vercel.app/', label: 'Open it in a new tab' },
    extras: []
  },
  {
    id: '10',
    category: 'video',
    status: 'soon',
    secondary: true,   // behind "more work" — real, just not the one that leads
    title: 'Video edit',
    problem: null, did: null, result: null,
    image: null, alt: null, extras: []
  }
];

/* =========================================================================
 *   Below here is behaviour. You should not need to change it.
 * ========================================================================= */

(function () {
  'use strict';

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---- Theme toggle -------------------------------------------------- */

  const toggle = document.getElementById('theme-toggle');
  const toggleLabel = document.getElementById('theme-toggle-label');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      const goingTo = theme === 'dark' ? 'light' : 'dark';
      toggle.setAttribute('aria-pressed', String(theme === 'light'));
      if (toggleLabel) toggleLabel.textContent = 'Switch to ' + goingTo + ' mode';
    }
    try { localStorage.setItem('theme', theme); } catch (e) { /* storage blocked */ }
  }

  // Sync the label with whatever the head script already applied.
  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---- The clocks -----------------------------------------------------
   *
   * Real local time in Manila, read off the reader's own machine. Shared by
   * the first screen and the ring's corner data. If the browser carries no
   * time-zone data the clock is emptied rather than showing a wrong hour —
   * a wrong number on this site would be worse than no number.
   */

  const clocks = [].slice.call(document.querySelectorAll('.bench-clock'));
  if (clocks.length) {
    const tick = function () {
      let stamp;
      try {
        stamp = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Manila',
          hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
        }).format(new Date());
      } catch (e) {
        clocks.forEach(function (c) { c.textContent = ''; });
        return;
      }
      clocks.forEach(function (c) { c.textContent = stamp; });
      window.setTimeout(tick, 1000);
    };
    tick();
  }

  /* ---- The way in ------------------------------------------------------
   *
   * It counts, then lifts off the whole page.
   *
   * Two switches, deliberately. `data-done` fades it; `data-gone` takes it
   * out of the document outright on a timer that fires no matter what else
   * happens. A curtain that can only be animated away is a curtain that can
   * strand the reader behind it, and the failure that has actually happened
   * in this project three times is the animation not running at all.
   *
   * This runs at the top of the file, outside every other feature, so that
   * nothing further down can fail and leave it up.
   */

  const pageBoot = document.getElementById('bench-boot');
  if (pageBoot) {
    const bootPct = document.getElementById('bench-pct');
    const bootFill = document.getElementById('bench-fill');

    const dropCurtain = function () {
      pageBoot.setAttribute('data-done', 'true');
      window.setTimeout(function () { pageBoot.setAttribute('data-gone', 'true'); }, 700);
    };
    window.setTimeout(function () { pageBoot.setAttribute('data-gone', 'true'); }, 4200);

    if (reduceMotion.matches) {
      dropCurtain();
    } else {
      let pct = 0;
      const count = function () {
        pct = Math.min(100, pct + 3 + Math.random() * 9);
        if (bootPct) bootPct.textContent = 'Loading ' + Math.round(pct) + '%';
        if (bootFill) bootFill.style.width = pct + '%';
        if (pct < 100) window.setTimeout(count, 55);
        else window.setTimeout(dropCurtain, 380);
      };
      count();
      window.setTimeout(dropCurtain, 3200);
    }
  }

  /* ---- Header compression -------------------------------------------- */

  const header = document.getElementById('site-header');
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Scroll reveal --------------------------------------------------- */
  /* Called again after the work cards render, so late DOM gets observed too.
     Classes are only ever ADDED. Nothing here can hide content permanently. */

  let revealObserver = null;
  let observerReportedIn = false;
  let revealGivenUp = false;

  function revealAll(scope) {
    (scope || document).querySelectorAll('.reveal:not(.is-visible)')
      .forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Safety net.
   *
   * The animation is a nice-to-have. Content being readable is not. If the
   * observer has not reported back shortly after load — broken API, a
   * throttled background tab, a browser quirk we cannot predict — we stop
   * animating entirely and show everything. Losing a fade is nothing.
   * Leaving a visitor staring at an invisible page is the whole site failing.
   */
  function abandonReveal() {
    if (revealGivenUp) return;
    revealGivenUp = true;
    if (revealObserver) revealObserver.disconnect();

    // Switch the reveal system OFF at the root rather than transitioning out
    // of it. If we got here, we cannot assume transitions run at all — so the
    // rule that sets opacity:0 has to stop applying, not be animated away.
    root.classList.add('reveal-off');
    revealAll();
  }

  function observeReveals(scope) {
    if (revealGivenUp) { revealAll(scope); return; }

    const targets = (scope || document).querySelectorAll('.reveal:not(.is-visible)');

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      revealAll(scope);
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        observerReportedIn = true;
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);   // once only, never reverses
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });

      // An observer reports the initial state of anything it watches almost
      // immediately. If nothing has come back in a second, it is not working.
      window.setTimeout(function () {
        if (!observerReportedIn) abandonReveal();
      }, 1000);
    }

    targets.forEach(function (el) { revealObserver.observe(el); });
  }

  // If the visitor turns reduced motion on mid-session, stop animating.
  if (typeof reduceMotion.addEventListener === 'function') {
    reduceMotion.addEventListener('change', function (e) {
      if (e.matches) revealAll();
    });
  }

  observeReveals();

  /* ---- Diagnostic line on section dividers ---------------------------- */
  /* Classes are ADDED by JS, never removed — if this file fails to load,
     the page is still a complete, readable document. */

  const dividers = document.querySelectorAll('.divider');

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    dividers.forEach(function (d) { d.classList.add('is-in'); });
  } else {
    let dividerObserverReportedIn = false;

    const io = new IntersectionObserver(function (entries) {
      dividerObserverReportedIn = true;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    dividers.forEach(function (d) { io.observe(d); });

    // Same safety net as the reveals: if the observer never reports back,
    // draw the lines rather than leaving the page missing its dividers.
    window.setTimeout(function () {
      if (dividerObserverReportedIn) return;
      io.disconnect();
      root.classList.add('reveal-off');   // same kill switch, same reasoning
      dividers.forEach(function (d) { d.classList.add('is-in'); });
    }, 1000);
  }

  /* ---- Work log ------------------------------------------------------- */

  const CATEGORY_LABEL = { tech: 'Tech support', web: 'Web', video: 'Video' };

  const grid = document.getElementById('work-grid');
  const filterBar = document.getElementById('work-filters');
  const status = document.getElementById('work-status');

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function pictureFor(slug, alt, eager, animated) {
    // Per-image dimensions. A single hardcoded 1200x900 was what forced every
    // photo into one landscape shape; these are the real numbers.
    const d = IMAGE_DIMS[slug] || [1200, 900];

    /* An animated variant ships as data-* and is swapped in by script, never
     * as the default source. A moving image cannot be stopped by CSS, so
     * `prefers-reduced-motion` can only be honoured by not loading it — and
     * the still frame has to be what arrives if the script never runs. */
    const anim = animated
      ? ' data-anim-webp="assets/img/' + slug + '-anim.webp' + IMG_V + '"' +
        ' data-anim-gif="assets/img/' + slug + '.gif' + IMG_V + '"'
      : '';

    return '<picture' + anim + '>' +
      '<source srcset="assets/img/' + slug + '.webp' + IMG_V + '" type="image/webp">' +
      '<img src="assets/img/' + slug + '.jpg' + IMG_V + '" alt="' + esc(alt) + '" ' +
      'width="' + d[0] + '" height="' + d[1] + '" decoding="async" ' +
      'loading="' + (eager ? 'eager' : 'lazy') + '">' +
      '</picture>';
  }

  /* Upgrade the flagged pictures to their moving versions. Off entirely under
   * reduced motion, and if anything here fails the still image is already on
   * screen, so the worst case is simply a photo that does not move. */
  function animateThumbnails(scope) {
    if (reduceMotion.matches) return;
    (scope || document).querySelectorAll('picture[data-anim-webp]').forEach(function (pic) {
      const source = pic.querySelector('source');
      const img = pic.querySelector('img');
      if (!source || !img) return;
      source.srcset = pic.dataset.animWebp;
      img.src = pic.dataset.animGif;
    });
  }

  /* The free diagnostic. Every job hands the reader something they can do
   * tonight without paying anybody, including me. It is the strongest thing
   * on the page precisely because it costs a job to publish. */
  function checkBlock(job) {
    if (!job.check) return '';
    return '<div class="check">' +
      '<p class="check-label">Check this yourself</p>' +
      '<p class="check-body">' + esc(job.check) + '</p>' +
      '</div>';
  }

  /* The readout.
   *
   * The ring shows you the work; this shows you the job. One panel, swapped
   * in place, so the page stays short and nothing is ever covered. It reuses
   * the same media buttons as the cards, so the photo viewer reaches these
   * without a second code path -- the lightbox listens on the document. */
  function readoutHTML(job) {
    const cat = CATEGORY_LABEL[job.category] || job.category;

    if (job.status === 'soon') {
      return '<div class="readout-body readout-body-soon">' +
        '<div class="readout-detail">' +
          '<div class="readout-head">' +
            '<span class="case-id">' + esc(job.id) + '</span>' +
            '<span class="case-tag">' + esc(cat) + '</span>' +
          '</div>' +
          '<h3 class="readout-title">' + esc(job.title) + '</h3>' +
          '<p class="case-soon-note">Coming soon. This slot is reserved for real work, ' +
          'not filler \u2014 it stays empty until there is something true to put in it.</p>' +
        '</div></div>';
    }

    let media;
    if (job.image) {
      media = '<button type="button" class="media-btn" data-full="' + job.image + '" ' +
        'aria-label="View larger: ' + esc(job.alt) + '">' +
        pictureFor(job.image, job.alt, false, job.animated) + '</button>';
    } else {
      media = '<p class="case-nophoto">' + esc(job.noPhoto || '') + '</p>';
    }

    let extras = '';
    if (job.extras && job.extras.length) {
      extras = '<div class="readout-thumbs">' + job.extras.map(function (x) {
        return '<button type="button" class="media-btn thumb" data-full="' + x.image + '" ' +
          'aria-label="View larger: ' + esc(x.alt) + '">' +
          pictureFor(x.image, x.alt, false) + '</button>';
      }).join('') + '</div>';
    }

    let link = '';
    if (job.link) {
      const internal = job.link.internal === true;
      link = '<a class="case-link' + (internal ? ' case-link-internal' : '') + '" ' +
        'href="' + job.link.href + '"' +
        (internal ? ' data-immersive' : ' target="_blank" rel="noopener"') + '>' +
        esc(job.link.label) + '<span class="case-link-arrow" aria-hidden="true"></span></a>';
    }

    const ownTag = job.ownMachine
      ? '<span class="case-tag case-tag-own">My own machine</span>' : '';

    return '<div class="readout-body">' +
      '<div class="readout-media">' + media + extras + '</div>' +
      '<div class="readout-detail">' +
        '<div class="readout-head">' +
          '<span class="case-id">' + esc(job.id) + '</span>' +
          '<span class="case-tag">' + esc(cat) + '</span>' + ownTag +
        '</div>' +
        '<h3 class="readout-title">' + esc(job.title) + '</h3>' +
        '<dl class="case-fields">' +
          '<dt>Problem</dt><dd>' + esc(job.problem) + '</dd>' +
          '<dt>What I did</dt><dd>' + esc(job.did) + '</dd>' +
          '<dt>Result</dt><dd>' + esc(job.result) + '</dd>' +
        '</dl>' +
        checkBlock(job) + link +
      '</div>' +
      '</div>';
  }

  function cardHTML(job, index) {
    const cat = CATEGORY_LABEL[job.category] || job.category;

    // Stagger caps at 6 items — past that, a queue reads as slow, not elegant.
    const delay = Math.min(index, 5) * 60;
    const stagger = ' style="--stagger:' + delay + 'ms"';

    if (job.status === 'soon') {
      // Same id and secondary flag as a live record, so the disclosure and the
      // bench can reach it. Without these it could never be hidden.
      return '<li class="case case-soon reveal' + (job.secondary ? ' is-secondary' : '') + '" ' +
        'id="job-' + job.id + '" ' +
        'data-category="' + job.category + '"' +
        (job.secondary ? ' data-secondary="true"' : '') + stagger + '>' +
        '<div class="case-head">' +
          '<span class="case-id">' + esc(job.id) + '</span>' +
          '<span class="case-tag">' + esc(cat) + '</span>' +
        '</div>' +
        '<h3>' + esc(job.title) + '</h3>' +
        '<p class="case-soon-note">Coming soon. This slot is reserved for real work, ' +
        'not filler — it stays empty until there is something true to put in it.</p>' +
        '</li>';
    }

    // A real <button>, not a click handler on the image, so it is keyboard
    // reachable and announced as something you can activate.
    let media = '';
    if (job.image) {
      media = '<div class="case-media">' +
        '<button type="button" class="media-btn" data-full="' + job.image + '" ' +
        'aria-label="View larger: ' + esc(job.alt) + '">' +
        pictureFor(job.image, job.alt, index === 0, job.animated) +
        '</button></div>';
    } else if (job.noPhoto) {
      media = '<p class="case-nophoto">' + esc(job.noPhoto) + '</p>';
    }

    /* Supporting shots as an always-visible thumbnail strip.
     *
     * These used to sit behind a collapsed <details>. The problem with that is
     * nobody expands it — the extra evidence existed but went unseen. Small
     * thumbnails show at a glance that there is more to a job, and each one is
     * a single tap from the full-size viewer. */
    let extras = '';
    if (job.extras && job.extras.length) {
      const n = job.extras.length;
      const label = n + ' more photo' + (n > 1 ? 's' : '');
      extras =
        '<div class="case-thumbs">' +
        '<p class="case-thumbs-label">' + label + '</p>' +
        '<div class="case-thumbs-row" role="group" aria-label="' + label + ' from this job">' +
        job.extras.map(function (x) {
          return '<button type="button" class="media-btn thumb" data-full="' + x.image + '" ' +
            'aria-label="View larger: ' + esc(x.alt) + '">' +
            pictureFor(x.image, x.alt, false) +
            '</button>';
        }).join('') +
        '</div></div>';
    }

    /* Outbound links open in a new tab. Internal ones (a case study hosted on
     * this site) stay in the same tab — a new tab cannot carry a page
     * transition, and sending someone away from the portfolio to look at the
     * portfolio's own work is the wrong model. */
    let link = '';
    if (job.link) {
      const internal = job.link.internal === true;
      link = '<a class="case-link' + (internal ? ' case-link-internal' : '') + '" ' +
        'href="' + job.link.href + '"' +
        (internal ? ' data-immersive' : ' target="_blank" rel="noopener"') + '>' +
        esc(job.link.label) + '<span class="case-link-arrow" aria-hidden="true"></span></a>';
    }

    // Own machines are labelled as such. An inflated claim a visitor catches
    // costs the credibility of every other entry on the page.
    const ownTag = job.ownMachine
      ? '<span class="case-tag case-tag-own">My own machine</span>'
      : '';

    // Bento: the first live entry is the flagship and takes the full width.
    // It is the strongest job on the page and the only one with a hard number.
    const flagship = index === 0 ? ' is-flagship' : '';

    return '<li class="case reveal' + flagship + (job.secondary ? ' is-secondary' : '') + '" ' +
      'id="job-' + job.id + '" ' +
      'data-category="' + job.category + '"' +
      (job.secondary ? ' data-secondary="true"' : '') + stagger + '>' +
      /* Three groups, so the flagship can lay the photo beside the words
       * instead of under them. On every other card the groups are
       * `display: contents` and the markup behaves exactly as if they were
       * not here. */
      '<div class="case-intro">' +
        '<div class="case-head">' +
          '<span class="case-id">' + esc(job.id) + '</span>' +
          '<span class="case-tag">' + esc(cat) + '</span>' +
          ownTag +
        '</div>' +
        '<h3>' + esc(job.title) + '</h3>' +
      '</div>' +
      '<div class="case-visual">' + media + extras + '</div>' +
      '<div class="case-detail">' +
        '<dl class="case-fields">' +
          '<dt>Problem</dt><dd>' + esc(job.problem) + '</dd>' +
          '<dt>What I did</dt><dd>' + esc(job.did) + '</dd>' +
          '<dt>Result</dt><dd>' + esc(job.result) + '</dd>' +
        '</dl>' +
        checkBlock(job) +
        link +
      '</div>' +
      '</li>';
  }

  /* Ordered by id, so the numbering a visitor reads down the page is the
   * order the cards are actually in. The three strongest jobs hold 01–03;
   * the rest keep their numbers but sit behind a disclosure.
   *
   * Why hide any of it: seven repair jobs in a row all read as the same job.
   * The two paid client builds and the one before/after with a real
   * temperature drop do the selling; the other four are corroboration. They
   * stay on the page — burying real work would be the opposite of the point
   * — but they stop competing with the evidence that actually converts.
   */
  const ORDERED = PROJECTS.slice().sort(function (a, b) {
    return a.id.localeCompare(b.id);
  });

  if (grid) {
    grid.innerHTML = ORDERED.map(function (job, i) { return cardHTML(job, i); }).join('');
    observeReveals(grid);          // cards exist now, so watch them too
    animateThumbnails(grid);
  }

  /* The whole written log now sits behind one control, because the index
   * above it already answers "which job". A second layer of hiding inside
   * the grid would be hiding work from someone who has explicitly asked to
   * read all of it, so inside the panel every job shows. */
  const moreBtn  = document.getElementById('work-more');
  const logPanel = document.getElementById('work-log-panel');
  let logOpen = false;
  let activeFilter = 'all';

  /* One function decides what is on screen, because visibility is the product
   * of two independent things — the category filter and the disclosure. Two
   * separate handlers each setting `hidden` would fight each other, and the
   * loser would be whichever ran last. */
  function updateWork(fromClick) {
    if (!grid) return;
    const cards = grid.querySelectorAll('.case');
    let shown = 0;

    cards.forEach(function (card) {
      card.hidden = !(activeFilter === 'all' || card.dataset.category === activeFilter);
      if (!card.hidden) shown++;
    });

    // Filtering and expanding are deliberate actions, not scrolls. A card
    // brought back this way must appear immediately — never sit at zero
    // opacity waiting for an intersection that already happened while it
    // was hidden.
    if (fromClick) revealAll(grid);

    if (filterBar) {
      filterBar.querySelectorAll('[data-filter]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.dataset.filter === activeFilter));
      });
    }

    if (status) {
      status.textContent = 'Showing ' + shown + ' of ' + cards.length + ' jobs.';
    }
  }

  function applyFilter(value, fromClick) {
    activeFilter = value;
    updateWork(fromClick);
  }

  function openLog(open, moveFocus) {
    logOpen = open;
    if (logPanel) logPanel.hidden = !open;
    if (moreBtn) {
      moreBtn.setAttribute('aria-expanded', String(open));
      const label = moreBtn.querySelector('.work-more-label');
      if (label) label.textContent = open ? 'Close the log' : 'Read every job';
    }
    if (!open) return;
    // Cards inside a hidden panel never met the observer, so anything still
    // waiting on a reveal is shown outright the moment the panel opens.
    revealAll(grid);
    updateWork(true);
    if (moveFocus) {
      const first = grid && grid.querySelector('.case:not([hidden])');
      if (first) {
        first.setAttribute('tabindex', '-1');
        first.focus({ preventScroll: true });
        first.scrollIntoView({ block: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      }
    }
  }

  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      const opening = !logOpen;
      openLog(opening, opening);
      if (!opening) {
        moreBtn.scrollIntoView({ block: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      }
    });
  }

  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-filter]');
      if (btn) applyFilter(btn.dataset.filter, true);
    });
  }

  if (grid) updateWork(false);

  /* ---- Direct contact links ------------------------------------------- */

  const hasEmail = !!CONTACT.email;
  const hasWhatsApp = !!CONTACT.whatsappLink;
  const hasLinkedIn = !!CONTACT.linkedin;

  /* Shown as the handle unless a display name is given, so the row reads as
   * a name rather than a 60-character URL. */
  const linkedInText = CONTACT.linkedinDisplay ||
    (CONTACT.linkedin || '').replace(/\/+$/, '').split('/').pop() || 'Profile';

  // A row with no destination is worse than no row — it looks like a link and
  // does nothing. Each one is removed entirely unless it has somewhere to go.
  function fillOrRemove(id, href, text) {
    const el = document.getElementById(id);
    if (!el) return;
    if (!href) {
      const row = el.closest('li') || el.closest('p') || el;
      row.remove();
      return;
    }
    el.href = href;
    el.textContent = text;
  }

  fillOrRemove('direct-email', hasEmail ? 'mailto:' + CONTACT.email : '', CONTACT.email);
  fillOrRemove('footer-email', hasEmail ? 'mailto:' + CONTACT.email : '', CONTACT.email);
  fillOrRemove('direct-whatsapp', hasWhatsApp ? 'https://wa.me/' + CONTACT.whatsappLink : '',
               CONTACT.whatsappDisplay);

  fillOrRemove('direct-linkedin', hasLinkedIn ? CONTACT.linkedin : '', linkedInText);

  const waLink = document.getElementById('direct-whatsapp');
  if (waLink) { waLink.rel = 'noopener'; waLink.target = '_blank'; }

  const liLink = document.getElementById('direct-linkedin');
  if (liLink) { liLink.rel = 'noopener'; liLink.target = '_blank'; }

  // Can a message actually reach him? A form endpoint delivers on its own; with
  // no endpoint the form falls back to the visitor's mail app, which needs an
  // address. With neither, nothing sent from this page goes anywhere.
  const canDeliver = !!FORM_ENDPOINT || hasEmail || hasLinkedIn;

  const directCard = document.querySelector('.contact-direct');
  if (directCard && !hasEmail && !hasWhatsApp && !hasLinkedIn) {
    directCard.innerHTML =
      '<h3>Direct contact details coming soon</h3>' +
      '<p class="contact-direct-note">' +
      (canDeliver
        ? 'My email and number are going up here shortly. Until then, the form reaches me.'
        : 'My email and number are going up here shortly.') +
      '</p>';
  }

  // No route at all: show that plainly instead of a form that swallows messages.
  if (!canDeliver) {
    const grid = document.querySelector('.contact-grid');
    if (grid) {
      grid.innerHTML =
        '<aside class="contact-direct">' +
        '<h3>Contact details coming soon</h3>' +
        '<p class="contact-direct-note">' +
        "I'm setting up a proper contact route for this page. It'll be here shortly — " +
        'in the meantime, the fastest way to reach me is through the profiles I share my work on.' +
        '</p>' +
        '</aside>';
    }
  }

  /* ---- About portrait -------------------------------------------------- */

  const aboutGrid = document.getElementById('about-grid');
  if (aboutGrid && PORTRAIT && PORTRAIT.image) {
    const fig = document.createElement('div');
    fig.className = 'about-portrait';
    fig.innerHTML =
      '<picture>' +
      '<source srcset="assets/img/' + PORTRAIT.image + '.webp' + IMG_V + '" type="image/webp">' +
      '<img src="assets/img/' + PORTRAIT.image + '.jpg' + IMG_V + '" alt="' + esc(PORTRAIT.alt || '') + '" ' +
      'width="1000" height="1250" loading="lazy" decoding="async">' +
      '</picture>';
    aboutGrid.appendChild(fig);
    aboutGrid.classList.add('has-portrait');
  }

  /* ---- Contact form ---------------------------------------------------- */

  const form = document.getElementById('contact-form');

  if (form) {
    const summary = document.getElementById('form-summary');
    const summaryList = document.getElementById('form-summary-list');
    const result = document.getElementById('form-result');
    const submitBtn = document.getElementById('form-submit');

    const FIELDS = [
      {
        id: 'name',
        empty: 'Enter your name.',
        check: null
      },
      {
        id: 'email',
        empty: 'Enter your email so I can reply.',
        check: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
            ? null
            : 'That email address looks incomplete. Check it and try again.';
        }
      },
      {
        id: 'message',
        empty: 'Tell me what you need help with.',
        check: function (v) {
          return v.length >= 10 ? null : 'Add a bit more detail so I know what I am looking at.';
        }
      }
    ];

    function setFieldError(field, message) {
      const input = document.getElementById(field.id);
      const errorEl = document.getElementById(field.id + '-error');
      if (message) {
        input.setAttribute('aria-invalid', 'true');
        errorEl.textContent = message;
        errorEl.hidden = false;
      } else {
        input.removeAttribute('aria-invalid');
        errorEl.textContent = '';
        errorEl.hidden = true;
      }
    }

    function validate() {
      const problems = [];
      FIELDS.forEach(function (field) {
        const input = document.getElementById(field.id);
        const value = input.value.trim();
        let message = null;

        if (!value) message = field.empty;
        else if (field.check) message = field.check(value);

        setFieldError(field, message);
        if (message) problems.push({ id: field.id, message: message });
      });
      return problems;
    }

    function showSummary(problems) {
      if (!problems.length) {
        summary.hidden = true;
        summaryList.innerHTML = '';
        return;
      }
      summaryList.innerHTML = problems.map(function (p) {
        return '<li><a href="#' + p.id + '">' + esc(p.message) + '</a></li>';
      }).join('');
      summary.hidden = false;
      summary.focus();
    }

    // Re-validate a field once it has been marked invalid, so the error clears
    // as soon as it is fixed — but never on first blur.
    FIELDS.forEach(function (field) {
      const input = document.getElementById(field.id);
      input.addEventListener('input', function () {
        if (input.getAttribute('aria-invalid') !== 'true') return;
        const value = input.value.trim();
        let message = null;
        if (!value) message = field.empty;
        else if (field.check) message = field.check(value);
        setFieldError(field, message);
      });
    });

    function mailtoFallback(data) {
      const subject = 'Website enquiry from ' + data.name;
      const body =
        data.message + '\n\n—\n' +
        'From: ' + data.name + '\n' +
        'Email: ' + data.email;
      return 'mailto:' + CONTACT.email +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      result.textContent = '';
      result.className = 'form-result';

      const problems = validate();
      showSummary(problems);

      if (problems.length) {
        // Focus the first broken field after the summary has been announced.
        return;
      }

      const data = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
      };

      if (!FORM_ENDPOINT) {
        // No endpoint configured yet: hand off to the visitor's mail app with
        // everything already written, and tell them exactly what happened.
        window.location.href = mailtoFallback(data);
        result.textContent =
          'Opening your email app with the message ready to send. ' +
          'If nothing happened, email ' + CONTACT.email + ' or message me on WhatsApp.';
        result.className = 'form-result is-ok';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (res) {
        if (!res.ok) throw new Error('Bad response');
        form.reset();
        result.textContent = 'Message sent. I\'ll get back to you.';
        result.className = 'form-result is-ok';
      }).catch(function () {
        result.textContent =
          'That didn\'t send. Email ' + CONTACT.email +
          ' or message me on WhatsApp and I\'ll pick it up there.';
        result.className = 'form-result is-bad';
      }).then(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send message';
      });
    });
  }

  /* ---- Photo viewer ----------------------------------------------------- */
  /*
   * Native <dialog>. The browser supplies Escape, the backdrop, focus
   * trapping and inertness of the page behind — all things a hand-rolled
   * modal gets wrong. We only add zoom and pan on top.
   */

  const lightbox = document.getElementById('lightbox');

  if (lightbox && typeof lightbox.showModal === 'function') {
    const lbImg = document.getElementById('lightbox-img');
    const lbStage = document.getElementById('lightbox-stage');
    const lbCaption = document.getElementById('lightbox-caption');
    const lbLevel = document.getElementById('zoom-level');
    const btnIn = document.getElementById('zoom-in');
    const btnOut = document.getElementById('zoom-out');
    const btnReset = document.getElementById('zoom-reset');
    const btnClose = document.getElementById('lightbox-close');

    const MIN = 1, MAX = 4, STEP = 0.5;
    let scale = 1, panX = 0, panY = 0;
    let dragging = false, startX = 0, startY = 0;
    let opener = null;

    /* How far the picture may be moved on each axis: half the overhang, so
     * you can reach either edge and no further. Zero when it already fits. */
    function limits() {
      const s = lbStage.getBoundingClientRect();
      const w = lbImg.offsetWidth * scale;
      const h = lbImg.offsetHeight * scale;
      return {
        x: Math.max(0, (w - s.width) / 2),
        y: Math.max(0, (h - s.height) / 2)
      };
    }

    function canPan() {
      const l = limits();
      return l.x > 0.5 || l.y > 0.5;
    }

    /* Progressive resistance past an edge instead of a wall. Real things slow
     * before they stop, and a hard stop reads as frozen rather than as "there
     * is nothing more here". */
    function rubber(over, dimension) {
      const c = 0.55;
      return (over * dimension * c) / (dimension + c * Math.abs(over));
    }

    function clampPan(x, y, soft) {
      const l = limits();
      const s = lbStage.getBoundingClientRect();
      function axis(v, max, dim) {
        if (max === 0) return soft ? rubber(v, dim) : 0;
        if (v > max)  return soft ? max + rubber(v - max, dim) : max;
        if (v < -max) return soft ? -max - rubber(-max - v, dim) : -max;
        return v;
      }
      return { x: axis(x, l.x, s.width), y: axis(y, l.y, s.height) };
    }

    function setTransition(ms, easing) {
      lbImg.style.transitionProperty = ms ? 'transform' : 'none';
      lbImg.style.transitionDuration = ms ? ms + 'ms' : '0ms';
      lbImg.style.transitionTimingFunction = easing || 'cubic-bezier(0.22, 1, 0.36, 1)';
    }

    function apply() {
      lbImg.style.transform =
        'translate(' + panX.toFixed(1) + 'px,' + panY.toFixed(1) + 'px) scale(' + scale + ')';
      lbLevel.textContent = Math.round(scale * 100) + '%';
      btnIn.disabled = scale >= MAX;
      btnOut.disabled = scale <= MIN;
      btnReset.disabled = scale === 1 && panX === 0 && panY === 0;
      lbStage.classList.toggle('is-zoomed', scale > 1);
      lbStage.classList.toggle('is-pannable', canPan());
    }

    function setScale(next, animate) {
      const clamped = Math.min(MAX, Math.max(MIN, next));
      if (clamped === scale) return;
      scale = clamped;
      const c = clampPan(panX, panY, false);
      panX = c.x; panY = c.y;
      setTransition(animate === false ? 0 : 260);
      apply();
    }

    function reset() {
      scale = 1; panX = 0; panY = 0;
      setTransition(260);
      apply();
    }

    function open(slug, alt, trigger) {
      opener = trigger || null;
      // WebP with no <picture> here: every browser that supports <dialog>
      // supports WebP, so there is nothing to negotiate.
      lbImg.src = 'assets/img/' + slug + '.webp' + IMG_V;
      lbImg.alt = alt || '';
      lbCaption.textContent = alt || '';
      reset();
      lightbox.showModal();
    }

    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.media-btn');
      if (!btn) return;
      const img = btn.querySelector('img');
      open(btn.dataset.full, img ? img.alt : '', btn);
    });

    /* Cleanup runs on every path that can close the viewer, not only on the
       dialog's `close` event. That event is not reliably delivered in every
       context, and if it is missed the visitor lands back on the page with
       focus stranded inside a closed dialog. Idempotent, so firing twice is
       harmless. */
    function cleanup() {
      lbImg.removeAttribute('src');
      const target = opener;
      opener = null;
      if (target && document.contains(target)) {
        target.focus({ preventScroll: true });
        // Belt and braces: closing a dialog can move focus after our call.
        window.setTimeout(function () {
          if (document.activeElement !== target) target.focus({ preventScroll: true });
        }, 0);
      }
    }

    function closeLightbox() {
      if (lightbox.open) lightbox.close();
      cleanup();
    }

    btnIn.addEventListener('click', function () { setScale(scale + STEP); });
    btnOut.addEventListener('click', function () { setScale(scale - STEP); });
    btnReset.addEventListener('click', reset);
    btnClose.addEventListener('click', closeLightbox);

    // Double-click / double-tap toggles between fit and 2x.
    lbStage.addEventListener('dblclick', function () {
      setScale(scale > 1 ? MIN : 2);
    });

    // Clicking the backdrop closes. The dialog fills its own box, so anything
    // outside .lightbox-stage / .lightbox-bar is backdrop.
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    /* Drag to pan.
     *
     * The old rule was `if (scale <= 1) return` — drag only when zoomed. That
     * was the bug Cael hit: a portrait photo overflows the stage at 100%, so
     * there was plenty to move and no way to move it. The rule is now
     * "is there anything off-screen", which is the only question that matters.
     *
     * Three things make it feel like a real object rather than a slideshow:
     * 1:1 tracking from wherever you grabbed it, progressive resistance at
     * the edges, and a throw that carries your release velocity.
     *
     * The settle is a CSS transition, not requestAnimationFrame. rAF does not
     * fire in every context — that has bitten this codebase twice — and a
     * dropped animation frame here would strand the picture outside its own
     * bounds. A transition is compositor-driven and always resolves.
     */
    let vx = 0, vy = 0, lastT = 0, lastX = 0, lastY = 0;

    // Read the live on-screen position, so grabbing mid-throw continues from
    // where the picture actually is instead of snapping to where it was going.
    function readLiveTransform() {
      const m = new DOMMatrixReadOnly(getComputedStyle(lbImg).transform);
      if (m.a) { panX = m.e; panY = m.f; }
    }

    lbStage.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      if (!canPan()) return;

      readLiveTransform();
      setTransition(0);
      apply();

      dragging = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      lastX = e.clientX; lastY = e.clientY; lastT = Date.now();
      vx = vy = 0;
      lbStage.classList.add('is-dragging');
      lbStage.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    lbStage.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      const now = Date.now();
      const dt = now - lastT;
      if (dt > 0) {
        // Blend rather than replace, so one jittery sample cannot define the throw.
        vx = 0.7 * ((e.clientX - lastX) / dt * 1000) + 0.3 * vx;
        vy = 0.7 * ((e.clientY - lastY) / dt * 1000) + 0.3 * vy;
        lastX = e.clientX; lastY = e.clientY; lastT = now;
      }
      const p = clampPan(e.clientX - startX, e.clientY - startY, true);
      panX = p.x; panY = p.y;
      apply();
    });

    /* Where a flick would come to rest if it decelerated normally. This is the
     * exponential-decay form Apple ships, not the physics-textbook one. */
    function project(v) {
      const d = 0.995;
      return (v / 1000) * d / (1 - d);
    }

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      lbStage.classList.remove('is-dragging');
      if (e && e.pointerId != null && lbStage.hasPointerCapture(e.pointerId)) {
        lbStage.releasePointerCapture(e.pointerId);
      }

      if (reduceMotion.matches) {
        const c = clampPan(panX, panY, false);
        panX = c.x; panY = c.y;
        setTransition(0);
        apply();
        return;
      }

      const target = clampPan(panX + project(vx), panY + project(vy), false);
      const dist = Math.hypot(target.x - panX, target.y - panY);
      // Duration follows the distance so a nudge settles instantly and a throw
      // gets room to travel, capped so it never feels sluggish.
      const ms = Math.max(180, Math.min(620, 180 + dist * 0.9));
      panX = target.x; panY = target.y;
      setTransition(ms, 'cubic-bezier(0.16, 1, 0.3, 1)');
      apply();
    }
    lbStage.addEventListener('pointerup', endDrag);
    lbStage.addEventListener('pointercancel', endDrag);

    /* Wheel zooms toward the pointer, so the thing under the cursor stays put
     * — the behaviour every map and photo viewer has trained people to expect. */
    lbStage.addEventListener('wheel', function (e) {
      e.preventDefault();
      const before = scale;
      const next = Math.min(MAX, Math.max(MIN, scale * (e.deltaY < 0 ? 1.12 : 1 / 1.12)));
      if (next === before) return;

      const s = lbStage.getBoundingClientRect();
      const ox = e.clientX - (s.left + s.width / 2) - panX;
      const oy = e.clientY - (s.top + s.height / 2) - panY;
      const k = next / before;

      scale = next;
      const c = clampPan(panX - ox * (k - 1), panY - oy * (k - 1), false);
      panX = c.x; panY = c.y;
      setTransition(0);
      apply();
    }, { passive: false });

    // A resize changes the bounds, so what was in-bounds may no longer be.
    window.addEventListener('resize', function () {
      if (!lightbox.open) return;
      const c = clampPan(panX, panY, false);
      panX = c.x; panY = c.y;
      setTransition(0);
      apply();
    });

    // + and - work from the keyboard too, once the dialog has focus.
    lightbox.addEventListener('keydown', function (e) {
      if (e.key === '+' || e.key === '=') { e.preventDefault(); setScale(scale + STEP); }
      else if (e.key === '-' || e.key === '_') { e.preventDefault(); setScale(scale - STEP); }
      else if (e.key === '0') { e.preventDefault(); reset(); }
    });

    // Escape closes the dialog natively, which is the one path we cannot wrap
    // in closeLightbox() — so the `close` event is still listened for. Where
    // it does fire, cleanup has already run and is a no-op.
    lightbox.addEventListener('close', cleanup);

    // Fallback for environments that do not deliver the `close` event: if the
    // dialog stops being open without cleanup having run, catch it here.
    lightbox.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      window.setTimeout(function () { if (!lightbox.open) cleanup(); }, 0);
    });

    apply();
  }

  /* ---- Full-bleed band parallax ---------------------------------------- */
  /*
   * Deliberately restrained. The rules it obeys:
   *
   *   - Only the decorative image moves. No text, no control, nothing anyone
   *     needs to read or click ever shifts under them.
   *   - Maximum drift is 28px. It reads as depth, not as movement.
   *   - The scroll position is never touched — no scroll-jacking.
   *   - prefers-reduced-motion switches it off completely, and the image sits
   *     at its neutral position.
   *   - If any of this fails to run, the image simply doesn't move. Nothing
   *     is hidden or broken by its absence.
   */

  const band = document.querySelector('.band');
  const bandImg = document.getElementById('band-img');

  if (band && bandImg && !reduceMotion.matches) {
    const MAX_SHIFT = 28;              // px, total travel each way
    let lastRun = 0;

    function positionBand() {
      const rect = band.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // Off screen: don't spend anything on it.
      if (rect.bottom < 0 || rect.top > vh) return;

      // -1 when the band is entering from the bottom, +1 when leaving the top.
      const progress = ((vh - rect.top) / (vh + rect.height)) * 2 - 1;
      bandImg.style.transform = 'translate3d(0,' + (progress * MAX_SHIFT).toFixed(1) + 'px,0)';
    }

    // Throttled on a timestamp rather than requestAnimationFrame. rAF does not
    // fire in every context, and when it doesn't the effect silently never
    // runs — which is exactly the failure that hid a focus bug in the funnel.
    // A single transform per frame budget is cheap enough to do directly.
    function onBandScroll() {
      const now = Date.now();
      if (now - lastRun < 16) return;
      lastRun = now;
      positionBand();
    }

    window.addEventListener('scroll', onBandScroll, { passive: true });
    window.addEventListener('resize', onBandScroll, { passive: true });
    positionBand();

    // Turned on mid-session: stop moving and reset to neutral.
    if (typeof reduceMotion.addEventListener === 'function') {
      reduceMotion.addEventListener('change', function (e) {
        if (!e.matches) return;
        window.removeEventListener('scroll', onBandScroll);
        bandImg.style.transform = '';
      });
    }
  }

  /* ---- The bench ------------------------------------------------------
   *
   * Every photograph from every job, drifting across the lit strip. Built
   * from PROJECTS so there is one source of truth: add a job and its
   * pictures appear here automatically.
   *
   * The set is laid down twice. The animation translates by -50%, so the
   * second copy is exactly what the first one leaves behind and the loop
   * has no seam. Everything in the duplicate is hidden from assistive tech
   * and removed from the tab order.
   */

  const benchTrack = document.getElementById('bench-track');
  const benchStrip = document.getElementById('bench-strip');
  const benchPause = document.getElementById('bench-pause');
  const dotField   = document.getElementById('dot-field');
  const ringIndex  = document.getElementById('ring-index');
  const benchDust  = document.getElementById('bench-dust');

  if (benchTrack) {
    /* The ground. Static by design, and a few dots lit so the grid reads as
     * a readout rather than wallpaper. */
    if (dotField) {
      for (let i = 0; i < 300; i++) {
        const d = document.createElement('i');
        if (i % 19 === 5 || i % 31 === 13) d.className = 'lit';
        dotField.appendChild(d);
      }
    }

    /* Dust in the beam. Atmosphere only — capped, and skipped outright under
     * reduced motion rather than animated more slowly. */
    if (benchDust && !reduceMotion.matches) {
      for (let i = 0; i < 26; i++) {
        const m = document.createElement('i');
        m.style.left = (4 + Math.random() * 92).toFixed(1) + '%';
        m.style.top = (12 + Math.random() * 76).toFixed(1) + '%';
        m.style.animationDuration = (9 + Math.random() * 12).toFixed(1) + 's';
        m.style.animationDelay = '-' + (Math.random() * 14).toFixed(1) + 's';
        benchDust.appendChild(m);
      }
    }

    /* Every photograph from every job, on one ellipse. Built from PROJECTS,
     * so adding a job adds its pictures here automatically.
     *
     * No duplicate set this time: the ring loops through its own keyframe, so
     * unlike a marquee there is no seam to hide and nothing is announced to a
     * screen reader twice. */
    const shots = [];
    ORDERED.forEach(function (job) {
      if (job.image) shots.push({ slug: job.image, alt: job.alt, job: job });
      (job.extras || []).forEach(function (x) {
        shots.push({ slug: x.image, alt: x.alt, job: job });
      });
    });

    const CYCLE = 34;
    const cards = [];
    shots.forEach(function (shot, i) {
      const a = document.createElement('a');
      a.className = 'ring-card';
      a.href = '#job-' + shot.job.id;
      a.dataset.job = shot.job.id;
      // Each card enters the same ride offset by its share of the cycle, so
      // they sit evenly around the ellipse at any instant.
      a.style.setProperty('--ring-dur', CYCLE + 's');
      a.style.setProperty('--ring-delay', (-(CYCLE / shots.length) * i).toFixed(2) + 's');
      // Eager, not lazy: the ring is the second thing on the page now, and a
      // card riding a transform does not reliably trigger the lazy observer.
      a.innerHTML =
        pictureFor(shot.slug, shot.alt, true) +
        '<p class="rc-title">' + esc(CATEGORY_LABEL[shot.job.category] || shot.job.category) + '</p>' +
        '<p class="rc-job">Job ' + esc(shot.job.id) + '</p>';
      benchTrack.appendChild(a);
      cards.push(a);
    });

    /* ---- Corner data ----------------------------------------------------
     *
     * Counts are read off what was actually built, never typed in — if a job
     * is added or a photograph removed, this cannot go stale.
     */
    const benchCount = document.getElementById('bench-count');
    if (benchCount) {
      const liveJobs = ORDERED.filter(function (j) { return j.status !== 'soon'; }).length;
      benchCount.textContent = liveJobs + ' jobs · ' + shots.length + ' photographs';
    }

    /* ---- Grab the ring and turn it -------------------------------------
     *
     * The CSS keyframe is the shape of the path. To let a mouse drive it,
     * the same keyframe is handed to the Web Animations API, which gives
     * back an object whose `currentTime` can be written to directly. That is
     * the scrub handle: dragging sets the time, releasing leaves it where it
     * is, and after a few idle seconds it starts turning again on its own.
     *
     * If the browser has no WAAPI, none of this runs and the CSS animation
     * stays exactly as it was — the ring still turns, it just cannot be
     * grabbed. Nothing depends on this working.
     */
    /* The turn, read off the stylesheet rather than written twice.
     *
     * A custom property holding clamp() or min() does NOT resolve to pixels
     * through getComputedStyle -- it comes back as the literal expression --
     * so a probe element is given the property as its width and measured.
     * That yields the real px the browser is using at this viewport, which
     * is exactly what WAAPI needs.
     *
     * Everything the ring does geometrically therefore has ONE source: the
     * .bench-strip rule in styles.css. The CSS keyframes and these WAAPI
     * keyframes cannot disagree, because both come from the same numbers.
     */
    const probe = document.createElement('div');
    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText = 'position:absolute;top:0;left:0;height:0;visibility:hidden;pointer-events:none;';
    benchStrip.appendChild(probe);

    function resolvePx(prop) {
      probe.style.width = 'var(' + prop + ')';
      const v = parseFloat(window.getComputedStyle(probe).width);
      return isNaN(v) ? 0 : v;
    }

    function ringGeometry() {
      const cs = window.getComputedStyle(benchStrip);
      return {
        x:  resolvePx('--ring-x'),
        yS: resolvePx('--ring-y-side'),
        yF: resolvePx('--ring-y-front'),
        yB: resolvePx('--ring-y-back'),
        sS: (cs.getPropertyValue('--ring-s-side').trim()  || '0.78'),
        sF: (cs.getPropertyValue('--ring-s-front').trim() || '1.15'),
        sB: (cs.getPropertyValue('--ring-s-back').trim()  || '0.44')
      };
    }

    function ringKeyframes(g) {
      const side = function (dir) {
        return 'translateX(' + (dir * g.x) + 'px) translateY(' + g.yS + 'px) scale(' + g.sS +
               ') rotate(' + (dir * 3) + 'deg) skewY(' + (dir * -1.6) + 'deg)';
      };
      return [
        { offset: 0,    transform: side(-1),
          filter: 'brightness(.72)',  zIndex: 3 },
        { offset: 0.25, transform: 'translateX(0px) translateY(' + g.yF + 'px) scale(' + g.sF + ') rotate(0deg) skewY(0deg)',
          filter: 'brightness(1.14)', zIndex: 9 },
        { offset: 0.5,  transform: side(1),
          filter: 'brightness(.72)',  zIndex: 3 },
        { offset: 0.75, transform: 'translateX(0px) translateY(' + (-g.yB) + 'px) scale(' + g.sB + ') rotate(0deg) skewY(0deg)',
          filter: 'brightness(.52)',  zIndex: 1 },
        { offset: 1,    transform: side(-1),
          filter: 'brightness(.72)',  zIndex: 3 }
      ];
    }

    let RING_KEYFRAMES = ringKeyframes(ringGeometry());
    const CYCLE_MS = CYCLE * 1000;
    const DRAG_FULL_TURN = 900;   // px of drag that equals one revolution
    const IDLE_BEFORE_RESUME = 2600;

    const canDrive = typeof Element.prototype.animate === 'function' && !reduceMotion.matches;
    let anims = [];
    let heldByButton = false;
    /* Picking a job holds the ring too, and that hold has to outrank the idle
     * clock exactly the way the Pause button does. Without this, any drag or
     * arrow key afterwards called resumeSoon() and the ring started turning
     * again 2.6s later WITH the picked cards still pinned in the middle --
     * so the rest of the ring swept straight through them. */
    let heldByIndex = false;

    if (canDrive) {
      anims = cards.map(function (card, i) {
        card.style.animation = 'none';          // hand the path to script
        return card.animate(RING_KEYFRAMES, {
          duration: CYCLE_MS,
          iterations: Infinity,
          easing: 'linear',
          delay: -(CYCLE_MS / cards.length) * i
        });
      });
    }

    /* Which card is standing in the light.
     *
     * The front of the turn is offset 0.25 of the cycle. Whichever card is
     * nearest it gets the lit edge. Stepped on a timer rather than rAF — the
     * worst a dropped frame can do here is leave the highlight a beat behind,
     * and rAF has silently failed in this project twice. Without WAAPI no
     * card is ever marked, which simply means no edge highlight. */
    /* A resize changes every number above, so the turn is rebuilt from the
     * new geometry. currentTime and play state are carried across, so the
     * ring keeps turning from precisely where it was rather than snapping
     * back to its start -- a rotate of the phone must not restart the work.
     * Debounced, because a desktop drag-resize fires this continuously. */
    let geomTimer = null;
    let lastGeomKey = '';
    function rebuildRing() {
      if (!canDrive || !anims.length) return;
      const g = ringGeometry();
      const key = [g.x, g.yS, g.yF, g.yB, g.sS, g.sF, g.sB].join('|');
      if (key === lastGeomKey) return;      // same size: nothing to redo
      lastGeomKey = key;
      RING_KEYFRAMES = ringKeyframes(g);
      anims = anims.map(function (a, i) {
        const at = a.currentTime;
        const wasPaused = a.playState === 'paused';
        a.cancel();
        const next = cards[i].animate(RING_KEYFRAMES, {
          duration: CYCLE_MS,
          iterations: Infinity,
          easing: 'linear',
          delay: -(CYCLE_MS / cards.length) * i
        });
        if (typeof at === 'number') next.currentTime = at;
        if (wasPaused) next.pause();
        return next;
      });
    }
    window.addEventListener('resize', function () {
      window.clearTimeout(geomTimer);
      geomTimer = window.setTimeout(rebuildRing, 180);
    }, { passive: true });

    if (canDrive && cards.length) {
      let front = null;
      const markFront = function () {
        let best = null, bestD = 2;
        anims.forEach(function (a, i) {
          const t = Number(a.currentTime);
          if (!isFinite(t)) return;
          let phase = ((t % CYCLE_MS) + CYCLE_MS) % CYCLE_MS / CYCLE_MS;
          let d = Math.abs(phase - 0.25);
          if (d > 0.5) d = 1 - d;
          if (d < bestD) { bestD = d; best = cards[i]; }
        });
        if (best !== front) {
          if (front) front.classList.remove('is-front');
          if (best) best.classList.add('is-front');
          front = best;
        }
        window.setTimeout(markFront, 180);
      };
      markFront();
    }

    let idleTimer = null;
    function cancelIdle() { if (idleTimer) { window.clearTimeout(idleTimer); idleTimer = null; } }
    function resumeSoon() {
      cancelIdle();
      // Both holds outrank idling: a paused ring and a held selection are
      // deliberate states, and the clock must not quietly undo either.
      if (heldByButton || heldByIndex) return;
      idleTimer = window.setTimeout(function () {
        anims.forEach(function (a) { a.play(); });
        benchStrip.setAttribute('data-grabbed', 'false');
      }, IDLE_BEFORE_RESUME);
    }

    if (canDrive) {
      let dragging = false, startX = 0, base = [], lastX = 0, lastT = 0, vx = 0;

      benchStrip.addEventListener('pointerdown', function (e) {
        // Let a real click on a card still open its record.
        if (e.target.closest('.ring-index')) return;
        if (e.button !== 0 && e.pointerType === 'mouse') return;

        // Reaching for the ring is itself a request for it to turn, so a drag
        // releases any held job rather than fighting it.
        if (heldByIndex) clearSelection();

        cancelIdle();
        dragging = true;
        startX = lastX = e.clientX;
        lastT = Date.now();
        vx = 0;
        base = anims.map(function (a) { a.pause(); return a.currentTime || 0; });
        benchStrip.setAttribute('data-grabbed', 'true');
        benchStrip.setPointerCapture(e.pointerId);
      });

      benchStrip.addEventListener('pointermove', function (e) {
        if (!dragging) return;
        const now = Date.now(), dt = now - lastT;
        if (dt > 0) {
          vx = 0.7 * ((e.clientX - lastX) / dt * 1000) + 0.3 * vx;
          lastX = e.clientX; lastT = now;
        }
        const shift = ((e.clientX - startX) / DRAG_FULL_TURN) * CYCLE_MS;
        anims.forEach(function (a, i) { a.currentTime = base[i] - shift; });
        e.preventDefault();
      });

      function release(e) {
        if (!dragging) return;
        dragging = false;
        if (e && e.pointerId != null && benchStrip.hasPointerCapture(e.pointerId)) {
          benchStrip.releasePointerCapture(e.pointerId);
        }
        // A flick keeps going for a moment, then everything settles and the
        // idle clock starts. Stepped with setTimeout rather than rAF, which
        // does not fire in every context.
        const glide = Math.max(-1400, Math.min(1400, vx));
        let step = 0;
        (function coast() {
          if (dragging) return;                 // grabbed again mid-glide
          const decay = Math.pow(0.82, step);
          if (Math.abs(glide * decay) > 30 && step < 26) {
            const shift = ((glide * decay) / DRAG_FULL_TURN) * CYCLE_MS * 0.05;
            anims.forEach(function (a) { a.currentTime = (a.currentTime || 0) - shift; });
            step++;
            window.setTimeout(coast, 24);
          } else {
            resumeSoon();
          }
        })();
      }
      benchStrip.addEventListener('pointerup', release);
      benchStrip.addEventListener('pointercancel', release);

      // Arrow keys nudge the ring for anyone not using a pointer.
      benchStrip.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        cancelIdle();
        const dir = e.key === 'ArrowLeft' ? 1 : -1;
        anims.forEach(function (a) { a.pause(); a.currentTime = (a.currentTime || 0) + dir * CYCLE_MS / 24; });
        benchStrip.setAttribute('data-grabbed', 'true');
        resumeSoon();
      });
    }

    /* The index.
     *
     * A turning ring cannot be tabbed through, so this list is the design
     * answer and the accessibility answer at once. It names EVERY job, not
     * only the photographed ones: a job with no photograph is still a job,
     * and leaving it out of the index would make it unreachable.
     *
     * Naming one holds the ring, lifts that job's photographs out of it, and
     * opens the record underneath. */
    const readout = document.getElementById('work-readout');
    const readoutStatus = document.getElementById('readout-status');

    function hasShots(id) {
      return shots.some(function (sh) { return sh.job.id === id; });
    }

    function fanOut(id) {
      const hot = [];
      const dimRest = !!id && hasShots(id);
      benchTrack.querySelectorAll('.ring-card').forEach(function (c) {
        const hit = id && c.dataset.job === id;
        c.classList.toggle('is-hot', !!hit);
        // A job with no photographs has nothing to lift, so dimming the ring
        // for it would hide the work and put nothing in its place.
        const dimmed = dimRest && !hit;
        c.classList.toggle('is-dim', dimmed);
        // A faded-out card is not a destination. Taking it out of the tab
        // order keeps a keyboard from landing on something nobody can see.
        if (dimmed) { c.setAttribute('tabindex', '-1'); }
        else { c.removeAttribute('tabindex'); }
        if (hit) hot.push(c);
        if (!hit) c.style.marginLeft = '';
      });
      hot.forEach(function (c, n) {
        c.style.marginLeft = (-92 + (n - (hot.length - 1) / 2) * 208) + 'px';
      });
    }

    const indexHint = document.getElementById('index-hint');
    const HINT_FREE = 'Pick one to hold the ring and read what was done.';
    const HINT_HELD = 'Ring held. Press Reset view, or pick the same job again.';
    let selectedId = null;

    /* Let it go. Everything the selection changed is undone here and nowhere
     * else, so there is exactly one way back to a turning ring. */
    function clearSelection() {
      selectedId = null;
      heldByIndex = false;
      benchTrack.querySelectorAll('.ring-card').forEach(function (c) {
        c.classList.remove('is-hot', 'is-dim');
        c.removeAttribute('tabindex');
        c.style.marginLeft = '';
      });
      if (ringIndex) {
        ringIndex.querySelectorAll('button').forEach(function (b) {
          b.setAttribute('aria-pressed', 'false');
        });
      }
      if (indexHint) indexHint.textContent = HINT_FREE;
      // An explicit Pause still outranks this: releasing a selection must not
      // override a button the reader pressed on purpose.
      if (canDrive && !heldByButton) {
        cancelIdle();
        anims.forEach(function (a) { a.play(); });
        benchStrip.setAttribute('data-grabbed', 'false');
      }
      if (readoutStatus) readoutStatus.textContent = 'Ring released and turning again.';
    }

    function selectJob(id, fromClick, holdRing) {
      const hold = holdRing !== false;
      if (hold) {
        selectedId = id;
        heldByIndex = true;
        cancelIdle();
        if (indexHint) indexHint.textContent = HINT_HELD;
      }
      if (hold && canDrive && !heldByButton) {
        anims.forEach(function (a) { if (id) { a.pause(); } else { a.play(); } });
      }
      // Only a deliberate pick lifts a job out of the ring. On arrival the
      // record is open but the ring keeps turning, because a page that opens
      // frozen and dimmed shows the work worse than no ring at all.
      if (hold) fanOut(id);
      if (ringIndex) {
        ringIndex.querySelectorAll('button').forEach(function (b) {
          b.setAttribute('aria-pressed', String(b.dataset.job === id));
        });
      }
      const job = ORDERED.filter(function (j) { return j.id === id; })[0];
      if (readout && job) {
        readout.innerHTML = readoutHTML(job);
        animateThumbnails(readout);
        if (readoutStatus) readoutStatus.textContent = 'Showing job ' + id + ': ' + job.title;
      }
      if (fromClick && readout) {
        readout.scrollIntoView({ block: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      }
    }

    if (ringIndex) {
      ORDERED.forEach(function (job) {
        const n = shots.filter(function (sh) { return sh.job.id === job.id; }).length;
        const li = document.createElement('li');
        const b = document.createElement('button');
        b.type = 'button';
        b.dataset.job = job.id;
        b.setAttribute('aria-pressed', 'false');
        b.innerHTML = '<span class="ri-id">' + esc(job.id) + '</span>' +
          '<span class="ri-name">' + esc(job.title) + '</span>' +
          '<span class="ri-n">' + (n ? n + (n === 1 ? ' shot' : ' shots') : 'no photo') + '</span>';
        b.addEventListener('click', function () {
          // Same job twice is the natural "never mind" -- no second control
          // to find, and it matches what a pressed button already implies.
          if (selectedId === job.id) { clearSelection(); return; }
          selectJob(job.id, true);
        });
        li.appendChild(b);
        ringIndex.appendChild(li);
      });
    }

    /* Reset view always does something: it lets go of any held job AND puts
     * the ring back where it started. Each card was given a negative delay of
     * its share of the cycle, so currentTime 0 is exactly the arrangement the
     * page arrived in -- no need to remember anything. */
    const resetBtn = document.getElementById('bench-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        clearSelection();
        if (canDrive) {
          anims.forEach(function (a) { a.currentTime = 0; });
          if (!heldByButton) anims.forEach(function (a) { a.play(); });
        }
        benchStrip.setAttribute('data-grabbed', 'false');
        if (readoutStatus) readoutStatus.textContent = 'Ring reset to its starting position.';
      });
    }

    /* Escape is what people already press to get out of a held state. Scoped
     * to the work section so it cannot fight the photo viewer's own Escape. */
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape' || !heldByIndex) return;
        e.preventDefault();
        clearSelection();
      });
    }

    /* The page opens on the strongest job rather than on an empty frame. An
     * unselected state here would be a panel asking to be clicked, which
     * shows nothing and proves nothing. */
    if (ORDERED.length) selectJob(ORDERED[0].id, false, false);

    /* Clicking a photograph in the ring opens that job here, rather than
     * throwing the page somewhere else. */
    benchTrack.addEventListener('click', function (e) {
      const card = e.target.closest('.ring-card');
      if (!card) return;
      e.preventDefault();
      selectJob(card.dataset.job, true);
    });

    /* Motion that starts on its own needs a real stop. Hover and focus both
     * pause the ring, but neither of those exists on a touchscreen. */
    if (benchPause) {
      if (reduceMotion.matches) {
        benchPause.hidden = true;
      } else {
        benchPause.addEventListener('click', function () {
          const paused = benchStrip.getAttribute('data-paused') === 'true';
          benchStrip.setAttribute('data-paused', String(!paused));
          benchPause.textContent = paused ? 'Pause' : 'Resume';
          benchPause.setAttribute('aria-pressed', String(!paused));

          // An explicit Pause outranks the idle clock: the ring stays stopped
          // until it is asked to start again, however long anyone waits.
          heldByButton = !paused;
          cancelIdle();
          if (canDrive) {
            anims.forEach(function (a) { if (heldByButton) { a.pause(); } else { a.play(); } });
          }
        });
      }
    }

    /* A ring card points at a written record. Mark the target so the jump
     * from a photograph to its story is never ambiguous. */
    function markJob() {
      grid.querySelectorAll('.case.is-target').forEach(function (el) {
        el.classList.remove('is-target');
      });
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      const target = grid.querySelector(hash);
      if (target) {
        // A link straight to a record has to be able to reach it, so the log
        // opens itself and any filter hiding that card is cleared.
        if (!logOpen) openLog(true, false);
        if (target.hidden) applyFilter('all', true);
        target.classList.add('is-target');
      }
    }
    window.addEventListener('hashchange', markJob);
    markJob();
  }

  /* ---- Immersive navigation to a hosted case study --------------------
   *
   * Browsers that support cross-document View Transitions handle this on
   * their own — the CSS declares it and nothing here needs to run. This is
   * the fallback for everyone else: fade a curtain in, then navigate.
   *
   * Three ways out, because only one of them is guaranteed:
   *   - the navigation happens and the page is replaced
   *   - a hard timeout clears the class if it somehow doesn't
   *   - pageshow clears it when someone comes back via the back button,
   *     where the page is restored from cache with its classes intact
   *
   * That last one is not optional. Without it, hitting back lands you on a
   * portfolio permanently dimmed behind a curtain that never lifts.
   */

  function clearLeaving() { root.classList.remove('is-leaving'); }
  window.addEventListener('pageshow', clearLeaving);

  // Feature-detected, not sniffed — and wrapped, because CSS.supports throws
  // on a selector() query it cannot parse in some older engines.
  let supportsViewTransitions = false;
  try {
    supportsViewTransitions =
      typeof document.startViewTransition === 'function' &&
      window.CSS && typeof CSS.supports === 'function' &&
      CSS.supports('selector(:active-view-transition)');
  } catch (e) {
    supportsViewTransitions = false;
  }

  document.addEventListener('click', function (event) {
    const trigger = event.target.closest('a[data-immersive]');
    if (!trigger) return;

    // Never hijack a deliberate new-tab / new-window / download click.
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (trigger.target && trigger.target !== '_self') return;

    // The browser is doing it properly — stay out of the way.
    if (supportsViewTransitions) return;
    if (reduceMotion.matches) return;

    event.preventDefault();
    root.classList.add('is-leaving');

    const href = trigger.href;
    let gone = false;
    function go() {
      if (gone) return;
      gone = true;
      window.location.href = href;
    }

    // Navigate after the curtain, but never later than this — a missed
    // animation event must not cost someone the click they made.
    window.setTimeout(go, 260);
    window.setTimeout(clearLeaving, 2000);
  });

  /* ---- Footer year ---------------------------------------------------- */

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

})();
