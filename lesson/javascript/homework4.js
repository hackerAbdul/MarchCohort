/*Create a function that checks the ideal number of hours of sleep required of a week period ( you can call this function idealSleepHours). 
Create another function that adds the numbers of hours slept during your normal week (can call this function actualSleepHours). 
Finally a function that calculates how many hours you are in debt of sleep from the ideal amount required per week.*/


function idealSleepHours(hours){
    const idealHours = hours*7
    // console.log(idealHours)
    return idealHours
}


function actualSleepHours(mon,tue,wed,thur,fri,sat,sun){
    const hoursSlept = mon+tue+wed+thur+fri+sat+sun
    // console.log(hoursSlept)
    return hoursSlept
}


function sleepDebt(){
    const hoursSlept = actualSleepHours(5,8,7,8,7,4,1)
    const idealHours = idealSleepHours(7)

    if(hoursSlept === idealHours){
        success()
    }else if (hoursSlept < idealHours){
        var debt = idealHours-hoursSlept
        console.log(`You are behind on ${debt} hours of sleep`)
    }else{
        var over = hoursSlept-idealHours
        console.log(`You have overslept by ${over} hour`)
    }
}
sleepDebt()

function success(){
    console.log("You have reached your target")
}



reduce(previous, current)