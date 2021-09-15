import { useContext } from "react"
import { TravelContext } from "../Context"

const CountryElectricity = () =>{
  const {briefing} = useContext(TravelContext)
  const electricity = briefing.electricity
  return (
    <div className="country-item">
      <ul className="country-item_list">
        <li>Voltage: {electricity.voltage}</li>
        <li>Frequency: {electricity.frequency}</li>
      </ul>
    </div>
  )
}

export { CountryElectricity}