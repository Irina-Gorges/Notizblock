// Notizen
let notesTitles = ["Dringend", "Termine", "Haushalt"];
let notes = ["Rasen mähen", "einkaufen", "Wäsche waschen"];

let trashNotesTitles = [];
let trashNotes = [];
let deletedNotes = [];

// Notizen anzeigen lassen
// --> wann werden sie angezeigt
function renderNotes() {
    // definieren wo sie anzuzeigen sind
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function init() {
    renderNotes();
    saveToLocalStorage();
    getFromLocalStorage();
}

function renderTrashNotes(indexNote) {
    // definieren wo sie anzuzeigen sind
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";

    for (
        let indexTrashNotes = 0;
        indexTrashNotes < trashNotes.length;
        indexTrashNotes++
    ) {
        trashContentRef.innerHTML += getTrashNoteTemplate(
            indexTrashNotes,
            indexNote
        );
    }
}

function renderDeleteNotes() {
    // definieren wo sie anzuzeigen sind
    let deletedContentRef = document.getElementById("deleted_content");
    deletedContentRef.innerHTML = "";

    for (
        let indexDeletedNotes = 0;
        indexDeletedNotes < deletedNotes.length;
        indexDeletedNotes++
    ) {
        deletedContentRef.innerHTML += getDeleteNoteTemplate(indexDeletedNotes);
    }
}

// Notizen hinzufügen
function addNote() {
    // Eingabe auslesen
    let noteInputRef = document.getElementById("note_input");
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    // Eingabe den Notizen hinzufügen

    renderNotes();
    // Eingabe anzeigen lassen

    noteInputRef.value = "";
    // Inputfeld leeren

    saveToLocalStorage();
}

function removetoTrashNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNotesTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNotesTitle[0]);
    renderNotes();
    renderTrashNotes(indexNote);
    // Anzeige muss upgedatet werden
}

function deleteNote(indexTrashNotes, indexNote) {
    let deletedNote = trashNotes.splice(indexTrashNotes, 1);
    deletedNotes.splice(deletedNote);
    delFromLocalStorage(indexNote);
    renderTrashNotes();
    renderDeleteNotes();
    // Anzeige muss upgedatet werden
}

// function finaldeleteNote(indexDeletedNotes) {
//     let finalDNote = deletedNotes.splice(indexDeletedNotes, 1);
//     finalDNote.shift(finalDNote);
//     renderTrashNotes();
//     renderDeleteNotes();
//     // Anzeige muss upgedatet werden
// }

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("notes"));
    if (myArr != null) {
        notes = myArr;
    }
}

// function delFromLocalStorage(i) {
//     localStorage.removeItem(i);
// }

function delFromLocalStorage(i) {
    // Hole das aktuelle Array aus dem localStorage
    let myArr = JSON.parse(localStorage.getItem("notes"));

    // Lösche das Element mit Index i aus dem Array
    myArr.splice(i, 1);

    // Aktualisiere ggf. die globale Variable `notes`
    notes = myArr;

    // Speichere das aktualisierte Array wieder im localStorage
    saveToLocalStorage();
}
