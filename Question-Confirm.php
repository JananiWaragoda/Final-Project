<html>
    <head><title>Contributions Confirmation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contributions Confirmation</title>
        <link rel="stylesheet" href="contributions.css">
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Supermercado+One&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    </head>
    <body>
        <section class="header">

            <button onclick="topFunction()" id="myBtn" title="Go to top">⌃</button>

            <nav>
                <a href="index.html"><img src="Images/Academy root LOGO white .png"></a>

                <div class="nav-links" id="navLinks">
                    <i class="fa fa-times" aria-hidden="true" onclick="hidemenu()"></i>

                    <ul>
                        
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="about.html">ABOUT US</a></li>
                        <li><a href="">QUIZ LAB ▾</a>
                            <ul>
                                <li><a href="C.html">Programming in C</a></li>
                                <li><a href="JAVA.html">Java</a></li>
                                <li><a href="HTML.html">HTML</a></li>
                                <li><a href="DBMS.html">DBMS</a></li>
                            </ul>
                        </li>
                        <li><a href="library.html">LIBRARIES</a></li>
                        <li><a href="contact.html">CONTACT US</a></li>
                        
                    </ul>
                </div>
                    <i class="fa fa-bars" aria-hidden="true" onclick="showmenu()"></i>
            </nav>
            <h1 >Contribute Us!</h1>
            <p>Let's share knowledge..</p>
        </section>
        <script>
            var navLinks = document.getElementById("navLinks")
        
            function showmenu(){
                navLinks.style.right = "0";
            }
        
            function hidemenu(){
                navLinks.style.right = "-200";
            }
    
            mybutton = document.getElementById("myBtn");
            window.onscroll = function() {scrollFunction()};
    
            function scrollFunction() 
            {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
            } else {
            mybutton.style.display = "none";
            }
            }
    
    
            function topFunction() {
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0; 
            }
        </script>

    <section>
        
    <?php

        $dbhost = 'localhost';
        $dbuser = 'root';
        $dbpass = '';
        $db 	= 'question_db';

        $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $db);

        if(! $conn ){
            //die('Could not connect: ' . mysqli_error());
            $errors[] = 'Could not connect to database ';

        }

        if (isset($_POST["ques_confirm"])) {
            $name       = $_POST["name"];
            $email      = $_POST["e-mail"];
            $question   = $_POST["question"];
            $option1    = $_POST["option 1"];
            $option2    = $_POST["option 2"];
            $option3    = $_POST["option 3"];
            $option4    = $_POST["option 4"];
            $corropt    = $_POST["correct option"];

            $insert_sql = sprintf("INSERT INTO contribution (name, e-mail, question, option 1, option 2, option 3, option 4, correct option) VALUES ('%s','%s', '%s', '%s', '%s', '%s', '%s', '%s')", $name, $email, $question, $option1, $option2, $option3, $option4, $corropt);

            $result = mysqli_query($conn, $insert_sql);

            if ($result == true) {
                $success[] = "Successfully Updated. Thank You..!";
            } else {
                $errors[] = "There was an error saving data. Please Try Again";
                $errors[] = "Error - ". $conn->error;
            }
        }
    ?>
    <div class="row">
        <div class="col-12">
            <?php
                if( !empty($errors) ){
                    echo "<div class=\"alert alert-danger\" role=\"alert\"><ul>";
                    foreach($errors as $error){
                        echo "<li>".$error."</li>";
                    }
                    echo "</ul></div>";
                }

                if( !empty($success) ){
                    echo "<div class=\"alert alert-success\" role=\"alert\"><ul>";
                    foreach($success as $value){
                        echo "<li>".$value."</li>";
                    }
                    echo "</ul></div>";
                }
            ?>
        </div>
    </div>
</section>

</body>

 <section class="footer">
            <h1>Academy Root</h1>
            <p>A Great Place To Learn</p>
        <div class="icons">
           <i class="fab fa-facebook" aria-hidden="true"></i>
           <i class="fab fa-twitter" aria-hidden="true"></i>
           <i class="fab fa-instagram" aria-hidden="true"></i>
           <i class="fab fa-linkedin" aria-hidden="true"></i>
        </div>
        <p>AcademyRoot<i class="far fa-copyright" aria-hidden="true"></i><br>All Rights Reserved </p>

 </section>
 </html>