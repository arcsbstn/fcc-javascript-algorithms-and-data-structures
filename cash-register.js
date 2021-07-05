function checkCashRegister(price, cash, cid) {
    let totalChangeDue = cash - price
    let changeDue = totalChangeDue
    let changeLeftover = 0
    let changeArray = []
    let reversedCid = JSON.parse(JSON.stringify(cid))
        .reverse()
        .map(e => {
            if (e[0] === "PENNY") e.push(0.01)
            else if (e[0] === "NICKEL") e.push(0.05)
            else if (e[0] === "DIME") e.push(0.1)
            else if (e[0] === "QUARTER") e.push(0.25)
            else if (e[0] === "ONE") e.push(1)
            else if (e[0] === "FIVE") e.push(5)
            else if (e[0] === "TEN") e.push(10)
            else if (e[0] === "TWENTY") e.push(20)
            else if (e[0] === "ONE HUNDRED") e.push(100)
            return e
        })

    for (var e of reversedCid) {
        let billCanBeUsed = changeDue / e[2] >= 1

        if (billCanBeUsed && e[1] > 0) {
            let billCount = 0
            if (changeDue > e[1]) {
                while (billCount * e[2] <= changeDue && e[1] >= 0) {
                    changeDue = changeDue - e[2]
                    changeDue = Math.round(changeDue * 100) / 100
                    e[1] = e[1] - e[2]
                    e[1] = Math.round(e[1] * 100) / 100
                    billCount++
                }
            } else if (changeDue === e[1]) {
                billCount = e[1] / e[2]
                e[1] = 0
            } else {
                while (billCount * e[2] <= changeDue) billCount++
                billCount--
                changeDue = changeDue - billCount * e[2]
                e[1] = e[1] - billCount * e[2]
                e[1] = Math.round(e[1] * 100) / 100
                changeDue = Math.round(changeDue * 100) / 100
            }

            changeArray.push([e[0], billCount * e[2]])
        }

        changeLeftover = changeLeftover + e[1]
    }

    let calculatedChange = changeArray.reduce((sum, e) => {
        return Math.round((sum + e[1]) * 100) / 100
    }, 0)
    let isEnoughChange = calculatedChange === totalChangeDue

    if (!isEnoughChange) {
        return {
            status: 'INSUFFICIENT_FUNDS',
            change: []
        }
    } else if (isEnoughChange && changeLeftover === 0) {
        return {
            status: 'CLOSED',
            change: cid
        }
    } else if (isEnoughChange && changeLeftover > 0) {
        return {
            status: 'OPEN',
            change: changeArray
        }
    }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])