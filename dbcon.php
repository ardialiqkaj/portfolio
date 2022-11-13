<?php 
require __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;

$factory = (new Factory)
    ->withServiceAccount('portfolio-b4520-firebase-adminsdk-3m9hm-d4d45bfedf.json')
    ->withDatabaseUri('https://portfolio-b4520-default-rtdb.europe-west1.firebasedatabase.app/');

$database = $factory->createDatabase();

?>