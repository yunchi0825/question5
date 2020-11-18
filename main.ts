input.onGesture(Gesture.Shake, function () {
    step += 1
})
input.onButtonPressed(Button.AB, function () {
    step = 0
})
let step = 0
step = 0
basic.forever(function () {
    basic.showNumber(step)
})
