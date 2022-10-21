module.exports.arrayRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

module.exports.getSquareVigenere = () => {
    const result = [];
    const lengthArray = this.arrayRu.length;
    let startIndex = 0;
    for (let i = 0; i < lengthArray; i++) {
        const line = [];
        let j = 0;
        let indexOfElement = startIndex;
        while (j < lengthArray) {

            if (indexOfElement === lengthArray) {
                indexOfElement = 0;
            }

            // line.push(this.arrayRu[indexOfElement]);

            const newElement = {
                line: this.arrayRu[i],
                column: this.arrayRu[j],
                value: this.arrayRu[indexOfElement]
            };
            result.push(newElement);

            indexOfElement++;
            j++;
        }
        startIndex++;
        // result.push(line);
    }
    return result;
}
