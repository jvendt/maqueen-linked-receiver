radio.onReceivedString(function () {
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
})
radio.onReceivedString(function () {
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
})
radio.onReceivedString(function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
})
radio.setGroup(1)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.forever(function () {
	
})
