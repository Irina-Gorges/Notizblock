// Notizen löschen
function getNoteTemplate(indexNote) {
    return `<p>&#9654; ${notesTitles[indexNote]} / ${notes[indexNote]}<button onclick="removetoTrashNote(${indexNote})">erledigt</button></p>`;
}

function getTrashNoteTemplate(indexTrashNotes, indexNote) {
    return `<div class="deleted"><p class="deletetext">&#9654; ${trashNotesTitles[indexTrashNotes]} / ${trashNotes[indexTrashNotes]}</p><button onclick="deleteNote(${indexTrashNotes}, ${indexNote})">löschen</button></div>`;
}

// function getDeleteNoteTemplate(indexDeletedNotes) {
//     return `<p> ${deletedNotes[indexDeletedNotes]}<button onclick="finaldeleteNote(${indexDeletedNotes})">entgültig löschen</button></p>`;
// }
