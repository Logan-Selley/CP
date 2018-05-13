<?php

    header("Content-Type: application/json");

    $content = file_get_contents("data/Anime.txt");
    echo(json_encode($content));
?>