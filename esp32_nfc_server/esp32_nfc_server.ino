#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>

// Set your Access Point details
const char* ssid = "ESP32-NFC-PWA";
const char* password = "password123";

AsyncWebServer server(80);

void setup(){
  Serial.begin(115200);

  // Initialize SPIFFS
  if(!SPIFFS.begin(true)){
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }

  // Start Access Point
  WiFi.softAP(ssid, password);
  Serial.println("\nAccess Point started");
  Serial.print("IP Address: ");
  Serial.println(WiFi.softAPIP());

  // Serve the PWA files
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/index.html", "text/html");
  });

  server.serveStatic("/", SPIFFS, "/");

  // Start server
  server.begin();
  Serial.println("HTTP server started");
}

void loop(){
  // Keep server running
}
