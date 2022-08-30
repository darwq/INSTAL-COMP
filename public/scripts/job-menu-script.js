let sections = document.querySelectorAll(".section");
let details = document.querySelector(".details");

const jobSections = {"descrierea jobului" : setFirstSection,"experienta" : setSecondSection,"calificari" : setThirdSection};

function setFirstSection(){
    for(let i = 0; i < details.children.length; i++){
        details.children[i].classList.remove("selected");
    }

    document.querySelector(".details .first-section").classList.add("selected");
}

function setSecondSection(){
    for(let i = 0; i < details.children.length; i++){
        details.children[i].classList.remove("selected");
    }

    document.querySelector(".details .second-section").classList.add("selected");
}


function setThirdSection(){

    for(let i = 0; i < details.children.length; i++){
        details.children[i].classList.remove("selected");
    }

    document.querySelector(".details .third-section").classList.add("selected");
}


sections.forEach(section => {
    section.addEventListener("click",(e) => {

        let newSections = Array.from(sections).filter(section => section !== e.target);

        newSections.forEach(section => {
            section.classList.remove("selected");
        })
        
        section.classList.add("selected");

        let text = section.children[0].textContent.toLowerCase();

        // RUNNING THE FUNCTION
        jobSections[text]();
    })
})