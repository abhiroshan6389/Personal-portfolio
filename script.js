const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');
    
    if (header) {
        header.classList.remove('active');
        setTimeout(() => {
            header.classList.add('active');
        }, 1100);
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (barsBox) {
        barsBox.classList.remove('active');
        setTimeout(() => {
            barsBox.classList.add('active');
        }, 1100);
    }

    sections.forEach(section => {
        section.classList.remove('active');
    });
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains("active")) {
            activePage();

            link.classList.add("active");

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

if (logoLink && navLinks.length > 0) {
    logoLink.addEventListener('click', () => {
        if (!navLinks[0].classList.contains('active')) {
            activePage();

            navLinks[0].classList.add('active');

            setTimeout(() => {
                sections[0].classList.add('active');
            }, 1100);
        }
    });
}

// const navLinks = document.querySelectorAll('header nav a');
// const logoLink = document.querySelector('.logo');
// const sections = document.querySelecter('Section');

// const activePage = () => {
//     const header = document.querySelector('header');
//     const barsBox = document.querySelector('.bars-box');
    
//     header.classList.remove('active');
//     setTimeout(() => {
//         header.classList.add('active');
//     }, 1100);

//     navLinks.forEach(link => {
//         link.classList.remove('active');
//     });

//     barsBox.classList.remove('active');
//     setTimeout(() => {
//         barsBox.classList.add('active');
//     }, 1100);

//     Sections.forEach(section => {
//         section.classList.remove('active');
//     });
// }

// navLinks.forEach((link) => {
//     link.addEventListener('click', () => {
//         if (!link.classList.contains("active")) {
//             activePage();

//             link.classList.add("active");

//              setTimeout(() => {
//                  sections[idx].classList.add('active');
//               },1100);
//         }
//     });
// });

// logoLink.addEventListener('click', () => {
//     if(!navLinks[0].classList.contains('active')) {
//         activePage();

//         navLinks[0].classList.add('active');

//              setTimeout(() => {
//                  sections[0].classList.add('active');
//               },1100);
//     }
// });



const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach((btn => {
            btn.classList.remove('active');
        }));
        btn.classList.add('active');

        resumeDetails.forEach((Details => {
            Details.classList.remove('active');
        }));
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;
const totalSlides = 4; // adjust based on actual number of slides

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail'); 

    // ✅ FIXED: Added backticks for template literal
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    // ✅ Clear previous active state
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    // ✅ Safety check for index
    if (portfolioDetails[index]) {
        portfolioDetails[index].classList.add('active');
    }
}

arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = totalSlides - 1; // stop at last slide
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0; // stop at first slide
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
