<?php
include 'db.php';

$commentNewCount = $_POST['commentNewCount'];

$sql = "select * from comments ";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        echo "<p>";
        echo $row['author'];
        echo " ";
        echo $row['message'];
        echo "</p>";

    }


} else {
    echo "No Comments!";

}

?>