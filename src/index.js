console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', pageSetup)

function pageSetup(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
    .then(response => response.json())
    .then(json => addImgToDom(json))
}

function addImgToDom(json){
    json.forEach(function(url){
      const img =  document.createElement('img')
      img.src = url

    })
}