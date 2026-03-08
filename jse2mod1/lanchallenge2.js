let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let getImage = function(title, artist, date) {
    return {
        title,
        artist,
        date
    }
}

// Sample data
let images = [
    { title: "Starry Night", artist: "Vincent van Gogh", date: 1889 },
    { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
    { title: "The Persistence of Memory", artist: "Salvador Dalí", date: 1931 }
];

let images1 = [];
let images2 = [];

images.forEach(image => images1.push(new Image(image.title, image.artist, image.date)));

images1.forEach(image => images2.push(getImage(image.title, image.artist, image.date)));

images2.forEach(image => {
    console.log(`${image.title} (${image.artist}, ${image.date})`);
});