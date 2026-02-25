
/* Typing Effect */

const roles = [
    "Python",
    "Backend Developer",
    "Problem Solver",
];

let w = 0,
    c = 0,
    d = false;

const t = document.getElementById("typing");
const box = document.querySelector(".code");

function type() {
    const cur = roles[w];

    if (!d) {
        t.textContent = cur.substring(0, ++c);
        box.classList.add("active");

        if (c === cur.length) {
            setTimeout(() => (d = true), 1200);
        }
    } else {
        t.textContent = cur.substring(0, --c);

        if (c === 0) {
            d = false;
            w = (w + 1) % roles.length;
            box.classList.remove("active");
        }
    }

    setTimeout(type, d ? 60 : 90);
}

type();






/* Scroll Reveal */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((el) => {
        const {top} = el.getBoundingClientRect();
        const win = window.innerHeight;

        if (top < win - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();





/* Contact Lazy Animation (Ultra Smooth Timing) */

const contactItems = document.querySelectorAll(".contact-item");

const contactObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                const index = [...contactItems].indexOf(entry.target);

                const baseDelay = 400; // first delay
                const stagger = 200;   // slower stagger

                setTimeout(() => {
                    entry.target.classList.add("show");
                }, baseDelay + index * stagger);

                contactObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.4,
    }
);

contactItems.forEach((item) => {
    contactObserver.observe(item);
});
