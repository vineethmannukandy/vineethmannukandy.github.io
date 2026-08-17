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
      ${item.projects && item.projects.length ? `
        <div class="timeline__projects">
          ${item.projects.map((p) => `
            <div class="timeline__project">
              <div class="timeline__project-head">
                <strong>${escapeHtml(p.title)}</strong>
                <span>${escapeHtml(p.period)}</span>
              </div>
              <p>${escapeHtml(p.description)}</p>
            </div>
          `).join("")}
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
