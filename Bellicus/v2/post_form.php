<?php
$pieces = explode(" ", $_POST["key"]);
array_shift($pieces);
$validateur = $pieces;
$validateur_basique = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
array_multisort($validateur);
print_r($pieces);
print_r($validateur_basique);
file_put_contents("post_form.log", $pieces);
if ($validateur_basique == $validateur) {
	echo "OUI";
	echo $pieces[0];

} else {
	echo "PETIT TRICHEUR";
}


