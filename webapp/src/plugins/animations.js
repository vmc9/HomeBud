import Bounce from 'bounce.js'

const spin = new Bounce()
spin
    .rotate({
        from: 0,
        to: 360,
        easing: 'bounce',
        duration: 1000,
        delay: 0,
        bounces: 4,
        stiffness: 3
    })
const makeSpin = (id)=>{
    spin.applyTo(document.getElementById(id))
}
export { makeSpin }