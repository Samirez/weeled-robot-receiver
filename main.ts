radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 0) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        motobit.enable(MotorPower.Off)
    } else if (receivedNumber == 1) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            . # . . .
            `)
        motobit.enable(MotorPower.Off)
    } else if (receivedNumber == 2) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 100)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        motobit.enable(MotorPower.Off)
    } else if (receivedNumber == 3) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . #
            # . . # .
            . . . # .
            `)
        motobit.enable(MotorPower.Off)
    }
    basic.clearScreen()
})
radio.setGroup(2)
motobit.invert(Motor.Left, false)
motobit.invert(Motor.Right, true)
basic.forever(function () {
	
})
