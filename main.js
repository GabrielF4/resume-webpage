document.addEventListener("DOMContentLoaded", function () {
    const navBtn1 = document.getElementById("nav-btn-1");
    const navBtn2 = document.getElementById("nav-btn-2");
    const navBtn3 = document.getElementById("nav-btn-3");
    const navBtn4 = document.getElementById("nav-btn-4");
    const section1 = document.getElementById("section-1");
    const section2 = document.getElementById("section-2");
    const section3 = document.getElementById("section-3");
    const section4 = document.getElementById("section-4");
    const primaryColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--primary-color");
    const color2 = getComputedStyle(document.documentElement).getPropertyValue(
        "--color-2"
    );

    navBtn1.addEventListener("click", function () {
        section1.style.display = "block";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";

        navBtn1.classList.add("nav-active");
        navBtn2.classList.remove("nav-active");
        navBtn3.classList.remove("nav-active");
        navBtn4.classList.remove("nav-active");
    });

    navBtn2.addEventListener("click", function () {
        section1.style.display = "none";
        section2.style.display = "block";
        section3.style.display = "none";
        section4.style.display = "none";

        navBtn1.classList.remove("nav-active");
        navBtn2.classList.add("nav-active");
        navBtn3.classList.remove("nav-active");
        navBtn4.classList.remove("nav-active");
    });

    navBtn3.addEventListener("click", function () {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "block";
        section4.style.display = "none";

        navBtn1.classList.remove("nav-active");
        navBtn2.classList.remove("nav-active");
        navBtn3.classList.add("nav-active");
        navBtn4.classList.remove("nav-active");
    });

    navBtn4.addEventListener("click", function () {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "block";

        navBtn1.classList.remove("nav-active");
        navBtn2.classList.remove("nav-active");
        navBtn3.classList.remove("nav-active");
        navBtn4.classList.add("nav-active");
    });

    section1.style.display = "block";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";

    navBtn1.classList.add("nav-active");
});
