import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DeufaltInput } from "../DefaultInput";
import { Cycles } from "../Cycles";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DeufaltInput
          labelText="task:"
          id="meuImput"
          type="text"
          placeholder="Digite algo"
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
