<?php

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'POST') {
  exit();
}

$project_name = 'PizzaTime';
$admin_email = '';
$form_subject = 'Заявка с сайта PizzaTime';
$message = '';

$color_counter = 1;

foreach ($_POST as $key => $value) {
  if ($value === '') {
    continue;
  }
  $color = $color_counter % 2 === 0 ? '#fff' : '#f8f8f8';
  $message .= "
    <tr style='background-color: $color;'>
      <td style='padding: 10px; border: 1px solid #e9e9e9;'>$key</td>
      <td style='padding: 10px; border: 1px solid #e9e9e9;'>$value</td>
    </tr>";

  $color_counter++;
}

function adopt($text) {
  return '=?utf-8?B?'.base64_encode($text).'?=';
}

$message = "<table style='width: 100%;'>$message</table>";

$headers  = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From:" . adopt($form_subject) . " <$admin_email>\r\n";

$success_send = mail($admin_email, adopt($form_subject), $message, $headers);

if ($success_send) {
  echo 'success';
} else {
  echo 'error';
}