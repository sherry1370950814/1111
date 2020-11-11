basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= 4; j++) {
            led.plot(2, 2)
            I = 1
            j = -1
            if (I == j) {
                led.plot(2 + I, 2 + I)
            }
        }
    }
})
