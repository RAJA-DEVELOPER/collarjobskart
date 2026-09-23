const navItems = [
  ["index.html", "Home"],
  ["about.html", "About Us"],
  ["services.html", "Services"],
  ["testimonials.html", "Testimonials"],
  ["careers.html", "Careers / Jobs"],
  ["faq.html", "FAQ"],
  ["contact.html", "Contact Us"]
];

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
const header = document.querySelector(".site-header");

if (header) {
  header.innerHTML = `<nav class="nav" aria-label="Main navigation">
    <a class="brand" href="index.html" aria-label="Collar JobsKart home">
      <span class="brand-mark">C</span>
      <span class="brand-name">COLLAR JOBSKART<small>People. Potential. Progress.</small></span>
    </a>
    <div class="nav-links" id="nav-links">
      ${navItems.map(([url, label]) => `<a href="${url}" class="${pathName === url ? "active" : ""}" ${pathName === url ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
    </div>
    <div class="nav-actions">
      <a href="login.html" class="nav-login">Log in</a>
      <a href="signup.html" class="btn btn-dark">Join network <span class="arrow">&nearr;</span></a>
      <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="nav-links"><span></span><span></span></button>
    </div>
  </nav>`;
}

if (document.querySelector("main > .hero")) {
  header?.classList.add("over-hero");
}

const footer = document.querySelector(".site-footer");

if (footer) {
  footer.innerHTML = `<div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="index.html">
          <span class="brand-mark">C</span>
          <span class="brand-name">COLLAR JOBSKART<small>People. Potential. Progress.</small></span>
        </a>
        <p>A people-first HR consultancy partnering with businesses through recruitment, training, talent development, market research and payroll support.</p>
      </div>
      <div>
        <div class="footer-title">Explore</div>
        <div class="footer-links">
          ${navItems.map(([url, label]) => `<a href="${url}">${label}</a>`).join("")}
          <a href="service-detail.html">Service details</a>
        </div>
      </div>
      <div class="footer-contact">
        <div class="footer-title">Contact</div>
        <p><a href="tel:+914443594841">+91 44 4359 4841</a></p>
        <p><a href="mailto:contact@collarjobskart.com">contact@collarjobskart.com</a></p>
        <p>Chennai, Kochi and Hyderabad.</p>
        <p>Chennai: 3rd Floor, Door No. F33, Dev's Ark, 2nd Ave, Block F, Annanagar East, Chennai 600102.</p>
      </div>
    </div>
    <div class="footer-bottom"><span>&copy; 2026 Collar JobsKart. All rights reserved.</span><span>Connecting talent. Fueling growth.</span></div>
  </div>`;
}

const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

links?.insertAdjacentHTML("beforeend", '<a class="mobile-only-auth" href="login.html">Log in</a><a class="mobile-only-auth" href="signup.html">Sign up</a>');

toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
  links?.classList.toggle("open", !open);
  document.body.classList.toggle("nav-open", !open);
});

links?.querySelectorAll("a").forEach((anchor, index) => {
  anchor.style.transitionDelay = `${index * 35}ms`;
  anchor.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
    document.body.classList.remove("nav-open");
  });
});

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
    form.querySelector(".form-status")?.replaceChildren(document.createTextNode("Validated locally. This static preview does not send or store submissions."));
    if (form.dataset.reset === "true") form.reset();
  });
});

document.querySelectorAll("[data-password-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const field = document.getElementById(button.dataset.passwordToggle);
    if (!field) return;
    const showing = field.type === "text";
    field.type = showing ? "password" : "text";
    button.textContent = showing ? "Show" : "Hide";
  });
});
