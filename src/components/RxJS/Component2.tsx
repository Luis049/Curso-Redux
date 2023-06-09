import { sharirngInformationService } from "@/services/sharing-information.service";
import { useEffect, useState } from "react";


const Component2 = () => {
  const [count, setCount] = useState(0);
  const subscription$ = sharirngInformationService.getSubject();
  useEffect(() => {
    subscription$.subscribe((data) => {
      if (!!data) setCount(count + 1);
    });
  });

  return <div>{count}</div>;
};

export default Component2;
