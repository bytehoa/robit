basic.forever(function () {
    robit.MotorRunDual(
    robit.Motors.M1,
    50,
    robit.Motors.M2,
    50
    )
    basic.pause(3000)
    robit.MotorRunDual(
    robit.Motors.M1,
    -50,
    robit.Motors.M2,
    -50
    )
    basic.pause(3000)
})
