const app = document.getElementById("root")
const logo = document.createElement("img")
logo.src = "https://taniarascia.github.io/sandbox/ghibli/logo.png"

const container = document.createElement("div")
container.setAttribute("class", "container")

app.appendChild(logo)
app.appendChild(container)

let request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function(){
    let data = JSON.parse(this.response)
    if(request.status >= 200 && request.status < 400){
        data.forEach(movie => {
            console.log(movie.title)
            const card = document.createElement("div")
            card.setAttribute("class", "card")

            const h1 = document.createElement("h1")
            h1.textContent = movie.title

            const p = document.createElement("p")
            movie.description = movie.description.substring(0, 300)
            p.textContent = `${movie.description}...`

            container.appendChild(card)

            card.appendChild(h1)
            card.appendChild(p)
        })
    }else{
        const errorMessage = document.createElement("marquee")
        errorMessage.textContent = "Gah, It's not working!"
        applicationCache.appendChild(errorMessage)
    }
}

request.send()
