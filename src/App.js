import React from "react";
import axios from "axios";

export function AppComHook() {
  const [states, setStates] = React.useState([]);

  React.useEffect(() => {
    async function getStates() {
      const res = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      return res;
    }

    getStates().then((res) => {
      setStates(res.data);
    });
  }, []);

  return (
    <>
      <h1>Hook</h1>
      <ul>
        {states.map((s) => (
          <li key={s.sigla}>{s.sigla}</li>
        ))}
      </ul>
    </>
  );
}

export class AppComClass extends React.Component {
  state = {
    estados: [],
  };

  componentDidMount() {
    async function getStates() {
      const res = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      return res;
    }

    getStates().then((res) => {
      this.setState({ estados: res.data });
    });
  }

  render() {
    return (
      <>
        <h1>Classe</h1>
        <ul>
          {this.state.estados.map((s) => (
            <li key={s.sigla}>{s.sigla}</li>
          ))}
        </ul>
      </>
    );
  }
}
