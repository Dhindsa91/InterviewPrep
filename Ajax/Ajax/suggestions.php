<?php

    $existingNames = array("Daniel","Dennis","Danny", "Jane");

    if(isset($_POST['suggestion'])){

            $name = $_POST['suggestion'];

           array_push($existingNames, $name)


    }



?>