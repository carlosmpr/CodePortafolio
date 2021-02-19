import React, { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import "./Days.css";

const GET_DATA = gql`
  query($date: String!) {
    Buscar(buscar: $date) {
      date
      value
    }
  }
`;

const CREATE_APPOINTMENT = gql`
  mutation Cita(
    $Name: String!
    $phone: String!
    $email: String!
    $date: String!
    $servicio: String!
    $departamento: String!
    $value: Int!
  ) {
    createCita(
      create: {
        Name: $Name
        phone: $phone
        email: $email
        date: $date
        servicio: $servicio
        departamento: $departamento
        value: $value
      }
    ) {
      date
    }
  }
`;
export default function Dogs({
  Departamento,
  Servicio,
  Nombre,
  Email,
  Fecha,
  Telefono,
}) {
  const [Hora, setHora] = useState(0);
  const [siguiente, setSiguiente] = useState(false);
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: {
      date: Fecha,
    },
  });

  const [addTodo, { dataTodo }] = useMutation(CREATE_APPOINTMENT);

  let Quantity_9 = 15;
  let Quantity_10 = 15;
  let Quantity_11 = 15;
  let Quantity_12 = 15;
  let Quantity_1 = 15;
  let Quantity_2 = 15;

  if (data) {
    data.Buscar.map((val) => {
      if (val.value === 9) {
        Quantity_9--;
        
      }
      if (val.value === 10) {
        Quantity_10--;
        
      }

      if (val.value === 11) {
        Quantity_11--;
        
      }

      if (val.value === 12) {
        Quantity_12--;
        
      }

      if (val.value === 1) {
        Quantity_1--;
       
      }

      if (val.value === 2) {
        Quantity_2--;
       
      }
    });
  }


  return (
    <div>
      {siguiente ? (
        <div className="Bye">
         Gracias por realizar su cita por internet, le enviaremos un correo electrónico con los detalles de su cita que deberá presentar a la hora de su visita al Consulado Dominicano. Recuerde estar 20 minutos antes de la hora de su cita y que debe tener cada uno de los documentos requeridos a mano, de lo contrario su cita podrá ser programada para otro día.
        </div>
      ) : (
        <>
          {Quantity_9 <= 7 ? null : (
            <div className="List-cita">
              <p className="force"> 9:00am - 10:00am</p>
              <button className="force2" onClick={() => setHora(9)}>
                Seleccionar
              </button>
              <span className="force3"> Cantidad disponible</span>
              <span className="force4"> {Quantity_9} </span>
            </div>
          )}

          {Quantity_10 <= 7 ? null : (
            <div className="List-cita">
              <p className="force"> 10:00am - 11:00am</p>
              <button className="force2" onClick={() => setHora(10)}>
                Seleccionar
              </button>
              <span className="force3"> Cantidad disponible</span>
              <span className="force4"> {Quantity_10} </span>
            </div>
          )}

          {Quantity_11 <= 7 ? null : (
            <div className="List-cita">
              <p className="force"> 11:00am - 12:00pm</p>
              <button className="force2" onClick={() => setHora(11)}>
                Seleccionar
              </button>
              <span className="force3"> Cantidad disponible</span>
              <span className="force4"> {Quantity_11} </span>
            </div>
          )}

          {Quantity_12 <= 7 ? null : (
            <div className="List-cita">
              <p className="force"> 12:00pm - 1:00pm</p>
              <button className="force2" onClick={() => setHora(12)}>
                Seleccionar
              </button>
              <span className="force3"> Cantidad disponible</span>
              <span className="force4">{Quantity_12} </span>
            </div>
          )}

          {Quantity_1 <= 7 ? null : (
            <div className="List-cita">
              <p className="force"> 1:00pm - 2:00pm</p>
              <button className="force2" onClick={() => setHora(1)}>
                Seleccionar
              </button>
              <span className="force3"> Cantidad disponible</span>
              <span className="force4"> {Quantity_1} </span>
            </div>
          )}

          {Quantity_2 <= 7 ? null : (
            <div className="List-cita">
              <p className="force"> 2:00pm - 3:00pm</p>
              <button className="force2" onClick={() => setHora(2)}>
                Seleccionar
              </button>
              <span className="force3"> Cantidad disponible</span>
              <span className="force4"> {Quantity_2} </span>
            </div>
          )}

          {Hora ? (
            <button
              className="Button"
              onClick={() => {
                setSiguiente(true);
                addTodo({
                  variables: {
                    Name: Nombre,
                    phone: Telefono,
                    email: Email,
                    date: Fecha,
                    servicio: Servicio,
                    departamento: Departamento,
                    value: Hora,
                  },
                });
              }}
            >
              Hacer Cita
            </button>
          ) : null}
        </>
      )}
    </div>
  );
}
