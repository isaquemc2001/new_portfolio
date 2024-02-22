// document.addEventListener("DOMContentLoaded", function(){
//     var projects = document.getElementById("contact-me");
//     projects.scrollIntoView();
// })

function scrollNavBar(sectionName){
        const section = document.getElementById(sectionName);
        if(section){
            section.scrollIntoView();
        }
        sectionName = false;
}