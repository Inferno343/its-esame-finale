import fastify from 'fastify'
import * as swagger from 'fastify-swagger'

const port = 3000;
const app = fastify({logger:true, ignoreTrailingSlash: true})

app.register(swagger.default, {
    routePrefix: '/api/documentation',
    swagger: {
      info: {
        title: 'Documentazione API',
        description: 'Documentazione API Prima Prova Esame',
        version: '1.0.0'
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [{
        name: 'default',
        description: 'Le chiamate predefinite'
      }]
    },
    exposeRoute: true
  })


var utenti = [
    {
        id: 0,
        nome: "Luca",
        anni: 83,
        colore: "sette",
        occhi: "bianchi"},
    {
        id: 1,
        nome: "Alex",
        anni: 12,
        colore: "blu",
        occhi: "neri"},
    {
        id: 2,
        nome: "Bon",
        anni: 12,
        colore: "bianchi",
        occhi: "verdi"}
    ]

/* GET ALL THE ITEMS */
app.get('/',{
    schema: {
      description: "Richiedi lista tutti gli utenti",
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            message: { type: 'string'},
            utenti: { type: 'array',
                items: { 
                    type: 'object',
                    properties: {
                        id: { type: 'number'},
                        nome: { type: 'string'},
                        anni: { type: 'number'},
                        colore: { type: 'string'},
                        occhi: { type: 'string'},}
                },
            minItems: 1,
        collectionFormat: 'multi'}
          }
        }
      }
    }
  }, (req, reply) => {
    reply.send({result:true, message:"Ecco a te una lista degli utenti", utenti:utenti})
})

/* GET ITEM BY ID */
app.get('/:id',{
    schema: {
      description: "Get data by ID",
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'ID of the requested object'
          }
        }
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            message: { type: 'string'},
            utente: { 
                    type: 'object',
                    properties: {
                        id: { type: 'number'},
                        nome: { type: 'string'},
                        anni: { type: 'number'},
                        colore: { type: 'string'},
                        occhi: { type: 'string'},}
                }
          }
        }
      }
    }
  }, (req:any, reply) => {
    let id = req.params.id;

    let index = (element) => element.id == id;

    if (!utenti[utenti.findIndex(index)]){

        reply.send({result:false, message: "L'utente non esiste"})
        return
    }
    
    reply.send({result: true, message: "Ecco a te l'utente richiesto", utente: utenti[utenti.findIndex(index)]})
})

/* ADD NEW ITEM */
app.post('/',{
    schema: {
      description: "Aggiungi nuovo utente",
      body: {
        type: 'object',
        properties: {
            nome: { type: 'string' },
            anni: { type: 'number' },
            colore: { type: 'string' },
            occhi: { type: 'string' }
        }
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            message: { type: 'string'}
          }
        }
      }
    }
  }, (req:any, reply) => {
    let data:any = req.body;

    data.id = utenti.length

    utenti.push(data);

    reply.send({result: true, message: "Ho aggiunto il nuovo utente", utente: data})
})

/* EDIT ITEM BY ID */
app.put('/:id',{
    schema: {
      description: "Modifica utente",
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'ID of the requested object'
          }
        }
      },
      body: {
        type: 'object',
        properties: {
            nome: { type: 'string' },
            anni: { type: 'number' },
            colore: { type: 'string' },
            occhi: { type: 'string' }
        }
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            message: { type: 'string'}
          }
        }
      }
    }
  }, (req:any, reply) => {
    let id = req.params.id;
    let data = req.body;

    
    let index = (element) => element.id == id;
    let oldData = utenti[utenti.findIndex(index)];

    if (!utenti[utenti.findIndex(index)]){

        reply.send({result:false, message: "L'utente non esiste"})
        return
    }

    data.id = oldData.id

    utenti[utenti.findIndex(index)] = data;

    reply.send({result:true, message: "Dati utente cambiati con successo"})
})

/* DELETE ITEM BY ID */
app.delete('/:id',{
    schema: {
      description: "Elimina utente",
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'ID of the requested object'
          }
        }
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            message: { type: 'string'}
          }
        }
      }
    }
  }, (req:any, reply) => {
    let id = req.params.id;
    
    let index = (element) => element.id == id;

    if (!utenti[utenti.findIndex(index)]){
        console.log("L'utente non esiste");

        reply.send({result:false, message: "L'utente non esiste"})
        return
    }

    utenti.splice(utenti.findIndex(index), 1)

    reply.send({result: true, message: "Utente eliminato"})
})


app.listen(port)