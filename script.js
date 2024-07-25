document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    }
});
