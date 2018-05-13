/*
Logan Selley
4/23/2018
CSE 154 AM
CP5 JS

javascript to handle user interaction for a personal webpage
*/
"use strict";
(function() {
    window.onload = function() {
        let button = document.getElementById("button");
        button.onclick = popup;
        let readable = document.getElementById("readable").addEventListener("click", helpRead)
        let addBTN = document.getElementById("add");
        addBTN.onclick = add;
        let removeBTN = document.getElementById("remove");
        removeBTN.onclick = remove;
        document.getElementById("gif-btn").onclick = ajax;
        let gif = document.createElement('img');
        document.getElementById("gif").appendChild(gif);
        gif.setAttribute('id', 'giphy');
        anime();
    }

    // activate popup upon button press
    function popup() {
        alert("Not really...");
    }

    // toggle paragraph background/text color upon button press
    function helpRead() {
        let text = document.getElementById("read");
        text.classList.toggle("white");
    }

    // add occurance of an image
    function add() {
        let img = document.createElement('img');
        img.setAttribute('class', 'wolf');
        img.setAttribute('src', '../CP/imgs/wolfgirl.jpg');
        img.setAttribute('alt', 'Wolf Girl');
        img.setAttribute('height', 100);
        img.setAttribute('width', 100);
        document.getElementById("WolfGirl").appendChild(img);
    }

    // remove all occurances of the image
    function remove() {
        let imgs = document.getElementsByClassName("wolf");
        while(imgs[0]) {
            imgs[0].parentNode.removeChild(imgs[0]);
        }
    }

    // stolen from the cheat sheet
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.text();
        } else {
            return Promise.reject(new Error(response.status + ": " + response.statusText))
        }
    }

    // request and manipulate api data (giphy API)
    function ajax() {
        let url = "https://api.giphy.com/v1/gifs/random?api_key=PHw0obOJoK2tPalBlxEqfksuhJyi3K0V&tag=&rating=PG"
        fetch(url)
            .then(checkStatus)
            .then(JSON.parse)
            .then(function(response) {
                console.log("success", response)
                let source = response.data.images.original.url;
                document.getElementById('giphy').setAttribute('src', source);
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    function anime() {
        let url = "./api.php";

        fetch(url)
            .then(checkStatus)
            .then(JSON.parse)
            .then(function(response) {
                document.getElementById("recs").innerText = response;
            })
            .catch(function(error) {
                console.log(error);
            })
    }
})();