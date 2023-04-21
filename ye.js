const qt = document.getElementById('quote')
const btn = document.getElementById('btn')
const api = 'https://api.kanye.rest'


let getQuote = () => {
    fetch(api)
    .then(
        data => data.json()
    )
    .then( item =>
        qt.innerHTML = item.quote,
        qt.classList.remove('fade'),
        setTimeout(function () { qt.classList.add('fade')})
    )
    
}

btn.addEventListener('click', getQuote)



