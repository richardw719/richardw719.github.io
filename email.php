<?php
	if ($_POST['action'] == 'call_this') {
		$dom = new DOMDocument();
		$dom->loadHTML("index.html");

		$name= $dom->getElementById('contactName');
		$email= $dom->getElementById('contactEmail');
		$subject= $dom->getElementById('contactSubject');
		$txt= $dom->getElementById('contactMessage');


		$to = "wangrichard719@gmail.com";
		$headers = "From: " . $email
		echo $name;
		echo $email;
		mail($to,$subject,$txt,$headers);
	}


?>
