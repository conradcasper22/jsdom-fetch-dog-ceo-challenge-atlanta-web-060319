console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", pageSetup)


function pageSetup(){
  getDogImages()
  getDogBreeds()
  let dropDown = document.querySelector("#breed-dropdown")
  dropDown.addEventListener("change", handleBreedDropDown)
}


function handleBreedDropDown(e){
  let breedList = document.querySelectorAll('.breed')

  breedList.forEach(el => {
    el.style.display = "block";
  })


  let letter = e.target.value

  selectBreeds(letter)

}

function selectBreeds(l){
  let letter = l
  
  let breedList = document.querySelectorAll('.breed')
    breedList.forEach(el => {
      let firstL = el.innerText.charAt(0);

      if (firstL !== letter) {

        el.style.display = "none";
      } 
    })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // fetch(breedUrl)
  // .catch(error => console.log("Error:", error))
  // .then(res => res.json())
  // .then(data => filterDogBreeds(data))

  // function filterDogBreeds(dataObj){

  // }


}

function getDogImages(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(data => images(data.message))

}
 


function images(data){
  data.forEach(createImage)
}
  

function createImage(url){
  const imageContainer = document.querySelector("#dog-image-container")
  let div = document.createElement('div')

  let img = document.createElement('img')
  img.src = url

  let br = document.createElement("br")


  div.appendChild(img)
  div.appendChild(br)

  imageContainer.appendChild(div)

}


function getDogBreeds(){
  fetch(breedUrl)
  .then(res => res.json())
  .then(data => createBreeds(data.message) )
}

function createBreeds(data){
  const ul = document.querySelector("#dog-breeds")

  for (const key in data){
    
    if (Array.isArray(data[key]) && data[key].length !== 0 ){
      let mainBreedLi = document.createElement("li")
      mainBreedLi.innerHTML = `<h3 class = "breed">${key}</h3>`
      mainBreedLi.className = "breed"
      mainBreedLi.addEventListener("click", changeBreedColor)
      for (let i = 0; i < data[key].length; i++){
       let subBreedLi =  document.createElement('li')
       subBreedLi.innerText = `${data[key][i]} ${key}`
       subBreedLi.className = "breed"
       subBreedLi.addEventListener("click", changeBreedColor)
       mainBreedLi.appendChild(subBreedLi)
       ul.appendChild(mainBreedLi)
      }
    } else {
      let mainBreedLi = document.createElement("li")
      mainBreedLi.innerText = key
      mainBreedLi.className = "breed"
      mainBreedLi.addEventListener("click", changeBreedColor)
      ul.appendChild(mainBreedLi)
    }
  }
}


function changeBreedColor(e){
  let colorArray = ["red", "yellow", "green", "turquoise", "magenta", "salmon", "blue", "orange", "black",]
  e.target.style.color = colorArray[Math.floor(Math.random() * colorArray.length)];
}







