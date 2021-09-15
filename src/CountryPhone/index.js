import { useContext } from "react"
import { TravelContext } from "../Context"

const CountryPhone = () =>{
  const {briefing} = useContext(TravelContext)
  const telephone = briefing.telephone
  return (
    <div className="country-item">
      <ul className="country-item_list">
        <li key={telephone.calling_code}>Calling code: +{telephone.calling_code}</li>
        <li key={telephone.police}>Police: {telephone.police}</li>
        <li key={telephone.ambulance}>Ambulance: {telephone.ambulance}</li>
        <li key={telephone.fire}>Firefighters: {telephone.fire}</li>
      </ul>
    </div>
  )
}

export { CountryPhone}