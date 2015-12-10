<?php

if(!empty($_POST['data'])){

    //$filename = uniqid() . time() . ".html";
    $filename = "annotated.html";

    //upload document
    //$data = stripslashes($_POST['data']);
    $data = $_POST['data'];

    //save html document
    file_put_contents( __DIR__ . "/$filename", $data);

    //convert to the .docx format
    $output = shell_exec("unoconv -f docx $filename");
    echo $output;

    echo "ajax/annotated.docx";

    //TODO: check for errors

}

 ?>