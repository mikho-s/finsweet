
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('menu-open');
        menuBody.classList.toggle('menu-open');
        console.log('buger vse');

    });
}


// import 'menu.js';

// const itemFaq = document.querySelector('.item-faq__title');
// const bodyFaq = document.querySelector('.item-faq__body');
// if (itemFaq) {
//     itemFaq.addEventListener("click", function (e) {
//         itemFaq.classList.toggle('faq-title-open');
//         bodyFaq.classList.toggle('faq-body-open');
//     });
// }



// const itemFaq = document.querySelectorAll(".item-faq");

// itemFaq.forEach((item, index) => {
//     let itemTitle = item.querySelector(".item-faq__title");
//     itemTitle.addEventListener("click", () => {
//         itemTitle.classList.toggle("open");
//     })

//     console.log(item);
// })


// ++++++++++

const itemFaq = document.querySelectorAll(".item-faq");

itemFaq.forEach((item, index) => {
    let itemTitle = item.querySelector(".item-faq__title");
    let bodyFaq = item.querySelector('.item-faq__body');
    itemTitle.addEventListener("click", () => {
        itemTitle.classList.toggle('faq-title-open');
        bodyFaq.classList.toggle('faq-body-open');
    })

    console.log(itemTitle);
})

// ++++++++++


// const accordionContent = document.querySelectorAll(".item-faq");

// accordionContent.forEach((item, index) => {
//     let header = item.querySelector(".item-faq__title");
//     let bodyFaq = item.querySelector('.item-faq__body');

//     header.addEventListener("click", () => {
//         // itemTitle.classList.toggle('faq-title-open');
//         bodyFaq.classList.toggle('faq-body-open');
//         item.classList.toggle("faq-title-open");
//         header.classList.toggle("faq-title-open");

//         let description = item.querySelector(".item-faq__body");
//         if (item.classList.contains("faq-body-open")) {
//             description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
//             // item.querySelector("i").classList.replace("fa-plus", "fa-minus");
//         } else {
//             description.style.height = "0px";
//             // item.querySelector("i").classList.replace("fa-minus", "fa-plus");
//         }
//         removeOpen(index); //calling the funtion and also passing the index number of the clicked header
//     })
// })

// function removeOpen(index1) {
//     accordionContent.forEach((item2, index2) => {
//         if (index1 != index2) {
//             item2.classList.remove("faq-body-open");

//             let des = item2.querySelector(".description");
//             des.style.height = "0px";
//             // item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
//         }
//     })
// }
const swiper = new Swiper('.content-review', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.content-review__arrow-next',
        prevEl: '.content-review__arrow-prev',
    },

});

