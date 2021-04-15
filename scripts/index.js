const URL = "https://alfathzikir.github.io/"; // root domain
const CODEURL = "https://github.com/alfathzikir/";

// redirects
$("#det-p0").on("click", e => {
    window.location.assign(`${URL}/docs/p0.html`);
});

// redirects
$("#det-p1").on("click", e => {
    window.location.assign(`${URL}/docs/p1.html`);
});

// redirects
$("#det-p2").on("click", e => {
    window.location.assign(`${URL}/docs/p2.html`);
});

// redirects
$("#go-p0").on("click", e => {
    window.location.assign(`${URL}/project-0-code/index.html`);
});
// redirects
$("#go-p1").on("click", e => {
    window.location.assign(`${URL}/581P1/index.html`);
});
// redirects
$("#go-p2").on("click", e => {
    window.location.assign(`https://alfathproject2.herokuapp.com/`);
});

// redirects
$("#src-p0").on("click", e => {
    window.location.assign(`${CODEURL}/project-0-code`);
});
// redirects
$("#src-p1").on("click", e => {
    window.location.assign(`${CODEURL}/581P1`);
});
// redirects
$("#src-p2").on("click", e => {
    window.location.assign(`${CODEURL}/581P2`);
});