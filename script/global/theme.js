window.onload = function () {
    // document.getElementById('hide_all').addEventListener('click', hideAll);
    globalState = { main: true, single_hide: [0,0,0] };
    setInterval(titleAnimation, 3000);
}

var globalState = {};
var titleCount = 0;

document.getElementById('hide_all').addEventListener('click', hideAll);

document.getElementById('single_hide1').addEventListener('click', function() {
    render(document.getElementById('single_hide1'), 0);
});

document.getElementById('single_hide2').addEventListener('click', function() {
    render(document.getElementById('single_hide2'), 1);
});

document.getElementById('single_hide3').addEventListener('click', function() {
    render(document.getElementById('single_hide3'), 2);
});

function hideAll() {
    let main_hide = document.getElementsByClassName('main_hide');
    if (globalState.main == false) {
        globalState.main = true;
        document.getElementById('hide_all').style.backgroundColor = "";
        document.getElementById('hide_all_btn').innerText = "ONLY SHOW APP";
        // console.log(globalState);
        for (let i = 0; i < main_hide.length; i++) {
            main_hide[i].style.display = ""
        }

    } else {
        globalState.main = false;
        document.getElementById('hide_all').style.backgroundColor = "rgb(218,123,147)";
        document.getElementById('hide_all_btn').innerHTML = "SHOW ALL";
        // console.log(globalState);
        for (let i = 0; i < main_hide.length; i++) {
            main_hide[i].style.display = "none";
        }

    }
}

function render(doc, val) {

    if (globalState.single_hide[val] == 1) {
        doc.querySelector('p').style.display = "block";
        globalState.single_hide[val] = 0;
        // console.log(doc.style.display);
    } else {
        doc.querySelector('p').style.display = "none"; 
        globalState.single_hide[val] = 1;
        // console.log(doc.style.display);
    }

}

function titleAnimation() {
    let trate = document.querySelector('h1');

    if (titleCount == 1) {
        titleCount = 0;
        trate.style.color = "rgb(218,123,147)";
    } else {
        titleCount = 1;
        trate.style.color = "rgb(247,173,192)";
    }

    // console.log(titleCount);

}