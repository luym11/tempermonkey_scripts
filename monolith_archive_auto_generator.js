// ==UserScript==
// @name         Monolith archive auto generator
// @version      0.1
// @description  generate a cmd line to automatically save website
// @author       luym11
// @include      https://mp.weixin.qq.com/*
// @match        https://mp.weixin.qq.com/*
// @match        XXX
// @icon         XXX
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    addCopyBtn();

    function addCopyBtn(){
        let groupContainer = document.querySelector('#profileBt');

        //clone node
        let copyBtnDiv = document.createElement("div");
        copyBtnDiv.innerHTML = '<div id="neal_copy_btn">Copy to Monolith</div>'
        copyBtnDiv.onclick = function(){
            let mp_title = document.querySelector('#activity-name').innerText;
            let mp_url = document.querySelector('#activity-name').baseURI;
            let download_link = "monolith " + mp_url + " -o " + mp_title + ".html";
            console.log("copy to Monolith: ", download_link);
            copyText(download_link);
        }
        groupContainer.appendChild(copyBtnDiv);
    }

    function copyText(content){
        let fakeElem = document.createElement('textarea');
        // Move element out of screen horizontally
        fakeElem.style.position = 'absolute';
        fakeElem.style.left = '-9999px';
        fakeElem.style.fontSize = '12pt';
        // Reset box model
        fakeElem.style.border = '0';
        fakeElem.style.padding = '0';
        fakeElem.style.margin = '0';

        fakeElem.setAttribute('readonly', '');
        fakeElem.value = content;

        document.body.appendChild(fakeElem);
        fakeElem.select();
        document.execCommand('copy');
    }
})();
