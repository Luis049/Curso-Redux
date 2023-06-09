import { useGentlemanContext } from '../context/gentleman.context';

const ComponentContext2 = () => {
  const {gentlemanContextValue} = useGentlemanContext();
  return (
    <div>El valor es: {gentlemanContextValue}</div>
  )
}

export default ComponentContext2