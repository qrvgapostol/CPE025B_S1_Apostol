// Constructor
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
};

// images object
let images = {
    list: [],

    contains: function(title) {
        return this.list.some(image => image.title === title);
    },

    add: function(title, artist, date) {
        if (!this.contains(title)) {
            let newImage = new Image(title, artist, date);
            this.list.push(newImage);
        } else {
            console.log("Image already exists.");
        }
    },

    show: function() {
        this.list.forEach(image => {
            console.log(`${image.title} (${image.artist}, ${image.date})`);
        });
    },

    clear: function() {
        this.list = [];
    }
};

// Example usage
images.add("Starry Night", "Vincent van Gogh", 1889);
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Persistence of Memory", "Salvador Dalí", 1931);

images.show();

images.clear();