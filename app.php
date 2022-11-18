<?php

header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');


include 'inc/db.php';
$sql = "SELECT `Field`, `Image`, `Year`, `Name`, `Description` FROM tblMovies ORDER BY `Year` DESC";
$result = mysql_query($sql);
while($row = mysql_fetch_assoc($result)) {
    
  $fileName = $row['Image'];
  $withoutExt = preg_replace("/\\.[^.\\s]{3,4}$/", "", $fileName);
  $dir = "img/film/".$withoutExt;
  if(is_dir($dir)) //if the is images of his works
  {
    // $images = glob("$dir/*.{jpeg,jpg,JPG,png,gif}", GLOB_BRACE);
    $files = glob("$dir/*.{jpeg,jpg,JPG,png,gif}", GLOB_BRACE);
    $row= (object) [
      "Name" => $row['Name'],
      "Field" => $row['Field'],
      "Image" => $row['Image'],
      "Year" => $row['Year'],
      "Description" => $row['Description'],
      "Photos" => $files
    ];
  }
  else {
    $row= (object) [
      "Name" => $row['Name'],
      "Field" => $row['Field'],
      "Image" => $row['Image'],
      "Year" => $row['Year'],
      "Description" => $row['Description']
    ];
  }


  

  $rows[] = $row;
}
echo json_encode($rows);
?>