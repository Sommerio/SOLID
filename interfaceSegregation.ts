interface IShape {
    draw();
}

interface ICircle {
    drawCircle();
}

interface ISquare {
    drawSquare();
}

interface IRectangle {
    drawRectangle();
}

interface ITriangle {
    drawTriangle();
}

class Circle implements ICircle {
    drawCircle() {
    }
}

class Square implements ISquare{
    drawSquare() {
    }

}

class Rectangle implements IRectangle {
    drawRectangle() {
    }
}

class Triangle implements ITriangle {
    drawTriangle() {
    }
}

class Custom implements IShape {
    draw() {
    }
}

