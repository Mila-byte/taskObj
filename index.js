// // task 3

// class Figure {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//         this.#showColor();
//     }

//     showParameters() {
//         console.log(this.width, this.height, this.color);
//     }

//     showSomeParam() {
//         console.log(this.height)
//     }
 
//     #showColor() {
//         console.log(this.color);
//     }

//     static showWidth(value) {
//         console.log("width:", value)
//     }

// }

// const figure = new Figure(100, 100, "red")

// figure.showParameters();
// Figure.showWidth(290)

// class Container extends Figure {
//     constructor(width, height, color, background) {
//         super(width, height, color)
//         this.background = background;
//     }

//     showParameters() {
//         super.showParameters();
//         console.log("There are my parameters")
//     }

    
//     showSomeParam() {
//         console.log(this.background)
//     }
// }

// const box = new Container(160, 160, "blue", "orange")

// box.showParameters()
// box.showSomeParam()

// task 4

// class Box {
//     #height;
//     #width;
//     #color;

//     constructor(width, height, color) {
//         this.#width = width;
//         this.#height = height;
//         this.#color = color;
//         this.drowingFigure(width, height, color);
//     }

//     drowingFigure(width, height, color) {
        
//         let box = document.querySelector('.box');
//         box.addEventListener('click', function () {
//             let box2 = document.querySelector('.box2')
//             box2.style.cssText = `width: ${width}px; height: ${height}px; background-color: ${color}; margin: 60px auto`
//         })
//     }


// }

// class Circle extends Box {
    
//     constructor(width, height, color,borderRadius) {
//         super(width, height, color);
//         this.borderRadius = borderRadius;
//         this.drowingFigure(width, height, color,borderRadius)
//     }
    
//     drowingFigure(width, height, color, borderRadius) {
//         super.drowingFigure(width, height, color)
//         let box = document.querySelector('.box');
//         box.addEventListener('click', () => {
//             let box2 = document.querySelector('.box2')
//             box2.style.cssText += `border-radius: ${borderRadius};`
//         })
//     }

// }

// const circle = new Circle(400, 400, "red", "50%")
// const box = new Box(50, 50, "blue")

// task 6

let el = document.body;
function create () {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    for(let i = 0; i < arr.length; i++) {
        el = el.appendChild(document.createElement('div'));
        el.id = arr[i];
        el.innerText = arr[i];
        el.style = `
            margin-top: 70px;
            width: 70px;
            height: 70px;
            background: black;
            border-radius: 100%;    
        `
        el.onclick = function(event) {
            console.log(this.id, event.target);
            if(event.target.id === '5') {
                event.stopPropagation()
            }

        }
    }


}

create()






