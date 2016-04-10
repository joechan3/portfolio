$(document).ready(function(){
            console.log('Hello World!');
            
    //See if you can refactor using CSS alone
    //Make height of project sections responsive and equal to width of project section        
    //Set height for initial viewport width
    var widthOfProject = $('section[class*="col"]').outerWidth();
//    console.log(widthOfProject);
    $('section[class*="col"]').css("height", widthOfProject);
    //Make height responsive to changing viewport width
    $(window).resize(function(){
            var widthOfProject = $('section[class*="col"]').outerWidth();
//            console.log(widthOfProject);
            $('section[class*="col"]').css("height", widthOfProject);
    }); 
    
            
}); 

