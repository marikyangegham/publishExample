export let myobj = {
  a: 5,
  b: "test",
};

export function aaa() {
  console.log("aaa: called");
}

export class MyClass {
  test = "test";
  flan() {
    let test = 'Gegham';
    console.log(`flan called ${test}`);
  }
  doSmth() {
    console.log("doSmth called");
  }
}
