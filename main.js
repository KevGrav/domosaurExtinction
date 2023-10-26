const messWithMeWord = document.querySelector('span.mess-with-me');
messWithMeWord.style.fontSize = "40px"

const messWithMeParagraph = document.querySelector('p.mess-with-me');
messWithMeParagraph.style.backgroundColor = 'green'

const hideMePic = document.getElementById('hide-me');
hideMePic.style.display = "none";

const Img1 = document.getElementById('triceratops');
Img1.style.width = '324px';

//1
const turnOrange = document.querySelector('span.mess-with-me');
turnOrange.addEventListener('click', function(){
    turnOrange.style.color = 'orange';
})
//2
Img1.addEventListener('click', function(){
    Img1.style.border = '5px solid red';
}
)

//3
const ImgFeathered = document.getElementById('feathers');
ImgFeathered.addEventListener('click', function() {
  ImgFeathered.style.opacity = 0.5;
});

//4
const changeBackgroundColor = document.getElementById('toggle');
const row = document.getElementById('row')
changeBackgroundColor.addEventListener('click', function(){
    row.style.backgroundColor = 'aqua';
})

//5
const dino = document.getElementById("biggify");
const growUp=function(){
  this.style.width="200px";};
// const shrink=function(){
//   this.style.width="";};
dino.addEventListener("mouseover",growUp);
// dino.addEventListener("mouseout",shrink);

//stretch 1
// const toggle = document.querySelector('#toggle');
// const row = document.querySelector('#row');
// toggle.addEventListener('click', toggleRowBackground)
// const toggleRowBackground = function() {
//     if (row.style.backgroundColor === 'black') {
//       row.style.backgroundColor = 'white';
//     } else {
//       row.style.backgroundColor = 'black';
//     }
// }

//stretch 2
// const dinow = document.querySelector('#biggify');
// dinow.addEventListener('mouseover', toggleSize);
// dinow.addEventListener('mouseout', toggleSize);
// const toggleSize = function() {
//     if (dinow.style.width === '200px') {
//       dinow.style.width = '162px';
//     } else {
//       dinow.style.width = '200px';
//     }
//   }