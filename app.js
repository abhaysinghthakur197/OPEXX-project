
// const art = () => {   
    
    
    
    const start = () => {

        const livebtn = document.querySelector("b1")
        const winbtn = document.querySelector(".b2")
        const livetender = document.querySelector(".searchtender")
        const searchwinner = document.querySelector("searchwinner")



        winbtn.addEventListener('click', () => {
            livetender.classList.add("fadeOut");
            searchwinner.classList.add("fadeIn");
        });

    }
// }