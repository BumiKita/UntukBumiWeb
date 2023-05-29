const buttonSampah = document.querySelectorAll(".button-sampah");

buttonSampah.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let wrapperType = item.querySelector(".wrapper-content");
        if(item.classList.contains("open")){
            wrapperType.style.display = "block";
            item.querySelector("i").classList.replace("fa-chevron-up", "fa-chevron-down");
        }
        else{
            wrapperType.style.display = "none";
            item.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-up");
        }
        removeOpen(index);
    })
    

}

) 


function removeOpen(index1){
    accordionContexnt.forEach((item2, index2) =>{
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".wrapper-content");

            des.style.display = "none";

            item.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-up");
        }
    })
}