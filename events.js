// Your code here
window.addEventListener("DOMContentLoaded", event =>{
    const redInput = document.getElementById("red-input");
    const listAdder = document.getElementById("add-item");
    const theShader = document.getElementById("color-select");
    const theColorSection = document.getElementById("section-3");
    const listenerRemover = document.getElementById("remove-listeners");
    redInput.addEventListener("input", event =>{
        if(event.target.value == "red"){
            redInput.style.backgroundColor = "red";
        }
        else{
            redInput.style.backgroundColor = "transparent"
        }
    })
    listAdder.addEventListener("click", event =>{
        const newItem = document.createElement("li");
        const theItem = document.getElementById("list-add");
        const thelist = document.getElementById("theList");
        newItem.innerText = `${theItem.value}`;
        thelist.appendChild(newItem);
    })
    theShader.addEventListener("input", event =>{
        theColorSection.style.backgroundColor = event.target.value;
    })
})