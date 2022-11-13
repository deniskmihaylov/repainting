function repainting(input) {
    let pack = (Number(input[0] + 2) * 1.5)
    let paint = Number(input[1]); 
    let paintPercent = (paint * 0.1) + paint;
    let paintSum = paintPercent * 14.5;
    let diluter = Number(input[2]) * 5;
    let bag = 0.40;
    let materialsPrice = pack + paintSum + diluter + bag;
    let labour = Number(input[3])
    let labourPrice = (materialsPrice * 0.3) * labour;
    let overallExpenses = materialsPrice + labourPrice

    console.log(overallExpenses)
}

repainting([10, 11, 4, 8])

