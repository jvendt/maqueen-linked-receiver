radio.onReceivedString(function (receivedString) {
    if (receivedString == "right") {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        if (receivedString == "left") {
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        } else {
            if (receivedString == "horn") {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
            }
        }
    }
})
radio.setGroup(1)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.forever(function () {
	
})
