// document.addEventListener("DOMContentLoaded", function(){
//     var projects = document.getElementById("");
//     projects.scrollIntoView();
// })

function scrollNavBar(sectionName){
        const section = document.getElementById(sectionName);
        if(section){
            section.scrollIntoView();
        }
        sectionName = false;
}