var contents = document.getElementsByClassName('content');

var tagName = contents[1].getElementsByTagName('p');

console.log(tagName[0].innerHTML);

var getBody = document.getElementsByTagName("body");

console.log(getBody[0].innerHTML);

// getting attribute items

    var myAtt = document.getElementById("test")
    
    console.log(myAtt.getAttribute('class'));

//set attribute

    myAtt.setAttribute('class','pie');

    myAtt.setAttribute('title','hello');

//class name getting 

    myAtt.className = 'ninja';

//getting the href
    console.log(myAtt.href);

//getting the style

console.log(myAtt.style)

myAtt.classList.add('dadas');

    
