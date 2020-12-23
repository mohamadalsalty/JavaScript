const noteEl = document.querySelector('.note');
const addBtn = document.getElementById('add');
const notes = JSON.parse(localStorage.getItem("notes"));



if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}


function addNewNote(text = ""){
	const note = document.createElement('div');
	note.classList.add('note');

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;


    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
	document.body.appendChild(note);



    textArea.value = text;
    main.innerHTML = marked(text);
	editBtn.addEventListener('click',(editFun)=>{
		main.classList.toggle('hidden');
		textArea.classList.toggle('hidden');
	});


	deleteBtn.addEventListener('click',(editFun)=>{
		note.remove();
		updateLS();
	});


	textArea.addEventListener('input',(TextInput)=>{
		const {value} = TextInput.target;
		main.innerHTML = marked(value);

		updateLS();
	});


	document.body.appendChild(note);

}


function updateLS() {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];
    notesText.forEach((note) => {
        notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}



addBtn.addEventListener('click',()=>{
	addNewNote();
});



/**
<div class="note">
	<div class="tools">
		<button class="edit"><i class="fas fa-edit"></i></button>
		<button class="delete"><i class="fas fa-trash-alt"></i></button>
	</div>

	<div class="main hidden"></div>

	<textarea></textarea>

</div>

**/
