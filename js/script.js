function Post(
    info,
    quantity
) {
    const htmlElement = document.createElement("article")
    htmlElement.classList.add("box")

    const descriptionElement = document.createElement("div")
    descriptionElement.classList.add("media-content")
    descriptionElement.innerText = `
        ${info}
    `
    const contentElement = document.createElement("div")
    contentElement.classList.add("likes")

    const createLike =  document.createElement("a")
    createLike.classList.add("level-item")

    const heart =  document.createElement("i")
    heart.classList.add("fa")
    heart.classList.add("fa-heart")

    const sumLikes = document.createElement("span")
    sumLikes.classList.add("sum-likes")
    sumLikes.innerHTML = quantity
    this.sumLikes = sumLikes
    
    contentElement.appendChild(createLike)
    contentElement.appendChild(sumLikes)
    createLike.appendChild(heart)

    htmlElement.appendChild(descriptionElement)

    htmlElement.appendChild(contentElement)

    this.htmlElement = htmlElement

    this.updateQuantity = function(quantity){
        this.sumLikes.innerHTML = quantity 
    }
}
Post.prototype.add = function (element) {
    element.prepend(this.htmlElement)
}
function Timer(ms) {
    this.ms = ms
    this.interval = null
}
Timer.prototype.start = function (callback) {
    this.interval = setInterval(callback, this.ms)
    return this
}
Timer.prototype.stop = function () {
    clearInterval(this.interval)
    return this
}
Timer.prototype.stopAfter = function (ms, callback) {
    setTimeout(callback, ms)
    return this
}
let i
let posts = []
for(i = 0; i < 5; i++){
    const post = new Post(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati officia, iusto amet totam saepe, blanditiis quae, praesentium incidunt, voluptas illum eos dolor mollitia assumenda sit nulla facilis expedita magnam aliquam.",
        0
    )
    post.add(document.getElementsByTagName("section")[0])
    posts.push(post)
}

const elsClass = document.getElementsByClassName("sum-likes")

const timer = new Timer(1000)
timer
    .start(function () {
        posts.forEach(function(element) {
            if(1 == Math.floor(Math.random() * 2)){
                element.updateQuantity(Math.round(Math.random() * 100))
            }
            
        }, this);
    })
    .stopAfter(15000, function () { timer.stop()})
