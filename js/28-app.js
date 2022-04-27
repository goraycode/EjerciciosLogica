function sortNumbers(a,b,c) {
    let numbers = [];
    numbers = [...numbers,a,b,c];
    return `Forma ascendente ${numbers.sort((x,y) => x-y)} y forma descente ${numbers.sort((x,y) => x-y).reverse()}`
}