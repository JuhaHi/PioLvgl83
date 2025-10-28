# ESP32 NFC Reader PWA Server (PlatformIO)

This project hosts a Progressive Web App (PWA) on an ESP32 that can read NFC tags using a compatible smartphone's browser. This version is configured for use with PlatformIO.

## Prerequisites

1.  **Visual Studio Code:** Make sure you have VS Code installed.
2.  **PlatformIO IDE Extension:** Install the official PlatformIO IDE extension from the VS Code Marketplace.

## Setup Instructions

PlatformIO will automatically handle the installation of the required libraries (`ESPAsyncWebServer` and its dependencies) when you build the project for the first time.

### 1. Upload Filesystem Data (SPIFFS)

The PWA files (`index.html`, `styles.css`, etc.) need to be uploaded to the ESP32's SPIFFS (SPI Flash File System).

1.  **Place Files:** Make sure all the web files (`index.html`, `styles.css`, `script.js`, `manifest.json`, `service-worker.js`) are in the `data` directory inside the project folder.
2.  **Upload:** In VS Code, open the PlatformIO sidebar, find your project environment (e.g., `esp32dev`), and under the "Platform" section, click on "Upload Filesystem Image". This will build the SPIFFS image and upload it to the ESP32.

### 2. Build and Upload the Main Application

1.  After uploading the filesystem, you can build and upload the main application code.
2.  In the PlatformIO sidebar, under the "Project Tasks" section for your environment, click on "Upload". This will compile the source code and upload the firmware to the ESP32.

## How to Use

1.  After the ESP32 has been programmed, it will create a Wi-Fi Access Point.
2.  On your smartphone, connect to the following Wi-Fi network:
    *   **SSID:** `ESP32-NFC-PWA`
    *   **Password:** `password123`
3.  Once connected, open a web browser on your smartphone.
4.  Navigate to the following address: `http://192.168.4.1`
5.  The NFC Reader PWA will load. You can now use it to scan NFC tags as intended.

**Note:** The Web NFC API requires a secure context (HTTPS). While this setup uses HTTP, modern mobile browsers may allow it to work for IP addresses like `192.168.4.1`, which are considered "potentially trustworthy." If it doesn't work, you may need a more advanced setup involving a reverse proxy to provide an HTTPS connection.
