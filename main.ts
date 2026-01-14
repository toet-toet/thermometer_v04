let temperatuur = 0
let eenheden = 0
let penX = 0
let penY = 0
let tientallen = 0
let hoogsteTemperatuurGemeten = input.temperature()
let laagsteTemperatuurGemeten = input.temperature()
while (true) {
    serial.writeValue("temperatuur", input.temperature())
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        tientallen = Math.trunc(hoogsteTemperatuurGemeten / 10)
        if (tientallen == 1) {
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
        } else if (tientallen == 2) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(1, penY)
                penY += 1
            }
            led.plot(1, 4)
            penY += 1
            for (let index = 0; index < 3; index++) {
                led.plot(0, penY)
                penY += -1
            }
            led.plot(0, 0)
        } else if (tientallen == 3) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(0, penY)
                penY += 2
            }
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
        } else if (tientallen == 4) {
            penY = 0
            for (let index = 0; index < 2; index++) {
                led.plot(0, penY)
                penY += 2
            }
            led.plot(0, 1)
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
        } else if (tientallen == 5) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(0, penY)
                penY += 1
            }
            led.plot(0, 4)
            penY += 1
            for (let index = 0; index < 3; index++) {
                led.plot(1, penY)
                penY += -1
            }
            led.plot(1, 0)
        } else if (tientallen == 6) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(1, penY)
                penY += 2
            }
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(0, penY)
                penY += 1
            }
            led.plot(1, 3)
        } else if (hoogsteTemperatuurGemeten == 7) {
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
            led.plot(0, 0)
        } else if (tientallen == 8) {
            penX = 0
            penY = 0
            for (let index = 0; index < 2; index++) {
                for (let index = 0; index < 2; index++) {
                    for (let index = 0; index < 2; index++) {
                        led.plot(penX, penY)
                        penY += 1
                    }
                    penY += 1
                }
                penY = 0
                penX += 4
            }
        } else if (tientallen == 9) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(0, penY)
                penY += 2
            }
            led.plot(0, 1)
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
        }
        eenheden = hoogsteTemperatuurGemeten - 10 * Math.trunc(hoogsteTemperatuurGemeten / 10)
        if (eenheden == 1) {
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
        } else if (eenheden == 2) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(4, penY)
                penY += 1
            }
            led.plot(4, 4)
            penY += 1
            for (let index = 0; index < 3; index++) {
                led.plot(3, penY)
                penY += -1
            }
            led.plot(3, 0)
        } else if (eenheden == 3) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(3, penY)
                penY += 2
            }
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
        } else if (eenheden == 4) {
            penY = 0
            for (let index = 0; index < 2; index++) {
                led.plot(3, penY)
                penY += 2
            }
            led.plot(3, 1)
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
        } else if (eenheden == 5) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(3, penY)
                penY += 1
            }
            led.plot(3, 4)
            penY += 1
            for (let index = 0; index < 3; index++) {
                led.plot(4, penY)
                penY += -1
            }
            led.plot(4, 0)
        } else if (eenheden == 6) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(4, penY)
                penY += 2
            }
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(3, penY)
                penY += 1
            }
            led.plot(4, 3)
        } else if (eenheden == 7) {
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
            led.plot(3, 0)
        } else if (eenheden == 8) {
            penX = 3
            penY = 0
            for (let index = 0; index < 2; index++) {
                for (let index = 0; index < 2; index++) {
                    for (let index = 0; index < 2; index++) {
                        led.plot(penX, penY)
                        penY += 1
                    }
                    penY += 1
                }
                penY = 0
                penX += 1
            }
        } else if (eenheden == 9) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(3, penY)
                penY += 2
            }
            led.plot(3, 1)
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
        } else if (eenheden == 0) {
            penY = 1
            for (let index = 0; index < 4; index++) {
                led.plot(4, penY)
                penY += 1
            }
            penY = 1
            for (let index = 0; index < 4; index++) {
                led.plot(3, penY)
                penY += 1
            }
        }
        basic.pause(100)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        tientallen = Math.trunc(laagsteTemperatuurGemeten / 10)
        if (tientallen == 1) {
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
        } else if (tientallen == 2) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(1, penY)
                penY += 1
            }
            led.plot(1, 4)
            penY += 1
            for (let index = 0; index < 3; index++) {
                led.plot(0, penY)
                penY += -1
            }
            led.plot(0, 0)
        } else if (tientallen == 3) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(0, penY)
                penY += 2
            }
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
        } else if (tientallen == 4) {
            penY = 0
            for (let index = 0; index < 2; index++) {
                led.plot(0, penY)
                penY += 2
            }
            led.plot(0, 1)
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
        } else if (tientallen == 5) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(0, penY)
                penY += 1
            }
            led.plot(0, 4)
            penY += 1
            for (let index = 0; index < 3; index++) {
                led.plot(1, penY)
                penY += -1
            }
            led.plot(1, 0)
        } else if (tientallen == 6) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(1, penY)
                penY += 2
            }
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(0, penY)
                penY += 1
            }
            led.plot(1, 3)
        } else if (tientallen == 7) {
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
            led.plot(0, 0)
        } else if (tientallen == 8) {
            penX = 0
            penY = 0
            for (let index = 0; index < 2; index++) {
                for (let index = 0; index < 2; index++) {
                    for (let index = 0; index < 2; index++) {
                        led.plot(penX, penY)
                        penY += 1
                    }
                    penY += 1
                }
                penY = 0
                penX += 4
            }
        } else if (tientallen == 9) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(0, penY)
                penY += 2
            }
            led.plot(0, 1)
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(1, penY)
                penY += 1
            }
        }
        eenheden = laagsteTemperatuurGemeten - 10 * Math.trunc(laagsteTemperatuurGemeten / 10)
        if (eenheden == 1) {
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
        } else if (eenheden == 2) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(4, penY)
                penY += 1
            }
            led.plot(4, 4)
            penY += 1
            for (let index = 0; index < 3; index++) {
                led.plot(3, penY)
                penY += -1
            }
            led.plot(3, 0)
        } else if (eenheden == 3) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(3, penY)
                penY += 2
            }
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
        } else if (eenheden == 4) {
            penY = 0
            for (let index = 0; index < 2; index++) {
                led.plot(3, penY)
                penY += 2
            }
            led.plot(3, 1)
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
        } else if (eenheden == 5) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(3, penY)
                penY += 1
            }
            led.plot(3, 4)
            penY += 1
            for (let index = 0; index < 3; index++) {
                led.plot(4, penY)
                penY += -1
            }
            led.plot(4, 0)
        } else if (eenheden == 6) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(4, penY)
                penY += 2
            }
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(3, penY)
                penY += 1
            }
            led.plot(4, 3)
        } else if (eenheden == 7) {
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
            led.plot(3, 0)
        } else if (eenheden == 8) {
            penX = 3
            penY = 0
            for (let index = 0; index < 2; index++) {
                for (let index = 0; index < 2; index++) {
                    for (let index = 0; index < 2; index++) {
                        led.plot(penX, penY)
                        penY += 1
                    }
                    penY += 1
                }
                penY = 0
                penX += 1
            }
        } else if (eenheden == 9) {
            penY = 0
            for (let index = 0; index < 3; index++) {
                led.plot(3, penY)
                penY += 2
            }
            led.plot(3, 1)
            penY = 0
            for (let index = 0; index < 5; index++) {
                led.plot(4, penY)
                penY += 1
            }
        } else if (eenheden == 0) {
            penY = 1
            for (let index = 0; index < 4; index++) {
                led.plot(4, penY)
                penY += 1
            }
            penY = 1
            for (let index = 0; index < 4; index++) {
                led.plot(3, penY)
                penY += 1
            }
        }
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (input.temperature() >= -9 && input.temperature() <= 99) {
            if (input.temperature() != temperatuur) {
                basic.clearScreen()
                datalogger.log(datalogger.createCV("temperatuurVerandering", temperatuur))
            }
            temperatuur = input.temperature()
            if (hoogsteTemperatuurGemeten < temperatuur && laagsteTemperatuurGemeten > temperatuur) {
                hoogsteTemperatuurGemeten = temperatuur
                laagsteTemperatuurGemeten = temperatuur
            } else if (hoogsteTemperatuurGemeten < temperatuur) {
                hoogsteTemperatuurGemeten = temperatuur
            } else if (laagsteTemperatuurGemeten > temperatuur) {
                laagsteTemperatuurGemeten = temperatuur
            }
            if (temperatuur >= 0) {
                tientallen = Math.trunc(temperatuur / 10)
                if (tientallen == 1) {
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(1, penY)
                        penY += 1
                    }
                } else if (tientallen == 2) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(1, penY)
                        penY += 1
                    }
                    led.plot(1, 4)
                    penY += 1
                    for (let index = 0; index < 3; index++) {
                        led.plot(0, penY)
                        penY += -1
                    }
                    led.plot(0, 0)
                } else if (tientallen == 3) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(0, penY)
                        penY += 2
                    }
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(1, penY)
                        penY += 1
                    }
                } else if (tientallen == 4) {
                    penY = 0
                    for (let index = 0; index < 2; index++) {
                        led.plot(0, penY)
                        penY += 2
                    }
                    led.plot(0, 1)
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(1, penY)
                        penY += 1
                    }
                } else if (tientallen == 5) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(0, penY)
                        penY += 1
                    }
                    led.plot(0, 4)
                    penY += 1
                    for (let index = 0; index < 3; index++) {
                        led.plot(1, penY)
                        penY += -1
                    }
                    led.plot(1, 0)
                } else if (tientallen == 6) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(1, penY)
                        penY += 2
                    }
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(0, penY)
                        penY += 1
                    }
                    led.plot(1, 3)
                } else if (tientallen == 7) {
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(1, penY)
                        penY += 1
                    }
                    led.plot(0, 0)
                } else if (tientallen == 8) {
                    penX = 0
                    penY = 0
                    for (let index = 0; index < 2; index++) {
                        for (let index = 0; index < 2; index++) {
                            for (let index = 0; index < 2; index++) {
                                led.plot(penX, penY)
                                penY += 1
                            }
                            penY += 1
                        }
                        penY = 0
                        penX += 4
                    }
                } else if (tientallen == 9) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(0, penY)
                        penY += 2
                    }
                    led.plot(0, 1)
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(1, penY)
                        penY += 1
                    }
                }
                eenheden = temperatuur - 10 * Math.trunc(temperatuur / 10)
                if (eenheden == 1) {
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                } else if (eenheden == 2) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                    led.plot(4, 4)
                    penY += 1
                    for (let index = 0; index < 3; index++) {
                        led.plot(3, penY)
                        penY += -1
                    }
                    led.plot(3, 0)
                } else if (eenheden == 3) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(3, penY)
                        penY += 2
                    }
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                } else if (eenheden == 4) {
                    penY = 0
                    for (let index = 0; index < 2; index++) {
                        led.plot(3, penY)
                        penY += 2
                    }
                    led.plot(3, 1)
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                } else if (eenheden == 5) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(3, penY)
                        penY += 1
                    }
                    led.plot(3, 4)
                    penY += 1
                    for (let index = 0; index < 3; index++) {
                        led.plot(4, penY)
                        penY += -1
                    }
                    led.plot(4, 0)
                } else if (eenheden == 6) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(4, penY)
                        penY += 2
                    }
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(3, penY)
                        penY += 1
                    }
                    led.plot(4, 3)
                } else if (eenheden == 7) {
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                    led.plot(3, 0)
                } else if (eenheden == 8) {
                    penX = 3
                    penY = 0
                    for (let index = 0; index < 2; index++) {
                        for (let index = 0; index < 2; index++) {
                            for (let index = 0; index < 2; index++) {
                                led.plot(penX, penY)
                                penY += 1
                            }
                            penY += 1
                        }
                        penY = 0
                        penX += 1
                    }
                } else if (eenheden == 9) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(3, penY)
                        penY += 2
                    }
                    led.plot(3, 1)
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                } else if (eenheden == 0) {
                    penY = 1
                    for (let index = 0; index < 4; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                    penY = 1
                    for (let index = 0; index < 4; index++) {
                        led.plot(3, penY)
                        penY += 1
                    }
                }
            } else {
                eenheden = Math.abs(temperatuur) - 10 * Math.trunc(Math.abs(temperatuur) / 10)
                if (eenheden == 1) {
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                } else if (eenheden == 2) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                    led.plot(4, 4)
                    penY += 1
                    for (let index = 0; index < 3; index++) {
                        led.plot(3, penY)
                        penY += -1
                    }
                    led.plot(3, 0)
                } else if (eenheden == 3) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(3, penY)
                        penY += 2
                    }
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                } else if (eenheden == 4) {
                    penY = 0
                    for (let index = 0; index < 2; index++) {
                        led.plot(3, penY)
                        penY += 2
                    }
                    led.plot(3, 1)
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                } else if (eenheden == 5) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(3, penY)
                        penY += 1
                    }
                    led.plot(3, 4)
                    penY += 1
                    for (let index = 0; index < 3; index++) {
                        led.plot(4, penY)
                        penY += -1
                    }
                    led.plot(4, 0)
                } else if (eenheden == 6) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(4, penY)
                        penY += 2
                    }
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(3, penY)
                        penY += 1
                    }
                    led.plot(4, 3)
                } else if (eenheden == 7) {
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                    led.plot(3, 0)
                } else if (eenheden == 8) {
                    penX = 3
                    penY = 0
                    for (let index = 0; index < 2; index++) {
                        for (let index = 0; index < 2; index++) {
                            for (let index = 0; index < 2; index++) {
                                led.plot(penX, penY)
                                penY += 1
                            }
                            penY += 1
                        }
                        penY = 0
                        penX += 1
                    }
                } else if (eenheden == 9) {
                    penY = 0
                    for (let index = 0; index < 3; index++) {
                        led.plot(3, penY)
                        penY += 2
                    }
                    led.plot(3, 1)
                    penY = 0
                    for (let index = 0; index < 5; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                } else if (eenheden == 0) {
                    penY = 1
                    for (let index = 0; index < 4; index++) {
                        led.plot(4, penY)
                        penY += 1
                    }
                    penY = 1
                    for (let index = 0; index < 4; index++) {
                        led.plot(3, penY)
                        penY += 1
                    }
                }
                led.plot(0, 2)
                led.plot(1, 2)
            }
        } else {
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    }
}
