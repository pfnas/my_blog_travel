// let changeLang = document.getElementById("en");
// console.log(changeLang)
// const logo = document.querySelector("#logo");
// console.log(logo)

// changeLang.addEventListener("click", french)

// function french(){
    
//     console.log("hello world")
// }



// Exercice sur changement de langue
const linkEl = document.querySelectorAll("a")
const langEl = document.querySelector(".langWrap")
const titleEl = document.querySelector(".title")
const descrEl = document.querySelector(".description")

linkEl.forEach(el=>{
    el.addEventListener('click',() =>{
        langEl.querySelector(".active").classList.remove(".active");
        el.classList.add("active");
        const attr = el.getAttribute('language');
        titleEl.innerHTML= data[attr].title;
        descrEl.innerHTML =data[attr].description;

    })
})

var data = {
    "english":{
        "title":"Hello World",
        "description":"lorem20Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae et adipiscintore. Earum impedit error commodi vel minima, nobis ipsum!!!!!!!!"
    },
    "kazakh":{
        "title":"Бонжур Монде",
        "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae et adipisci ойлап тапты. Құлақ кедергісі қате commodi vel minima, nobis ipsum."
    },
    "japanese": {
        "title":"こんにちは世界",
        "description":"Lorem ipsum dolor sit amet consectetur, adipiscing elit. Molestiae et adipisci inventory.耳の障害エラー commodi または最小値、nobis ipsum。"
    }


}







