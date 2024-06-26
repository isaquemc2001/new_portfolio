// document.addEventListener("DOMContentLoaded", function(){
//     var projects = document.getElementById("contact-me");
//     projects.scrollIntoView();
// })

function scrollNavBar(sectionName){
        const section = document.getElementById(sectionName);

        if(section && sectionName != 'projects'){
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        }else{
            section.scrollIntoView();
        }
        sectionName = false;
}