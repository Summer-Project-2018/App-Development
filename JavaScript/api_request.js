// File to practice requests to music APIS

// const http = new XMLHttpRequest()

// http.open("GET", "https://api.lyrics.ovh/v1/shakira/waka-waka")
// http.send()

// http.onload = () => console.log(http.responseText)

function get(path) {
    var form = document.createElement("form");
    form.setAttribute("method", "get");
    form.setAttribute("action", path);
    document.body.appendChild(form);
    form.submit();
}


get('https://api.lyrics.ovh/v1/shakira/waka-waka')
