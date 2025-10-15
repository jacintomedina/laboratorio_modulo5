let puntuacionUsuario: number = 0;
const mensaje = document.getElementById("mensaje-juego");

const muestraPuntuacion = (): void => {
  let puntuacion = document.getElementById("puntuacion");
  if (puntuacion && puntuacion instanceof HTMLDivElement) {
    puntuacion.innerHTML = puntuacionUsuario.toString();
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const dameCarta = (): number => {
  let cartaAleatoria: number = Math.floor(Math.random() * 10) + 1;
  if (cartaAleatoria > 7) {
    cartaAleatoria = cartaAleatoria + 2;
  }
  return cartaAleatoria;
};

const obtenerValorCarta = (carta: number): number => {
  if (carta >= 10 && carta <= 12) {
    return 0.5;
  }
  return carta;
};

const mostrarCarta = (cartaAleatoria: number): void => {
  let cartaVisible = document.getElementById("carta-visible");
  let rutaImagen = "";
  let mensajeDefault = "";

  switch (cartaAleatoria) {
    case 1:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      mensajeDefault = "Ups! Parece que algo ha fallado. Vuelve a empezar";
      break;
  }

  if (cartaVisible instanceof HTMLImageElement) {
    cartaVisible.src = rutaImagen;
  } else {
    if (cartaVisible !== null && cartaVisible !== undefined) {
      cartaVisible.innerHTML = mensajeDefault;
    }
  }
};

const btnDameCarta = document.getElementById("btnDameCarta");
if (
  btnDameCarta !== null &&
  btnDameCarta !== undefined &&
  btnDameCarta instanceof HTMLButtonElement
) {
  btnDameCarta.addEventListener("click", () => {
    const cartaObtenida = dameCarta();
    mostrarCarta(cartaObtenida);
    const valorPuntos = obtenerValorCarta(cartaObtenida);
    puntuacionUsuario += valorPuntos;
    muestraPuntuacion();
    if (puntuacionUsuario > 7.5) {
      btnDameCarta.disabled = true;
      if (mensaje) {
        mensaje.innerHTML = "Game Over";
      }
      return finalizarPartida();
    }
  });
}

const btnMePlanto = document.getElementById("btnMePlanto");
const btnNuevaPartida = document.getElementById("btnNuevaPartida");

if (btnNuevaPartida) {
  btnNuevaPartida.addEventListener("click", () => {
    window.location.reload();
  });
}

const finalizarPartida = (): void => {
  if (btnNuevaPartida) {
    btnNuevaPartida.classList.remove("oculto");
  }
  if (btnMePlanto instanceof HTMLButtonElement) {
    btnMePlanto.disabled = true;
  }
  if (btnDameCarta instanceof HTMLButtonElement) {
    btnDameCarta.disabled = true;
  }
};

if (
  btnMePlanto &&
  btnMePlanto instanceof HTMLButtonElement &&
  mensaje instanceof HTMLDivElement
) {
  btnMePlanto.addEventListener("click", () => {
    if (puntuacionUsuario > 7.5) {
      btnMePlanto.disabled = true;
    } else if (puntuacionUsuario === 7.5) {
      mensaje.innerHTML = "¡Lo has clavado!¡Enhorabuena!";
    } else if (puntuacionUsuario < 5) {
      mensaje.innerHTML = "Has sido muy conservador";
    } else if (puntuacionUsuario === 5) {
      mensaje.innerHTML = "Te ha entrado el canguelo, eh?";
    } else if (puntuacionUsuario >= 5) {
      mensaje.innerHTML = "Casi casi...";
    }
    finalizarPartida();
  });
}
