class Figure {
    constructor(elements = { points: [], lines: [] }) {
        this.elements = {
            points: elements.points || [],
            lines: elements.lines || []
        };
    }

    addPoint(x, y) {
        const newPoint = new Point(x, y);
        if (!this.elements.points.some(p => p.x === x && p.y === y)) {
            this.elements.points.push(newPoint);
        }
        this.sortPoints();
    }

    addLine(pointsArray) {
        const newLine = new Line(pointsArray);
        if (!this.elements.lines.some(line => 
            line.points.length === newLine.points.length &&
            line.points.every((p, i) => p.x === newLine.points[i].x && p.y === newLine.points[i].y)
        )) {
            this.elements.lines.push(newLine);
        }
        this.sortLines();
    }

    sortPoints() {
        this.elements.points.sort((a, b) => a.x - b.x || a.y - b.y);
    }

    sortLines() {
        this.elements.lines.sort((a, b) => {
            const aFirst = a.points[0];
            const bFirst = b.points[0];
            return aFirst.x - bFirst.x || aFirst.y - bFirst.y;
        });
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

        if (!append) this.deleteAll();

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