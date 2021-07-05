function convertToRoman(num) {
    if (num < 0) return

    let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    let symbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
    let rnString = ""
    let i = 12

    while (num) {
        let quot = Math.floor(num / numbers[i])
        num = num % numbers[i]

        while (quot) {
            rnString = rnString + symbols[i]
            quot = quot - 1
        }

        i = i - 1
    }

    return rnString
}

convertToRoman(36)
