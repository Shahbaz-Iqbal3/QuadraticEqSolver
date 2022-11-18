const numcardEl = document.querySelectorAll(".numcard")


async function numfacts() {
    numcardEl.forEach((element, i) => {
        var num = Math.floor(Math.random() * 100)
        let url = `http://numbersapi.com/${num}`
        fetch(url, {
              referrerPolicy: "unsafe_url" 
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                return response.text();
            })
            .then((data) => {
                numCardnumEl = document.createElement("span")
                numCardnumEl.innerText = num
                numCardnumEl.classList.add("numcard-num")
                element.firstElementChild.innerText = data
                element.prepend(numCardnumEl)

                console.log(element.firstElementChild, i);
                console.log(data);
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
}
numfacts()
