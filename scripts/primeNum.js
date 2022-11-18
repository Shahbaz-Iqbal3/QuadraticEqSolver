const inputEl = document.querySelector(".inputfeild")
const primeSolEl = document.querySelector(".prime-sol1")

inputEl.addEventListener("keyup", () => {
    let factors = 0
    for (let i = 1; i <= inputEl.value; i++) {
        if (inputEl.value % i == 0) { factors++ }
    }
    if (factors == 2) {
        primeSolEl.innerText = `yes! ${inputEl.value} is prime number`
    }else if(inputEl.value == ''){
        primeSolEl.innerText = `Enter a number to Know that is prime or not`
    }else{
        primeSolEl.innerText = `No! ${inputEl.value} is not a prime number`
    }
})






