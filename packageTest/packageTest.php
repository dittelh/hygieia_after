<?php
/**
 * Koden er taget fra et tidligere projekt som Ditte har været med til https://github.com/Thom9521/todo-app/blob/master/server/Lists/SharedLists/SendMail.php
 * 26-05-2022
 *  */ 

 // Kontakt form værdier
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];

// Testens værdier
$gender = $_POST['gender'];
$weight = $_POST['weight'];
$age = $_POST['age'];
$height = $_POST['height'];
$points = $_POST['points'];
$activ = $_POST['activ'];
$wishWeight = $_POST['wishWeight'];
$motivationPoints = $_POST['motivationPoints'];
$allergy = $_POST['allergy'];
$diseases = $_POST['diseases'];


if($points == "0"){
    $points = "Slet ikke";
} else if($points == "1"){
    $points = "Lidt";
} else if($points == "2"){
    $points = "Moderat";
} else if($points == "3"){
    $points = "Meget";
} else if($points == "4"){
    $points = "Ekstremt";
}

if($motivationPoints == "0"){
    $motivationPoints = "Slet ikke";
} else if($motivationPoints == "1"){
    $motivationPoints = "Lidt";
} else if($motivationPoints == "2"){
    $motivationPoints = "Moderat";
} else if($motivationPoints == "3"){
    $motivationPoints = "Meget";
} else if($motivationPoints == "4"){
    $motivationPoints = "Ekstremt";
}


// Lige nu er mailen ikke sat op med hygieias mail, derfor står Dittes mail der i stedet. 
// Det er noget der skal skiftes ud
// $toEmail = "neeliya@hygieia.dk";
$toEmail = "dittehansen143@gmail.com";

    // Subject for mail
    $subject = "Testform fra Hygieia.dk";

    // Message in mail
    $message = "En kunde har udfyldt testen på Hygieia.dk og vil gerne have et forløb.<br><br>
                Email: $email<br>
                Telefon nr.: $number<br><br><br>
                
                Testens værdier:<br><br>
                Køn: $gender<br>
                Vægt: $weight<br>
                Alder: $age<br>
                Højde: $height<br>
                Aktivitetsniveau: $points<br>
                Aktiv med: $activ<br>
                Ønskede vægt: $wishWeight<br>
                Motivationsniveau: $motivationPoints<br>
                Allergier: $allergy<br>
                Sygdomme: $diseases<br>
                ";

    // Prepare headers for mail
    // $headers =  "From: Hygieia <info@hygieia.dk>\r\n";
    $headers =  "From: Hygieia <ditte@devditte.dk>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    // $headers .= "Return-Path: Hygieia <info@hygieia.dk>\r\n";
    $headers .= "Return-Path: Hygieia <ditte@devditte.dk>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Send mail
    if (mail($toEmail, $subject, $message, $headers) ) {
     // Redirect back with success popup
        header('Location: packageTest.html?success=1');
    } else {
        // Redirect back with success popup
        header('Location: packageTest.html?success=0');
    }