"use strict";
const message = 'hello world'; // message를 string 형태로 지정
console.log(message);
const bool = true; // bool을 불리언 값으로 지정
const numberArr = [1, 2, 3]; // numberArr는 배열이고, 그 안의 값은 숫자형
numberArr.push(4);
console.log(numberArr);
const messages = ["h", "e", "l", "l", "o"]; // messages는 배열이고, 그 안의 값은 문자열
let mightBeUndefined = undefined; // mightBeUndefined는 문자열이거나 undefined값
let nullableNumber = null; // nullableNumber는 숫자형이거나 null값
let color = 'red'; // color는 red이거나 orange이거나 yellow
color = 'yellow';
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
class Circle {
    // radius: number;
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    // width: number;
    // height: number;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
// 에러 -> console.log(rectangle.width); // width, height는 private 값이기 때문
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
;
;
const person = {
    name: "김사람",
    age: 20,
    birthyear: 1998
};
const expert = {
    name: '김개발',
    birthyear: 1999,
    skills: ['js', 'ts', 'react', 'next']
};
const people = [person, expert];
const person1 = {
    name: '김사람'
};
const expert1 = {
    name: "김개발",
    skills: ['ts', 'js']
};
const people1 = [person1, expert1];
const color1 = 'red';
const colors = ['red', 'orange'];
/* ------------- Generic ------------- */
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
console.log(wrapped);
;
const items = {
    list: ['a', 'b', 'c']
};
console.log(items);
const itemnum = {
    list: [1, 2, 3]
};
console.log(itemnum);
const items1 = {
    list: ['a', 'b', 'c']
};
console.log(items1);
/* ------------- Class에서의 Generic ------------- */
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue("h");
queue.enqueue("e");
queue.enqueue("l");
queue.enqueue("l");
queue.enqueue("o");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
/* ------------- Class ------------- */
/*
------------- 접근 제한자 -------------
public - 모든 범위에서 접근 가능
protected - 자식 클래스에서 접근 가능, 클래스 인스턴스에서 접근 불가
private - 해당 클래스 내에서만 접근 가능
*/
class Car {
    constructor(color, name) {
        this.name = "car"; // name앞에 private 또는 #옵션을 추가하면 Bmw의 super.name에서 에러 발생
        this.color = color;
        this.name = name;
    }
    start() {
        console.log("start");
        console.log(this.name);
        console.log(Car.wheels);
    }
}
Car.wheels = 4; // static = 정적 멤버 변수, class이름.~~로 접근 가능
class Bmw extends Car {
    constructor(color, name) {
        super(color, name);
    }
    showName() {
        console.log(super.name);
    }
}
const z4 = new Bmw("black", "zzzz4");
console.log(Car.wheels);
// 클래스 인스턴스
// protect, private에서 에러 발생
// console.log(z4.name);
/* ------------- 추상 클래스 ------------- */
class Car1 {
    constructor(color) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}
Car1.wheels = 4; // static = 정적 멤버 변수, class이름.~~로 접근 가능
// 추상 클래스에서는 new를 이용한 객체 생성 불가
// const car1 = new Car1("red");
class Bmw1 extends Car1 {
    constructor(color) {
        super(color);
    }
    doSomething() {
        alert(3);
    }
}
const zz4 = new Bmw1("black");
;
const uk = "id";
// partial<T> property를 모두 optional하게 변경
let admin = {
    id: 1,
    name: "bob"
};
let admin1 = {
    id: 1,
    name: "bob",
    age: 30
};
let admin2 = {
    id: 1,
    name: "bob"
};
// const score: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
const score = {
    1: "A",
    2: "B",
    3: "C",
    4: "D"
};
function isValid(user) {
    const result = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0
    };
    return result;
}
console.log(isValid({ id: 1, name: "name", age: 1 }));
const admin3 = {
    id: 0,
    name: "bob"
};
const admin4 = {
    id: 0,
    name: "bob"
};
