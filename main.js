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
									//activate shared space plugin
									CKEDITOR.config.extraPlugins = 'sharedspace';
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
											{name:"basicstyles","groups":["basicstyles", "colors"]},
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

                                    //activate flipbook
                                    /*annotationFlipbook.turn({
                                        width: 1000,
                                        height: 1440
                                        //autoCenter: true
                                    });*/

									//activate flipbook plugin
									annotationFlipbook.booklet({
										width: "80%",
										height: "1440",
										pageNumbers: false,
										pagePadding: 0,
										manual: false,
										arrows: true,
										speed: 500
										//shadows: false
										//tabs: true
									});


                                }
                            });

                        }
                    });

                }
            });

        }
    });

	$("#btnSaveAndDownLoad").on("click", function(){

		var resHtml = "";

		resHtml += CKEDITOR.instances.editor0.getData();
		resHtml += CKEDITOR.instances.editor1.getData();
		resHtml += CKEDITOR.instances.editor2.getData();
		resHtml += CKEDITOR.instances.editor3.getData();

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