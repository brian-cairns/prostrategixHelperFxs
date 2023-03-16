//add days to dates in MM/DD/YYYY format
const shortMonths = [2, 4, 6, 9, 11,'2','4','6','9','11']
function addDays(date, days) {
    let parsedDate = date.split('/')
    let rawDate = []
    rawDate[1] = parseInt(parsedDate[1]) + days
    if(rawDate[1] < 29) {
       return `${parsedDate[0]}/${rawDate[1]}/${parsedDate[2]}`
    }
    parsedDate[1] = rawDate[1]
    return calculatedDate (parsedDate)

}

function calculateDate(date) {
    if (date[0] == '12') {
        let update = resolveDec(date)
        return update
    }
    if (date[0] == '2') {
        let update = resolveFeb(date)
        return update
    }
    if (shortMonths.includes(date[0])) {
        let update = resolve30(date)
        return update
    }
   return resolve31(date)  

}

function resolveDec(date) {
    let rawDate = parseInt(date[1])
    if (rawDate > 31) {
        rawYear = parseInt(date[2]) + 1
        rawDate -= 31
        let day = rawDate.toString()
        let year = rawYear.toString()
        return `01/${day}/${year}`
    }
    return date
}

function resolve31(date) {
    let rawDate = parseInt(date[1])
    if (rawDate > 31) {
        rawMo = parseInt(date[0]) + 1
        rawDate -= 31
        let day = rawDate.toString()
        let mo = rawMo.toString()
        return `${mo}/${day}/${date[2]}`
    }
    return date
}

function resolve30(date) {
    let rawDate = parseInt(date[1])
    if (rawDate > 30) {
        rawMo = parseInt(date[0]) + 1
        rawDate -= 30
        let day = rawDate.toString()
        let mo = rawMo.toString()
        return `${mo}/${day}/${date[2]}`
    }
    return date
}

function resolveFeb(date) {
    let rawDate = parseInt(date[1])
    let rawYear = parseInt(date[2])
    let leapYear = Number.isInteger(rawYear/4)
    if (leapYear) {return resolveLeap(date)}
    else {
        rawMo = parseInt(date[0]) + 1
        rawDate -= 28
        let day = rawDate.toString()
        let mo = rawMo.toString()
        return `${mo}/${day}/${date[2]}`
    }
}

function resolveLeap(date) {
    if (rawDate > 29) {
        rawMo = parseInt(date[0]) + 1
        rawDate -= 29
        let day = rawDate.toString()
        let mo = rawMo.toString()
        return `${mo}/${day}/${date[2]}`
    }
    return date
}

function compareDates(date1, date2, ops) {
    const parsedDate1 = Date.parse(date1)
    const parsedDate2 = Date.parse(date2)
    let result = ''
    if(ops == 'gt') {
        parsedDate1 > parsedDate2 ? result = date1 : result = date2
    } else {
        parsedDate1 < parsedDate2 ? result = date1 : result = date2
    }
   return result
}

function getToday() {
    let today = new Date()
    let day = today.getDate()
    let mon = today.getMonth() + 1
    let yr = today.getFullYear()
    return `${mon}/${day}/${yr}`
}