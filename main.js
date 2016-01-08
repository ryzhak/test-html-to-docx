var pagesWithCanvas = [];

$(document).ready(function(){

	var annotationFlipbook = $("#annotation-flipbook");
	var pages = [];
	

	//getting html of all pages
    jQuery.ajax({
        url: 'parts/test_1.html',
        success: function(resp){

            pages.push(resp);

            jQuery.ajax({
                url: 'parts/test_2.html',
                success: function(resp){

                    pages.push(resp);

                    jQuery.ajax({
                        url: 'parts/test_3.html',
                        success: function(resp){

                            pages.push(resp);

                            jQuery.ajax({
                                url: 'parts/test_4.html',
                                success: function(resp){

                                    pages.push(resp);

                                    jQuery.ajax({
		                                url: 'parts/test_5.html',
		                                success: function(resp){

		                                	pages.push(resp);

		                                	jQuery.ajax({
				                                url: 'parts/test_6.html',
				                                success: function(resp){

				                                	pages.push(resp);

				                                	jQuery.ajax({
						                                url: 'parts/test_7.html',
						                                success: function(resp){

						                                	pages.push(resp);

						                                	jQuery.ajax({
								                                url: 'parts/test_8.html',
								                                success: function(resp){

								                                	pages.push(resp);

								                                	//inserting all pages in the page
								                                    for(var i = 0; i < pages.length; i++){
								                                        annotationFlipbook.append("<div style='background:white;' contenteditable='true' id='editor" + i + "'><div class='annotation-page'>" + pages[i] + "</div></div>");
								                                        //annotationFlipbook.append("<textarea id='editor" + i + "'><div style='background:white;' class='annotation-page'>" + pages[i] + "</div></textarea>");
								                                    
								                                    }

								                                    

								                                    /*
																	* ACTIVATE CKEDITOR
																	*/
																	//changing the moono skin
																	CKEDITOR.config.skin = 'office2013';

																	//TODO: disable cutting images by CKEDITOR
																	//CKEDITOR.config.allowedContent = true;

																	//activate shared space plugin
																	//CKEDITOR.config.extraPlugins = 'sharedspace';

                                                                    //CKEDITOR.config.extraPlugins = 'image2';
                                                                    CKEDITOR.config.extraPlugins = 'stampwithdate';

																	CKEDITOR.config.sharedSpaces = {
																	    top: 'topButtonsToolbar'
																	};

								                                    //remove bottom status bar with the resize ability
								                                    CKEDITOR.config.removePlugins = 'elementspath';
																	CKEDITOR.config.resize_enabled = false;
																	//disable custom color for background color tool
																	CKEDITOR.config.colorButton_enableMore = false;
																	//set separate colors for background color tool
																	CKEDITOR.config.colorButton_colors = 'FFFF00,FF0000,008000,0000FF';

																	//common button config
																	var btnConfig = {
																		toolbarGroups: [
																			{name:"basicstyles","groups":["basicstyles", "colors", "stampwithdate"]},
																			//{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
																		    //{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
																		    //{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
																		    //{ name: 'forms' },
																		    //'/',
																		    //{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
																		    //{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align' ] },
																		    //{ name: 'links' },
																		    //{ name: 'insert' },
																		    //'/',
																		    //{ name: 'styles' },
																		    //{ name: 'colors' },
																		    //{ name: 'tools' },
																		    //{ name: 'others' },
																		    //{ name: 'about' }
																		],
																		// Remove the redundant buttons from toolbar groups defined above.
																		removeButtons: 'Bold,Italic,Subscript,Superscript,TextColor'
																	};
								                                    /*CKEDITOR.replace('editor0', btnConfig);
								                                    CKEDITOR.replace('editor1', btnConfig);
								                                    CKEDITOR.replace('editor2', btnConfig);
								                                    CKEDITOR.replace('editor3', btnConfig);*/
								                                    //try out inline
								                                    CKEDITOR.disableAutoInline = true;
								                                    CKEDITOR.inline( 'editor0' , btnConfig);
								                                    CKEDITOR.inline( 'editor1' , btnConfig);
								                                    CKEDITOR.inline( 'editor2' , btnConfig);
								                                    CKEDITOR.inline( 'editor3' , btnConfig);
								                                    CKEDITOR.inline( 'editor4' , btnConfig);
								                                    CKEDITOR.inline( 'editor5' , btnConfig);
								                                    CKEDITOR.inline( 'editor6' , btnConfig);
								                                    CKEDITOR.inline( 'editor7' , btnConfig);

																	//activate flipbook plugin
																	annotationFlipbook.booklet({
																		width: "80%",
																		height: "1200",
																		keyboard: false,
																		pageNumbers: false,
																		//pagePadding: 10,
																		manual: false,
																		arrows: true,
																		speed: 500
																		//shadows: false
																		//tabs: true
																	});


																	/*for(var i = 0; i < pages.length; i++){
																		
																		html2canvas(document.getElementById('editor' + 7), {
																		  onrendered: function(canvas) {
																		  	
																		  	document.getElementById('annotationSlickSlider').appendChild(canvas);

																		  	if(pagesWithCanvas.length == pages.length){
																		  		$("#annotationSlickSlider").slick({
																		  			slidesToShow: 3,
																					  slidesToScroll: 1,
																					  asNavFor: '.slider-for',
																					  dots: true,
																					  centerMode: true,
																					  focusOnSelect: true
																		  		});
																		  	}
																		  },
																		  //width: 220
																		  //height: 500
																		});
																	}*/

																	$("#annotationSlickSlider").slick({
															  			slidesToShow: 6,
																		slidesToScroll: 2,
																		//asNavFor: '.slider-for',
																		//dots: true,
																		//width: 200
																		//centerMode: true,
  																		//centerPadding: '60px',
																	});

								                                }
								                            });

						                                }
						                            });

				                                }
				                            });

		                                }
		                            });

                                    

                                }
                            });

                        }
                    });

                }
            });

        }
    });

	
	$("#zoomSlider").slider({
		min: 1,
		max: 3.1,
		step: 0.1,
		value: 1,
		slide: function(event, ui){
			var zoomValue = $(this).slider('value');
			$("#editor0").css("zoom", zoomValue);
			$("#editor1").css("zoom", zoomValue);
			$("#editor2").css("zoom", zoomValue);
			$("#editor3").css("zoom", zoomValue);
			$("#editor4").css("zoom", zoomValue);
			$("#editor5").css("zoom", zoomValue);
			$("#editor6").css("zoom", zoomValue);
			$("#editor7").css("zoom", zoomValue);
		},
		change: function(event, ui){
			var zoomValue = $(this).slider('value');
			$("#editor0").css("zoom", zoomValue);
			$("#editor1").css("zoom", zoomValue);
			$("#editor2").css("zoom", zoomValue);
			$("#editor3").css("zoom", zoomValue);
			$("#editor4").css("zoom", zoomValue);
			$("#editor5").css("zoom", zoomValue);
			$("#editor6").css("zoom", zoomValue);
			$("#editor7").css("zoom", zoomValue);
		}
	});
	
	$('#textSearch').bind('keyup change', function(ev) {
        // pull in the new value
        var searchTerm = $(this).val();

        // remove any old highlighted terms
        $('#annotation-flipbook').removeHighlight();

		// disable highlighting if empty
        if ( searchTerm ) {
            // highlight the new term
            $('#annotation-flipbook').highlight( searchTerm );
        }
    });

    $('.thumbnail-image').on('click', function(){
    	var index = $(this).data("canvasId");
    	annotationFlipbook.booklet("gotopage", index);
    	console.log(index);
	});


	$("#btnSaveAndDownLoad").on("click", function(){

		var resHtml = "";

		resHtml += CKEDITOR.instances.editor0.getData();
		resHtml += CKEDITOR.instances.editor1.getData();
		resHtml += CKEDITOR.instances.editor2.getData();
		resHtml += CKEDITOR.instances.editor3.getData();
		resHtml += CKEDITOR.instances.editor4.getData();
		resHtml += CKEDITOR.instances.editor5.getData();
		resHtml += CKEDITOR.instances.editor6.getData();
		resHtml += CKEDITOR.instances.editor7.getData();

		//send html to the server
		$.ajax({
            method: 'POST',
            url: 'ajax/ajax_save_html_parts.php',
            data: {data: resHtml}
        }).success(function(docxUrl){
            /*alert("The document was successfully added");
            //redirect on user documents page
            window.location = "/?annotation_plugin=user_documents";*/
            window.location = docxUrl;
        });

	});

});