const radar = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../public/images/logo_black.svg">
    <link rel="stylesheet" href="./radar.css">
    <title>Jamr</title>
</head>
<body>
    
<div class="radar_container">
    <svg height=1000 width=1000>
    <path d="M 75, 210 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" stroke="black"
      stroke-width="2" fill="none" />
    </svg>
    
    <div class="ball"></div>
    
    <svg height=1000 width=1000>
    <path d="M 50, 200 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" stroke="black"
      stroke-width="2" fill="none" />
    </svg>
    
    <div class="ball2"></div>
      
      <svg height=1000 width=1000>
    <path d="M 25, 190 a 100,100 0 1,1 200,0 a 100,100 1 1,1 -200,0" stroke="black"
      stroke-width="2" fill="none" />
    </svg>
    
    <div class="ball3"></div>
    <!-- <img src="../public/images/musicnote.png" alt=""> -->
    <svg version="1.1" id="music" class="bounce" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="37.5px" height="36.25px" viewBox="0 0 37.5 36.25" enable-background="new 0 0 37.5 36.25" xml:space="preserve">
    <path id="Path_34" fill="#010101" stroke="#010101" stroke-miterlimit="10" d="M12.169,7.847v18.333
	c-0.982-0.701-2.162-1.076-3.369-1.068c-2.923,0-5.3,2.091-5.3,4.66c0,2.568,2.379,4.658,5.3,4.658s5.301-2.09,5.301-4.658V13.855
	l15.739-3.9V21.81c-0.982-0.703-2.164-1.078-3.373-1.068c-2.923,0-5.3,2.09-5.3,4.658c0,2.569,2.377,4.66,5.3,4.66
	c2.924,0,5.301-2.091,5.301-4.66V3L12.169,7.847z"/>
</svg>
    </div>
</body>
</html>`