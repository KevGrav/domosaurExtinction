const messWithMeWord = document.querySelector('span.mess-with-me');
messWithMeWord.style.fontSize = "40px"

const messWithMeParagraph = document.querySelector('p.mess-with-me');
messWithMeParagraph.style.backgroundColor = 'green'

const hideMePic = document.getElementById('hide-me');
hideMePic.style.display = "none";

const Img1 = document.getElementById('triceratops');
Img1.style.width = '324px';
//1
messWithMeWord.addEventListener('click', function(){
    messWithMeWord.style.color = 'orange';
})
//2
Img1.addEventListener('click', function(){
    Img1.style.borderImageColor = 'red';
}
)

//3
const ImgFeathered = document.getElementById('feathers');
ImgFeathered.addEventListener('click', function() {
  ImgFeathered.style.opacity = 0.5;
});

//4
const changeBackgroundColor = document.getElementById('toggle');
const dinoRow = document.querySelector('div')
changeBackgroundColor.addEventListener('click', function(){
    dinoRow.style.backgroundColor = 'aqua';
})

//5
const imgExpand = document.getElementById('biggify');
imgExpandchange.addEventListener('hover', function(){
    imgExpand.style.width = '200px';
})

