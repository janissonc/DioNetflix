$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:6
        },
        1000:{
            items:10
        }
    }
})



function assistirAgora(){
    window.open("https://www.youtube.com/watch?v=i2vEAaEyHco&ab_channel=ImagemFilmes", '_blank'); 
}

function maisInformacoes(){
    window.open("https://www.themoviedb.org/movie/76163-the-expendables-2?language=pt-BR", '_blank'); 
}