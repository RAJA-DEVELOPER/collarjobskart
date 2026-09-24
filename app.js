const navItems = [
  ["index.html", "Home"],
  ["about.html", "About Us"],
  ["services.html", "Services"],
  ["testimonials.html", "Testimonials"],
  ["careers.html", "Careers / Jobs"],
  ["faq.html", "FAQ"],
  ["contact.html", "Contact Us"]
];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion) {
  const pageIntro = document.createElement("div");
  pageIntro.className = "page-intro";
  pageIntro.setAttribute("aria-hidden", "true");
  pageIntro.innerHTML = `<div class="page-intro__inside"><img src="logo.svg" class="page-intro__logo" alt="Collar JobsKart"><div class="page-intro__line"></div></div>`;
  document.body.prepend(pageIntro);

  const dismissIntro = () => {
    window.setTimeout(() => pageIntro.classList.add("is-leaving"), 360);
  };

  if (document.readyState === "complete") {
    dismissIntro();
  } else {
    window.addEventListener("load", dismissIntro, { once: true });
  }
}

const serviceDetails = {
  consulting: {
    label: "Consulting",
    eyebrow: "Service details / Consulting",
    title: "Clear HR guidance for a changing talent market.",
    intro: "Collar JobsKart consultants bring market awareness and practical HR thinking to help organizations identify, evolve and retain people in a competitive environment.",
    points: [
      "Understand current workforce challenges and business goals.",
      "Shape HR priorities around talent, retention and productivity.",
      "Support practical decisions with industry-aware guidance."
    ],
    process: ["Listen", "Assess", "Advise", "Support", "Refine"],
    related: ["training", "recruitment", "market-research"]
  },
  training: {
    label: "Training",
    eyebrow: "Service details / Training",
    title: "Training that upgrades knowledge, skills and team confidence.",
    intro: "The company provides training and services that help organizations maintain and upgrade skills, knowledge and collective wisdom across teams.",
    points: [
      "Plan learning around the roles and responsibilities your people hold.",
      "Support skill maintenance and capability improvement.",
      "Create a stronger bridge between work expectations and performance."
    ],
    process: ["Need", "Plan", "Train", "Practice", "Improve"],
    related: ["skill-development", "consulting", "payroll"]
  },
  "skill-development": {
    label: "Skill development",
    eyebrow: "Service details / Skill development",
    title: "Practical development for skills that matter now.",
    intro: "Collar JobsKart focuses on skill development that improves capabilities required to perform well in current market trends.",
    points: [
      "Identify the skills people need for the current market.",
      "Strengthen individual capability with a practical development focus.",
      "Help people adapt as business expectations change."
    ],
    process: ["Map", "Build", "Coach", "Apply", "Measure"],
    related: ["training", "consulting", "recruitment"]
  },
  recruitment: {
    label: "Recruitment solutions",
    eyebrow: "Service details / Recruitment solutions",
    title: "The right people, selected with role fit in mind.",
    intro: "Collar JobsKart supports organizations with sourcing the best talent, then helps businesses retain and develop people into long-term assets.",
    points: [
      "Understand the role, culture and hiring priority.",
      "Source candidates whose experience matches the requirement.",
      "Support communication between employers and candidates."
    ],
    process: ["Consult", "Source", "Screen", "Coordinate", "Follow up"],
    related: ["executive-search", "market-research", "consulting"]
  },
  "executive-search": {
    label: "Executive search",
    eyebrow: "Service details / Executive search",
    title: "Focused leadership search for high-value roles.",
    intro: "The executive search service is built to discover executive talent tailored to client needs, with attention to role requirements and leadership fit.",
    points: [
      "Clarify leadership expectations and role context.",
      "Identify senior profiles suited to the mandate.",
      "Support confidential, focused conversations with relevant talent."
    ],
    process: ["Mandate", "Map", "Approach", "Shortlist", "Present"],
    related: ["recruitment", "consulting", "market-research"]
  },
  "market-research": {
    label: "Market research",
    eyebrow: "Service details / Market research",
    title: "Market insight for sharper workforce decisions.",
    intro: "Collar JobsKart systematically obtains, analyses and interprets market trends and requirements so organizations can act with better context.",
    points: [
      "Gather relevant hiring and workforce signals from the market.",
      "Analyse requirements, trends and talent movement.",
      "Turn findings into clearer talent and HR decisions."
    ],
    process: ["Gather", "Analyse", "Interpret", "Report", "Act"],
    related: ["consulting", "executive-search", "recruitment"]
  },
  payroll: {
    label: "Payroll",
    eyebrow: "Service details / Payroll",
    title: "Efficient payroll support for workforce operations.",
    intro: "The payroll service helps organizations manage payroll efficiently as part of a wider people operations relationship.",
    points: [
      "Support payroll coordination for workforce operations.",
      "Help keep payroll activity organized and efficient.",
      "Connect payroll needs with broader HR support where useful."
    ],
    process: ["Review", "Organize", "Coordinate", "Process", "Support"],
    related: ["consulting", "training", "skill-development"]
  }
};

const jobs = [
  {
    title: "IPDRG Coder",
    category: "Medical Services / Hospital",
    city: "Chennai",
    experience: "1 - 6 years",
    salary: "1 L per month",
    summary: "IPDRG coding role with End To End Denials experience mentioned in the source listing."
  },
  {
    title: "IPDRG Coder",
    category: "Medical Services / Hospital",
    city: "Hyderabad",
    experience: "1 - 6 years",
    salary: "1 L per month",
    summary: "Hospital and medical services role for experienced IPDRG coding candidates."
  },
  {
    title: "IPDRG Coder",
    category: "Medical Services / Hospital",
    city: "Bangalore",
    experience: "1 - 6 years",
    salary: "1 L per month",
    summary: "Coding opportunity for candidates with relevant denial management exposure."
  },
  {
    title: "IPDRG Coder",
    category: "Medical Services / Hospital",
    city: "Trichy",
    experience: "1 - 6 years",
    salary: "1 L per month",
    summary: "Medical services coding opportunity listed for Trichy."
  },
  {
    title: "AR Caller",
    category: "Medical Services / Hospital",
    city: "Chennai",
    experience: "1 - 3 years",
    salary: "40K",
    summary: "AR Caller role with End To End Denials experience mentioned in the source listing."
  },
  {
    title: "AR Caller",
    category: "Medical Services / Hospital",
    city: "Bangalore",
    experience: "1 - 3 years",
    salary: "40K",
    summary: "Medical services AR calling opportunity listed for Bangalore."
  }
];

const pathName = location.pathname.split("/").pop() || "index.html";
document.body.dataset.page = pathName.replace(".html", "") || "index";
const header = document.querySelector(".site-header");

if (header) {
  header.innerHTML = `<nav class="nav" aria-label="Main navigation">
    <a class="brand brand--image" href="index.html" aria-label="Collar JobsKart home">
      <img src="logo.svg" class="brand-logo brand-logo--dark" alt="Collar JobsKart logo" width="190" height="54">
      <img src="logo-white.svg" class="brand-logo brand-logo--light" alt="" aria-hidden="true" width="190" height="54">
    </a>
    <div class="nav-links" id="nav-links">
      ${navItems.map(([url, label]) => `<a href="${url}" class="${pathName === url ? "active" : ""}" ${pathName === url ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
    </div>
    <div class="nav-actions">
      <a href="login.html" class="nav-login">Log in</a>
      <a href="signup.html" class="btn btn-dark">Join network <span class="arrow">&nearr;</span></a>
      <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button>
    </div>
  </nav>`;
}

if (document.querySelector("main > .hero")) {
  header?.classList.add("over-hero");
}

const footer = document.querySelector(".site-footer");

if (footer) {
  const companyLinks = navItems.filter(([url]) => url !== "services.html");
  const serviceLinks = Object.entries(serviceDetails).map(([slug, item]) => [`service-detail.html?service=${slug}`, item.label]);
  footer.innerHTML = `<div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand footer-col">
        <a class="brand brand--image brand--footer" href="index.html" aria-label="Collar JobsKart home">
          <img src="logo-white.svg" class="brand-logo" alt="Collar JobsKart logo" width="190" height="54">
        </a>
        <p>A people-first HR consultancy partnering with businesses through recruitment, training, talent development, market research and payroll support.</p>
        <p class="footer-tag">Connecting talent. Fueling growth.</p>
        <div class="footer-extra">
          <p>Chennai • Kochi • Hyderabad — Mon–Sat, 9:30 AM–6:30 PM. Share your requirement or profile, our team responds within one business day.</p>
          <div class="footer-cta-row">
            <a class="footer-pill" href="contact.html">Start a conversation</a>
            <a class="footer-pill footer-pill--ghost" href="careers.html">Find jobs</a>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-title">Company</div>
        <div class="footer-links">
          ${companyLinks.map(([url, label]) => `<a href="${url}">${label}</a>`).join("")}
          <a href="login.html">Log in</a>
          <a href="signup.html">Join network</a>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-title">Services</div>
        <div class="footer-links">
          <a href="services.html">All services</a>
          ${serviceLinks.map(([url, label]) => `<a href="${url}">${label}</a>`).join("")}
        </div>
      </div>
      <div class="footer-col footer-contact">
        <div class="footer-title">Contact</div>
        <p class="footer-line"><span>Phone</span><a href="tel:+914443594841">+91 44 4359 4841</a></p>
        <p class="footer-line"><span>Email</span><a href="mailto:contact@collarjobskart.com">contact@collarjobskart.com</a></p>
        <p class="footer-line"><span>Offices</span>Chennai, Kochi and Hyderabad.</p>
        <p class="footer-line"><span>Head office</span>3rd Floor, Door No. F33, Dev's Ark, 2nd Ave, Block F, Annanagar East, Chennai 600102.</p>
      </div>
    </div>
    <div class="footer-bottom"><span>&copy; 2026 Collar JobsKart. All rights reserved.</span><span>Privacy-friendly frontend preview.</span></div>
  </div>`;
}

const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

links?.insertAdjacentHTML("beforeend", '<a class="mobile-only-auth" href="login.html">Log in</a><a class="mobile-only-auth" href="signup.html">Sign up</a>');

function setMenu(open) {
  toggle?.setAttribute("aria-expanded", String(open));
  toggle?.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  links?.classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
}

toggle?.addEventListener("click", () => {
  const willOpen = toggle.getAttribute("aria-expanded") !== "true";
  setMenu(willOpen);
});

links?.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 780) setMenu(false);
});

if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const bounds = button.getBoundingClientRect();
      const x = (event.clientX - bounds.left - bounds.width / 2) * 0.09;
      const y = (event.clientY - bounds.top - bounds.height / 2) * 0.11;
      button.style.setProperty("--magnet-x", `${x.toFixed(1)}px`);
      button.style.setProperty("--magnet-y", `${y.toFixed(1)}px`);
    });

    button.addEventListener("pointerleave", () => {
      button.style.removeProperty("--magnet-x");
      button.style.removeProperty("--magnet-y");
    });
  });

  document.querySelectorAll(".hero").forEach((hero) => {
    const media = hero.querySelector(".hero-media");
    if (!media) return;

    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * -10;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -7;
      media.style.setProperty("--parallax-x", `${x.toFixed(1)}px`);
      media.style.setProperty("--parallax-y", `${y.toFixed(1)}px`);
    });

    hero.addEventListener("pointerleave", () => {
      media.style.setProperty("--parallax-x", "0px");
      media.style.setProperty("--parallax-y", "0px");
    });
  });

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 4.2).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 4.2).toFixed(2)}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

if (!reducedMotion) {
  const scrollLayers = [...document.querySelectorAll("[data-scroll-parallax]")];
  let scrollLayerFrame = 0;

  const updateScrollLayers = () => {
    scrollLayerFrame = 0;
    const viewportCenter = window.innerHeight / 2;

    scrollLayers.forEach((layer) => {
      const rate = Number(layer.dataset.scrollParallax || 0);
      const bounds = layer.getBoundingClientRect();
      const layerCenter = bounds.top + bounds.height / 2;
      const shift = Math.max(-32, Math.min(32, (viewportCenter - layerCenter) * rate * 0.22));
      layer.style.setProperty("--scroll-parallax-y", `${shift.toFixed(2)}px`);
    });
  };

  const requestScrollLayerUpdate = () => {
    if (!scrollLayerFrame) scrollLayerFrame = requestAnimationFrame(updateScrollLayers);
  };

  if (scrollLayers.length) {
    updateScrollLayers();
    window.addEventListener("scroll", requestScrollLayerUpdate, { passive: true });
    window.addEventListener("resize", requestScrollLayerUpdate, { passive: true });
  }
}

const back = document.querySelector(".back-top");
let ticking = false;

function handleScroll() {
  header?.classList.toggle("scrolled", scrollY > 30);
  back?.classList.toggle("visible", scrollY > 520);
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(handleScroll);
    ticking = true;
  }
}, { passive: true });

handleScroll();
back?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const node = entry.target;
    const target = Number(node.dataset.count || 0);
    const suffix = node.dataset.suffix || "";
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      node.textContent = `${Math.round(target * progress)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
    counterObserver.unobserve(node);
  });
}, { threshold: 0.55 });

document.querySelectorAll("[data-count]").forEach((node) => counterObserver.observe(node));

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const track = slider.querySelector(".testimonial-track");
  const slides = [...slider.querySelectorAll(".testimonial-slide")];
  const count = slider.querySelector(".slider-count");
  let index = 0;

  function move(delta) {
    if (!track || !slides.length) return;
    index = (index + delta + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    if (count) count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  }

  slider.querySelector("[data-prev]")?.addEventListener("click", () => move(-1));
  slider.querySelector("[data-next]")?.addEventListener("click", () => move(1));

  let startX = 0;
  track?.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  }, { passive: true });
  track?.addEventListener("touchend", (event) => {
    const diff = event.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 55) move(diff < 0 ? 1 : -1);
  }, { passive: true });
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = item?.classList.contains("open");

    document.querySelectorAll(".faq-item.open").forEach((element) => {
      element.classList.remove("open");
      element.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
    });

    if (!open && item) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

const params = new URLSearchParams(location.search);

function renderServiceDetail() {
  const page = document.querySelector("[data-service-detail]");
  if (!page) return;

  const key = serviceDetails[params.get("service")] ? params.get("service") : "recruitment";
  const data = serviceDetails[key];
  document.title = `${data.label} | Collar JobsKart`;

  const heroEyebrow = document.querySelector("[data-service-eyebrow]");
  const heroTitle = document.querySelector("[data-service-title]");
  const heroIntro = document.querySelector("[data-service-intro]");
  const overview = document.querySelector("[data-service-overview]");
  const points = document.querySelector("[data-service-points]");
  const process = document.querySelector("[data-service-process]");
  const related = document.querySelector("[data-service-related]");
  const contactLink = document.querySelector("[data-service-contact]");

  if (heroEyebrow) heroEyebrow.textContent = data.eyebrow;
  if (heroTitle) heroTitle.innerHTML = `${data.label}.<br><span class="serif">Built with care.</span>`;
  if (heroIntro) heroIntro.textContent = data.title;
  if (overview) overview.textContent = data.intro;
  if (points) points.innerHTML = data.points.map((point) => `<li>${point}</li>`).join("");
  if (process) {
    process.innerHTML = data.process.map((step, index) => `<div class="process-step reveal in-view"><span>${String(index + 1).padStart(2, "0")}</span><h3>${step}</h3><p>${index === 0 ? "Start with the requirement and the business context." : index === data.process.length - 1 ? "Use feedback to keep improving the support." : "Move forward with clear coordination and practical follow-through."}</p></div>`).join("");
  }
  if (related) {
    related.innerHTML = data.related.map((slug, index) => {
      const item = serviceDetails[slug];
      return `<a class="service-card" style="--i:${index}" href="service-detail.html?service=${slug}"><span class="service-no">0${index + 1}</span><span class="card-arrow">&nearr;</span><h3>${item.label}</h3><p>${item.title}</p></a>`;
    }).join("");
  }
  if (contactLink) contactLink.href = `contact.html?interest=${key}`;
}

renderServiceDetail();

const jobList = document.querySelector("[data-job-list]");

if (jobList) {
  const search = document.querySelector("[data-job-search]");
  const city = document.querySelector("[data-job-city]");
  const category = document.querySelector("[data-job-category]");

  function renderJobs() {
    const query = search?.value.trim().toLowerCase() || "";
    const selectedCity = city?.value || "";
    const selectedCategory = category?.value || "";
    const filtered = jobs.filter((job) => {
      const haystack = `${job.title} ${job.category} ${job.city} ${job.experience}`.toLowerCase();
      return (!query || haystack.includes(query)) && (!selectedCity || job.city === selectedCity) && (!selectedCategory || job.title.includes(selectedCategory));
    });

    jobList.innerHTML = filtered.length ? filtered.map((job) => `<article class="job-card reveal in-view">
      <div>
        <h3>${job.title} <span class="gold">/</span> ${job.city}</h3>
        <p>${job.summary}</p>
        <div class="tag-list"><span class="tag">${job.category}</span><span class="tag">${job.experience}</span><span class="tag">Full time</span><span class="tag">${job.salary}</span></div>
      </div>
      <a class="btn btn-light" href="contact.html?interest=career&role=${encodeURIComponent(`${job.title} - ${job.city}`)}">Enquire <span class="arrow">&nearr;</span></a>
    </article>`).join("") : '<p class="notice">No matching roles in this selection. Contact the Collar JobsKart team to share your profile for future opportunities.</p>';
  }

  search?.addEventListener("input", renderJobs);
  city?.addEventListener("change", renderJobs);
  category?.addEventListener("change", renderJobs);
  renderJobs();
}

const interest = document.querySelector("#interest");
if (interest && params.get("interest")) {
  interest.value = params.get("interest");
}

const message = document.querySelector("#message");
if (message && params.get("role")) {
  message.value = `I would like to know more about ${params.get("role")}.`;
}

const toast = document.querySelector(".toast");

function announce(messageText) {
  if (!toast) return;
  toast.textContent = messageText;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3600);
}

document.querySelectorAll("form[data-local-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    announce(form.dataset.message || "Your details are valid. This frontend preview is not connected to a submission service.");
    form.querySelector(".form-status")?.replaceChildren(document.createTextNode(form.dataset.redirect ? "Validated. Redirecting to the home page…" : "Validated locally. This static preview does not send or store submissions."));
    if (form.dataset.reset === "true") form.reset();
    if (form.dataset.redirect) {
      window.setTimeout(() => {
        location.href = form.dataset.redirect;
      }, 950);
    }
  });
});

document.querySelectorAll("[data-social]").forEach((button) => {
  button.addEventListener("click", () => {
    announce(`Continuing with ${button.dataset.social}… (frontend preview)`);
    window.setTimeout(() => {
      location.href = "index.html";
    }, 850);
  });
});

document.querySelectorAll("[data-password-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const field = document.getElementById(button.dataset.passwordToggle);
    if (!field) return;
    const showing = field.type === "text";
    field.type = showing ? "password" : "text";
    button.classList.toggle("is-showing", !showing);
    button.setAttribute("aria-label", !showing ? "Hide password" : "Show password");
  });
});
