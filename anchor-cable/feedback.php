<?php

require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$textarea = $_POST['feedback'];

// $mail->SMTPDebug = 3;

$mail->isSMTP();
$mail->Host = 'mx1.hostinger.ru';
$mail->SMTPAuth = true;
$mail->Username = 'subscribe@anchorcable.ru';
$mail->Password = 'Memphis1989';
$mail->SMTPSecure = '';
$mail->Port = 587;

$mail->setFrom('subscribe@anchorcable.ru');
$mail->addAddress('anchorcable@yandex.ru', 'Anchor Store');
$mail->isHTML(true);

$mail->Subject = $subject;
$mail->Body = "<h2>Hello world!</h2>";
$mail->AltBody = "This is the body in plain text for non-HTML mail clients" . "name: " .$name;

if(!$mail->send()) {
    echo 'Error: ' . $mail->ErrorInfo;
} else {
    echo 'Success';
}
?>
