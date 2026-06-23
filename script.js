
// DARK MODE

const darkModeBtn =
document.getElementById("darkModeBtn");

/* Check saved theme */

if(localStorage.getItem("theme") === "dark")
{

    document.body.classList.add("dark-mode");

    if(darkModeBtn)
        {
        darkModeBtn.innerHTML = "☀ Light Mode";
        }

}

if(darkModeBtn)
    {
        darkModeBtn.addEventListener("click", () => 
            {

        document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode"))
        {

        darkModeBtn.innerHTML = "☀ Light Mode";

        localStorage.setItem("theme","dark");

        }
    else
        {

        darkModeBtn.innerHTML = "🌙 Dark Mode";

        localStorage.setItem("theme","light");

        }

    });

}

// SHOW MORE

const readMoreBtn =
document.getElementById("readMoreBtn");

const moreText =
document.getElementById("moreText");

if(readMoreBtn && moreText){

    readMoreBtn.addEventListener("click", () => {

        if(moreText.style.display === "none"){

            moreText.style.display = "block";
            readMoreBtn.innerHTML = "Show Less";

        }else{

            moreText.style.display = "none";
            readMoreBtn.innerHTML = "Show More";

        }

    });

}

//contact form thank you msg
const contactForm =
document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert(
            "Thank you! Your message has been sent successfully."
        );

    });

}

/* ANIMATED COUNTERS */

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute('data-target');

        const count =
        +counter.innerText;

        const increment =
        target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText =
            target + "+";

        }

    };

    updateCounter();

});

/* SCROLL REVEAL */

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            reveal.classList.add("active");
        }

    });

});
