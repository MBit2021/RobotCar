function InitDriveProfile () {
    drive_mode = 0
    drive_gear = 0
    drive_status = 0
    drive_rotatetime = 300
    gear_shifttime = 300
    rotate_speed = [180, 180]
    gear_speed = [80, 150, 250, 100]
    sonar_alarm = 10
    sonar_warn = 20
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
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.OK, function () {
    StopDrive()
})
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
    OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
    drive_gear += 0
    drive_status += 0
}
function DriveTurn (rturn: number, keepmove: number) {
    if (rturn == 1) {
        OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinRight, rotate_speed[0])
    } else {
        OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinLeft, rotate_speed[0])
    }
    basic.pause(drive_rotatetime)
    if (keepmove == 1) {
        if (drive_status == 1) {
            DriveForward()
        } else if (drive_status == 4) {
            DriveReverse()
        } else {
            StopDrive()
        }
    } else {
        StopDrive()
    }
}
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.UP, function () {
    DriveForward()
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.RIGHT, function () {
    DriveTurn(1, 1)
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
    if (drive_status == 4) {
        StopDrive()
    }
    if (drive_gear == 0) {
        drive_gear += 1
    }
    if (drive_gear < 3) {
        OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Run, gear_speed[drive_gear - 1])
        drive_gear += drive_gear + 1
        drive_status += 1
    }
}
function ManageDrive (tgtsts: number) {
	
}
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM0, function () {
    drive_mode += 0
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.LEFT, function () {
    DriveTurn(0, 1)
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.DOWN, function () {
    DriveReverse()
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM1, function () {
    drive_mode += 1
})
function DriveReverse () {
    if (drive_status != 1) {
        StopDrive()
    }
    drive_gear += 4
    OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Run, gear_speed[drive_gear - 1])
    drive_status += 4
}
let system_idle_time = 0
let sonar_enable = 0
let sonar_warn = 0
let sonar_alarm = 0
let gear_speed: number[] = []
let rotate_speed: number[] = []
let gear_shifttime = 0
let drive_rotatetime = 0
let drive_status = 0
let drive_gear = 0
let drive_mode = 0
basic.clearScreen()
InitDriveProfile()
EnableRemoteIR(1)
