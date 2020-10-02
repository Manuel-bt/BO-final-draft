$(document).ready(function(){

    // Trending, High Rated Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:8,
        nav:false,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:5
            },
            1000:{
                items:6
            }
        }
    });
    

    
    
          
    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });
    
    // filter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    })
    
    
    });