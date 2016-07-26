//This script is to handle the lack of :hover functionality in some browsers in some tablets.

$(document).ready(function () {
    "use strict";
   
    var numberOfProjects = $(".project").length;
    
    function removeDVClass(projectNumber) {
        var project;
        
        var i;
        
        for (i = 1; i <= numberOfProjects; i += 1) {
            if (i !== projectNumber) {
                project = ".project" + i;
                
                if ($(project).hasClass("details-visible")) {
                    $(project).removeClass("details-visible");
                }
            }
        }
    }
    
    
    $(".project1").on("click", function () {
        removeDVClass(1);
        $(".project1").toggleClass("details-visible");
        
    });
    
    $(".project2").on("click", function () {
        removeDVClass(2);
        $(".project2").toggleClass("details-visible");
        
    });
    
    $(".project3").on("click", function () {
        removeDVClass(3);
        $(".project3").toggleClass("details-visible");
        
    });
    
    $(".project4").on("click", function () {
        removeDVClass(4);
        $(".project4").toggleClass("details-visible");
        
    });
    
    $(".project5").on("click", function () {
        removeDVClass(5);
        $(".project5").toggleClass("details-visible");
        
    });
    
    $(".project6").on("click", function () {
        removeDVClass(6);
        $(".project6").toggleClass("details-visible");
        
    });    
    
});