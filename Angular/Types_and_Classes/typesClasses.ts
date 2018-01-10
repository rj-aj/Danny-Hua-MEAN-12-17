var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
let myObj: { [key: string]: (string | number) } = { name:'Bill'};
var anythingVariable: any = "Hey";
anythingVariable = 25; 
var arrayOne: Array<boolean> = [true, false, true, true]; 
var arrayTwo = [1, 'abc', true, 2];
 myObj = { x: 5, y: 10 };
// object constructor
class MyNode {
    private _priv: number;

   constructor(public val: number) {
       this.val = 0;
       this.val = val; 
   }
   doSomething(): void {
       this._priv = 10;
   }
}
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
	throw new Error('Error message');
}
