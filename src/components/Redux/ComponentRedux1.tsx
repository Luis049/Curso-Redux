import { createUser, modifyUser, resetUser } from "@/redux/user";
import { useDispatch } from "react-redux";

const ComponentRedux1 = () => {
  const dispatcher = useDispatch();
  const handleUser = () => {
    dispatcher(createUser({ name: "Luis", email: "ariza" }));
  };

  const handleModifyUser = () => {
    dispatcher(modifyUser({ name: "Carlos", email: "ariza" }));
  };

  const handleResetUser = () => {
    dispatcher(resetUser());
  };

  return (
    <div>
      <button onClick={handleUser}>Enviar Informacion Redux, createUser</button>
      <button onClick={handleModifyUser}>Enviar Informacion Redux, ModifyUser</button>
      <button onClick={handleResetUser}>Enviar Informacion Redux, ResetUser</button>
    </div>
  );
};

export default ComponentRedux1;
