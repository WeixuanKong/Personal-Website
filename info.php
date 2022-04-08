<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Personal Info</title>
    <!--libs from CDN-->
    <script src="http://code.jquery.com/jquery-3.1.0.min.js"></script>
    <!--Custom js -->
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="js/background.js"></script>
    <!--external lib from CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!--Custom css-->
    <link href="css/portal.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/info.css" rel="stylesheet">

</head>
<body>

<h1>
    Weixuan Kong
</h1>
<div class="container">
    <div class="portal">
        <!--Back to the home page -->
        <a href="index.html">Home Page</a>
    </div>

    <div class="info" id="Info">
        <span>Name:</span>Weixuan Kong
        <br>
        <span>Gender:</span>Male
    </div>
    <?php include "./php/gallery.php" ?>
    <div class="hobby" id="Interests"></div>
</div>
</body>
</html>