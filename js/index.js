// header background reveal
const headerBg = () => {
    const header = document.querySelector(".js-header");

    window.addEventListener("scroll", function () {
        if (this.scrollY > 0) {
            header.classList.add("bg-reveal");
        } else {
            header.classList.remove("bg-reveal");
        }
    })
}
headerBg();


// const faqs = document.querySelectorAll(".faq");
// // Executes a callback function for each token in the list
// faqs.forEach(faq => {
//     faq.addEventListener("click", () => {
//         faq.classList.toggle("active");
//     })

// });