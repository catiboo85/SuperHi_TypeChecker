const sentenceTag = document.querySelector(`input[type="text"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutputTag = document.querySelector("span.typesize-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutputTag = document.querySelector("span.fontweight-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutputTag = document.querySelector("span.lineheight-output")

const colorTags = document.querySelectorAll("div.colors div")

const italicTag = document.querySelector(`input[type="checkbox"]`)

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value



//when I type in my sentenceTag, update outputTag accordingly
// if not text put back original text 

sentenceTag.addEventListener("keyup", function(){
  if(this.value) {
    outputTag.value = this.value
  }else{
    outputTag.value = originalText
  }
})

//type in text box it updates in two different directions 
outputTag.addEventListener("keyup", function(){
    sentenceTag.value = this.value
})

//when I change my type slider, update the text next to it AND 
// change the outputTag's font 
typesizeTag.addEventListener("input", function(){
  outputTag.style.fontSize = this.value + "px"
  typesizeOutputTag.innerHTML = this.value + "px"
})

lineheightTag.addEventListener("input", function(){
  outputTag.style.lineHeight = this.value 
  lineheightOutputTag.innerHTML = this.value 

})


//when I change my fontweight slide update the text next to it
fontweightTag.addEventListener("input", function(){
  outputTag.style.fontWeight = this.value
  fontweightOutputTag.innerHTML = this.value
})

//when I change my italic checkbox, update the type style to normal or italic if it is checked or not 

italicTag.addEventListener("change", function (){
  if (this.checked) {
    outputTag.style.fontStyle = "italic"
  }else{
    outputTag.style.fontStyle = "normal" 
  }
})

//when i change my select for update change the font family 

typefaceTag.addEventListener("input", function (){
  outputTag.style.fontFamily = this.value
  
})

// go through all of my color tags 
//then when I click one of them change the background color AND 
//the text color and make this tag be selected

colorTags.forEach(tag => {
  
  tag.addEventListener("click", function () {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color
    
    //reset the class 
    colorTags.forEach(tag =>{
      tag.classList.remove("selected")
    })
    
    //only for this input tag
    
    this.classList.add("selected")
  })
})
