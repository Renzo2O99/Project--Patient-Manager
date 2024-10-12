
interface PatientDetailItemProps {
  label: string,
  data: string
}

export const PatientDetailItem = ({label, data}: PatientDetailItemProps) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
    {`${label}: `}

    <span className="font-normal nomral-case">{data}</span>
  </p>
  )
}
