/**
 * Hinderniserkennung
 */
function HindernisVermeidung () {
    if (JoyCar.obstacleavoidance(SensorLRSelection.Left) && JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
        JoyCar.stop(StopIntensity.Intense)
        JoyCar.brakelight(ToggleSwitch.On)
        basic.pause(200)
        JoyCar.brakelight(ToggleSwitch.Off)
        JoyCar.reversinglight(ToggleSwitch.On)
        JoyCar.drive(FRDirection.Reverse, 40)
        basic.pause(100)
        JoyCar.reversinglight(ToggleSwitch.Off)
        JoyCar.stop(StopIntensity.Soft)
        basic.pause(100)
        JoyCar.turn(
        FRDirection.Reverse,
        LRDirection.Left,
        50,
        0
        )
        basic.pause(1000)
        JoyCar.stop(StopIntensity.Soft)
        basic.pause(500)
    } else if (JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
        JoyCar.stop(StopIntensity.Intense)
        JoyCar.brakelight(ToggleSwitch.On)
        basic.pause(200)
        JoyCar.brakelight(ToggleSwitch.Off)
        JoyCar.reversinglight(ToggleSwitch.On)
        JoyCar.drive(FRDirection.Reverse, 40)
        basic.pause(300)
        JoyCar.reversinglight(ToggleSwitch.Off)
        JoyCar.turn(
        FRDirection.Forward,
        LRDirection.Right,
        50,
        0
        )
        basic.pause(300)
    } else if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
        JoyCar.stop(StopIntensity.Intense)
        JoyCar.brakelight(ToggleSwitch.On)
        basic.pause(200)
        JoyCar.brakelight(ToggleSwitch.Off)
        JoyCar.reversinglight(ToggleSwitch.On)
        JoyCar.drive(FRDirection.Reverse, 40)
        basic.pause(300)
        JoyCar.reversinglight(ToggleSwitch.Off)
        JoyCar.turn(
        FRDirection.Forward,
        LRDirection.Left,
        50,
        0
        )
        basic.pause(300)
    } else {
        JoyCar.drive(FRDirection.Forward, 40)
    }
}
input.onButtonPressed(Button.A, function () {
    mode += 1
    if (mode > 1) {
        mode = 0
    }
    if (mode == 0) {
        basic.showIcon(IconNames.No)
        JoyCar.brakelight(ToggleSwitch.On)
        JoyCar.stop(StopIntensity.Soft)
    } else if (mode == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            # # # # #
            `)
        JoyCar.brakelight(ToggleSwitch.Off)
    }
})
let mode = 0
mode = 0
basic.showIcon(IconNames.No)
JoyCar.brakelight(ToggleSwitch.On)
basic.forever(function () {
    if (mode == 1) {
        HindernisVermeidung()
    } else {
        mode = 0
    }
})
