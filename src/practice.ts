const message: string = 'hello world'; // message를 string 형태로 지정
console.log(message);


const bool: boolean = true; // bool을 불리언 값으로 지정


const numberArr: number[] = [1, 2, 3]; // numberArr는 배열이고, 그 안의 값은 숫자형
numberArr.push(4);
console.log(numberArr);


const messages: string[] = ["h", "e", "l", "l", "o"]; // messages는 배열이고, 그 안의 값은 문자열


let mightBeUndefined: string | undefined = undefined; // mightBeUndefined는 문자열이거나 undefined값
let nullableNumber: number | null = null; // nullableNumber는 숫자형이거나 null값


let color: 'red' | 'orange' | 'yellow' = 'red'; // color는 red이거나 orange이거나 yellow
color = 'yellow';


function sum(x: number, y: number): number /* <= 함수의 반환 값 Type */ {
    return x + y;
}
console.log(sum(1, 2));


function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0)
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);


/* ------------- Class interface ------------- */
interface Shape {
    getArea(): number;
}

class Circle implements Shape { // 함수의 interface는 implements
    // radius: number;

    constructor(public radius: number) { // public은 전역에서 사용 가능
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    // width: number;
    // height: number;

    constructor(private width: number, private height: number) { // private은 함수 내에서만 사용 가능
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5)

console.log(circle.radius);
// 에러 -> console.log(rectangle.width); // width, height는 private 값이기 때문

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})


/* ------------- 일반 객체 interface ------------- */
interface Person {
    name: string;
    age?: number; // 물음표는 필수 요구사항이 아님을 의미
    readonly birthyear: number; // 읽기 전용(수정 불가)
};

interface Developer extends Person {
    skills: string[]; // Person 항목 + @
};

const person: Person = {
    name: "김사람",
    age: 20,
    birthyear: 1998
};

const expert: Developer = {
    name: '김개발',
    birthyear: 1999,
    skills: ['js', 'ts', 'react', 'next']
};

const people: Person[] = [person, expert];


/* ------------- Type Alias ------------- */
// 특정 타입에 별칭을 붙이는 용도
type Person1 = {
    name: string;
    age?: number;
};

type Developer1 = Person1 & { // &은 Intersection(교차)으로서 두개 이상의 타입들을 합쳐줌
    skills: string[];
}

const person1: Person1 = {
    name: '김사람'
};

const expert1: Developer1 = {
    name: "김개발",
    skills: ['ts', 'js']
}

type People = Person1[];
const people1: People = [person1, expert1];

type Color1 = 'red' | 'orange' | 'yellow';
const color1: Color1 = 'red';
const colors: Color1[] = ['red', 'orange'];


/* ------------- Generic ------------- */
function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    };
}

const merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);

function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap(10);
console.log(wrapped);


/* ------------- interface에서의 Generic ------------- */
interface Items<T> {
    list: T[];
};

const items: Items<string> = {
    list: ['a', 'b', 'c']
};
console.log(items);

const itemnum: Items<number> = {
    list: [1, 2, 3]
}
console.log(itemnum);


/* ------------- type에서의 Generic ------------- */
type Items1<T> = {
    list: T[]
};

const items1: Items1<string> = {
    list: ['a', 'b', 'c']
};
console.log(items1);


/* ------------- Class에서의 Generic ------------- */
class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<string>();
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
    readonly name: string = "car"; // name앞에 private 또는 #옵션을 추가하면 Bmw의 super.name에서 에러 발생
    color: string;
    static wheels = 4; // static = 정적 멤버 변수, class이름.~~로 접근 가능
    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    start() {
        console.log("start");
        console.log(this.name);
        console.log(Car.wheels)
    }
}

class Bmw extends Car {
    constructor(color: string, name: string) {
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
abstract class Car1 {
    color: string;
    static wheels = 4; // static = 정적 멤버 변수, class이름.~~로 접근 가능
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
    /* ------------- 추상 메소드 ------------- */
    // 메소드의 이름만 선언해주고 상속 받는 쪽에서 기능 구현 (상속 받는 쪽에서 다양하게 구현 가능)
    abstract doSomething(): void;
}

// 추상 클래스에서는 new를 이용한 객체 생성 불가
// const car1 = new Car1("red");

class Bmw1 extends Car1 {
    constructor(color: string) {
        super(color);
    }
    doSomething() {
        alert(3);
    }
}

const zz4 = new Bmw1("black");

/* ------------- utility type ------------- */
interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
};

// keyof
type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
const uk: UserKey = "id";

// partial<T> property를 모두 optional하게 변경
let admin: Partial<User> = {
    id: 1,
    name: "bob"
};

/* 아래 코드와 동일
interface User {
    id?: number;
    name?: string;
    age?: number;
    gender?: "m" | "f"
};
*/

// Required<T> property를 모두 필수로 변경
interface User2 {
    id: number;
    name: string;
    age?: number;
}

let admin1: Required<User2> = {
    id: 1,
    name: "bob",
    age: 30
}

// Readonly<T>
interface User3 {
    id: number;
    name: string;
    age?: number;
}

let admin2: Readonly<User3> = {
    id: 1,
    name: "bob"
}
// admin2.id = 4 -> 읽기 전용이기 때문에 에러 발생

// Record<K,T> K=key, T=type
// interface Score {
//     "1": "A" | "B" | "C" | "D";
//     "2": "A" | "B" | "C" | "D";
//     "3": "A" | "B" | "C" | "D";
//     "4": "A" | "B" | "C" | "D";
// }

// const score: Score = {
type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";

// const score: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
const score: Record<Grade, Score> = {
    1: "A",
    2: "B",
    3: "C",
    4: "D"
}

interface User4 {
    id: number;
    name: string;
    age: number
}

function isValid(user: User4) {
    const result: Record<keyof User4, boolean> = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0
    }
    return result;
}
console.log(isValid({ id: 1, name: "name", age: 1 }));

// Pick<T,K> 특정 property만 사용
interface User5 {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W"
}

const admin3: Pick<User5, "id" | "name"> = {
    id: 0,
    name: "bob"
}

// Omit<T,K> 특정 property를 생략 가능
interface User6 {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W"
}

const admin4: Omit<User6, "age" | "gender"> = {
    id: 0,
    name: "bob"
}

// Exclude<T1,T2> T1의 타입들 중 T2의 타입과 겹치는 타입을 제외시킴
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string> // boolean만 남음

// NonNullable<Type> null, undefined를 제외한 타입을 생성
type T3 = string | null | undefined | void
type T4 = NonNullable<T3>