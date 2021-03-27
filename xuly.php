<?php
	$name = isset($_GET['username']) ? $_GET['username'] : '';
	$email = isset($_GET['email']) ? $_GET['email'] : '';
	$messenger = isset($_GET['messenger']) ? $_GET['messenger'] : '';
	$quantity = isset($_GET['quantity']) ? $_GET['quantity'] : '';

	if($name || $messenger) {
		echo "THONG TIN BAN VUA NHAP LA:<br>";
		echo "Username: ". $name. "<br>";
		echo "email: ". $email. "<br>";
		echo "messenger: ". $messenger. "<br>";
	}else {
		echo "THONG TIN BAN VUA NHAP LA:<br>";
		echo "Quantity: ". $quantity. "<br>";
		echo "email: ". $email. "<br>";
	}
	
?>