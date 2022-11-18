const numcardEl = document.querySelectorAll(".numcard")


async function numfacts() {
    numcardEl.forEach((element, i) => {
        var num = Math.floor(Math.random() * 100)
        let url = `http://numbersapi.com/${num}`
        fetch(url, {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    // the content type header value is usually auto-set
    // depending on the request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
  referrer: "about:client", // or "" to send no Referer header,
  // or an url from the current origin
  referrerPolicy: "unsafe-url", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "same-origin", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
  redirect: "follow", // manual, error
  integrity: "", // a hash, like "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController to abort request
  window: window // null
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
