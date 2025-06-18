radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber <= 15) {
        forward = true
    } else {
        forward = false
    }
    if (Math.abs(receivedNumber) <= 45) {
        speed = 64
    } else {
        if (Math.abs(receivedNumber) <= 90) {
            speed = 128
        } else {
            if (Math.abs(receivedNumber) <= 135) {
                speed = 192
            } else {
                if (Math.abs(receivedNumber) <= 180) {
                    speed = 255
                }
            }
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "straight") {
        spinMotor("all")
    } else {
        if (receivedString == "left") {
            maqueen.motorStop(maqueen.Motors.M1)
            spinMotor("right")
        } else {
            if (receivedString == "right") {
                maqueen.motorStop(maqueen.Motors.M2)
                spinMotor("left")
            } else {
                if (receivedString == "horn") {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
                }
            }
        }
    }
})
function spinMotor (motor: string) {
    if (motor == "all") {
        if (forward) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
        }
    } else {
        if (motor == "left") {
            if (forward) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
            }
        } else {
            if (motor == "right") {
                if (forward) {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
                } else {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
                }
            }
        }
    }
}
let forward = false
let speed = 0
radio.setGroup(1)
speed = 255
forward = true
spinMotor("all")
basic.forever(function () {
	
})
