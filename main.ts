radio.onReceivedString(function (receivedString) {
    if (receivedString == "right") {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        if (receivedString == "left") {
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            if (receivedString == "horn") {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
            }
        }
    }
})
radio.setGroup(1)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.forever(function () {
	
})
