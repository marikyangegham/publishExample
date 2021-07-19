import { MyClass } from "./create.js";

class SecondOne {
  sayHi() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./create.js", { scope: "./" })
        .then((reg) => {
          console.log("reged");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(11);
  }
}

const obj = new SecondOne();
const obj2 = new MyClass();
obj2.flan();

obj.sayHi();
