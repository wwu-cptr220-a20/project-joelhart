// Elements set upon page load
window.onload = function () {
    // document.getElementById('hide_all').addEventListener('click', hideAll);
    globalState = { main: true, single_hide: [0, 0, 0] };
    setInterval(titleAnimation, 3000);
}

// Minimal yet required variables here
var globalState = {};
var titleCount = 0;

// All click activated listeners here
document.getElementById('hide_all').addEventListener('click', hideAll);
document.getElementById('single_hide1').addEventListener('click', function () { render(document.getElementById('single_hide1'), 0) });
document.getElementById('single_hide2').addEventListener('click', function () { render(document.getElementById('single_hide2'), 1) });
document.getElementById('single_hide3').addEventListener('click', function () { render(document.getElementById('single_hide3'), 2) });

// Function assisting in the 'Hide Info' button
function hideAll() {

    let main_hide = document.getElementsByClassName('main_hide');
    if (globalState.main == false) {
        globalState.main = true;
        document.getElementById('hide_all').style.backgroundColor = "";
        document.getElementById('hide_all_btn').innerText = "ONLY SHOW APP";
        for (let i = 0; i < main_hide.length; i++) {
            main_hide[i].style.display = ""
        }
    } else {
        globalState.main = false;
        document.getElementById('hide_all').style.backgroundColor = "rgb(218,123,147)";
        document.getElementById('hide_all_btn').innerHTML = "SHOW ALL";
        for (let i = 0; i < main_hide.length; i++) {
            main_hide[i].style.display = "none";
        }
    }
}

// Refresh render function for dynamic live page changes
function render(doc, val) {

    if (globalState.single_hide[val] == 1) {
        doc.querySelector('p').style.display = "block";
        globalState.single_hide[val] = 0;
    } else {
        doc.querySelector('p').style.display = "none";
        globalState.single_hide[val] = 1;
    }
}

// Subtle yet fitting pulsing title animation
function titleAnimation() {

    let trate = document.querySelector('h1');
    if (titleCount == 1) {
        titleCount = 0;
        trate.style.color = "rgb(218,123,147)";
    } else {
        titleCount = 1;
        trate.style.color = "rgb(247,173,192)";
    }
}

// Helper constants for fetch request
const URL_TEMPLATE = "https://wordsapiv1.p.rapidapi.com/words/";
const URL_TEMPLATE_END = "/definitions";

// Main fetching functionn for dictionary data
function fetchData(search) {
    var promise = fetch(URL_TEMPLATE + search + URL_TEMPLATE_END, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "45e45ef8f5msh6cae8142756ae37p19020cjsncc6e1490f49d"
        }
    })
        .then((response => {
            return response.json()
        }))
        .then(renderApp)
        .catch(err => {
            console.log(err);
        })
    return promise
}

// Function which actually renders the dictionary result
function renderApp(obj) {
    console.log(obj.definitions[0].definition);
    document.getElementById('Applicate').innerText = obj.definitions[0].definition;
}

// Adding button functionality
function btnFunction() {
    let word = document.querySelector('textarea').value;
    if (word != "") {
        fetchData(word);
    }
}

// Click event found at button so it runs after functions defined
document.getElementById('btn').addEventListener('click', btnFunction());