
<?php

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
    $mail = new PHPMailer(); // defaults to using php "mail()"
    $mail->AddReplyTo($_POST['fullName']); //Form var must be 'fullName'
    $mail->SetFrom($_POST['email']); //form var must be email
    $mail->AddAddress("y.alex.hwang@gmail.com");
    // $mail->AddAddress("email_addr_you_want_it_to_go_to");
    $mail->Subject = $_POST['subject'];
    $mail->MsgHTML($_POST['body']); //var must be the textarea from your form
    if(!$mail->Send()) {
          echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
          echo "Message sent!";
    }      
    header('location: /#contact');

?>