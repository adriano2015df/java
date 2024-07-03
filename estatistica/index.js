const average = (...numbers) => {
    const sum = numbers.reduce((accum, num)=> accum + num, 0)
    return sum / numbers.length
}

console.log(`Média dos Números digitados é: ${average(3,6,10,9)}`)

const weitedAverege = (...entries)=> {
    const sun = entries.reduce((accum, { number, weight})=> accum + (number * (weight ?? 1)), 0)
    const weightSun = entries.reduce((accum, entry)=> accum + (entry.weight ?? 1), 0)
    return sun / weightSun

}

console.log(`Média Ponderada é: ${weitedAverege(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1},
)}`)

const median = (...numbers) =>{
    const ordereNumbers = [...numbers].sort((a,b) => a-b)
    const middle = Math.floor(ordereNumbers.length/2)
    if (ordereNumbers.length % 2 !== 0) {
        return ordereNumbers[middle]
    }
    const firstMedian = ordereNumbers[middle - 1]
    const secondMedian = ordereNumbers[middle]
    return average(firstMedian, secondMedian)
}

console.log(`Mediana é: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana é: ${median(15, 14, 8, 7, 3)}`)


const mode = (...numbers)=>{
    const quantities = numbers.map(num =>[
        num, 
        numbers.filter(n => num == n).length
    ])
    quantities.sort((a,b) => b[1]-a[1])
    return quantities[0][0]
}

console.log(`Moda é: ${mode(1,1,5,4,9,7,4,3,5,2,4,0,4)}`)