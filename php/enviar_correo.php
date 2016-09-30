<?php 
	require_once('PHPMailer-master/class.phpmailer.php');
	
	$mail             = new PHPMailer();

	$body             = "<h2>Has recibido un correo de Bakery.</h2><br /><p><b>Nombre: </b>".$_POST["nombre"]."</p><p><b>Email: </b>".$_POST["email"]."</p><br /><p><b>Mensaje:</b><p>".$_POST["mensaje"]."</p></p>";
	
	$mail->SetFrom('info@bakery.com', 'Bakery');
	
	$address = "japenagoss@gmail.com";
	$mail->AddAddress($address, "Jhony Penagos");
	
	$mail->Subject    = "Has recibido un email de Bakery.";
	
	$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; 
	
	$mail->MsgHTML($body);

	if(!$mail->Send()) {
	  echo json_encode(array("respuesta"=>"fail","mensaje"=>"<h2>".$mail->ErrorInfo."</h2>"));
	} else {
	  echo json_encode(array("respuesta"=>"success","mensaje"=>"<h2>Mensaje enviado</h2>"));
	}
?>