import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  data = [
    {
      "id": 0,
      "nome": "Tempestive S.p.A",
      "descrizioneCorta": "Descrizione dell'azienda introduttiva",
      "descrizioneCompleta": "Descrizione completa dell'azienda , quello che fa, ciò che offre ecc",
      "link": "https://tempestive.it/",
      "posizione": "Pordenone",
      "distanza": "28",
      "immagine": "https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
    },
    {
      "id": 1,
      "nome": "Martelli S.p.A",
      "descrizioneCorta": "Descrizione dell'azienda introduttiva",
      "descrizioneCompleta": "Descrizione completa dell'azienda , quello che fa, ciò che offre ecc",
      "link": "https://Martell.it/",
      "posizione": "Sacile",
      "distanza": "10",
      "immagine": "https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
    },
    {
      "id": 2,
      "nome": "Alex S.p.A",
      "descrizioneCorta": "Descrizione dell'azienda introduttiva",
      "descrizioneCompleta": "Descrizione completa dell'azienda , quello che fa, ciò che offre ecc",
      "link": "https://Martell.it/",
      "posizione": "Roma",
      "distanza": "1235",
      "immagine": "https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
    },
    {
      "id": 3,
      "nome": "Luca S.p.A",
      "descrizioneCorta": "Descrizione dell'azienda introduttiva",
      "descrizioneCompleta": "Descrizione completa dell'azienda , quello che fa, ciò che offre ecc",
      "link": "https://Martell.it/",
      "posizione": "Milano",
      "distanza": "745",
      "immagine": "https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
    }
  ]
  
  constructor() { }
}
