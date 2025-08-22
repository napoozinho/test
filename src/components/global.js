export default function () {
    performance.mark('target-point')
    performance.measure('start-to-target', 'start-point', 'target-point')
    console.log(performance.getEntriesByName('start-to-target')[0].duration, 'ms')
    console.log("wtf")
}
