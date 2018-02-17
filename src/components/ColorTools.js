class ColorTools {
    static getColorsFromLines(lines) {
        const colors = [];
        for (let line of lines) {
            if(!colors.includes(line.color)){
                colors.push(line.color);
            }
            if(colors.length === 2) {
                break;
            }
        }
        return colors;
    }

    static getTextColorForBackground(bgHex){
        const r = parseInt(bgHex.substr(0,2),16);
        const g = parseInt(bgHex.substr(2,2),16);
        const b = parseInt(bgHex.substr(4,2),16);
        const yiq = ((r*299)+(g*587)+(b*114))/1000;
        return (yiq >= 128) ? 'black' : 'white';
    }
}

export default ColorTools