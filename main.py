t = 0
i = 0
maxlit = 20
no_of_LEDs = 8
pins.set_pull(DigitalPin.P1, PinPullMode.PULL_NONE)
strip = neopixel.create(DigitalPin.P1, no_of_LEDs, NeoPixelMode.RGB)
strip.clear()

def on_forever():
    global t, i
    t = 0
    while t <= maxlit:
        strip.set_pixel_color(0, neopixel.rgb(t, 0, 0))
        strip.show()
        basic.pause(10)
        t += 1
    i = 0
    while i < no_of_LEDs - 1:
        t = 0
        while t <= maxlit:
            strip.set_pixel_color(i, neopixel.rgb(maxlit - t, 0, 0))
            strip.set_pixel_color(i + 1, neopixel.rgb(t, 0, 0))
            strip.show()
            basic.pause(10)
            t += 1
        i += 1
    t = 0
    while t <= maxlit:
        strip.set_pixel_color(no_of_LEDs - 1, neopixel.rgb(maxlit - t, 0, 0))
        strip.show()
        basic.pause(10)
        t += 1
basic.forever(on_forever)
