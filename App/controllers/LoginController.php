<?php

class LoginController {

    public ?string $url;
    
    public function displayLogin() {
        return $this->url = "../Views/login.php";
    }
}