var contents = document.getElementsByClassName('content');

var tagName = contents[1].getElementsByTagName('p');

console.log(tagName[0].innerHTML);

var getBody = document.getElementsByTagName("body");

console.log(getBody[0].innerHTML);