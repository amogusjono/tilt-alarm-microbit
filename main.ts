function alarm () {
    basic.showIcon(IconNames.Angry)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
}
input.onGesture(Gesture.Shake, function () {
    alarm()
})
