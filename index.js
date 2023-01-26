class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        let sum = 0
        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i]
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid(){
        let largestNum = this.array[0]
        let sum = 0
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] > largestNum) {
                largestNum = this.array[i]
            }
            sum += this.array[i]
        }
        return sum - largestNum > largestNum
    }
}

class Square extends Polygon {
    get isValid() {
        return this.array[0] === this.array[1] && this.array[2] === this.array[3] && this.array[0] === this.array[2]
    }

    get area() {
        return this.array[0]**2
    }
}
