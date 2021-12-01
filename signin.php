<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Property Management</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="index.css">
        <link rel="shortcut icon" href="images/favicon.png">
    </head>

    <body>
        
        <!--- <img src="images/home-page.jpg" alt="Landscape of City Skyline" id="header-image"> --->
        <div class="wrapper">
            <div class="header">
                <h1>Property Management</h1>
            </div>

            <div class="nav">
                <table width = 100%>
                    <th><a href="index.html">Home</a></th>
                    <th><a href = "about.html">About</a></th>
                    <th><a href = "report.html">Report</a></th>
                </table>
            </div>

            <div class="four" id="login">
                <form action="login.php" method="post">
                    <h2>LOGIN</h2>
                    <?php if (isset($_GET['error'])) { ?>
                        <p class="error"><?php echo $_GET['error']; ?></p>
                    <?php } ?>
                    <label>User Name</label>
                    <input type="text" name="uname" placeholder="User Name"><br>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password"><br> 
                    <button type="submit">Login</button>
                 </form>
            </div>

            <div class="six" id="signup">
                <form action="signup.php" method="post">
                    <h2>SIGN UP</h2>
                    <?php if (isset($_GET['error'])) { ?>
                        <p class="error"><?php echo $_GET['error']; ?></p>
                    <?php } ?>
                    <label>User Name</label>
                    <input type="text" name="uname" placeholder="User Name"><br>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password"><br> 
                    <button type="submit">Login</button>
                 </form>


            </div>
          </div>
          

        
        


    </body>
</html>
