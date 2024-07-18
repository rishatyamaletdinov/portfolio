<?php

//Script Foreach - чтобы работать с таблицей
$c = true;

// For POST method only!

// Это название вашего проекта или сайта. Оно используется для указания отправителя письма (поле "From") в заголовках email. Таким образом, получатель видит, что письмо пришло от вашего сайта или проекта.
$project_name = "http://pivnenko-anton.pro";

// Это email администратора, на который будет отправлено письмо с данными формы
$admin_email = "pivnenkowebdev@gmail.com";

// Это email, который будет указан как отправитель письма (поле "From") в заголовках email. Получатель письма увидит этот адрес как адрес отправителя. Этот email должен быть существующим и настроенным для отправки писем с вашего сервера.
$email_from = "pivnenkowebdev@pivnenko-anton.pro";

// Это переменная, в которую будет сохраняться содержимое сообщения, формируемое из данных формы.
$message = "";

// цикл, который проходит по всем полям формы, отправленным методом POST. Если условия выполняются, то в переменную $message добавляется строка таблицы с ключом (именем поля) и значением поля
foreach ($_POST as $key => $value) {
	if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" && $key != "email_from") {
		$message .= "
		" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
	</tr>
	";
	}
}

// оборачиваем сообщение в таблицу
$message = "<table style='width: 100%;'>$message</table>";



// кодируем текст
function adopt($text)
{
	return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

$form_subject = 'Заявка с сайта Portfolio';

// готовим заголовки
$headers = "MIME-Version: 1.0" . PHP_EOL .
	"Content-Type: text/html; charset=utf-8" . PHP_EOL .
	'From: ' . adopt($project_name) . ' <' . $email_from . '>' . PHP_EOL .
	'Reply-To: ' . $admin_email . '' . PHP_EOL;

// отправка
mail($admin_email, $form_subject, $message, $headers, $email_from);


// успешный ответ
echo "<div class='success'>
		<p>Sent!<br>
		We will contact you soon!
		</p>
	  </div> ";
