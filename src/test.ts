const constructor = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E'
}

type Result = keyof typeof constructor;

let alphabet: Result;
alphabet = "A";
alphabet = "B";

console.log(alphabet);