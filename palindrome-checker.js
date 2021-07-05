function palindrome(str) {
    let test = str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "")
    let testReverse = test
        .split("")
        .reverse()
        .join("")

    if (test === testReverse) return true
    else return false
}

palindrome("eye")
