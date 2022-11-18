const inputEl = document.querySelector(".inputfeild")
const primeSolEl = document.querySelector(".prime-sol1")

inputEl.addEventListener("keyup", () => {
    factors = calculate(inputEl.value)
    if(inputEl.value == ''){
        primeSolEl.innerText = `Enter a number to calculate the factors `
    }else{
        primeSolEl.innerHTML = `The factor of ${inputEl.value} are: <br> ${factors}`
    }
})

function calculate(num) {

    var half = Math.floor(num / 2), // Ensures a whole number <= num.
        str = '1', // 1 will be a factor of every solution.
        i, j;

    // Determine our increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? str += ',&nbsp;&nbsp;' + i : false;
    }

    str += ',&nbsp;&nbsp;' + num; // Always include the original number.
    console.log(str);
    return str
}