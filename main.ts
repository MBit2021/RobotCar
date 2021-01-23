function InitDriveProfile () {
    drive_mode = 0
    drive_status = 0
    drive_turntime = 200
    gear_shirttime = 300
    gear_speed_1 = 50
    gear_speed_2 = 100
    gear_speed_3 = 200
    gear_speed_R = 50
    sonar_alarm = 50
    sonar_warn = 100
}
function EnableBeam (on: number) {
    if (true) {
        OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.White)
    } else {
        OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
    }
}
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # . # . #
        # . # . #
        . # # # .
        . . # . .
        . . # . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.clearScreen()
})
function EnableRemoteIR (on: number) {
    if (on != 0) {
        OSOYOO_IR_BLACK.init(Pins.P8)
        basic.showLeds(`
            # # # # #
            . . . . .
            . # # # .
            . . . . .
            . . # . .
            `)
    } else {
        OSOYOO_IR_BLACK.init(Pins.P0)
        basic.clearScreen()
    }
}
let sonar_warn = 0
let sonar_alarm = 0
let gear_speed_R = 0
let gear_speed_3 = 0
let gear_speed_2 = 0
let gear_speed_1 = 0
let gear_shirttime = 0
let drive_turntime = 0
let drive_status = 0
let drive_mode = 0
basic.clearScreen()
InitDriveProfile()
EnableRemoteIR(1)
