<?php

class ProfilController {

    public ?string $url;
    
    public function displayProfil() {
        return $this->url = "../Views/profil.php";
}