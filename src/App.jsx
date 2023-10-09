import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "../src/styles.css";
import {
  elegirSolucionProblema,
} from './common.js'

function App() {
  const [formInput, setFormInput] = useState({
    sintoma: "",
    sexo: "",
    edad: "",
  });

  const handleChangeFormInput = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const [diagnosticModal, setDiagnosticModal] = useState(false);

  return (
    <>
      <div
        className="flex-container d-flex justify-content-center flex-column min-vh-100 "
        style={{
          background: "#3f3557",
        }}
      >
        <section className="text-center font-color">
          <h1 className="font-color">EnfermeTuc</h1>
          <p className="font-color">Ingrese un síntoma del paciente: </p>

          <form
            className="d-flex justify-content-center flex-column align-items-center"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <select
              className="form-control form-input w-50 my-3"
              name="sintoma"
              onChange={handleChangeFormInput}
            >
              <option value="">Selecciona un síntoma</option>
              <option value="Dolor de Cabeza">Dolor de cabeza</option>
              <option value="Tos">Tos</option>
              <option value="Fiebre">Fiebre</option>
              <option value="riBer">Ser de River</option>
            </select>

            <div className="">
              <label className="mx-5">
                <input
                  className="mx-2"
                  type="radio"
                  name="sexo"
                  value="hombre"
                  checked={formInput.sexo === "hombre"}
                  onChange={handleChangeFormInput}
                />
                Hombre
              </label>
              <label className="mx-5">
                <input
                  className="mx-2"
                  type="radio"
                  name="sexo"
                  value="mujer"
                  checked={formInput.sexo === "mujer"}
                  onChange={handleChangeFormInput}
                />
                Mujer
              </label>
            </div>

            <input
              className="form-control form-input  w-50 my-3"
              type="number"
              placeholder="Ingrese su edad"
              name="edad"
              onChange={handleChangeFormInput}
              min={0}
              max={120}
            ></input>

            <button
              className="btn btn-warning"
              onClick={() => {
                setDiagnosticModal(true);
              }}
            >
              Consultar
            </button>
          </form>
        </section>

        {diagnosticModal && (
          <div className="modal" style={{ display: "block" }} tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content modal-color">
                <h2 className="text-center font-important-color mt-3">Resultado del diagnóstico</h2>

                <div className="modal-body text-center">
                  <h4 className="font-color">
                    Síntoma seleccionado: {formInput.sintoma}
                  </h4>

                  <p className="font-color">
                    {elegirSolucionProblema(formInput.sintoma)}
                  </p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn text-white rounded-4"
                    style={{ background: "#4d3147" }}
                    onClick={() => {
                      setDiagnosticModal(false);
                    }}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
