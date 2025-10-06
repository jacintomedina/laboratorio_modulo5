let turnoActual: number = 0;
const numeroPrincipal = document.getElementById("numero-turno");
const atras = document.getElementById("atras");
const adelante = document.getElementById("adelante");
const reset = document.getElementById("reset");

let numeroManual = document.getElementById("cambio-manual") as HTMLInputElement;
const btnAsignar = document.getElementById("btn-asignar");

function actualizarNumeroPrincipal(): void {
  if (numeroPrincipal !== null && numeroPrincipal !== undefined) {
    numeroPrincipal.textContent = turnoActual.toString().padStart(2, "0");
  }
}

const anterior = () => {
  turnoActual = turnoActual - 1;
  if (turnoActual < 0) {
    turnoActual = 0;
  }
  actualizarNumeroPrincipal();
};

const siguiente = () => {
  turnoActual = turnoActual + 1;
  actualizarNumeroPrincipal();
};

const resetTurno = () => {
  turnoActual = turnoActual = 0;
  actualizarNumeroPrincipal();
};

if (atras !== null && atras !== undefined) {
  atras.addEventListener("click", anterior);
}

if (adelante !== null && adelante !== undefined) {
  adelante.addEventListener("click", siguiente);
}

if (reset !== null && reset !== undefined) {
  reset.addEventListener("click", resetTurno);
}

function cambiarNumeroManual(): void {
  if (numeroManual !== null && numeroManual !== undefined) {
    numeroManual = turnoActual;
  }
}

if (btnAsignar !== null && btnAsignar !== undefined) {
  btnAsignar.addEventListener("click", cambiarNumeroManual());
}

actualizarNumeroPrincipal();
