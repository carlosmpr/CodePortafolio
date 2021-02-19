const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type GetBooking{
    date:String!
    value: Int!
}


input CreateApoinment{
    Name:String!
    phone:String!
    email: String!
    date:String!
    servicio:String!
    departamento:String!
    value:Int!
}

type RootQuery{
    Buscar(buscar:String!):[GetBooking!]!
}


type RootMutation{
    createCita( create: CreateApoinment):GetBooking!
}


schema{
    query:RootQuery
    mutation:RootMutation
}




`);
