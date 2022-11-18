const numEl = document.getElementById("num")
const sapnEl = document.getElementById("numOutput")
const btnEl = document.getElementById("btn")

function calculate(num) {

    var half = Math.floor(num / 2), // Ensures a whole number <= num.
        str = '1', // 1 will be a factor of every solution.
        i, j;

    // Determine our increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? str += ',' + i : false;
    }

    str += ',' + num; // Always include the original number.
    console.log(str);
    return str
}

function calculate1(num) {
    let str = '1'
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            str += ',' + i
        }
    }
    console.log(str);
    return str
}



btnEl.addEventListener("click", () => {
    str1 = calculate(numEl.value);
    update()
    calculate1(numEl.value)
})

function update() {
    sapnEl.innerText = str1
}

function Am(params) {
    let vaar = 'x'
    let a = 2
    let b = 3
    let c = 9
    console.log();
}