/*
Logan Selley
4/23/2018
CSE 154 AM
CP4 JS

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
        img.setAttribute('src', '../cp4/imgs/wolfgirl.jpg');
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
})();