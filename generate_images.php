<?php
//Set the Content Type
//header('Content-type: image/jpeg');

$imgNames = ['approved', 'rejected'];

foreach($imgNames as $imgName){
    // Create Image From Existing File
    $jpg_image = imagecreatefromjpeg("images/$imgName.jpg");

    // Allocate A Color For The Text
    $black = imagecolorallocate($jpg_image, 0, 0, 0);

    // Set Path to Font File
    $font_path = 'opensans/OpenSans-Regular.ttf';

    // Set Text to Be Printed On Image
    $text = date("m.d.Y H:i");

    // Print Text On Image
    imagettftext($jpg_image, 14, 0, 120, 150, $black, $font_path, $text);

    // Send Image to Browser
    imagejpeg($jpg_image, "images/{$imgName}_latest.jpg");

    // Clear Memory
    imagedestroy($jpg_image);
}

?>