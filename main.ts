function InitDriveProfile () {
    drive_mode = 0
    drive_gear = 0
    drive_status = 0
    rotate_time = 300
    gear_shifttime = 300
    rotate_speed = [120, 120]
    gear_speed = [40, 80, 300, 40]
    sonar_alarm = 10
    sonar_warn = 20
    sonar_enable = 0
    system_idle_time = 100
}
function EnableDriveLight (enable: boolean) {
    if (enable) {
        OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.White)
    } else {
        OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
    }
}
function EnableStopLight (enable: boolean) {
    if (enable) {
        OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.Red)
    } else {
        OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
    }
}
let stub = 0
let system_idle_time = 0
let sonar_enable = 0
let sonar_warn = 0
let sonar_alarm = 0
let gear_speed: number[] = []
let rotate_speed: number[] = []
let gear_shifttime = 0
let rotate_time = 0
let drive_status = 0
let drive_gear = 0
let drive_mode = 0
basic.showIcon(IconNames.Rollerskate)
InitDriveProfile()
basic.forever(function () {
    stub += OSOYOO_Sensor.Ultrasonic(DigitalPin.P15, DigitalPin.P14)
    if (OSOYOO_Sensor.Ultrasonic(DigitalPin.P14, DigitalPin.P15) <= 15) {
        basic.showIcon(IconNames.No)
        drive_mode += 4
        OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Back, gear_speed[3])
    } else if (OSOYOO_Sensor.Ultrasonic(DigitalPin.P14, DigitalPin.P15) > 15) {
        basic.showIcon(IconNames.Yes)
        drive_mode += 1
        OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Run, gear_speed[0])
    }
    if (drive_mode == 4) {
        EnableStopLight(true)
    } else if (drive_mode == 1) {
        EnableDriveLight(true)
    }
})
