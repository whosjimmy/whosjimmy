<?PHP
$file = file_get_contents("php://input");
if($file)
{
    $data = json_decode(file_get_contents("php://input"), TRUE);
    $email = htmlspecialchars($data['email']);
    $subject = htmlspecialchars($data['subject']);
    $emailMessage = $data['emailMessage'];
    $recaptcha = $data['recaptcha'];
    
    $response=json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LfjVYYUAAAAAHA-TMEynQUvIPC59Q-Scs1pW3co&response=".$recaptcha."&remoteip=".$_SERVER['REMOTE_ADDR']), true);
    if($response['success'] == true)
    {
        //variables
        //$to = 'mnemonic320@gmail.com'; //Defaulted to avoid people sending to others
        $to = 'sixhunderd_claws@yahoo.com'; //Defaulted to avoid people sending to others
        //    $to = 'inquiries@whosjimmy.com'; //Defaulted to avoid people sending to others
        // $to = 'thespacefreck@gmail.com'; //Defaulted to avoid people sending to others
        //    $email = htmlspecialchars($_POST['email']);
        //    $subject = htmlspecialchars($_POST['subject']);
        //    $message = htmlspecialchars($_POST['message']);
        //    $recaptcha = htmlspecialchars($_POST['recaptcha']);
        
        $emailMessage .=  "\r\n\r\n" .'Reply email is '. $email;
//        $emailMessage .=  "\r\n\r\n" . $recaptcha .' recaptcha';
        $emailMessage .=  "\r\n\r\n" .'Email sent from the website.';
        $headers = 'From: noreply' . "\r\n" .
        'Reply-To: '. $email . "\r\n";
        if(mail($to, $subject, $emailMessage, $headers))
        {
            var_dump(http_response_code(202));
        }
        else
        {
            var_dump(http_response_code(409));
        }
    }
    else
    {
        var_dump(http_response_code(409));
    }
}
else {
    var_dump(http_response_code(409));
}
?>
