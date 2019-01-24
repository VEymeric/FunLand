<?php
$pieces = explode(" ", $_POST["key"]);
array_shift($pieces);
$validateur = $pieces;
$validateur_basique = ["3G","2G","1G","3S","2S","1S","3C","3C","2C","2C","1C","1C","Av","Av","Ta","Ta","Ch","Ou","Ou","At","Bo","Bo","Dr"];

array_multisort($validateur);
array_multisort($validateur_basique);
print_r($pieces);
print_r($validateur_basique);
file_put_contents("post_form.log", $pieces);
if ($validateur_basique == $validateur) {
	echo "OUI";
	echo $pieces[0];

} else {
	echo "PETIT TRICHEUR";
}


