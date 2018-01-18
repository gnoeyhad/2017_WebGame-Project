class Shape {
    constructor(name) {
        this._name = '';
        this.name = name;

        this.x = 0;
        this.y = 0;
        this.color = 'black';
    }

    render(context) {
        console.error("Shape.render는 없음!");
    }

    get area() {
        console.error("정보 없음");
        return null;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value.toUpperCase();
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    render(context) {
        context.fillStyle = this.color;
        context.fillRect(
            this.x, this.y, this.width, this.height);
    }

    get area() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    render(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }

    get area() {
        return this.radius * this.radius * Math.PI;
    }
}

let container = document.getElementById('gameContainer');
let canvas = document.createElement('canvas');
canvas.width = 700;
canvas.height = 700;
container.appendChild(canvas);

let context = canvas.getContext('2d');
let shapes = [];

let s = new Square(100);
let c = new Circle(50);
s.x = 10;
s.y = 40;
s.color = 'lightcoral';
shapes.push(s);

c.x = 70;
c.y = 150;
c.color = 'lavender';
shapes.push(c);

window.requestAnimationFrame(run);

function run() {
    for (let shape of shapes) {
        shape.render(context);
    }

    window.requestAnimationFrame(run);
}