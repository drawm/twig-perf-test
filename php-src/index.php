<?php

require_once './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader(dirname(__DIR__) . '/templates');
$twig = new \Twig\Environment($loader);

echo $twig->render('index.twig', ['name' => 'pepe']);
