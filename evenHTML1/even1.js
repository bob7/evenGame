console.log("Hello1");

let title = document.getElementById("title");
let ALine = document.getElementById("ALine");
let DLine = document.getElementById("DLine");
let loseNumer = document.getElementById("loseNumber");
let label = document.getElementById("label");

function refreshCount () {
	let aCell = firstA;
	while (aCell != null) {
		if (aCell.style.backgroundColor == "black") {
			count ++;
		}
		aCell = aCell.cellNext;
	}
	label.textContent = "Uncleared cells : " + count;
}

function generateACell (previous, next, empty) {
	let cell = document.createElement("td");
	cell.style.padding = "10px";
	cell.style.backgroundColor = empty ? "yellow" : "black";
	cell.cellPrevious = previous;
	cell.cellNext = next;

	cell.onclick = function () {
		let newACell = generateACell(cell, cell.cellNext, false);
		cell.cellNext = newACell;
		let newDCell = generateDCell(newACell, true);
		newACell.DCell = newDCell;
		newDCell.ACell = newACell;
		refreshCount();
	};

	if (next != null) {
		ALine.insertBefore(cell, next);
	} else {
		ALine.appendChild(cell);
	}

	return cell;
}
function generateDCell (aCell, empty) {
	let cell = document.createElement("td");
	cell.style.padding = "10px";
	cell.style.backgroundColor = empty ? "yellow" : "black";

	cell.onclick = function () {
		if (cell.style.backgroundColor == "yellow") {
			cell.style.backgroundColor = "black";
			let aCell = cell.ACell;
			while (aCell != null) {
				aCell.style.backgroundColor = "yellow";
				aCell = aCell.cellNext;
			}
		}

		refreshCount();

		let succ = -1;
		let dCell = cell;
		while (dCell != null && dCell.style.backgroundColor == "black") {
			dCell = dCell.ACell.cellPrevious != null ? dCell.ACell.cellPrevious.DCell : null;
			succ ++;
		}
		dCell = cell;
		while (dCell != null && dCell.style.backgroundColor == "black") {
			dCell = dCell.ACell.cellNext != null ? dCell.ACell.cellNext.DCell : null;
			succ ++;
		}
		if (succ >= loseNumer.value) {
			label.textContent = "Player D loses";
		}
	};

	if (aCell != null && aCell.cellNext != null) {
		DLine.insertBefore(cell, aCell.cellNext.DCell);
	} else {
		DLine.appendChild(cell);
	}

	return cell;
}
let firstA;

function init () {
	firstA = generateACell(null, null, false);
	let firstD = generateDCell(firstA, true);
	firstA.DCell = firstD;
	firstD.ACell = firstA;
	
	refreshCount();
}

init();