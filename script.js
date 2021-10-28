var btt = document.getElementById("back-to-top"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

if(docHeight != 'undefined') {
    offset = docHeight/4 ;
}

window.addEventListener("scroll", function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;
    btt.className = (scrollPos > offset) ? "visible" : "";
});

btt.addEventListener('click', function(event) {
    event.preventDefault();
    docElem.scrollTop = 0;
})