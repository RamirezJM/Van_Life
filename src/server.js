/* SERVER 2 INCLUDES HOST ID*/

import { createServer, Model } from "miragejs"

createServer({
  models: {
    vans: Model,
    user: Model
  },

  seeds(server) {
    server.create("van", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "123" })
    server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", hostId: "123" })
    server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456" })
    server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", hostId: "789" })
    server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789" })
    server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", hostId: "123" })
    server.create("user", { id: "123", email: "b@b.com", password: "p123", name: "Bob" })
  },

  routes() {
    this.namespace = "api"
    this.logging = true

    this.get("/vans", (schema, request) => {
      return schema.vans.all()
    })

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id
      return schema.vans.find(id)
    })

    this.get("/host/vans", (schema, request) => {
      // Hard-code the hostId for now
      return schema.vans.where({ hostId: "123" })
    })

    this.get("/host/vans/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id
      return schema.vans.findBy({ id, hostId: "123" })
    })

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody)
      const foundUser = schema.users.findBy({ email, password })
    /* 
      if (!foundUser || foundUser.password !== password) {
        return new Response(
          401, // HTTP Status Code
          { 'Content-Type': 'application/json' }, // Headers
          JSON.stringify({ message: "No user with those credentials found!" }) // Body
        );
       
      } */

       /*    if (!foundUser || foundUser.password !== password) {
        // ¡CAMBIO CLAVE AQUÍ! Retornar un ARRAY
        return [
            401, // <--- Este es el CÓDIGO DE ESTADO HTTP real que se enviará
            { "Content-Type": "application/json" }, // Headers
            { message: "No user with those credentials found!" } // Body del error (Mirage lo stringificará a JSON)
        ];
    } */

          if (!foundUser || foundUser.password !== password) {
        // ¡Esta es la sintaxis robusta para que MirageJS devuelva un HTTP 401!
        return new Response(
            401, // <--- HTTP Status Code real
            { "Content-Type": "application/json" }, // Headers
            JSON.stringify({ message: "No user with those credentials found!" }) // Cuerpo del error, stringificado
        );
    }

      foundUser.password = undefined
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens."
      }
    })

  }
})


  /*  if (!foundUser) {
           return new Response(401, {}, { message: "No user with those credentials found!" })
       } */

      /*  if (!foundUser || foundUser.password !== password) { // Asegúrate de verificar también la contraseña
         // ¡CAMBIO AQUÍ! Retornar un array con el código de estado
         /* return new Response(401, {}, { message: "No user with those credentials found!" }); */
      // O más simplemente:
      /*return [401, {}, { message: "No user with those credentials found!" }];
    } */



/*   SERVER 1, WITHOUT HOST 

import { createServer, Model } from "miragejs"

createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple" })
        server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" })
        server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury" })
        server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple" })
        server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury" })
        server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
    },

    routes() {
        this.namespace = "api"

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })
        
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
}) */