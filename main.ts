function InitDriveProfile () {
    drive_mode = 0
    drive_gear = 1
    drive_status = 0
    drive_turntime = 200
    gear_shirttime = 300
    sonar_alarm = 50
    sonar_warn = 100
    sonar_enable = 0
    system_idle_time = 100
    gear_speed = [50, 150, 250, 100]
}
function EnableBeam (on: number) {
    if (on != 0) {
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
function StopDrive () {
	
}
function TurnToLeft () {
	
}
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
    if (drive_gear > 0 && drive_gear < 4) {
        OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Run, gear_speed[drive_gear])
        if (drive_gear < 3) {
            drive_gear += drive_gear + 1
        }
        basic.pause(gear_shirttime)
    }
}
function TurnToRight () {
	
}
function ManageDrive (tgtsts: number) {
	
}
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM0, function () {
    drive_mode += 0
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM1, function () {
    drive_mode += 1
})
function DriveReverse () {
	
}
let gear_speed: number[] = []
let system_idle_time = 0
let sonar_enable = 0
let sonar_warn = 0
let sonar_alarm = 0
let gear_shirttime = 0
let drive_turntime = 0
let drive_status = 0
let drive_gear = 0
let drive_mode = 0
basic.clearScreen()
InitDriveProfile()
EnableRemoteIR(1)
