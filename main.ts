let maxlit = 20
let no_of_LEDs = 8
pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
let strip = neopixel.create(DigitalPin.P1, no_of_LEDs, NeoPixelMode.RGB)
strip.clear()

basic.forever(function on_forever() {
    let i=0
    let t=0
    for (t = 0; t <= maxlit; t++) {
        strip.setPixelColor(0, neopixel.rgb(t, 0, 0))
        strip.show()
        basic.pause(10)
    }
    for (i = 0; i < no_of_LEDs-1; i++) {
        for (t = 0; t <= maxlit; t++){
            strip.setPixelColor(i, neopixel.rgb(maxlit-t, 0, 0))
            strip.setPixelColor(i+1, neopixel.rgb(t, 0, 0))
            strip.show()
            basic.pause(10)
        }
    }
    for (t = 0; t <= maxlit; t++) {
        strip.setPixelColor(no_of_LEDs - 1, neopixel.rgb(maxlit-t, 0, 0))
        strip.show()
        basic.pause(10)
    }
})