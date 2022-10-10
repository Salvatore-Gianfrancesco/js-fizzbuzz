const rowEl = document.querySelector(".row");

let newEl = "";

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        // console.log("FizzBuzz");
        newEl = "FizzBuzz";
    } else if (i % 3 == 0) {
        // console.log("Fizz");
        newEl = "Fizz";
    } else if (i % 5 == 0) {
        // console.log("Buzz");
        newEl = "Buzz";
    } else {
        // console.log(i);
        newEl = i;
    }

    if (newEl == "FizzBuzz") {
        newEl = `
        <div class="col-2">
            <div class="card bg-primary py-4">${newEl}</div>
        </div>
    `;
    } else if (newEl == "Fizz") {
        newEl = `
        <div class="col-2">
            <div class="card bg-success py-4">${newEl}</div>
        </div>
    `;
    } else if (newEl == "Buzz") {
        newEl = `
        <div class="col-2">
            <div class="card bg-warning text-dark py-4">${newEl}</div>
        </div>
    `;
    } else {
        newEl = `
        <div class="col-2">
            <div class="card text-dark py-4">${newEl}</div>
        </div>
    `;
    }

    rowEl.innerHTML += newEl;
}