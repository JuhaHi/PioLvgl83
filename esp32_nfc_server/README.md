# ESP32 NFC Reader PWA Server

This project hosts a Progressive Web App (PWA) on an ESP32 that can read NFC tags using a compatible smartphone's browser.

## Prerequisites

1.  **Arduino IDE:** Make sure you have the Arduino IDE installed.
2.  **ESP32 Board Support:** Ensure you have the ESP32 board support package installed in your Arduino IDE. You can find instructions [here](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html).

## Required Libraries

You need to install the following libraries through the Arduino Library Manager:

1.  **ESPAsyncWebServer:** Go to `Sketch > Include Library > Manage Libraries...` and search for `ESPAsyncWebServer`.
2.  **AsyncTCP:** `ESPAsyncWebServer` depends on this library. Search for `AsyncTCP` in the Library Manager and install it.

## Setup Instructions

### 1. Upload Filesystem Data (SPIFFS)

The PWA files (`index.html`, `styles.css`, etc.) need to be uploaded to the ESP32's SPIFFS (SPI Flash File System).

1.  **Install the Upload Tool:** You need the "ESP32 Sketch Data Upload" tool. Follow the installation instructions [here](https://github.com/me-no-dev/arduino-esp32fs-plugin).
2.  **Place Files:** Make sure all the web files (`index.html`, `styles.css`, `script.js`, `manifest.json`, `service-worker.js`) are in the `data` directory inside your sketch folder (`esp32_nfc_server`).
3.  **Upload:** In the Arduino IDE, go to `Tools > ESP32 Sketch Data Upload`. This will upload the contents of the `data` directory to the ESP32's SPIFFS.

### 2. Upload the Arduino Sketch

1.  Open the `esp32_nfc_server.ino` file in the Arduino IDE.
2.  Select your ESP32 board from `Tools > Board`.
3.  Select the correct COM port from `Tools > Port`.
4.  Click the "Upload" button to compile and upload the sketch to your ESP32.

## How to Use

1.  After the ESP32 has been programmed, it will create a Wi-Fi Access Point.
2.  On your smartphone, connect to the following Wi-Fi network:
    *   **SSID:** `ESP32-NFC-PWA`
    *   **Password:** `password123`
3.  Once connected, open a web browser on your smartphone.
4.  Navigate to the following address: `http://192.168.4.1`
5.  The NFC Reader PWA will load. You can now use it to scan NFC tags as intended.

**Note:** The Web NFC API requires a secure context (HTTPS). While this setup uses HTTP, modern mobile browsers may allow it to work for IP addresses like `192.168.4.1`, which are considered "potentially trustworthy." If it doesn't work, you may need a more advanced setup involving a reverse proxy to provide an HTTPS connection.
