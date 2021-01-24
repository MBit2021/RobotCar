function InitDriveProfile () {
    drive_mode = 0
    drive_gear = 0
    drive_status = 0
    drive_turntime = 200
    gear_shirttime = 300
    gear_speed_1 = 50
    gear_speed_2 = 100
    gear_speed_3 = 200
    gear_speed_R = 50
    sonar_alarm = 50
    sonar_warn = 100
    sonar_enable = 0
    system_idle_time = 100
}
function EnableBeam (on: number) {
    if (on != 0) {
        OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.White)
    } else {
        OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
    }
}
function TurnLeft () {
	
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
function DriveForward () {
	
}
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM0, function () {
    drive_mode += 0
})
function ShiftGear () {
	
}
function TurnRight () {
	
}
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM1, function () {
    drive_mode += 1
})
function DriveReverse () {
	
}
let system_idle_time = 0
let sonar_enable = 0
let sonar_warn = 0
let sonar_alarm = 0
let gear_speed_R = 0
let gear_speed_3 = 0
let gear_speed_2 = 0
let gear_speed_1 = 0
let gear_shirttime = 0
let drive_turntime = 0
let drive_status = 0
let drive_gear = 0
let drive_mode = 0
basic.clearScreen()
InitDriveProfile()
EnableRemoteIR(1)
