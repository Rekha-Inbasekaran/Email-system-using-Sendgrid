<?php
// using SendGrid's PHP Library
// https://github.com/sendgrid/sendgrid-php
//require 'vendor/autoload.php'; // If you're using Composer (recommended)
// Comment out the above line if not using Composer
 require("./sendgrid-php/sendgrid-php.php");
// If not using Composer, uncomment the above line
$email = new \SendGrid\Mail\Mail();

$email->setFrom($_POST["f_emailid"]);
$email->setSubject($_POST["subj"]);
$email->addTo($_POST["t_emailid"]);
$email->addContent("text/html", $_POST["message"]);


$sendgrid = new \SendGrid('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');
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
    echo "<script type='text/javascript'>alert('Mail has been sent!')</script>";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}