import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {


  data = [
    {
      "nome": "Colosseo",
      "localita": ["Roma"],
      "tipoInterese": ["Storico", "Paesaggistico"],
      "descrizione": "The Colosseum, also named the Flavian Amphitheater, is a large amphitheater in Rome. It was built during the reign of the Flavian emperors as a gift to the Roman people.",
      "popolarita": 5,
      "stato": {
        "aperto": true,
        "causaChiusura": null,
        "periodoApertura": "Tutto l'anno",
        "orari": {
          "apertura": "9:00",
          "chiusura": "22:30"
        }
      },
      "prevendite": {
        "giornaliero": [
          {
            "giorno": "23/08/2021",
            "quantita": 123
          },
          {
            "giorno": "24/08/2021",
            "quantita": 87
          },
          {
            "giorno": "25/08/2021",
            "quantita": 102
          }
          ],
        "settimanale": [
          {
            "periodo": {
            "da": "21/08/2021",
            "a":"28/08/2021"
              
            },
            "quantita": 57
          }
          ]
      },
      "contapersone": {
        "entrate": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 359,
            "media": 467,
            "massimo": 842
          }
        },
        "uscite": {
          "ultimaOra": 272,
          "mediaOra": {
            "minimo": 123,
            "media": 251,
            "massimo": 300
          }
        },
        "presenti": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 353,
            "media": 521,
            "massimo": 784
          },
          "permanenza": [
            {
              "oraIngresso": "9:00",
              "tempo": "230"
            },
            {
              "oraIngresso": "10:00",
              "tempo": "200"
            },
            {
              "oraIngresso": "11:00",
              "tempo": "177"
            }
            ]
        }
      }
    },
    {
      "nome": "Piazza San Marco",
      "localita": ["Venezia"],
      "tipoInterese": ["Storico", "Paesaggistico"],
      "descrizione": "Piazza San Marco often known in English as St Mark's Square, is the principal public square of Venice, Italy",
      "popolarita": 5,
      "stato": {
        "aperto": true,
        "causaChiusura": null,
        "periodoApertura": "Tutto l'anno",
        "orari": {
          "apertura": "9:00",
          "chiusura": "22:30"
        }
      },
      "prevendite": {
        "giornaliero": [
          {
            "giorno": "23/08/2021",
            "quantita": 123
          },
          {
            "giorno": "24/08/2021",
            "quantita": 87
          },
          {
            "giorno": "25/08/2021",
            "quantita": 102
          }
          ],
        "settimanale": [
          {
            "periodo": {
            "da": "21/08/2021",
            "a":"28/08/2021"
              
            },
            "quantita": 57
          }
          ]
      },
      "contapersone": {
        "entrate": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 359,
            "media": 467,
            "massimo": 842
          }
        },
        "uscite": {
          "ultimaOra": 272,
          "mediaOra": {
            "minimo": 123,
            "media": 251,
            "massimo": 300
          }
        },
        "presenti": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 353,
            "media": 521,
            "massimo": 784
          },
          "permanenza": [
            {
              "oraIngresso": "9:00",
              "tempo": "230"
            },
            {
              "oraIngresso": "10:00",
              "tempo": "200"
            },
            {
              "oraIngresso": "11:00",
              "tempo": "177"
            }
            ]
        }
      }
    },
    {
      "nome": "Galleria degli Uffizi",
      "localita": ["Firenze"],
      "tipoInterese": ["Artistico", "storico"],
      "descrizione": "The Uffizi Gallery (Galleria degli Uffizi), is a prominent art museum",
      "popolarita": 5,
      "stato": {
        "aperto": true,
        "causaChiusura": null,
        "periodoApertura": "Tutto l'anno",
        "orari": {
          "apertura": "9:00",
          "chiusura": "22:30"
        }
      },
      "prevendite": {
        "giornaliero": [
          {
            "giorno": "23/08/2021",
            "quantita": 123
          },
          {
            "giorno": "24/08/2021",
            "quantita": 87
          },
          {
            "giorno": "25/08/2021",
            "quantita": 102
          }
          ],
        "settimanale": [
          {
            "periodo": {
            "da": "21/08/2021",
            "a":"28/08/2021"
              
            },
            "quantita": 57
          }
          ]
      },
      "contapersone": {
        "entrate": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 359,
            "media": 467,
            "massimo": 842
          }
        },
        "uscite": {
          "ultimaOra": 272,
          "mediaOra": {
            "minimo": 123,
            "media": 251,
            "massimo": 300
          }
        },
        "presenti": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 353,
            "media": 521,
            "massimo": 784
          },
          "permanenza": [
            {
              "oraIngresso": "9:00",
              "tempo": "230"
            },
            {
              "oraIngresso": "10:00",
              "tempo": "200"
            },
            {
              "oraIngresso": "11:00",
              "tempo": "177"
            }
            ]
        }
      }
    },
    {
      "nome": "Cinque Terre",
      "localita": ["Firenze", "Roma"],
      "tipoInterese": ["Paesaggistico"],
      "descrizione": "The Uffizi Gallery (Galleria degli Uffizi), is a prominent art museum",
      "popolarita": 5,
      "stato": {
        "aperto": true,
        "causaChiusura": null,
        "periodoApertura": "Tutto l'anno",
        "orari": {
          "apertura": "9:00",
          "chiusura": "22:30"
        }
      },
      "prevendite": {
        "giornaliero": [
          {
            "giorno": "23/08/2021",
            "quantita": 123
          },
          {
            "giorno": "24/08/2021",
            "quantita": 87
          },
          {
            "giorno": "25/08/2021",
            "quantita": 102
          }
          ],
        "settimanale": [
          {
            "periodo": {
            "da": "21/08/2021",
            "a":"28/08/2021"
              
            },
            "quantita": 57
          }
          ]
      },
      "contapersone": {
        "entrate": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 359,
            "media": 467,
            "massimo": 842
          }
        },
        "uscite": {
          "ultimaOra": 272,
          "mediaOra": {
            "minimo": 123,
            "media": 251,
            "massimo": 300
          }
        },
        "presenti": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 353,
            "media": 521,
            "massimo": 784
          },
          "permanenza": [
            {
              "oraIngresso": "9:00",
              "tempo": "230"
            },
            {
              "oraIngresso": "10:00",
              "tempo": "200"
            },
            {
              "oraIngresso": "11:00",
              "tempo": "177"
            }
            ]
        }
      }
    },
    {
      "nome": "Costiera Amalfitana",
      "localita": ["Pordenone", "Sacile"],
      "tipoInterese": ["Paesaggistico"],
      "descrizione": "The Uffizi Gallery (Galleria degli Uffizi), is a prominent art museum",
      "popolarita": 5,
      "stato": {
        "aperto": true,
        "causaChiusura": null,
        "periodoApertura": "Tutto l'anno",
        "orari": {
          "apertura": "9:00",
          "chiusura": "22:30"
        }
      },
      "prevendite": {
        "giornaliero": [
          {
            "giorno": "23/08/2021",
            "quantita": 123
          },
          {
            "giorno": "24/08/2021",
            "quantita": 87
          },
          {
            "giorno": "25/08/2021",
            "quantita": 102
          }
          ],
        "settimanale": [
          {
            "periodo": {
            "da": "21/08/2021",
            "a":"28/08/2021"
              
            },
            "quantita": 57
          }
          ]
      },
      "contapersone": {
        "entrate": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 359,
            "media": 467,
            "massimo": 842
          }
        },
        "uscite": {
          "ultimaOra": 272,
          "mediaOra": {
            "minimo": 123,
            "media": 251,
            "massimo": 300
          }
        },
        "presenti": {
          "ultimaOra": 423,
          "mediaOra": {
            "minimo": 353,
            "media": 521,
            "massimo": 784
          },
          "permanenza": [
            {
              "oraIngresso": "9:00",
              "tempo": "230"
            },
            {
              "oraIngresso": "10:00",
              "tempo": "200"
            },
            {
              "oraIngresso": "11:00",
              "tempo": "177"
            }
            ]
        }
      }
    }
  ]
  
  constructor() { }
}
