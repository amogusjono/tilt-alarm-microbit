function alarm () {
    basic.showIcon(IconNames.Angry)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
}
input.onGesture(Gesture.Shake, function () {
    record.startRecording(record.BlockingState.Nonblocking)
    alarm()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    record.playAudio(record.BlockingState.Blocking)
})
