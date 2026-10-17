/* ---------- 11. Typing text effect ---------- */
const typingEl = document.getElementById("typingText");
const phrases = ["Animations bring interfaces to life.", "Pure CSS. Zero libraries."];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];
  typingEl.textContent = deleting
    ? current.slice(0, charIndex--)
    : current.slice(0, charIndex++);

  let delay = deleting ? 35 : 55;

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    delay = 1200;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(typeLoop, delay);
}
typeLoop();

/* ---------- 12. Ripple button ---------- */
const rippleBtn = document.getElementById("rippleBtn");
rippleBtn.addEventListener("click", (e) => {
  const rect = rippleBtn.getBoundingClientRect();
  const span = document.createElement("span");
  const size = Math.max(rect.width, rect.height);
  span.className = "ripple-span";
  span.style.width = span.style.height = `${size}px`;
  span.style.left = `${e.clientX - rect.left - size / 2}px`;
  span.style.top = `${e.clientY - rect.top - size / 2}px`;
  rippleBtn.appendChild(span);
  span.addEventListener("animationend", () => span.remove());
});
