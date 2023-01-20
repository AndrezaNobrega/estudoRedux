import "./Intervalo.css";
import React from "react";
import Card from "./Card";

import { connect } from "react-redux";
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "../store/actions/numeros"; //não pode ser chamado diretamente

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card title="Intervalo de números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            //aqui é onde ocorre o evento
            //chamou o action creator a partir do alterarMinimo
            //onde foram mapeadas as propriedades
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
}
function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      //action creator retorna uma action
      const action = alterarNumeroMinimo(novoNumero);
      // c a action então, fazemos agora o dispatch
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(
  mapStateToProps, //mapeando estados p propriedades
  mapDispatchToProp
)(Intervalo);
