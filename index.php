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

<link href="libs/jquery.booklet.1.4.4/booklet/jquery.booklet.latest.css" type="text/css" rel="stylesheet" media="screen, projection, tv" />

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

<h2>3. Save and download .docx</h2>

<button id="btnSaveAndDownLoad">Save and download .docx</button>

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
<script src="libs/jquery.booklet.1.4.4/booklet/jquery.easing.1.3.js"></script>
<script src="libs/jquery.booklet.1.4.4/booklet/jquery.booklet.latest.min.js"></script>



<script src="libs/ckeditor/ckeditor.js"></script>
<script src="libs/turnjs4/lib/turn.js"></script>
<script src="main.js"></script>

</body>

</html>
