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

    // console.log(newEl);
    newEl = `
        <div class="col-2">
            <div class="card py-4">${newEl}</div>
        </div>
    `;
    // console.log(newEl);
    rowEl.innerHTML += newEl;
}