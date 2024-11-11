$('.owl-carousel').owlCarousel({
    smartSpeed: 1000,
    margin: 24,
    nav:true,
    dots:true,
    rtl: true,
    items: 1,
    navText:[`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967Z"
                                        fill="#878F97" />
                                </svg>` , ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.5303 5.46967C15.8232 5.76256 15.8232 6.23744 15.5303 6.53033L10.0607 12L15.5303 17.4697C15.8232 17.7626 15.8232 18.2374 15.5303 18.5303C15.2374 18.8232 14.7626 18.8232 14.4697 18.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L14.4697 5.46967C14.7626 5.17678 15.2374 5.17678 15.5303 5.46967Z"
                                        fill="#231F20" />
                                </svg>`]
})

let cards= document.querySelectorAll('.cards')
cards.forEach(card=>{
    console.log(navigator);
    setTimeout(() => {
        let title  = card.querySelector('.cards-title h4').getBoundingClientRect().width + 30
        card.querySelector('.owl-nav').style.right = `${title}px`
    }, 200);
})