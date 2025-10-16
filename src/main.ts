let puntuacionUsuario: number = 0;
const mensaje = document.getElementById("mensaje-juego");
let cartaVisible = document.getElementById("carta-visible");

const muestraPuntuacion = (): void => {
  let puntuacion = document.getElementById("puntuacion");
  if (puntuacion && puntuacion instanceof HTMLDivElement) {
    puntuacion.innerHTML = puntuacionUsuario.toString();
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const dameNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const dameCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    numeroAleatorio = numeroAleatorio + 2;
  }
  return numeroAleatorio;
};

const obtenerValorCarta = (carta: number): number => {
  if (carta >= 10 && carta <= 12) {
    return 0.5;
  }
  return carta;
};

const obtenerUrlCarta = (cartaAleatoria: number): string => {
  let rutaImagen = "";
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
      return "Ups! Parece que algo ha fallado. Vuelve a empezar";
      break;
  }
  return rutaImagen;
};

const mostrarUrlCarta = (urlCarta: string) => {
  if (cartaVisible instanceof HTMLImageElement) {
    cartaVisible.src = urlCarta;
  } else {
    if (cartaVisible !== null && cartaVisible !== undefined) {
      cartaVisible.innerHTML =
        "Ups! Parece que algo ha fallado. Vuelve a empezar";
    }
  }
};

const sumarPuntos = (puntosCarta: number) => {
  return puntuacionUsuario + puntosCarta;
};

const actualizarPuntuacionUsuario = (nuevosPuntos: number) => {
  puntuacionUsuario = nuevosPuntos;
};

const dameCartaF = () => {
  const numeroAleatorio = dameNumeroAleatorio();
  const cartaObtenida = dameCarta(numeroAleatorio);
  const url = obtenerUrlCarta(cartaObtenida);
  mostrarUrlCarta(url);
  const valorPuntos = obtenerValorCarta(cartaObtenida);
  const puntosSumados = sumarPuntos(valorPuntos);
  actualizarPuntuacionUsuario(puntosSumados);
  muestraPuntuacion();
  if (puntuacionUsuario > 7.5) {
    return finalizarPartida();
  }
};

const btnDameCarta = document.getElementById("btnDameCarta");
if (
  btnDameCarta !== null &&
  btnDameCarta !== undefined &&
  btnDameCarta instanceof HTMLButtonElement
) {
  btnDameCarta.addEventListener("click", () => {
    dameCartaF();
  });
}

const btnMePlanto = document.getElementById("btnMePlanto");
const btnNuevaPartida = document.getElementById("btnNuevaPartida");

const resetearPartida = (): void => {
  actualizarPuntuacionUsuario(0);
  muestraPuntuacion();
  mostrarUrlCarta(
    "https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg?raw=true"
  );

  if (mensaje) {
    mensaje.innerHTML = "";
  }
  if (btnDameCarta instanceof HTMLButtonElement) {
    btnDameCarta.disabled = false;
  }
  if (btnMePlanto instanceof HTMLButtonElement) {
    btnMePlanto.disabled = false;
  }

  if (btnNuevaPartida) {
    btnNuevaPartida.classList.add("oculto");
  }
};

if (btnNuevaPartida) {
  btnNuevaPartida.addEventListener("click", resetearPartida);
}

const deshabilitarMeplanto = (mePlantoDeshabilitado: boolean): void => {
  if (btnMePlanto instanceof HTMLButtonElement) {
    btnMePlanto.disabled = mePlantoDeshabilitado;
  }
};

const deshabilitarDameCarta = (dameCartaDeshabilitado: boolean): void => {
  if (btnDameCarta instanceof HTMLButtonElement) {
    btnDameCarta.disabled = dameCartaDeshabilitado;
  }
};

const finalizarPartida = (): void => {
  if (mensaje) {
    mensaje.innerHTML = obtenerMensaje();
  }
  if (btnNuevaPartida) {
    btnNuevaPartida.classList.remove("oculto");
  }
  deshabilitarMeplanto(true);
  deshabilitarDameCarta(true);
};

const obtenerMensaje = (): string => {
  if (puntuacionUsuario === 7.5) {
    return "¡Lo has clavado!¡Enhorabuena!";
  } else if (puntuacionUsuario > 7.5) {
    return "Game Over";
  } else if (puntuacionUsuario < 5) {
    return "Has sido muy conservador";
  } else if (puntuacionUsuario === 5) {
    return "Te ha entrado el canguelo, eh?";
  } else if (puntuacionUsuario >= 5) {
    return "Casi casi...";
  } else {
    return "Upss... No tendrías que pasar por aquí";
  }
};

const mostrarMensaje = (mensajeCuandoMePlanto: string) => {
  if (mensaje instanceof HTMLDivElement) {
    mensaje.innerHTML = mensajeCuandoMePlanto;
  }
};

if (
  btnMePlanto &&
  btnMePlanto instanceof HTMLButtonElement &&
  mensaje instanceof HTMLDivElement
) {
  btnMePlanto.addEventListener("click", () => {
    deshabilitarMeplanto(true);
    const mensaje = obtenerMensaje();
    mostrarMensaje(mensaje);
    finalizarPartida();
  });
}
