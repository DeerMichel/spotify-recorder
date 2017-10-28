// recorder - record audio streams
// (c) 2017 Micha Hanselmann

"use strict"

// imports
const record = require("node-record-lpcm16")

// start recording
exports.start = (destFile) => {
    record.start({
        // device: "",
        channels: 2,
        sampleRate: 44100,
        silence: "0:05",
        threshold: 0.01,
        verbose: true
    }).pipe(destFile)
}

// stop recording
exports.stop = () =>
    record.stop()