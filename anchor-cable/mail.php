<?php

require 'phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$email = $_POST['subscriber'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();
$mail->Host = 'mx1.hostinger.ru';
$mail->SMTPAuth = true;
$mail->Username = 'subscribe@anchorcable.ru';
$mail->Password = 'Memphis1989';
$mail->SMTPSecure = 'tsl';
$mail->Port = 587;

$mail->setFrom('subscribe@anchorcable.ru', 'Anchor Store');
$mail->addAddress('anchorcable@yandex.ru');
$mail->isHTML(true);

$mail->Subject = 'Новый подписчик с сайта';
$mail->Body    = 'Email нового пользователя: ' .$email;

if(!$mail->send()) {
    echo 'Error: ' . $mail->ErrorInfo;
} else {
    echo 'Success';
}

?>
