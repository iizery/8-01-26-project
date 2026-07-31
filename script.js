const screens = document.querySelectorAll(".screen")
const proceedButton = document.querySelector("#proceedButton")
const continueButton = document.querySelector("#continueButton")
const gift1Button = document.querySelector("#gift1Button")
const gift2Button = document.querySelector("#gift2Button")
const backFromPhotos = document.querySelector("#backFromPhotos")
const backFromLetter = document.querySelector("#backFromLetter")
const loadingText = document.querySelector("#loadingText")
const exitButton = document.querySelector("#exitButton")
const bgMusic = document.querySelector("#bgMusic")


function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.add("hidden")
    })

    const targetScreen = document.querySelector(`#${screenId}`)

    targetScreen.classList.remove("hidden")
}

showScreen("cover")

proceedButton.addEventListener("click", () => {
    showScreen("loading")

    loadingText.textContent = "Loading assets..."

    setTimeout(() => {
        loadingText.textContent = "Loading memories..."
    }, 1200)

    setTimeout(() => {
        loadingText.textContent = "Preparing surprise..."
    }, 2600)

    setTimeout(() => {
        showScreen("reveal")
        bgMusic.volume = 0.05;
        bgMusic.play();
    }, 4500)
})


continueButton.addEventListener("click", () => {
    showScreen("home")
})

gift1Button.addEventListener("click", () => {
    showScreen("photos")
})

gift2Button.addEventListener("click", () => {
    showScreen("letter")
})

backFromPhotos.addEventListener("click", () => {
    showScreen("home")
})

backFromLetter.addEventListener("click", () => {
    showScreen("close")
})

exitButton.addEventListener("click", () => {
    showScreen("cover")
})