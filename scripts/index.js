const URL = location.origin; // root domain

// redirects
$("#go-p0").on("click", e => {
    window.location.assign(`${URL}/docs/p0.html`);
});