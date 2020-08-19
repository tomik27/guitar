let note_number = 0
let notes = [262]
notes.push(294)
notes.push(330)
notes.push(349)
notes.push(392)
notes.push(440)
notes.push(494)
notes.push(523)
basic.forever(function () {
    note_number = input.lightLevel() / 25
    if (note_number > 7) {
        note_number = 7
    }
    music.playTone(notes[note_number], music.beat(BeatFraction.Eighth))
})
