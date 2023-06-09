import { sharirngInformationService } from "@/services/sharing-information.service";

const Component1 = () => {
  const handleClick = () => {
    sharirngInformationService.setSubject(true);
  };

  const handleClickNo = () => {
    sharirngInformationService.setSubject(false);
  };
  return (
    <div>
      <button onClick={handleClick}>Envair Information</button>
      <button onClick={handleClickNo}>No Envair Information</button>
    </div>
  );
};

export default Component1;
