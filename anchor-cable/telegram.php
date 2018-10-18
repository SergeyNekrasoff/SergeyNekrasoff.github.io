<?php

$name= $_POST['customer'];
$phone = $_POST['tel'];
$items = $_POST['items'];
$price = $_POST['price'];
$city = $_POST['city'];
$type = $_POST['type'];
$promo = $_POST['promo'];

$token = "489773373:AAHMm-_pQy0gJSi4Ls5PT2ID18zE606NpCU";
$chat_id = "-306456395";
$arr = array(
  'Name: ' => $name,
  'Tel: ' => $phone,
  'City: ' => $city,
  'Items: ' => $items,
  'Price: ' => $price,
  'Type: ' => $type,
  'Promocode: ' => $promo
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo 'Success';
} else {
  echo 'Error';
}
?>
