console.log('*********');
const boxContainer = document.querySelector('body');
const boxes = document.querySelectorAll('.box');
const submit = document.querySelector("button")
/**********************************
 * Add a form for the user to input an x and a y coordinate
 * and when the user clicks an "Add Box", it will add a new
 * "box" element to the page at that x/y coordinate INSIDE
 * THE BOX CONTAINER.
 * 
 * The HTML file is linked to both the CSS file and 
 * this JS file.
 * 
 * Have fun!
 ***********************************/

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

submit.addEventListener('click', function(e){
    e.preventDefault()
    const el = document.createElement('div');
    // let xCords = document.getElementById('xCords').value;
    // let yCords = document.getElementById('yCords').value;
    // const colorList = document.getElementById('colorList');
    // let color = colorList.value;
    

    let maxWidth = 1800;
    let maxHeight = 1000;


    // if (xCords === '' && yCords === ''){
        xCords = getRandomInt(maxWidth);
        yCords = getRandomInt(maxHeight);
        color = getRandomColor();
   
    // } 


    if(xCords < maxWidth && yCords < maxHeight  && xCords > 0 && yCords > 0){
        // console.log(xCords)
        // console.log(yCords)
        //take user input from form input X and set 
        //create a box
        boxContainer.appendChild(el);
        el.classList.add('box');
        el.style.bottom = `${yCords}px`;
        el.style.left = `${xCords}px`;
        el.style.backgroundColor = `${color}`;
        el.addEventListener('click',(e)=> {
            boxContainer.removeChild(e.target);
        });
        el.addEventListener("mouseover",(e)=>{
            setTimeout(function(){
                el.style.bottom = `${getRandomInt(100)}%`;
                el.style.left = `${getRandomInt(100)}%`;
            },200);
            
        });
        } else {
            alert(`Out of bounds! please slect an x smaller than 
            550 and y smaller than 350`)
    }
});
    

//single event listener
boxContainer.addEventListener('mouseover',(e) => {

})

boxContainer.addEventListener('click',(e) => {

})

// .box('height')
// .box('width')
