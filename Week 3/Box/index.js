const wrapper = document.getElementById('wrapper')

let div = document.createElement('div')
div.id = 'box'

let text = document.createTextNode('JS')

wrapper.appendChild(div)
div.appendChild(text)

// div.textContent = 'CSS' // changes text in wrapper in div


// myDiv.classList.add('class1', 'class2')
// myDiv.classList.remove()
// myDiv.classList.toggle()