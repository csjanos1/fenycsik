function seq(x_: number, y_: number) {
    let x = 0
    let y = 0
    let lap = 0
    x = x_ - 1
    y = y_ - 1
    lap = x >= 8 ? 64 : 0
    x = x >= 8 ? x - 8 : x
    x = y % 2 == 0 ? x : 7 - x
    return y * 8 + x + lap
}

function fut(){
    let t = 0
    let i = 0
    for (t = 0; t <= maxlit; t++) {
        strip.setPixelColor(0, neopixel.rgb(t, 0, 0))
        strip.show()
        basic.pause(10)
    }
    for (i = 0; i < no_of_LEDs - 1; i++) {
        for (t = 0; t <= maxlit; t++) {
            strip.setPixelColor(i, neopixel.rgb(maxlit - t, 0, 0))
            strip.setPixelColor(i + 1, neopixel.rgb(t, 0, 0))
            strip.show()
            basic.pause(10)
        }
    }
    for (t = 0; t <= maxlit; t++) {
        strip.setPixelColor(no_of_LEDs - 1, neopixel.rgb(maxlit - t, 0, 0))
        strip.show()
        basic.pause(10)
    }
}

function oszlopok(){
    let x=0
    let y=0
    for (x = 1; x <= 8; x++) {
        //for (y = 1; y < x / 4 + 2; y++) strip.setPixelColor(seq(x, y), neopixel.rgb(maxlit, 0, 0))
        while (y< x / 4) {
            strip.setPixelColor(seq(x, y), neopixel.rgb(maxlit, 0, 0))
            y = y+.25
        }
    }
}

let maxlit = 10
let no_of_LEDs = 64
pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
let strip = neopixel.create(DigitalPin.P1, no_of_LEDs, NeoPixelMode.RGB)
strip.clear()

basic.forever(function () {
    //strip.clear()
    //fut()
    oszlopok()
    strip.show()
})
