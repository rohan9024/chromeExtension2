console.log("grjgrk");

function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
injectScript(chrome.runtime.getURL('scripts.js'), 'body');
injectScript(chrome.runtime.getURL('popup.js'), 'body');

