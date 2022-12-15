<?php

class HomeController {

    public ?string $url;
    
    public function displayHome() {
       return $this->url = "../..public/index.php";
}