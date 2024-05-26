document.addEventListener("DOMContentLoaded", function(){

    const orderedList = document.getElementById("orderedList");
    const form = document.querySelector("form");
    const inputfield = document.getElementById("inputfield");

    form.addEventListener("submit", function(e){
    if(e.target.inputfield.value === ""){
        alert("Your input is empty")
    }else{
        const list = document.createElement("li")
        list.textContent = inputfield.value
        list.classList.add("list-group-item", "category-tag")
        orderedList.appendChild(list)

    }
    inputfield.value=""
    storage()
    
    })
    
    function storage(){
        localStorage.setItem("data", orderedList.innerHTML)
    }


    function find(){
        orderedList.innerHTML = localStorage.getItem("data")
    }

    find();


    orderedList.addEventListener("click", function(e){
    e.target.remove();

})

})