radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Diamond)
    hittime = receivedNumber
    count = 0
    for (let index = 0; index < 5; index++) {
        count += 1
        basic.pause(1000)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (hit == 1) {
        if (hittime == count) {
            basic.showString("H")
        } else {
            basic.showString("O")
        }
        hit = 0
    }
})
let count = 0
let hittime = 0
let hit = 0
radio.setGroup(1)
hit = 0
basic.showString("Ready")
