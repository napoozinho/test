function global () {
    performance.mark('target-point');
    performance.measure('start-to-target', 'start-point', 'target-point');
    console.log(performance.getEntriesByName('start-to-target')[0].duration, 'ms');
    console.log("wtf");
}

export { global as default };
//# sourceMappingURL=global-BvmTRmvX.js.map
