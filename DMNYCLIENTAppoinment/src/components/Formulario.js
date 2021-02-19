import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-day-picker/lib/style.css";
import "./Formulario.css";
import Days from "../components/Days";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleApellido = this.handleApellido.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.verifyError = this.verifyError.bind(this)
    this.state = {
      selectedDay: "",
      Nombre: "",
      Apellido: "",
      Email: "",
      Phone:"",
      Siguiente: false,
      Seguir: false,
      error:false
    };
  }

  daySelectedCheck(day) {
    let dia = day.getDay();

    let Hoy = new Date().toLocaleDateString();
    if (dia === 6 || dia === 0) {
      return <div className="Error">Debe seleccionar otra dia que no sea fin de semana</div>;
    }

    if (day.toLocaleDateString() === Hoy) {
      return <div className="Error">No se puede hacer citas el mismo dia</div>;
    }

    return (
      <button className="Button" onClick={() => this.setState({ Seguir: true })}>
        Selecionar Hora
      </button>
    );
  }

  handleDayClick(day) {
    this.setState({error:""})
    this.setState({ selectedDay: day });
  }
  handleChange(e) {
    this.setState({ Nombre: e.target.value });
  }

  handleApellido(e) {
    this.setState({error:""})
    this.setState({ Apellido: e.target.value });
  }

  handleEmail(e) {
    this.setState({error:""})
    this.setState({ Email: e.target.value });
  }

  handlePhone(e) {
    this.setState({error:""})
    this.setState({ Phone: e.target.value });
  }

  verifyError(){
    

    if(this.state.Apellido === ""  || this.state.Nombre === "" || this.state.Email === "" || this.state.Phone === ""){
      return this.setState({error:"Debe Completer todos los campos"})
    }
    

    this.setState({Siguiente: true})
    
  }

  render() {
    
    return (
      <div className="Form">
       { this.state.Seguir ? (
          <div>
            <Days
              Departamento={this.props.Departamento}
              Servicio={this.props.Servicio}
              Nombre={`${this.state.Nombre} ${this.state.Apellido}`}
              Email={this.state.Email}
              Fecha={this.state.selectedDay}
              Telefono={this.state.Phone}
            />
          </div>
        ) : this.state.Siguiente ? (
          <div>
            <Calendar
              onChange={this.handleDayClick}
              value={this.state.selectedDay}
            />
            {this.state.selectedDay ? (
              <div>
                <p className="Selection">
                  Has Seleccionado el dia{" "}
                  {this.state.selectedDay.toLocaleDateString()}
                </p>
                {this.daySelectedCheck(this.state.selectedDay)}
              </div>
            ) : (
              <p>Please select a day.</p>
            )}
          </div>
        ) : (
          <div>
            <div className="group">
              <input name="firstName" onChange={this.handleChange} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Nombre:</label>
            </div>

            <div className="group">
              <input name="Lastname" onChange={this.handleApellido} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Apellido:</label>
            </div>

            <div className="group">
              <input name="Las" onChange={this.handlePhone} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Telefono:</label>
            </div>


            

            <div className="group">
              <input name="email" onChange={this.handleEmail} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Correo:</label>
            </div>

            {this.state.error ? (<div className="Error">{this.state.error}</div>):(null)}

            <button className="Button"onClick={this.verifyError}>
              siguiente
            </button>
          </div>
        )}
      </div>
    );
  }
}
