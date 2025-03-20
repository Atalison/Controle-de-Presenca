#include <MFRC522.h>
#include <WiFi.h>
#include <SPI.h>

#define SS_PIN 5
#define RST_PIN 22

MFRC522 mfrc522(SS_PIN, RST_PIN);

const char* ssid = "///";
const char* pass = "///";

// Lista de UIDs autorizados (4 bytes cada)
byte uidAutorizado[][4] = {
  {0x33, 0xA3, 0xD6, 0x2F},
  {0x08, 0xF4, 0x2E, 0x42}
};

const int numCartoes = sizeof(uidAutorizado) / sizeof(uidAutorizado[0]); // Número de cartões cadastrados

void setup() {
  Serial.begin(115200);
  SPI.begin();
  mfrc522.PCD_Init();
  WiFi.begin(ssid, pass);

  Serial.print("Conectando a rede...");

  while (WiFi.status() != WL_CONNECTED) {
    delay (500);
    Serial.print(".");
  }

  Serial.println("\nWi-Fi Conectado!");
  Serial.println("Aproxime um cartão RFID...");
}
  
void loop() {
  if (!mfrc522.PICC_IsNewCardPresent()) return;
  if (!mfrc522.PICC_ReadCardSerial()) return;


  // Exibe o UID do cartão no Serial Monitor
  Serial.print("UID: ");
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(mfrc522.uid.uidByte[i], HEX);
  }
  Serial.println();

  // Verifica se o UID lido está na lista de autorizados
  bool autorizado = false;
  for (int i = 0; i < numCartoes; i++) {
    if (memcmp(mfrc522.uid.uidByte, uidAutorizado[i], mfrc522.uid.size) == 0) {
      autorizado = true;
      break;
    }
  }

  if (autorizado) {
    Serial.println("Acesso Permitido!");
  } else {
    Serial.println("Acesso Negado!");
  }

  mfrc522.PICC_HaltA();
}
