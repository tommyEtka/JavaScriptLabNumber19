document.body.innerHTML = '<p> I changed the whole page!</p>'

var paragraph = document.createElement('p');
paragraph.innerText = 'I made a new tag!';
document.body.appendChild(paragraph);
