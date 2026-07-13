// Datos del negocio — fuente única para contacto, horarios y redes.

export const site = {
  name: "Asahi Sushi Bar",
  tagline: "El sol nace en cada bocado.",
  kanji: "朝日",
  concept:
    "Sushi vibrante y urbano que rompe moldes. Fusionamos la tradición japonesa con audacia contemporánea para crear experiencias memorables.",
  city: "Leganés · Madrid",
  address: {
    street: "C/ Ntra. Sra. de la Macarena, 13",
    city: "Leganés, Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=C%2F+Ntra.+Sra.+de+la+Macarena+13+Legan%C3%A9s+Madrid",
    embed:
      "https://www.google.com/maps?q=C%2F+Ntra.+Sra.+de+la+Macarena+13+Legan%C3%A9s+Madrid&output=embed",
  },
  phone: {
    display: "+34 673 836 683",
    tel: "+34673836683",
    whatsapp: "34673836683",
  },
  instagram: {
    handle: "@AsahiSushiOficial",
    url: "https://www.instagram.com/asahisushioficial/",
  },
  hours: [
    { day: "Lunes", value: "Cerrado", closed: true },
    { day: "Martes", value: "11:00 – 23:00", closed: false },
    { day: "Miércoles", value: "11:00 – 23:00", closed: false },
    { day: "Jueves", value: "11:00 – 23:00", closed: false },
    { day: "Viernes", value: "11:00 – 00:00", closed: false },
    { day: "Sábado", value: "11:00 – 00:00", closed: false },
    { day: "Domingo", value: "11:00 – 23:00", closed: false },
  ],
  values: [
    { title: "Directa", desc: "Claridad visual sin concesiones." },
    { title: "Enérgica", desc: "Contrastes vibrantes y dinámicos." },
    { title: "Premium", desc: "Calidad excepcional en cada detalle." },
  ],
} as const;

/** Mensaje pre-rellenado para el enlace de WhatsApp. */
export const whatsappUrl = (
  text = "¡Hola! Me gustaría reservar una mesa en Asahi Sushi Bar.",
) => `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(text)}`;
