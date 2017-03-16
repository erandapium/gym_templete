jQuery(document).ready(function() {

jQuery(".hide-show-div").hide();

  jQuery(".hide-show-btn").click(function(){

	   jQuery(this).nextAll(".hide-show-div").slideToggle();

	   });

});
