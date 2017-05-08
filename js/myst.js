(function($) {

	$(function() {

		$('#older-releases .title').click(function(e) {
			var releaseTable = $('#older-releases table');
			if(releaseTable.is(':visible')){
				hideOlderReleases();
			}else{
				showOlderReleases();
			}
		});
		
	});
	
	function hideOlderReleases(){
		$('#older-releases .title i').addClass('fa-plus-square');
		$('#older-releases .title i').removeClass('fa-minus-square');
		$('#older-releases table').hide();
	}
	
	function showOlderReleases(){
		$('#older-releases .title i').removeClass('fa-plus-square');
		$('#older-releases .title i').addClass('fa-minus-square');
		$('#older-releases table').show();
	}

})(jQuery);