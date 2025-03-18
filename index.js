const hq = 42
const block = 264
function distanceFromHqInBlocks(loc) {
    return loc >= hq ? loc - hq : hq - loc
}

function distanceFromHqInFeet(loc) {
    const cb = distanceFromHqInBlocks(loc)
    return cb * block
}

function distanceTravelledInFeet(ptA, ptB) {
    return ptA >= ptB ? (ptA - ptB) * block : (ptB - ptA) * block 
}

function calculatesFarePrice(ptA, ptB) {
    const feet = distanceTravelledInFeet(ptA, ptB)
    if(feet <= 400) {
       return 0
    } else {
        if(feet > 400 && feet <= 2000 ) {
            return (feet - 400) * .02
        } else {
            if(feet > 2000 && feet <= 2500 ) {
                return 25
            } else {
                if(feet > 2500) {
                    return 'cannot travel that far'
                }
            }
        }
    }
}



