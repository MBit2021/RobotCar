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
    beam_enable = 0
    beam_color_L = 0
    beam_color_R = 0
    remote_ired_enable = 1
}
let remote_ired_enable = 0
let beam_color_R = 0
let beam_color_L = 0
let beam_enable = 0
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
InitDriveProfile()
basic.forever(function () {
	
})
