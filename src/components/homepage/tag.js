import React from 'react';

export default function Tag(){
  return(
    <html lang="en">
<head>
  <title>Tag</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<style>
    #search-bar {
    margin-top: 19px;
}

.page-title {
    padding-right: 50px;
    margin-top: 17px;
}

.menu-item {
    margin-top: 25px;
}

#test {
    background-color: #f1f1f1;
}

.active {
    margin-top: 25px;
}

/* Set height of the grid so .sidenav can be 100% (adjust if needed) */
.row.content {height: 1500px}

/* Set gray background color and 100% height */
.sidenav {
  background-color: #f1f1f1;
  width: 100%;
}

/* Set black background color, white text and some padding */
footer {
  background-color: #555;
  color: white;
  padding: 15px;
}

/* On small screens, set height to 'auto' for sidenav and grid */
@media screen and (max-width: 767px) {
  .sidenav {
    height: auto;
    padding: 15px;
  }
  .row.content {height: auto;} 
}
.pull-right {
    float: right;
}
</style>
</head>
<body>
<div class="naviagion">
        <div class="col-md-10 col-md-offset-1" id="test">
            <ul class="nav nav-pills">
                <li class="page-title"><a href="index.html"><h4>Ratenect</h4></a></li>
                <li class="active"><a href="index.html">Education</a></li>
                <li class="menu-item"><a href="#">Health</a></li>
                <li class="menu-item"><a href="#">Online</a></li>
                <li class="menu-item"><a href="#">Fundraiser</a></li>
                <!-- Search Bar -->
                <li id="search-bar" class="pull-right">
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                    <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
                    </form>
                </li>


            </ul><br>
        </div>
    </div>
  

</body>
</html>

  )  
}
