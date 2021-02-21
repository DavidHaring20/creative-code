class EmptyBox extends Rectangle {
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(context) {
        // THIS METHOD DRAWS RECTANGLE    

        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
    }
}