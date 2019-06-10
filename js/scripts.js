 $(document).ready(function(){
            $('#partOne').hide();
            $('#partTwo').hide();
            $('#partThree').hide();

            $('#design').click(function(){
            	$('#design').hide();
            	$('#partOne').show();
            });
            $('#partOne').click(function(){
            	$('#partOne').hide();
            	$('#design').show();
            });

            $('#developement').click(function(){
            	$('#developement').hide();
            	$('#partTwo').show();
            });
            $('#partTwo').click(function(){
            	$('#partTwo').hide();
            	$('#developement').show();
            });
             $('#product').click(function(){
            	$('#product').hide();
            	$('#partThree').show();
            });
            $('#partThree').click(function(){
            	$('#partThree').hide();
            	$('#product').show();
            });


          });