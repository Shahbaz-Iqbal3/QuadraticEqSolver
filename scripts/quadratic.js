const formEl = document.querySelector("form"),
    inputaEl = document.querySelector("#input-a"),
    inputbEl = document.querySelector("#input-b"),
    inputcEl = document.querySelector("#input-c"),
    solutionEl = document.querySelector(".solution"),
    calDiscEl = document.querySelector(".cal-disc"),
    inputsEl = document.querySelectorAll("input")




formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let a = inputaEl.value
    let b = inputbEl.value
    let c = inputcEl.value
    window.scrollBy({
        top: 350,
        behavior: "smooth"
    })
    solutionEl.innerHTML = `<h2>Solution</h2>
    <h3>When</h3><h3> a = ${a} , b = ${b} , c = ${c}</h3>
    <div class="quad-formula">
        <span>X = </span>
        <span class="formula"> -b &#177;<span id="sqrt">&#8730;<span id="sqrt-bar"> b<sup>2</sup> -
                    4ac</span></span>
            <hr>2a
        </span>
    </div>
    <div class="quad-formula">
        <span>X = </span>
        <span class="formula">-(${b})&#177;<span id="sqrt">&#8730;<span
                    id="sqrt-bar">(${b})<sup>2</sup>-4(${a})(${c})</span></span>
                    <hr>2(${a})
                    </span>
    </div>
    <div class="quad-formula">
        <span>X = </span>
        <span class="formula">${b * (-1)}&#177;<span id="sqrt">&#8730;<span id="sqrt-bar">${b * b}-${4 * a * c}</span></span>
            <hr>${2 * a}
            </span>
            </div>
            <div class="quad-formula">
        <span>X = </span>
        <span class="formula">${b * (-1)}&#177;<span id="sqrt">&#8730;<span id="sqrt-bar">${(b * b) - (4 * a * c)}</span></span>
            <hr>${2 * a}
        </span>
    </div>  `
    if (Math.sqrt((b * b) - (4 * a * c)) == 0){
        result = document.createElement("div")
        result.classList.add("result")
        result.style.flexDirection = "column"
        result.innerHTML = `
        <div class="row">
            <div class="quad-formula">
                <span style="font-weight: bold;">X = </span>
                <span class="formula">${b*(-1)}&#177${(b * b) - (4 * a * c)}<hr>${2*a} </span>
            </div>
        </div>
        <div class="row">
            <div class="quad-formula">
                <span style="font-weight: bold;">X = </span>
                <span class="formula">${((b*(-1))+((b * b) - (4 * a * c)))/(2*a)} </span>
            </div>
        </div>
        `
        console.log("ther one real root only", Math.sqrt((b * b) - (4 * a * c)));
        solutionEl.appendChild(result)
    }else if(Math.sqrt((b * b) - (4 * a * c)) % 1 == 0){
        result = document.createElement("div")
        result.classList.add("result")
        result.style.flexDirection = "column"
        result.innerHTML = `
        <div class="row">
            <div class="quad-formula">
                <span style="font-weight: bold;"> X<sub>1</sub> = </span>
                <span class="formula">${b*(-1)}-${(b * b) - (4 * a * c)}<hr>${2*a} </span>
            </div>
            <span style="font-size: 30px;">,</span>
            <div class="quad-formula">
                <span style="font-weight: bold;">X<sub>2</sub> = </span>
                <span class="formula">${b*(-1)}+${(b * b) - (4 * a * c)}<hr>${2*a} </span>
            </div>
        </div>
        <div class="row">
            <div class="quad-formula">
                <span style="font-weight: bold;"> X<sub>1</sub> = </span>
                <span class="formula">${((b*(-1))-((b * b) - (4 * a * c)))/(2*a)} </span>
            </div>
            <span style="font-size: 30px;">,</span>
            <div class="quad-formula">
                <span style="font-weight: bold;">X<sub>2</sub> = </span>
                <span class="formula">${((b*(-1))+((b * b) - (4 * a * c)))/(2*a)} </span>
            </div>
        </div>
        `
        solutionEl.appendChild(result)        
        console.log("ther two real roots", Math.sqrt((b * b) - (4 * a * c)));

    }
    else {
         result = document.createElement("div")
        result.classList.add("result")
        result.innerHTML = `
        <div class="quad-formula">
            <span style="font-weight: bold;"> X<sub>1</sub> = </span>
            <span class="formula">${b*(-1)}-<span id="sqrt">&#8730;<span id="sqrt-bar">${(b * b) - (4 * a * c)}</span></span>
            <hr>${2*a}
            </span>
        </div>
        <span style="font-size: 30px;">,</span>
        <div class="quad-formula">
            <span style="font-weight: bold;">X<sub>2</sub> = </span>
            <span class="formula">${b*(-1)}+<span id="sqrt">&#8730;<span id="sqrt-bar">${(b * b) - (4 * a * c)}</span></span>
            <hr>${2*a}
            </span>
            </div>   `
            solutionEl.appendChild(result)
            console.log("ther two complex roots", Math.sqrt((b * b) - (4 * a * c)));
            
        }
        
        inputsEl.forEach( input => {input.value = ''})
    })