
class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function (album) {
        this.albums.push(album)
    }
    favoriteAlbum = function () {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function () {
        this.played += 1
    }
    display = function () {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

album1.play()
album2.play()
album2.play()
album2.play()
album2.play()
album2.play()
album3.play()

// console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)

let currentlySelectedAlbum

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Page loaded")

    // Add all Albums to dropdown
    for (let album of jbox.albums) {
        // console.log(`${album.artist}, ${album.title}, ${album.played}`)

        let newEntry = document.createElement("a")
        newEntry.href = "#"
        newEntry.textContent = `${album.artist} - ${album.title}`
        newEntry.classList.add("dropdown-item")
        // console.log(`Just Added: ${album.artist} - ${album.title}`)
        // Update current album selected
        newEntry.addEventListener("click", function () {
            currentlySelectedAlbum = album
            let currSelectData = `Currently Selected: ${album.artist} - ${album.title}`
            let currSelectedText = document.querySelector("#currSelectedAlbum")
            currSelectedText.textContent = currSelectData
        })
        // console.log(newEntry)
        document.querySelector("#dropdownMenu").appendChild(newEntry)
    }


    let dropdown = document.querySelector("#dropdownMenuButton")

    dropdown.addEventListener("show.bs.dropdown", (e) => {

    })

    let playButton = document.querySelector("#playButton")
    playButton.addEventListener("click", (e) => {
        currentlySelectedAlbum.play()
    })

    let showFavAlbumBtn = document.querySelector("#showFavoriteAlbumButton")
    showFavAlbumBtn.addEventListener("click", (e) => {
        let favAlbumText = document.querySelector("#favoriteAlbum")
        favAlbumText.textContent = "Favorite Album: " + jbox.favoriteAlbum()
    })
})

