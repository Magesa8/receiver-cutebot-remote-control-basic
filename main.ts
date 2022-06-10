radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        cuteBot.moveTime(cuteBot.Direction.left, 50, 0.25)
    } else if (receivedString == "right") {
        cuteBot.moveTime(cuteBot.Direction.right, 50, 0.25)
    } else if (receivedString == "startstop") {
        if (goingForward == 0) {
            goingForward = 1
        } else {
            goingForward = 0
        }
    }
    if (goingForward == 1) {
        cuteBot.motors(50, 50)
    } else {
        cuteBot.stopcar()
    }
})
let goingForward = 0
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # # . .
    . # . # .
    `)
radio.setGroup(93)
goingForward = 0
