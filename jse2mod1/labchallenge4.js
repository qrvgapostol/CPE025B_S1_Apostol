// Image constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Add show method to the Image prototype
Image.prototype.show = function() {
    console.log(this.title + " by " + this.artist + " (" + this.date + ")");
};

// images object
const images = {
    list: [
        new Image("Mona Lisa", "Leonardo da Vinci", 1503),
        new Image("Starry Night", "Vincent van Gogh", 1889),
        new Image("The Scream", "Edvard Munch", 1893)
    ],

    // Show all images using the single image show method
    show: function() {
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].show();
        }
    },

    // Edit an image by title
    edit: function(title, artist, date) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title === title) {
                this.list[i].artist = artist;
                this.list[i].date = date;
                return;
            }
        }
    },

    // Delete an image by title
    delete: function(title) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title === title) {
                this.list.splice(i, 1);
                return;
            }
        }
    }
};

// Example usage
console.log("Original images:");
images.show();

console.log("\nEditing 'Mona Lisa'...");
images.edit("Mona Lisa", "Leonardo da Vinci Updated", 1506);
images.show();

console.log("\nDeleting 'The Scream'...");
images.delete("The Scream");
images.show();