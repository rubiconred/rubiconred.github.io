/*Primary Navigation*/
jQuery('.toggle-btn').click(function(){
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
});

/*Sticky Header*/
var fixedHeader = function(){
    if(jQuery(window).width()>767){
        var TOP = window.pageYOffset;
        if(TOP > 50)
        jQuery(".header").addClass('fixed');
        else
        jQuery(".header").removeClass('fixed');
    }
}

var fixedHeaderResize = function(){
    fixedHeader();
    jQuery(window).scroll(function(){
        fixedHeader();
    });
}

fixedHeaderResize();
jQuery(window).resize(function(){
   fixedHeaderResize();
});


// tabbed content 
jQuery(".tab-content").hide(); 
jQuery(".tab-content:first").show(); /* if in tab mode */ 
jQuery(".detailTabs li a").click(function(e) { 
    jQuery(".tab-content").hide(); 
    var activeTab = jQuery(this).attr("href"); 
    jQuery(activeTab).fadeIn(); 
    jQuery(".detailTabs li a").removeClass("selected");       
    jQuery(this).addClass("selected"); 
    jQuery(".m-heading").removeClass("m-active");    
    jQuery(".m-heading[href^='"+activeTab+"']").addClass("m-active"); 
    e.stopImmediatePropagation();
    return false;
}); /* if in drawer mode */ 

jQuery(".m-heading").click(function(e) { 
    jQuery(".tab-content").slideUp()
    var d_activeTab = jQuery(this).attr("href"); 
    jQuery(d_activeTab).slideDown(); 
    jQuery(".m-heading").removeClass("m-active"); jQuery(this).addClass("m-active"); 
    jQuery(".detailTabs li a").removeClass("selected"); 
    jQuery(".detailTabs li a[href^='"+d_activeTab+"']").addClass("selected"); 
    e.stopImmediatePropagation();
    return false;
}); /* Extra class "tab_last" to add border to right side of last tab */ 
jQuery('.detailTabs li a').first().addClass("selected"); 
jQuery('.detailTabs li a').last().addClass("tab-last"); 
    
//Owl Carosual
jQuery("#banner-list").owlCarousel({
      dots : false,
      nav : true, 
      navText : ["&#xf177;","&#xf178;"],
	  items:1,
	  loop:true,
	  autoplay:true,
	 autoplayTimeout:6000,
	  
	  
});

jQuery("#platform-temp").owlCarousel({
	  autoplay:true,
	  loop:true,
      dots : false,
	  slideBy: 2,
      nav : true, // Show next and prev buttons
      navText : [" "," "],
	  lazyLoad: true,
	  autoplayTimeout:6000,
	  responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:4,
			}
	  }
	  
});

jQuery("#cloud-temp").owlCarousel({
	  autoplay:true,
	  loop:true,
	  scrollPerPage : false,
      dots : false,
      nav : true, // Show next and prev buttons
      navText : [" "," "],
	  lazyLoad: true,
	  autoplayTimeout:6000,
      responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:4,
			}
	  }
});

jQuery(".circle-thumbnails-list").owlCarousel({
      dots : true,
      autoplay:true,
	  loop:true,
      items : 4, //10 items above 1000px browser width
	  lazyLoad: true,
	  autoplayTimeout:6000,
      responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:4,
			}
	  }
});