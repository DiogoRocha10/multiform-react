import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { SelectOption } from "../../components/SelectOption";
import * as C from "./styles";

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, [dispatch, state.name, history]);

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step3");
    } else {
      alert("Clique na opção.");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>
        <hr />

        <SelectOption
          title="Sou iniciante"
          description="comecei a 2 anos"
          icon="👶"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="Sou programador"
          description=" 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
