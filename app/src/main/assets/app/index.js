const root = document.getElementById('root')

if(root) {
    const pargraph = document.createElement('p')
    pargraph.textContent = 'This is a web app in android'
    pargraph.style.cssText = 'padding: 0px; margin: 0px; color: green;opacity:0.7;font-size:34px;'

    root.appendChild(pargraph)
}