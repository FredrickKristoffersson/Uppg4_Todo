// Deklarationer som kopplar HMTL kod
const input = document.querySelector("#todo");
const buttonAdd = document.querySelector("#button");
const completedTodo = document.querySelector("#completed");
const list = document.querySelector("ul");
const if0text = document.querySelector("#info");
const infoCompleted = document.querySelector("small");

let manyCompleted = 0; // variabel för hur många färdiga todos vi har

const basicArray = []; // Våra todos sparas i denna array

buttonAdd.addEventListener("click", function(){ // Sökare på knapp och funktion för att lägga till todo
    const todoText = input.value; // Text/todo vi skriver in, blir en const
    const addNewLi = document.createElement("li"); // Skapa variabel för li element för vår ul lista.
    
    if(todoText.length == 0){ // kontrollerar om vi skrivit in text, meddelar om fältet är tomt
        if0text.innerText = "Du glömde skriva in text, vänligen försök igen";
        if0text.setAttribute("class", "zeroText");
        return;
    }else{
        if0text.innerText = "Skriv in din todo-uppgift nedanför";
        if0text.setAttribute("class", "correctText");
    }


    list.appendChild(addNewLi); // Nu gör vi att vårt li element kommer under ul elementet i HTML
    addNewLi.innerText = (todoText); // denna slänger in vår text i li elementet

    
addNewLi.addEventListener("click", function(){ // Skapa lyssnare på li-element om uppgift är avklarad, hämtar ändrat utseende från CSS
    if(addNewLi.getAttribute("class")=="completedTask"){
    addNewLi.setAttribute("class", "");
    manyCompleted--;
    }
    else{
        addNewLi.setAttribute("class", "completedTask");
        manyCompleted++;
    }
    infoCompleted.innerText = `Du har för tillfället ${manyCompleted} avklarade`;
})
    basicArray.push(todoText); // lägger in todo(text) i vår array
    input.value = "";
})
 
