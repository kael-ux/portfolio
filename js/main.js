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
  whatsappLink: ''                  // international, no + and no spaces
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
const PROJECTS = [
  {
    id: '01',
    category: 'tech',
    status: 'live',
    title: 'High-end gaming build, running 54°C on air',
    problem: 'A paying client wanted a high-end gaming PC in a white build, put together for them properly.',
    did: 'Specced and built the whole system: Ryzen 9 7900X, Sapphire Nitro+ RX 7800 XT 16GB, B650M Aorus Elite AX, Kingston Fury Beast DDR5, AK620 Digital air cooler, and a 750W Gold full-modular supply. Every cable sleeved and routed.',
    result: 'Sitting at 54°C on air — that reading is on the cooler\'s own display in the photo. No liquid cooling needed to get there.',
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
    image: 'laptop-teardown',
    alt: 'An HP laptop stripped down to the bare motherboard, with the keyboard, battery, hard drive caddy and memory module removed and laid out on the desk beside it.',
    extras: []
  },
  {
    id: '03',
    category: 'tech',
    status: 'live',
    title: 'Office desktop on a tight budget',
    problem: 'A client needed a desktop for office work and had a tight budget to do it in.',
    did: 'Mixed second-hand and brand-new parts to bring the cost down — used where it was safe to, new where it mattered. Built around a Gigabyte GA-H110M-HD2 with an Intel CPU on the stock cooler, DDR4, a Lexar NS100 SSD and an Inplay 550W 80+ Bronze supply.',
    result: 'A reliable office machine that came in on budget. The client knew which parts were used and which were new before they paid.',
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
    image: null,          // no photo: the only shot shows a third party
    alt: null,
    noPhoto: "No photo — this one was on someone else's machine.",
    extras: []
  },
  {
    id: '02',
    category: 'tech',
    status: 'live',
    title: 'Stuttering in Valheim, and 60–70°C sitting idle',
    problem: 'A friend\'s gaming PC was stuttering hard in Valheim. It was also sitting at 60–70°C just idling — before any game was even loaded, which is where the real problem showed.',
    did: 'Full strip and clean: dust out of the case, the filters and every fan. Then pulled the CPU cooler, cleaned off the dried-out thermal paste and repasted it.',
    result: 'Idle temps came down to the sub-50s, from 60–70°C. The stuttering went with the heat, and not a single part was replaced.',
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
    title: 'Landing pages that turn followers into enquiries',
    problem: 'A lot of businesses have an audience and no way to convert it. The posts get seen, people get interested, and then there is nowhere for them to go. IGA Kendo Club had exactly that — thousands of views a month and a bio link pointing at nothing, so every interested beginner hit a dead end.',
    did: 'This is what I build as a web developer: one page whose whole job is turning attention into enquiries. For IGA that meant their real brand colour sampled from their own logo file, the founder\'s history, the full instructor roster, their own photos and their real member testimonials — laid out so a first-time visitor knows within seconds what it is, where it happens, and how to start.',
    result: 'One page that does the job a bio link cannot. The same build works for anyone sitting on an audience they are not converting — clubs, gyms, shops, services. IGA\'s own version stays concept work until the club signs it off: their page, their call.',
    image: 'iga-landing',
    alt: 'The IGA Kendo Club landing page: a deep navy hero reading "Enjoy Kendo!" over the club kamon, with the club name and navigation above it.',
    link: { href: 'work/iga-kendo/', label: 'Open the live design', internal: true },
    extras: []
  },
  {
    id: '09',
    category: 'web',
    status: 'live',
    title: 'This site — designed, built and shipped',
    problem: 'I was offering web work with nothing to show for it. This slot said "coming soon", which is a bad look on the page that is supposed to prove you can do the job.',
    did: 'Designed and built it from scratch — plain HTML, CSS and JavaScript. No framework, no build step, no dependencies. Two themes, AAA contrast on every line of body text, keyboard navigable throughout, and it still works with JavaScript switched off. Deployed on Vercel with security headers and year-long image caching.',
    result: 'Live and loading in under half a second. The proof for this one is the page you are reading.',
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

  function pictureFor(slug, alt, eager) {
    return '<picture>' +
      '<source srcset="assets/img/' + slug + '.webp" type="image/webp">' +
      '<img src="assets/img/' + slug + '.jpg" alt="' + esc(alt) + '" ' +
      'width="1200" height="900" decoding="async" ' +
      'loading="' + (eager ? 'eager' : 'lazy') + '">' +
      '</picture>';
  }

  function cardHTML(job, index) {
    const cat = CATEGORY_LABEL[job.category] || job.category;

    // Stagger caps at 6 items — past that, a queue reads as slow, not elegant.
    const delay = Math.min(index, 5) * 60;
    const stagger = ' style="--stagger:' + delay + 'ms"';

    if (job.status === 'soon') {
      return '<li class="case case-soon reveal" data-category="' + job.category + '"' + stagger + '>' +
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
        pictureFor(job.image, job.alt, index === 0) +
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
      'data-category="' + job.category + '"' +
      (job.secondary ? ' data-secondary="true"' : '') + stagger + '>' +
      '<div class="case-head">' +
        '<span class="case-id">' + esc(job.id) + '</span>' +
        '<span class="case-tag">' + esc(cat) + '</span>' +
        ownTag +
      '</div>' +
      '<h3>' + esc(job.title) + '</h3>' +
      media +
      extras +
      '<dl class="case-fields">' +
        '<dt>Problem</dt><dd>' + esc(job.problem) + '</dd>' +
        '<dt>What I did</dt><dd>' + esc(job.did) + '</dd>' +
        '<dt>Result</dt><dd>' + esc(job.result) + '</dd>' +
      '</dl>' +
      link +
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
    grid.innerHTML = ORDERED.map(function (job, i) {
      const html = cardHTML(job, i);
      // The disclosure trigger goes before the content it reveals, so the
      // reading order and the tab order both make sense.
      if (job.id === '04') {
        return '<li class="work-more-row">' +
          '<button type="button" class="work-more" id="work-more" ' +
          'aria-expanded="false" aria-controls="work-grid">' +
          '<span class="work-more-label">Show 4 more tech support jobs</span>' +
          '<span class="work-more-mark" aria-hidden="true"></span>' +
          '</button></li>' + html;
      }
      return html;
    }).join('');
    observeReveals(grid);          // cards exist now, so watch them too
  }

  const moreBtn = document.getElementById('work-more');
  let showSecondary = false;
  let activeFilter = 'all';

  /* One function decides what is on screen, because visibility is the product
   * of two independent things — the category filter and the disclosure. Two
   * separate handlers each setting `hidden` would fight each other, and the
   * loser would be whichever ran last. */
  function updateWork(fromClick) {
    if (!grid) return;
    const cards = grid.querySelectorAll('.case');
    let shown = 0;
    let hiddenByDisclosure = 0;

    cards.forEach(function (card) {
      const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
      const collapsed = card.dataset.secondary === 'true' && !showSecondary;

      if (matchesFilter && collapsed) hiddenByDisclosure++;
      card.hidden = !matchesFilter || collapsed;
      if (!card.hidden) shown++;
    });

    // The trigger is pointless when the current filter has nothing behind it.
    const row = grid.querySelector('.work-more-row');
    if (row) row.hidden = hiddenByDisclosure === 0 && !showSecondary;

    if (moreBtn) {
      moreBtn.setAttribute('aria-expanded', String(showSecondary));
      const label = moreBtn.querySelector('.work-more-label');
      if (label) {
        label.textContent = showSecondary
          ? 'Show fewer'
          : 'Show ' + hiddenByDisclosure + ' more tech support job' + (hiddenByDisclosure === 1 ? '' : 's');
      }
    }

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

  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      const wasCollapsed = !showSecondary;
      showSecondary = !showSecondary;
      updateWork(true);

      // Collapsing can leave the button above the fold with the page scrolled
      // past where the cards used to be. Bring it back into view, and move
      // focus to the first revealed card on expand so a keyboard user lands
      // on the new content rather than being left on the trigger.
      if (wasCollapsed) {
        const first = grid.querySelector('.case[data-secondary="true"]:not([hidden])');
        if (first) {
          first.setAttribute('tabindex', '-1');
          first.focus({ preventScroll: true });
          first.scrollIntoView({ block: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
        }
      } else {
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

  const waLink = document.getElementById('direct-whatsapp');
  if (waLink) { waLink.rel = 'noopener'; waLink.target = '_blank'; }

  // Can a message actually reach him? A form endpoint delivers on its own; with
  // no endpoint the form falls back to the visitor's mail app, which needs an
  // address. With neither, nothing sent from this page goes anywhere.
  const canDeliver = !!FORM_ENDPOINT || hasEmail;

  const directCard = document.querySelector('.contact-direct');
  if (directCard && !hasEmail && !hasWhatsApp) {
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
      '<source srcset="assets/img/' + PORTRAIT.image + '.webp" type="image/webp">' +
      '<img src="assets/img/' + PORTRAIT.image + '.jpg" alt="' + esc(PORTRAIT.alt || '') + '" ' +
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

    function apply() {
      lbImg.style.transform =
        'translate(' + panX.toFixed(0) + 'px,' + panY.toFixed(0) + 'px) scale(' + scale + ')';
      lbLevel.textContent = Math.round(scale * 100) + '%';
      btnIn.disabled = scale >= MAX;
      btnOut.disabled = scale <= MIN;
      btnReset.disabled = scale === 1 && panX === 0 && panY === 0;
      lbStage.classList.toggle('is-zoomed', scale > 1);
    }

    function setScale(next) {
      const clamped = Math.min(MAX, Math.max(MIN, next));
      if (clamped === scale) return;
      scale = clamped;
      if (scale === 1) { panX = 0; panY = 0; }   // snap back when fully out
      apply();
    }

    function reset() { scale = 1; panX = 0; panY = 0; apply(); }

    function open(slug, alt, trigger) {
      opener = trigger || null;
      // WebP with no <picture> here: every browser that supports <dialog>
      // supports WebP, so there is nothing to negotiate.
      lbImg.src = 'assets/img/' + slug + '.webp';
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

    /* Drag to pan, but only when zoomed in — otherwise dragging does nothing
       and feels broken. Pointer events cover mouse, touch and pen at once. */
    lbStage.addEventListener('pointerdown', function (e) {
      if (scale <= 1) return;
      dragging = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      lbStage.classList.add('is-dragging');
      lbStage.setPointerCapture(e.pointerId);
    });

    lbStage.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      apply();
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      lbStage.classList.remove('is-dragging');
      if (e && e.pointerId != null && lbStage.hasPointerCapture(e.pointerId)) {
        lbStage.releasePointerCapture(e.pointerId);
      }
    }
    lbStage.addEventListener('pointerup', endDrag);
    lbStage.addEventListener('pointercancel', endDrag);

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
