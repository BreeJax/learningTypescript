export {}

let isBegginner: boolean = true;
let total:number = 0;
let name: string = 'Bree'
let sentense: string = `My name is ${name} and I ${isBegginner == true ? "am": "am not"} developer`

console.log(sentense);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[]= [1,2,3]
let list2: Array<number> = [1,2,3]

let personOne: [string, number] = ["Bree", 26];
enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Bree'

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}
if (hasName(myVariable)){
    console.log(myVariable.name); 
} else {
    console.log("no name");
}

// (myVariable as string).toUpperCase()
//idk why they say this would work, because that is a lie

let a;
a= 10
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2?: number): number{
    if(num2){
        return num1 + num2;
    } else{
        return num1;
    }
}

console.log(add(5,99));
console.log(add(9));