/* ================================================================
   amirmahdi — Developer Portfolio
   All content is driven by the single DATA object below. Edit this
   object to customize the site; render() (bottom) builds the DOM.
   Single IIFE, no globals leak.
================================================================ */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ================================================================
     DATA — edit everything here
  ================================================================= */
  var DATA = {
    profile: {
      name: "amirmahdi  tabatabayi",
      greeting: "Hi, I'm",
      intro:
        "A curious developer learning frontend & backend, building things " +
        "in public, and writing about what I learn. Currently studying " +
        "JavaScript, React, and the fundamentals of good software.",
      location: "Remote · IRT+3:30",
      email: "hello@amirmahdi.dev",
      resumeUrl: "assets/resume.pdf",
      funFact:
        'My very first line of code was a <code>"Hello, world!"</code> ' +
        "printed straight into a terminal — I've been hooked ever since.",
      chips: ["learning to code", "building in public", "eternal student"],
      stats: [
        { value: 2, suffix: "+", label: "Years learning" },
        { value: 6, suffix: "", label: "Projects built" },
        { value: 5, suffix: "", label: "Languages explored" },
        { value: 2400, suffix: "+", label: "Hours of code" }
      ]
    },

    typingRoles: [
      "Frontend Learner",
      "Building in Public",
      "Curious Developer",
      "Open Source Contributor"
    ],

    links: {
      github: "https://github.com/amirmahdi",
      linkedin: "https://linkedin.com/in/amirmahdi",
      twitter: "https://twitter.com/amirmahdi",
      devto: "https://dev.to/amirmahdi"
    },

    socials: [
      { id: "github", href: "https://github.com/amirmahdi", label: "GitHub profile" },
      { id: "linkedin", href: "https://linkedin.com/in/amirmahdi", label: "LinkedIn profile" },
      { id: "twitter", href: "https://twitter.com/amirmahdi", label: "Twitter / X profile" }
    ],

    tech: [
      {
        category: "Languages",
        skills: [
          { name: "JavaScript / TypeScript", icon: "js", status: "learning" },
          { name: "Python", icon: "py", status: "learning" },
          { name: "Go", icon: "go", status: "learning" },
          { name: "SQL", icon: "sql", status: "learning" }
        ]
      },
      {
        category: "Frontend",
        skills: [
          { name: "React / Next.js", icon: "react", status: "learning" },
          { name: "Vue / Nuxt", icon: "vue", status: "learning" },
          { name: "Tailwind CSS", icon: "tailwind", status: "learning" }
        ]
      },
      {
        category: "Backend",
        skills: [
          { name: "Node.js / Express", icon: "node", status: "learning" },
          { name: "PostgreSQL / MongoDB", icon: "db", status: "learning" },
          { name: "Redis / GraphQL", icon: "graphql", status: "learning" }
        ]
      },
      {
        category: "DevOps",
        skills: [
          { name: "Docker / Kubernetes", icon: "docker", status: "learning" },
          { name: "AWS / Vercel", icon: "aws", status: "learning" },
          { name: "CI/CD / GitHub Actions", icon: "ci", status: "learning" }
        ]
      }
    ],

    projects: [
      {
        id: "api-hub",
        title: "API Hub",
        tagline: "a tiny request playground",
        description:
          "A minimal API testing tool — fire requests, inspect responses, save them as collections. Built to actually understand REST.",
        mockup: "assets/mock-api-hub.svg",
        alt: "API Hub terminal mockup showing a curl request and JSON response",
        tech: ["React", "Express", "MongoDB"],
        github: "https://github.com/amirmahdi/api-hub",
        demo: "https://api-hub.example.com",
        stars: 12,
        outcome: "Learned REST design, auth, and deployment end-to-end on one project.",
        caseStudy: {
          problem:
            "I kept juggling curl commands and Postman tabs while learning REST, " +
            "and wanted a single lightweight place to write, run, and re-run requests in a browser.",
          context:
            "Built during the first year of learning web dev. The goal was to " +
            "internalize how HTTP requests flow through a server, not to build a " +
            "feature-complete Postman clone.",
          constraints:
            "No team, limited time, and — at the time — a shallow grasp of " +
            "promises and async code. That forced a deliberately simple server " +
            "and a single-page client that talks JSON only.",
          architecture:
            "React SPA ⟶ Express REST API ⟶ MongoDB (collections) — " +
            "deployed on Vercel with the API on a free-tier host.",
          results:
            "Ships in a weekend, taught me auth (JWT), async error handling, " +
            "and the difference between designing an API on paper and debugging it " +
            "in production."
        }
      },
      {
        id: "portfolio-builder",
        title: "Portfolio Builder",
        tagline: "resume → site in minutes",
        description:
          "A no-build static generator that turns a single JSON file into a clean portfolio site. Dogfooding it for this very page.",
        mockup: "assets/mock-portfolio-builder.svg",
        alt: "Portfolio Builder mockup showing a data.json editor",
        tech: ["Next.js", "Tailwind", "Vercel"],
        github: "https://github.com/amirmahdi/portfolio-builder",
        demo: "https://portfolio-builder.example.com",
        stars: 8,
        outcome: "Picked up Next.js SSR and CI with GitHub Actions along the way.",
        caseStudy: {
          problem:
            "Every portfolio needed the same ~6 sections rewritten from scratch. " +
            "I wanted one structured file that produces a full site.",
          context:
            "Built as a learning project to understand static generation and " +
            "the boundary between content and presentation.",
          constraints:
            "No database, no CMS. Everything had to fall back cleanly to a " +
            "single JSON blob, which shaped the simple component model.",
          architecture:
            "JSON data ⟶ Next.js pages (SSG) ⟶ static HTML — deployed to Vercel " +
            "with GitHub Actions building on every push.",
          results:
            "Reused the pattern five times. The core lesson: keep the data layer " +
            "dumb and the components small, and a site becomes an afternoon's work."
        }
      },
      {
        id: "cli-notes",
        title: "CLI Notes",
        tagline: "notes that live in your shell",
        description:
          "A terminal notes app storing plain-text markdown in ~/.notes. Tiny, fast, and easy to script around.",
        mockup: "assets/mock-cli-notes.svg",
        alt: "CLI Notes mockup showing bash commands adding and listing notes",
        tech: ["Node.js", "TypeScript"],
        github: "https://github.com/amirmahdi/cli-notes",
        demo: "",
        stars: 5,
        outcome: "Published a real CLI package to npm for the first time.",
        caseStudy: {
          problem:
            "Existing note apps bury plain text in databases. I wanted notes I " +
            "could grep, back up, and sync with git.",
          context:
            "Practice in making a pleasant command-line interface with Node.js " +
            "and TypeScript, end to end.",
          constraints:
            "Zero runtime dependencies. Every feature (add, list, tag, remove) " +
            "had to feel instant and lose nothing if the file store vanished.",
          architecture:
            "CLI (commander) ⟶ in-process file store (markdown in ~/.notes) ⟶ " +
            "npm package with bin entry.",
          results:
            "Shipped a working npm package and learned argument parsing, process " +
            "signals, and TypeScript's compile-time safety on the way. " +
            "Scratching my own itch is the best teacher."
        }
      },
      {
        id: "dev-blog",
        title: "Dev Blog",
        tagline: "writing while learning",
        description:
          "A static blog where I publish learning notes. Writing forces me to actually understand things.",
        mockup: "assets/mock-dev-blog.svg",
        alt: "Dev Blog mockup showing a list of recent posts",
        tech: ["Astro", "Markdown", "Vercel"],
        github: "https://github.com/amirmahdi/dev-blog",
        demo: "https://dev-blog.example.com",
        stars: 3,
        outcome: "First Astro site — designed and shipped in a weekend.",
        caseStudy: {
          problem:
            "Learning notes disappeared after each course. I needed a low-friction " +
            "place to publish and actually keep them.",
          context:
            "A weekend challenge to go from zero to a deployed static blog, which " +
            "is what steered me to Astro.",
          constraints:
            "Must be free to host, fast, and simple to write to from any editor " +
            "via Markdown files.",
          architecture:
            "Markdown files ⟶ Astro static build ⟶ Vercel. No database, no CMS, " +
            "no build-time magic.",
          results:
            "Reached 10 posts in the first month and solidified the habit of " +
            "writing weekly. Retrieval — the act of explaining — beats re-reading " +
            "as a way to learn."
        }
      }
    ],

    timeline: [
      {
        date: "2024",
        title: "Started learning to code",
        description: "Picked up HTML and CSS, then JavaScript. Wrote my first real file to disk.",
        tech: ["HTML", "CSS", "JavaScript"]
      },
      {
        date: "2024 Q4",
        title: "First full project: API Hub",
        description: "Built a small full-stack app and learned REST, auth, and deployment along the way.",
        tech: ["React", "Express", "MongoDB"]
      },
      {
        date: "2025",
        title: "First open-source contribution",
        description: "Got a documentation PR merged. Learned that small PRs are welcome and editors pick them up fast.",
        tech: ["Git", "GitHub"]
      },
      {
        date: "2025 Q3",
        title: "Began writing in public",
        description: "Started publishing learning notes on dev.to to hold myself accountable.",
        tech: ["Markdown", "Dev.to"]
      },
      {
        date: "2026",
        title: "Now: expanding the stack",
        description: "Diving into Go, SQL, and containerization while polishing the frontend skills.",
        tech: ["Go", "SQL", "Docker"]
      }
    ],

    articles: [
      {
        id: "getting-started-with-react",
        title: "Getting Started with React in 2026",
        excerpt:
          "A practical walkthrough of components, props, and state for absolute beginners.",
        date: "2026-03-02",
        readTime: "6 min",
        url: "https://dev.to/amirmahdi/getting-started-with-react"
      },
      {
        id: "why-no-build-static-sites",
        title: "Why No-Build Static Sites Still Matter",
        excerpt:
          "One HTML file, no bundler — here's what I learned from shipping this very portfolio.",
        date: "2026-02-15",
        readTime: "4 min",
        url: "https://dev.to/amirmahdi/why-no-build-static-sites-matter"
      },
      {
        id: "docker-for-students",
        title: "Docker for Students",
        excerpt:
          "Containers explained with plain analogies and zero hype.",
        date: "2026-01-10",
        readTime: "8 min",
        url: "https://dev.to/amirmahdi/docker-for-students"
      }
    ],

    github: {
      username: "amirmahdi",
      profileUrl: "https://github.com/amirmahdi",
      streakUrl:
        "https://github-readme-streak-stats.herokuapp.com/?user=amirmahdi&theme=tokyonight&hide_border=true",
      contributions: [
        { title: "Bug fix in an OSS library", repo: "owner/repo", url: "https://github.com/owner/repo/pull/12" },
        { title: "Docs translation for an OSS project", repo: "owner/docs", url: "https://github.com/owner/docs/pull/77" },
        { title: "Small UI improvement to a CSS toolkit", repo: "owner/ui-kit", url: "https://github.com/owner/ui-kit/pull/230" }
      ]
    },

    contact: {
      email: "hello@amirmahdi.dev",
      responseTime: "I usually reply within 48 hours.",
      cta: "Open to freelance, internship, and full-time roles."
    }
  };

  /* ================================================================
     ICONS — inline SVG paths (no icon-font dependency)
  ================================================================= */
  var ICONS = {
    github:
      '<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.19-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.05.78 2.12 0 1.53-.02 2.76-.02 3.14 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>',
    linkedin:
      '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>',
    twitter:
      '<path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93L18.9 1.15Zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65Z"/>',
    external:
      '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    star:
      '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" fill="currentColor"/>',
    js: '<path d="M4 4h16v16H4z" fill="none" stroke="#f7df1e" stroke-width="2"/><path d="M9 16c.7.7 1.5 1.1 2.5 1.1S13 16.6 13 15.5c0-3.5-5-2.4-5-5.5 0-1.4 1.3-2.3 2.9-2.3 1.2 0 2.2.5 3 1.2" fill="none" stroke="#f7df1e" stroke-width="2" stroke-linecap="round"/>',
    py: '<defs><linearGradient id="gPy" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3776ab"/><stop offset="1" stop-color="#ffd43b"/></linearGradient></defs><path d="M12 2h6c1.6 0 2.4 1.2 2.4 2.8V10H12v2h8.4v6.8C20.4 20.4 19 22 17.4 22H12" fill="none" stroke="url(#gPy)" stroke-width="2"/><path d="M12 22H6c-1.6 0-2.4-1.2-2.4-2.8V14H12v2H3.6v4.2C3.6 23 5 24.5 6.6 24.5H12" transform="translate(0 -1)" fill="none" stroke="url(#gPy)" stroke-width="2"/>',
    go: '<path d="M7.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="none" stroke="#00add8" stroke-width="1.8"/><path d="M12 9l1.5 2.3" stroke="#00add8" stroke-width="1.8"/><path d="M12 13l-3 1.5" stroke="#00add8" stroke-width="1.8"/><path d="M8.4 11l3-1.5" stroke="#ffffff" stroke-width="1.8"/>',
    sql: '<path d="M12 4c3.9 0 8 1 8 3s-4.1 3-8 3S4 9 4 7s4.1-3 8-3Zm0 6c3.9 0 8 .7 8 1.7v5.6c0 .9-4.1 1.7-8 1.7s-8-.8-8-1.7V11.7c0-1 4.1-1.7 8-1.7Zm0 5c3.9 0 8-.7 8-1.7" fill="none" stroke="#008bb9" stroke-width="1.6"/><path d="M4 14.5v3c0 .9 4.1 1.7 8 1.7s8-.8 8-1.7v-3" fill="none" stroke="#ff7b00" stroke-width="1.6"/>',
    react:
      '<defs><linearGradient id="gRe" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#61dafb"/><stop offset="1" stop-color="#61dafb"/></linearGradient></defs><circle cx="12" cy="12" r="2.2" fill="none" stroke="#61dafb" stroke-width="1.6"/><path d="M12 9.8c4.4 0 7.5 1.2 7.5 2.2s-3.1 2.2-7.5 2.2-7.5-1.2-7.5-2.2 3.1-2.2 7.5-2.2Zm0 4.4c4.4 0 7.5-1.2 7.5-2.2M12 9.8c-4.4 0-7.5 1.2-7.5 2.2s3.1 2.2 7.5 2.2" fill="none" stroke="#61dafb" stroke-width="1.2" opacity="0.85"/>',
    vue:
      '<path d="M12 4 2.4 20h4.2L12 11.6 17.4 20h4.2L12 4Z" fill="none" stroke="#41b883" stroke-width="2" stroke-linejoin="round"/><path d="M7 8l5 8 5-8" fill="none" stroke="#35495e" stroke-width="2.4" stroke-linejoin="round"/>',
    tailwind:
      '<path d="M12 6C9 6 7 7.8 6.2 11.2c1.1-1.5 2.4-2 3.9-1.6.8.2 1.4.8 2 1.4.9.9 1.9 1.8 3.7 1.8 3 0 5-1.8 5.8-5.2-1.1 1.5-2.4 2-3.9 1.6-.8-.2-1.4-.8-2-1.4C14.9 7.4 13.9 6 12 6Z" fill="#38bdf8"/><path d="M6.2 12.4C3.2 12.4 1.2 14.2.4 17.6c1.1-1.5 2.4-2 3.9-1.6.8.2 1.4.8 2 1.4.9.9 1.9 1.8 3.7 1.8 3 0 5-1.8 5.8-5.2-1.1 1.5-2.4 2-3.9 1.6-.8-.2-1.4-.8-2-1.4-.9-.9-1.9-1.8-3.7-1.8Z" fill="#38bdf8" opacity="0.6"/>',
    node:
      '<path d="M12 3 3.5 7.7v8.6L12 21l8.5-4.7V7.7L12 3Z" fill="none" stroke="#83cd29" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 16.5V12" stroke="#83cd29" stroke-width="1.6"/><circle cx="12" cy="16.5" r="1.3" fill="#83cd29"/>',
    db: '<ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="#47a248" stroke-width="1.6"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" fill="none" stroke="#47a248" stroke-width="1.6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="#47a248" stroke-width="1.6"/>',
    graphql:
      '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" fill="none" stroke="#e10098" stroke-width="1.7" stroke-linejoin="round"/><path d="M5 8.5v7M19 8.5v7M12 3v18M5.5 8.2l13-2.4M5.5 15.8l13 2.4" stroke="#e10098" stroke-width="1.2" opacity="0.8"/>',
    docker:
      '<path d="M3 14h1.5v1.5H3zM5.5 14H7v1.5H5.5zM8 14h1.5v1.5H8zM10.5 14H12v1.5h-1.5zM13 14h1.5v1.5H13z" fill="#0db7ed"/><path d="M13.5 9c-.6 0-1.2.15-1.7.5-.4-1.3-1.5-2-2.3-2.3-.3 1-.1 2.3.8 3.4-.5.4-1 .6-1 .6H3.5A1.5 1.5 0 0 0 2 12.7V14a1.5 1.5 0 0 1 0 1.5H2a1 1 0 0 0 1 1h10.5a6.5 6.5 0 0 0 0-13Z" fill="none" stroke="#0db7ed" stroke-width="1.6"/>',
    aws:
      '<path d="M8.5 7h2.2l4.8 10h-2.2l-1-2.2H5.9l-1 2.2H2.7L8.5 7Zm-1.6 6h3.2L8.5 9.2 6.9 13ZM18 7h3c1.4 0 2.5 1 2.5 2.4v.2c0 1-.5 1.8-1.3 2.1.9.3 1.6 1.1 1.6 2.2v.2C23.8 15.3 22.6 16 21 16h-3V7Zm2 4.5h.9a.7.7 0 0 0 .7-.7v-.1a.7.7 0 0 0-.7-.7H20v1.5Zm0 3.5h1.1c.4 0 .7-.3.7-.7v-.1a.7.7 0 0 0-.7-.7H20V15Z" fill="#ff9900"/><path d="M7 7V5h12v2H7Z" fill="#ff9900" opacity="0"/>',
    ci: '<path d="M4 6h9a5 5 0 0 1 0 10H8" fill="none" stroke="#e6edf3" stroke-width="1.8" stroke-linecap="round"/><path d="M6 4 2 8l4 4" fill="none" stroke="#9ae66e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="16" r="1.5" fill="#9ae66e"/>'
  };

  function icon(name) {
    var path = ICONS[name];
    return path
      ? '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none">' + path + "</svg>"
      : "";
  }

  function socialIcon(name) {
    var path = ICONS[name];
    return path
      ? '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">' + path + "</svg>"
      : "";
  }

  /* ================================================================
     Helpers
  ================================================================= */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
      );
    });
  }

  function tags(list) {
    return (list || [])
      .map(function (t) {
        return '<span class="tag">' + esc(t) + "</span>";
      })
      .join("");
  }

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    try {
      return new Intl.DateTimeFormat("en", {
        month: "short",
        year: "numeric"
      }).format(d);
    } catch (e) {
      return iso;
    }
  }

  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  /* ================================================================
     Renderers — one template per section. All idempotent.
  ================================================================= */
  function renderAbout(container) {
    var p = DATA.profile;
    var copy = $all("[data-render='about-copy']", container)[0];
    if (copy) {
      copy.innerHTML =
        '<p class="about-summary">' +
        esc(p.intro) +
        " Currently working on honing " +
        '<strong>frontend foundations</strong> and exploring the backend. ' +
        "Everything here ships in public — progress, failures, and all." +
        "</p>" +
        '<div class="about-chips" aria-label="Currently learning">' +
        p.chips
          .map(function (c) {
            return '<span class="chip">' + esc(c) + "</span>";
          })
          .join("") +
        "</div>" +
        '<details class="about-funfact">' +
        "<summary>Fun fact</summary>" +
        "<p>" +
        p.funFact +
        "</p>" +
        "</details>";
    }

    var statsEl = $all("[data-render='about-stats']", container)[0];
    if (statsEl) {
      statsEl.innerHTML =
        '<div class="stats-grid">' +
        p.stats
          .map(function (s) {
            return (
              '<div class="stat">' +
              '<span class="stat-value" data-count="' +
              s.value +
              '" data-suffix="' +
              esc(s.suffix || "") +
              '">0' +
              esc(s.suffix || "") +
              "</span>" +
              '<span class="stat-label">' +
              esc(s.label) +
              "</span>" +
              "</div>"
            );
          })
          .join("") +
        "</div>";
      initStats();
    }
  }

  function renderSkills(container) {
    var el = $all("[data-render='skills']", container)[0];
    if (!el) return;
    el.innerHTML = DATA.tech
      .map(function (group) {
        return (
          '<div class="skill-group">' +
          "<h3>" +
          esc(group.category) +
          "</h3>" +
          '<div class="skill-cards">' +
          group.skills
            .map(function (s) {
              return (
                '<div class="skill-card">' +
                icon(s.icon) +
                "<span>" +
                esc(s.name) +
                "</span>" +
                (s.status === "learning"
                  ? '<span class="pill">learning</span>'
                  : "") +
                "</div>"
              );
            })
            .join("") +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderHeroSocials() {
    var el = document.getElementById("hero-socials");
    if (!el) return;
    el.innerHTML = DATA.socials
      .map(function (s) {
        return (
          "<li>" +
          '<a href="' +
          esc(s.href) +
          '" target="_blank" rel="noopener" aria-label="' +
          esc(s.label) +
          '">' +
          socialIcon(s.id) +
          "</a>" +
          "</li>"
        );
      })
      .join("");
  }

  function renderProjects(container) {
    var el = $all("[data-render='projects']", container)[0];
    if (!el) return;
    el.innerHTML = DATA.projects
      .map(function (pr) {
        return (
          '<article class="project-card reveal">' +
          '<div class="thumb">' +
          '<img src="' +
          esc(pr.mockup) +
          '" alt="' +
          esc(pr.alt) +
          '" loading="lazy" width="640" height="360" />' +
          (pr.stars
            ? '<span class="thumb-badge">' +
              icon("star") +
              " " +
              pr.stars +
              "</span>"
            : "") +
          "</div>" +
          '<div class="card-body">' +
          '<h3 class="card-title">' +
          esc(pr.title) +
          "</h3>" +
          '<span class="card-tagline">' +
          esc(pr.tagline) +
          "</span>" +
          '<p class="card-desc">' +
          esc(pr.description) +
          "</p>" +
          '<div class="card-tech">' +
          tags(pr.tech) +
          "</div>" +
          '<p class="card-outcome">' +
          esc(pr.outcome) +
          "</p>" +
          '<div class="card-links">' +
          '<a class="card-link" href="' +
          esc(pr.github) +
          '" target="_blank" rel="noopener">' +
          socialIcon("github") +
          "GitHub</a>" +
          (pr.demo
            ? '<a class="card-link" href="' +
              esc(pr.demo) +
              '" target="_blank" rel="noopener">' +
              icon("external") +
              "Live demo</a>"
            : "") +
          '<a class="card-link card-study" href="case-study.html?id=' +
          encodeURIComponent(pr.id) +
          '">View case study &#8594;</a>' +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderOss(container) {
    var el = $all("[data-render='oss']", container)[0];
    if (!el) return;
    var g = DATA.github;
    var profileUrl = esc(g.profileUrl) || esc(DATA.links.github);
    el.innerHTML =
      '<div class="oss-card">' +
      '<div class="oss-streak" data-streak>' +
      '<img src="' +
      esc(g.streakUrl) +
      '" alt="GitHub contribution streak for @' +
      esc(g.username) +
      '" loading="lazy" />' +
      "</div>" +
      '<div class="oss-contrib">' +
      "<h3>Notable contributions</h3>" +
      '<ul class="oss-list">' +
      g.contributions
        .map(function (c) {
          return (
            "<li>" +
            '<a href="' +
            esc(c.url) +
            '" target="_blank" rel="noopener">' +
            esc(c.title) +
            '<span class="oss-repo">' +
            esc(c.repo) +
            "</span>" +
            "</a>" +
            "</li>"
          );
        })
        .join("") +
      "</ul>" +
      "</div>" +
      '<div class="oss-cta">' +
      '<a class="btn btn-ghost" href="' +
      profileUrl +
      '" target="_blank" rel="noopener">View GitHub Profile</a>' +
      "</div>" +
      "</div>";
  }

  function renderArticles(container) {
    var el = $all("[data-render='articles']", container)[0];
    if (!el) return;
    el.innerHTML = DATA.articles
      .map(function (a) {
        return (
          '<article class="article-card reveal">' +
          '<div class="article-meta">' +
          "<time datetime=\"" +
          esc(a.date) +
          '">' +
          formatDate(a.date) +
          "</time>" +
          '<span class="sep">·</span>' +
          "<span>" +
          esc(a.readTime) +
          " read</span>" +
          "</div>" +
          "<h3>" +
          esc(a.title) +
          "</h3>" +
          "<p>" +
          esc(a.excerpt) +
          "</p>" +
          '<a class="article-link" href="' +
          esc(a.url) +
          '" target="_blank" rel="noopener">Read on dev.to &#8594;</a>' +
          "</article>"
        );
      })
      .join("");
  }

  function renderTimeline(container) {
    var el = $all("[data-render='timeline']", container)[0];
    if (!el) return;
    el.innerHTML = DATA.timeline
      .map(function (item) {
        return (
          '<li class="timeline-item reveal">' +
          '<span class="timeline-date">' +
          esc(item.date) +
          "</span>" +
          "<h3>" +
          esc(item.title) +
          "</h3>" +
          "<p>" +
          esc(item.description) +
          "</p>" +
          '<div class="timeline-tech">' +
          tags(item.tech) +
          "</div>" +
          "</li>"
        );
      })
      .join("");
  }

  function renderContact(container) {
    var c = DATA.contact;
    var emailEl = $all("[data-render='contact-email']", container)[0];
    if (emailEl) {
      emailEl.textContent = c.email;
      emailEl.href = "mailto:" + c.email;
    }
    var respEl = $all("[data-render='contact-response']", container)[0];
    if (respEl) respEl.textContent = c.responseTime;
  }

  function renderCaseStudy(container) {
    if (!container) return;
    var id = new URLSearchParams(window.location.search).get("id");
    var project =
      DATA.projects.filter(function (p) {
        return p.id === id;
      })[0] || DATA.projects[0];

    if (!project) {
      container.innerHTML =
        '<div class="case-notfound"><h1>Case study not found</h1>' +
        '<p class="section-sub">Try one of the projects on the portfolio instead.</p>' +
        '<p><a class="btn btn-ghost" href="index.html#projects">← All projects</a></p></div>';
      return;
    }

    var cs = project.caseStudy || {};
    document.title = project.title + " — Case Study | amirmahdi";
    var desc = document.querySelector('meta[name="description"]');
    if (desc && cs.problem) desc.setAttribute("content", cs.problem.slice(0, 155));

    container.innerHTML =
      '<article class="case-hero">' +
      '<p class="case-eyebrow">case study / ' +
      encodeURIComponent(project.id) +
      "</p>" +
      "<h1>" +
      esc(project.title) +
      "</h1>" +
      '<p class="case-tagline">' +
      esc(project.tagline) +
      "</p>" +
      '<div class="case-tech">' +
      tags(project.tech) +
      "</div>" +
      "</article>" +

      '<section class="case-block"><h2>Problem</h2><p>' +
      esc(cs.problem || "") +
      "</p></section>" +

      '<section class="case-block"><h2>User context</h2><p>' +
      esc(cs.context || "") +
      "</p></section>" +

      '<section class="case-block"><h2>Constraints & tradeoffs</h2>' +
      "<p>" +
      esc(cs.constraints || "") +
      "</p></section>" +

      '<section class="case-block"><h2>Architecture</h2>' +
      '<div class="case-diagram" aria-label="Architecture diagram for ' +
      esc(project.title) +
      '">' +
      esc(cs.architecture || "") +
      "</div></section>" +

      '<section class="case-block"><h2>UI states</h2>' +
      '<figure class="case-figure">' +
      '<img src="' +
      esc(project.mockup) +
      '" alt="' +
      esc(project.alt) +
      '" loading="lazy" />' +
      "<figcaption>Primary interface of " +
      esc(project.title) +
      "</figcaption>" +
      "</figure></section>" +

      '<section class="case-block"><h2>Results & lessons</h2><p>' +
      esc(cs.results || "") +
      "</p></section>" +

      '<div class="case-actions">' +
      '<a class="btn btn-ghost" href="' +
      esc(project.github) +
      '" target="_blank" rel="noopener">&lt;code /&gt; on GitHub</a>' +
      (project.demo
        ? '<a class="btn btn-primary" href="' +
          esc(project.demo) +
          '" target="_blank" rel="noopener">Live demo</a>'
        : "") +
      "</div>" +

      '<nav class="case-nav cv-other" aria-label="More case studies">' +
      '<a class="card-link" href="index.html#projects">← All projects</a>' +
      nextCaseLink(project.id) +
      "</nav>";
  }

  function nextCaseLink(currentId) {
    var projects = DATA.projects;
    if (projects.length < 2) return '<span class="case-next"></span>';
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].id !== currentId) continue;
      var next = projects[(i + 1) % projects.length];
      return (
        '<a class="card-link case-next" href="case-study.html?id=' +
        encodeURIComponent(next.id) +
        '">Next: ' +
        esc(next.title) +
        " &#8594;</a>"
      );
    }
    return '<span class="case-next"></span>';
  }

  /* ================================================================
     Interactions
  ================================================================= */
  function initStats() {
    var stats = $all(".stat-value");
    if (prefersReducedMotion) {
      stats.forEach(function (el) {
        el.textContent = el.dataset.count + (el.dataset.suffix || "");
      });
      return;
    }
    stats.forEach(function (el) {
      var target = parseFloat(el.dataset.count);
      var suffix = el.dataset.suffix || "";
      var done = false;
      el.textContent = "0" + suffix;
      function tick(now) {
        if (done) return;
        if (!el.dataset.started) {
          el.dataset.started = "1";
          el.dataset.t0 = now;
        }
        var elapsed = now - parseFloat(el.dataset.t0);
        var dur = 1200;
        var t = Math.min(1, elapsed / dur);
        var eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString() + suffix;
        if (t < 1) requestAnimationFrame(tick);
        else {
          done = true;
          el.textContent = target.toLocaleString() + suffix;
        }
      }
      requestAnimationFrame(tick);
    });
  }

  function initTypewriter() {
    var el = document.getElementById("typing-role");
    if (!el) return;
    var roles = DATA.typingRoles;
    if (prefersReducedMotion) {
      el.textContent = roles[roles.length - 1];
      return;
    }
    var ri = 0;
    var ci = 0;
    var deleting = false;
    (function step() {
      var role = roles[ri];
      if (!deleting) {
        ci++;
        el.textContent = role.slice(0, ci);
        if (ci === role.length) {
          deleting = true;
          setTimeout(step, 1600);
          return;
        }
        setTimeout(step, 70);
      } else {
        ci--;
        el.textContent = role.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
          setTimeout(step, 400);
          return;
        }
        setTimeout(step, 35);
      }
    })();
  }

  function initReveal() {
    var els = $all(".reveal");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  function initMenu() {
    var btn = document.getElementById("menu-btn");
    var overlay = document.getElementById("overlay");
    var menu = document.getElementById("mobile-menu");
    var body = document.body;
    if (!btn || !menu) return;

    function closeMenu() {
      body.classList.remove("menu-open");
      menu.hidden = true;
      overlay.hidden = true;
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open menu");
    }

    function openMenu() {
      body.classList.add("menu-open");
      menu.hidden = false;
      overlay.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "Close menu");
    }

    btn.addEventListener("click", function () {
      if (menu.hidden) openMenu();
      else closeMenu();
    });

    overlay.addEventListener("click", closeMenu);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) closeMenu();
    });

    $all("a", menu).forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) closeMenu();
    });
  }

  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var status = document.getElementById("form-status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        status.textContent = "Please fill in all three fields.";
        status.className = "form-status is-error";
        return;
      }
      if (!emailRe.test(email)) {
        status.textContent = "That email address doesn't look right.";
        status.className = "form-status is-error";
        return;
      }

      status.className = "form-status is-success";
      status.textContent = "Thanks, " + name + "! A mailto draft is opening so you can send this directly.";

      var subject = encodeURIComponent("Portfolio inquiry from " + name);
      var body = encodeURIComponent(message + "\n\n— sent from amirmahdi.dev");
      setTimeout(function () {
        window.location.href =
          "mailto:" + DATA.contact.email + "?subject=" + subject + "&body=" + body;
      }, 250);
    });
  }

  function renderYear() {
    $all("[data-render='year']").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function initOssFallback() {
    // Third-party streak image can be slow or dead — swap in a text note.
    $all("[data-streak] img").forEach(function (img) {
      img.addEventListener("error", function () {
        var box = img.closest("[data-streak]");
        if (box) {
          box.innerHTML =
            '<p class="oss-streak-note">' +
            "Contribution graph unavailable — view my profile below." +
            "</p>";
        }
      });
    });
  }

  /* ================================================================
     Boot
  ================================================================= */
  function renderAll() {
    var root = document;
    renderHeroSocials();
    renderAbout(root);
    renderSkills(root);
    renderProjects(root);
    renderOss(root);
    renderArticles(root);
    renderTimeline(root);
    renderContact(root);
    renderYear();

    if (document.body.classList.contains("case-body")) {
      var cs = $all("[data-render='case-study']")[0];
      renderCaseStudy(cs);
    }

    // reveal must run after innerHTML is in place
    setTimeout(initReveal, 0);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    initTypewriter();
    initMenu();
    initForm();
    initOssFallback();
  });
})();