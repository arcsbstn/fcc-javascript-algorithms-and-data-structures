function rot13(str) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let decString = ""

    str.split("").forEach(e => {
        if (e.match(/[A-Z]/g)) {
            let currIndex = alphabet.indexOf(e)
            let newIndex = currIndex + 13

            if (newIndex > 25) {
                newIndex = newIndex - 26
            }

            decString = decString + alphabet[newIndex]
        } else { decString = decString + e }
    })

    return decString
}

rot13("SERR PBQR PNZC")
