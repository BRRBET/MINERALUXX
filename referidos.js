// Lista de códigos predefinidos (más de 300 códigos de 6 dígitos)
const validReferralCodes = [
  '73E8CL','A1B2C3', 'D4E5F6', 'G7H8I9', 'J1K2L3', 'M4N5O6', 'P7Q8R9', 'S1T2U3', 'V4W5X6', 'Y7Z8A9', 'B1C2D3',
  'C4D5E6', 'F7G8H9', 'I1J2K3', 'L4M5N6', 'O7P8Q9', 'R1S2T3', 'U4V5W6', 'X7Y8Z9', 'A1D2G3', 'B4H5I6',
  'C7J8K9', 'E1L2M3', 'F4O5P6', 'G7Q8R9', 'H1S2T3', 'I4U5V6', 'J7W8X9', 'K1Y2Z3', 'L4A5B6', 'M7C8D9',
  'N1E2F3', 'O4G5H6', 'P7I8J9', 'Q1K2L3', 'R4M5N6', 'S7O8P9', 'T1Q2R3', 'U4S5T6', 'V7W8X9', 'W1Y2Z3',
  'X4A5B6', 'Y7C8D9', 'Z1E2F3', 'A4G5H6', 'B7I8J9', 'C1K2L3', 'D4M5N6', 'E7O8P9', 'F1Q2R3', 'G4S5T6',
  'H7W8X9', 'I1Y2Z3', 'J4A5B6', 'K7C8D9', 'L1E2F3', 'M4G5H6', 'N7I8J9', 'O1K2L3', 'P4M5N6', 'Q7O8P9',
  'R1Q2R3', 'S4S5T6', 'T7V8W9', 'U1W2X3', 'V4Y5Z6', 'W7A8B9', 'X1C2D3', 'Y4E5F6', 'Z7G8H9', 'A1I2J3',
  'B4K5L6', 'C7M8N9', 'D1O2P3', 'E4Q5R6', 'F7S8T9', 'G1U2V3', 'H4W5X6', 'I7Y8Z9', 'J1A2B3', 'K4C5D6',
  'L7E8F9', 'M1G2H3', 'N4I5J6', 'O7K8L9', 'P1M2N3', 'Q4O5P6', 'R7Q8R9', 'S1S2T3', 'T4V5W6', 'U7W8X9',
  'V1Y2Z3', 'W4A5B6', 'X7C8D9', 'Y1E2F3', 'Z4G5H6', 'A7I8J9', 'B1K2L3', 'C4M5N6', 'D7O8P9', 'E1Q2R3',
  'F4S5T6', 'G7U8V9', 'H1W2X3', 'I4Y5Z6', 'J7A8B9', 'K1C2D3', 'L4E5F6', 'M7G8H9', 'N1I2J3', 'O4K5L6',
  'P7M8N9', 'Q1O2P3', 'R4Q5R6', 'S7S8T9', 'T1V2W3', 'U4W5X6', 'V7Y8Z9', 'W1A2B3', 'X4C5D6', 'Y7E8F9',
  'Z1G2H3', 'A4I5J6', 'B7K8L9', 'C1M2N3', 'D4O5P6', 'E7Q8R9', 'F1S2T3', 'G4U5V6', 'H7W8X9', 'I1Y2Z3',
  'J4A5B6', 'K7C8D9', 'L1E2F3', 'M4G5H6', 'N7I8J9', 'O1K2L3', 'P4M5N6', 'Q7O8P9', 'R1Q2R3', 'S4S5T6',
  'T7V8W9', 'U1W2X3', 'V4Y5Z6', 'W7A8B9', 'X1C2D3', 'Y4E5F6', 'Z7G8H9', 'A1I2J3', 'B4K5L6', 'C7M8N9',
  'D1O2P3', 'E4Q5R6', 'F7S8T9', 'G1U2V3', 'H4W5X6', 'I7Y8Z9', 'J1A2B3', 'K4C5D6', 'L7E8F9', 'M1G2H3',
  'N4I5J6', 'O7K8L9', 'P1M2N3', 'Q4O5P6', 'R7Q8R9', 'S1S2T3', 'T4V5W6', 'U7W8X9', 'V1Y2Z3', 'W4A5B6',
  'X7C8D9', 'Y1E2F3', 'Z4G5H6', 'A7I8J9', 'B1K2L3', 'C4M5N6', 'D7O8P9', 'E1Q2R3', 'F4S5T6', 'G7U8V9',
  'H1W2X3', 'I4Y5Z6', 'J7A8B9', 'K1C2D3', 'L4E5F6', 'M7G8H9', 'N1I2J3', 'O4K5L6', 'P7M8N9', 'Q1O2P3',
  'R4Q5R6', 'S7S8T9', 'T1V2W3', 'U4W5X6', 'V7Y8Z9', 'W1A2B3', 'X4C5D6', 'Y7E8F9', 'Z1G2H3', 'A4I5J6',
  'B7K8L9', 'C1M2N3', 'D4O5P6', 'E7Q8R9', 'F1S2T3', 'G4U5V6', 'H7W8X9', 'I1Y2Z3', 'J4A5B6', 'K7C8D9',
  'L1E2F3', 'M4G5H6', 'N7I8J9', 'O1K2L3', 'P4M5N6', 'Q7O8P9', 'R1Q2R3', 'S4S5T6', 'T7V8W9', 'U1W2X3',
  'V4Y5Z6', 'W7A8B9', 'X1C2D3', 'Y4E5F6', 'Z7G8H9', 'A1I2J3', 'B4K5L6', 'C7M8N9', 'D1O2P3', 'E4Q5R6',
  'F7S8T9', 'G1U2V3', 'H4W5X6', 'I7Y8Z9', 'J1A2B3', 'K4C5D6', 'L7E8F9', 'M1G2H3', 'N4I5J6', 'O7K8L9',
  'P1M2N3', 'Q4O5P6', 'R7Q8R9', 'S1S2T3', 'T4V5W6', 'U7W8X9', 'V1Y2Z3', 'W4A5B6', 'X7C8D9', 'Y1E2F3',
  'Z4G5H6', 'A7I8J9', 'B1K2L3', 'C4M5N6', 'D7O8P9', 'E1Q2R3', 'F4S5T6', 'G7U8V9', 'H1W2X3', 'I4Y5Z6',
  'J7A8B9', 'K1C2D3', 'L4E5F6', 'M7G8H9', 'N1I2J3', 'O4K5L6', 'P7M8N9', 'Q1O2P3', 'R4Q5R6', 'S7S8T9',
  'T1V2W3', 'U4W5X6', 'V7Y8Z9', 'W1A2B3', 'X4C5D6', 'Y7E8F9', 'Z1G2H3', 'A4I5J6', 'B7K8L9', 'C1M2N3',
  'D4O5P6', 'E7Q8R9', 'F1S2T3', 'G4U5V6', 'H7W8X9', 'I1Y2Z3', 'J4A5B6', 'K7C8D9', 'L1E2F3', 'M4G5H6',
  'N7I8J9', 'O1K2L3', 'P4M5N6', 'Q7O8P9', 'R1Q2R3', 'S4S5T6', 'T7V8W9', 'U1W2X3', 'V4Y5Z6', 'W7A8B9'
  'A1B2C3', 'D4E5F6', 'G7H8I9', 'J1K2L3', 'M4N5O6', 'P7Q8R9', 'S1T2U3', 'V4W5X6', 'Y7Z8A9', 'B1C2D3',
  'C4D5E6', 'F7G8H9', 'I1J2K3', 'L4M5N6', 'O7P8Q9', 'R1S2T3', 'U4V5W6', 'X7Y8Z9', 'A1D2G3', 'B4H5I6',
  'C7J8K9', 'E1L2M3', 'F4O5P6', 'G7Q8R9', 'H1S2T3', 'I4U5V6', 'J7W8X9', 'K1Y2Z3', 'L4A5B6', 'M7C8D9',
  'N1E2F3', 'O4G5H6', 'P7I8J9', 'Q1K2L3', 'R4M5N6', 'S7O8P9', 'T1Q2R3', 'U4S5T6', 'V7W8X9', 'W1Y2Z3',
  'A1B2C3', 'D4E5F6', 'G7H8I9', 'J1K2L3', 'M4N5O6', 'P7Q8R9', 'S1T2U3', 'V4W5X6', 'Y7Z8A9', 'B1C2D3',
  'C4D5E6', 'F7G8H9', 'I1J2K3', 'L4M5N6', 'O7P8Q9', 'R1S2T3', 'U4V5W6', 'X7Y8Z9', 'A1D2G3', 'B4H5I6',
  'C7J8K9', 'E1L2M3', 'F4O5P6', 'G7Q8R9', 'H1S2T3', 'I4U5V6', 'J7W8X9', 'K1Y2Z3', 'L4A5B6', 'M7C8D9',
  'N1E2F3', 'O4G5H6', 'P7I8J9', 'Q1K2L3', 'R4M5N6', 'S7O8P9', 'T1Q2R3', 'U4S5T6', 'V7W8X9', 'W1Y2Z3',
  'X4A5B6', 'Y7C8D9', 'Z1E2F3', 'A4G5H6', 'B7I8J9', 'C1K2L3', 'D4M5N6', 'E7O8P9', 'F1Q2R3', 'G4S5T6',
  'H7W8X9', 'I1Y2Z3', 'J4A5B6', 'K7C8D9', 'L1E2F3', 'M4G5H6', 'N7I8J9', 'O1K2L3', 'P4M5N6', 'Q7O8P9',
  'R1Q2R3', 'S4S5T6', 'T7V8W9', 'U1W2X3', 'V4Y5Z6', 'W7A8B9', 'X1C2D3', 'Y4E5F6', 'Z7G8H9', 'A1I2J3',
  'B4K5L6', 'C7M8N9', 'D1O2P3', 'E4Q5R6', 'F7S8T9', 'G1U2V3', 'H4W5X6', 'I7Y8Z9', 'J1A2B3', 'K4C5D6',
  'L7E8F9', 'M1G2H3', 'N4I5J6', 'O7K8L9', 'P1M2N3', 'Q4O5P6', 'R7Q8R9', 'S1S2T3', 'T4V5W6', 'U7W8X9',
  'V1Y2Z3', 'W4A5B6', 'X7C8D9', 'Y1E2F3', 'Z4G5H6', 'A7I8J9', 'B1K2L3', 'C4M5N6', 'D7O8P9', 'E1Q2R3',
  'F4S5T6', 'G7U8V9', 'H1W2X3', 'I4Y5Z6', 'J7A8B9', 'K1C2D3', 'L4E5F6', 'M7G8H9', 'N1I2J3', 'O4K5L6',
  'P7M8N9', 'Q1O2P3', 'R4Q5R6', 'S7S8T9', 'T1V2W3', 'U4W5X6', 'V7Y8Z9', 'W1A2B3', 'X4C5D6', 'Y7E8F9',
  'Z1G2H3', 'A4I5J6', 'B7K8L9', 'C1M2N3', 'D4O5P6', 'E7Q8R9', 'F1S2T3', 'G4U5V6', 'H7W8X9', 'I1Y2Z3',
  'J4A5B6', 'K7C8D9', 'L1E2F3', 'M4G5H6', 'N7I8J9', 'O1K2L3', 'P4M5N6', 'Q7O8P9', 'R1Q2R3', 'S4S5T6',
  'T7V8W9', 'U1W2X3', 'V4Y5Z6', 'W7A8B9', 'X1C2D3', 'Y4E5F6', 'Z7G8H9', 'A1I2J3', 'B4K5L6', 'C7M8N9',
  'D1O2P3', 'E4Q5R6', 'F7S8T9', 'G1U2V3', 'H4W5X6', 'I7Y8Z9', 'J1A2B3', 'K4C5D6', 'L7E8F9', 'M1G2H3',
  'N4I5J6', 'O7K8L9', 'P1M2N3', 'Q4O5P6', 'R7Q8R9', 'S1S2T3', 'T4V5W6', 'U7W8X9', 'V1Y2Z3', 'W4A5B6',
  'X7C8D9', 'Y1E2F3', 'Z4G5H6', 'A7I8J9', 'B1K2L3', 'C4M5N6', 'D7O8P9', 'E1Q2R3', 'F4S5T6', 'G7U8V9',
  'H1W2X3', 'I4Y5Z6', 'J7A8B9', 'K1C2D3', 'L4E5F6', 'M7G8H9', 'N1I2J3', 'O4K5L6', 'P7M8N9', 'Q1O2P3',
  'R4Q5R6', 'S7S8T9', 'T1V2W3', 'U4W5X6', 'V7Y8Z9', 'W1A2B3', 'X4C5D6', 'Y7E8F9', 'Z1G2H3', 'A4I5J6',
  'B7K8L9', 'C1M2N3', 'D4O5P6', 'E7Q8R9', 'F1S2T3', 'G4U5V6', 'H7W8X9', 'I1Y2Z3', 'J4A5B6', 'K7C8D9',
  'L1E2F3', 'M4G5H6', 'N7I8J9', 'O1K2L3', 'P4M5N6', 'Q7O8P9', 'R1Q2R3', 'S4S5T6', 'T7V8W9', 'U1W2X3',
  'V4Y5Z6', 'W7A8B9', 'X1C2D3', 'Y4E5F6', 'Z7G8H9', 'A1I2J3', 'B4K5L6', 'C7M8N9', 'D1O2P3', 'E4Q5R6',
  'F7S8T9', 'G1U2V3', 'H4W5X6', 'I7Y8Z9', 'J1A2B3', 'K4C5D6', 'L7E8F9', 'M1G2H3', 'N4I5J6', 'O7K8L9'
];
// Función para generar un código único de referido de 6 caracteres predefinidos
function generateReferralCode() {
  let referralCode = localStorage.getItem("referralCode");

  if (!referralCode) {
    // Seleccionar aleatoriamente un código de la lista predefinida
    referralCode = validReferralCodes[Math.floor(Math.random() * validReferralCodes.length)];

    // Verificar que el código no haya sido utilizado previamente
    const referrals = JSON.parse(localStorage.getItem("referrals")) || {};
    if (!referrals.hasOwnProperty(referralCode)) {
      const referrals = JSON.parse(localStorage.getItem("referrals")) || {};
      referrals[referralCode] = 0; // Inicializar contador de referidos
      localStorage.setItem("referrals", JSON.stringify(referrals));
    }
  }

  return referralCode;
}

// Función para manejar el registro de un nuevo usuario
function handleNewUserRegistration() {
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get("ref"); // Obtener el código de referido desde la URL

  if (referralCode) {
    const referrals = JSON.parse(localStorage.getItem("referrals")) || {};

    // Validar si el código existe en la lista predefinida
    if (validReferralCodes.includes(referralCode)) {
      // Validar si el código ya está en la lista de referidos
      if (referrals.hasOwnProperty(referralCode)) {
        referrals[referralCode] += 1; // Incrementar el contador de referidos
      } else {
        referrals[referralCode] = 1; // Si el código no existe, lo agregamos con un contador inicial
      }
      localStorage.setItem("referrals", JSON.stringify(referrals));
      alert("¡Registro exitoso con el código de invitación!");
    } else {
      alert("Código de invitación inválido. Por favor, verifica el enlace.");
    }
  }
}
