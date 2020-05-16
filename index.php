<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1 style="text-align: center;">Vue</h1>
<p style='text-align: center;'>
<?php
$all = scandir('.');
$all = array_reverse ($all);
$i = 0;
foreach ($all as $item) {
    if(is_dir($item) && (strpos($item, '.') === false)) {
        if((($i++ % 3) == 0) && ($i != 1)) {
            echo "</p><p style='text-align: center;'>";
        }
        echo "<a style='margin: 0 20px;' href='" . $item . "/index.html'>" . ucfirst($item) . "</a>";
    }
}
?>
</p>
</body>
</html>