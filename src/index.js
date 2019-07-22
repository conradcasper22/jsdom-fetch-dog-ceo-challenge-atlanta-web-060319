console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", pageSetup)


function pageSetup(){
  getDogImages()
  getDogBreeds()
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
      mainBreedLi.innerHTML = `<h3>${key}</h3>`

      for (let i = 0; i < data[key].length; i++){
       let subBreedLi =  document.createElement('li')
       subBreedLi.innerText = `${data[key][i]} ${key}`
       mainBreedLi.appendChild(subBreedLi)
       ul.appendChild(mainBreedLi)
      }
    } else {
      let mainBreedLi = document.createElement("li")
      mainBreedLi.innerText = key
      ul.appendChild(mainBreedLi)
    }
  }
}







