<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//uploading document
if(!empty($_FILES)){

	$target_dir = "realdocument/";
	//$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
	$target_file = $target_dir . "realdocument.docx";
	
	if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }

}

 ?>

<html>
<head>

<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link href="libs/jquery.booklet.1.4.4/booklet/jquery.booklet.latest.css" type="text/css" rel="stylesheet" media="screen, projection, tv" />
<link href="libs/slick-1.5.9/slick/slick.css" type="text/css" rel="stylesheet" />
<link href="libs/slick-1.5.9/slick/slick-theme.css" type="text/css" rel="stylesheet" />

<style type="text/css">
	.highlight {
		background-color: #fff34d;
	    -moz-border-radius: 5px; /* FF1+ */
	    -webkit-border-radius: 5px; /* Saf3-4 */
	    border-radius: 5px; /* Opera 10.5, IE 9, Saf5, Chrome */
	    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* FF3.5+ */
	    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* Saf3.0+, Chrome */
	    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* Opera 10.5+, IE 9.0 */
    	padding:1px 4px;
    	margin:0 -4px;
	}
</style>

</head>

<body>

<!-- <h2>1. Upload document</h2>

<form action="index.php" enctype="multipart/form-data" method="POST">
	<input type="file" name="fileToUpload" id="fileToUpload">
	<input type="submit" value="Upload document" name="submit">
</form> -->
<h2>1. Check the <a href="realdocument/sample.docx">sample document</a></h2>

<h2>2. Edit</h2>

<div id="topButtonsToolbar"></div>
<div id="annotation-flipbook"></div>

<!-- zoom and text search -->
<div>
	<div style="width: 10%; float: left; margin-left: 10%;">
		<div id="zoomSlider"></div>
	</div>
	<div style="float: right; margin-right: 10%;">
		<input type="text" id="textSearch" placeholder="Search" />
	</div>
</div>

<div style="clear: both;"></div>

<!-- thumbnail slider -->
<div id="annotationSlickSlider" class="annotation-slick-slider" style="margin-top: 4%;">
	<img class="thumbnail-image" style="padding: 0% 15px; height: 50%;" src="images/canvas/canvas0.png" data-canvas-id="0">
	<img class="thumbnail-image" style="padding: 0% 15px; height: 50%;" src="images/canvas/canvas1.png" data-canvas-id="1">
	<img class="thumbnail-image" style="padding: 0% 15px; height: 50%;" src="images/canvas/canvas2.png" data-canvas-id="2">
	<img class="thumbnail-image" style="padding: 0% 15px; height: 50%;" src="images/canvas/canvas3.png" data-canvas-id="3">
	<img class="thumbnail-image" style="padding: 0% 15px; height: 50%;" src="images/canvas/canvas4.png" data-canvas-id="4">
	<img class="thumbnail-image" style="padding: 0% 15px; height: 50%;" src="images/canvas/canvas5.png" data-canvas-id="5">
	<img class="thumbnail-image" style="padding: 0% 15px; height: 50%;" src="images/canvas/canvas6.png" data-canvas-id="6">
	<img class="thumbnail-image" style="padding: 0% 15px; height: 50%;" src="images/canvas/canvas7.png" data-canvas-id="7">
</div>


<h2>3. Save and download .docx</h2>

<button id="btnSaveAndDownLoad">Save and download .docx</button>

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
<script src="libs/jquery.booklet.1.4.4/booklet/jquery.easing.1.3.js"></script>
<script src="libs/jquery.booklet.1.4.4/booklet/jquery.booklet.latest.min.js"></script>



<script src="libs/ckeditor/ckeditor.js"></script>
<script src="libs/html2canvas-0.5.0-beta3/dist/html2canvas.js"></script>
<script src="libs/turnjs4/lib/turn.js"></script>
<script src="libs/slick-1.5.9/slick/slick.min.js"></script>
<script src="libs/search/highlight.js"></script>
<script src="main.js"></script>

</body>

</html>
