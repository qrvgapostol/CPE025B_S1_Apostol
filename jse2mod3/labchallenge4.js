// --- Point class ---
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = 'point';
    }
}

// --- Line class ---
class Line {
    constructor(pointsArray) {
        this.type = 'line';
        this.points = pointsArray.map(coords => new Point(coords[0], coords[1]));
    }
}

// --- Figure class ---
class Figure {
    constructor(elements = { points: [], lines: [] }) {
        this.elements = {
            points: elements.points || [],
            lines: elements.lines || []
        };
    }

    addPoint(x, y) {
        this.elements.points.push(new Point(x, y));
    }

    addLine(pointsArray) {
        this.elements.lines.push(new Line(pointsArray));
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(jsonData, append = false) {
        let data;
        if (typeof jsonData === 'string') {
            data = JSON.parse(jsonData);
        } else {
            data = jsonData;
        }

        if (!append) {
            this.deleteAll();
        }

        if (data.points) {
            data.points.forEach(p => this.addPoint(p.x, p.y));
        }
        if (data.lines) {
            data.lines.forEach(l => {
                const lineCoords = l.points.map(pt => [pt.x, pt.y]);
                this.addLine(lineCoords);
            });
        }
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }
}

// --- Test ---
let f = new Figure();
f.addPoint(10, 20);
f.addPoint(10, 10);
f.addLine([[10, 20], [30, 40], [50, 60]]);
let json = f.toJSON();
console.log(json);

f.fromJSON(json, true);
console.log(f.elements.points.length); 
console.log(f.elements.lines.length);  
f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length); 
console.log(f.elements.lines.length); 