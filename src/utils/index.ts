export function formatearDinero(cantidad: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cantidad);
}

export function obtenerPathImagen(imagenPath: string) {
  const cloudinaryBaseUrl = "https://res.cloudinary.com";

  if (imagenPath.startsWith(cloudinaryBaseUrl)) {
    return imagenPath;
  } else {
    return `/productos/${imagenPath}.jpg`;
  }
}
