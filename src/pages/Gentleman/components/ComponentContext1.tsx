import { useGentlemanContext } from "../context/gentleman.context";


const ComponentContext1 = () => {
  const { setGentlemanContextValue } = useGentlemanContext();
  
  const handleSendInfo = () => {
    setGentlemanContextValue('hola mi cielo')
  }

  return (
    <div><button onClick={handleSendInfo}>Enviar Informacion por un context</button></div>
  )
}

export default ComponentContext1