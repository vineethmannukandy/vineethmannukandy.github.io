document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav__links a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

/* ---------- Typed roles effect ---------- */
(function typeRoles() {
  const el = document.getElementById("typed");
  if (!el || !TYPED_ROLES || TYPED_ROLES.length === 0) return;

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = TYPED_ROLES[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % TYPED_ROLES.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
})();

/* ---------- Render career timeline ---------- */
(function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container || !CAREER_TIMELINE) return;

  container.innerHTML = CAREER_TIMELINE.map((item) => `
    <div class="timeline__item">
      <div class="timeline__period">${escapeHtml(item.period)}</div>
      <h3 class="timeline__role">${escapeHtml(item.role)}</h3>
      <div class="timeline__company">${escapeHtml(item.company)}</div>
      <p class="timeline__desc">${escapeHtml(item.description)}</p>
      ${item.tags && item.tags.length ? `
        <div class="timeline__tags">
          ${item.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
        </div>` : ""}
    </div>
  `).join("");
})();

/* ---------- Render skills with animated bars ---------- */
(function renderSkills() {
  const container = document.getElementById("skills-list");
  if (!container || !SKILLS) return;

  container.innerHTML = SKILLS.map((s) => `
    <div class="skill-card">
      <div class="skill-card__head">
        <span>${escapeHtml(s.name)}</span>
        <span>${s.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-bar__fill" data-level="${s.level}"></div>
      </div>
    </div>
  `).join("");

  const bars = container.querySelectorAll(".skill-bar__fill");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.level + "%";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach((bar) => observer.observe(bar));
})();

/* ---------- Star rating ---------- */
(function starRating() {
  const rating = document.getElementById("rating");
  const ratingValue = document.getElementById("ratingValue");
  if (!rating) return;

  const stars = Array.from(rating.querySelectorAll(".star"));

  function setStars(value) {
    stars.forEach((star) => {
      star.classList.toggle("active", Number(star.dataset.star) <= value);
    });
  }

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const value = Number(star.dataset.star);
      rating.dataset.value = value;
      ratingValue.value = value;
      setStars(value);
    });
  });
})();

/* ---------- Survey form submission ---------- */
(function surveyForm() {
  const form = document.getElementById("surveyForm");
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      role: form.role.value,
      rating: form.rating.value,
      message: form.message.value.trim(),
      submittedAt: new Date().toISOString(),
      page: window.location.href
    };

    const endpoint = typeof SURVEY_ENDPOINT_URL !== "undefined" ? SURVEY_ENDPOINT_URL : "";
    if (!endpoint || endpoint.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT")) {
      status.textContent = "Survey storage isn't configured yet — see apps-script/README.md to connect Google Sheets.";
      status.classList.add("error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });

      status.textContent = "Thanks! Your response has been recorded.";
      status.classList.add("success");
      form.reset();
      document.querySelectorAll(".rating .star").forEach((s) => s.classList.remove("active"));
      document.getElementById("ratingValue").value = "0";
    } catch (err) {
      status.textContent = "Something went wrong. Please try again later.";
      status.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Survey";
    }
  });
})();

/* ---------- Utils ---------- */
function escapeHtml(str) {
  if (str === undefined || str === null) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
