import { Patient } from "../types/types"
import { PatientDetailItem } from "./PatientDetailsItem"
import { usePatientStore } from "../store"
import { toast } from "react-toastify"

interface PatientItemProps {
  patient: Patient
}

export const PatientItem = ({patient}: PatientItemProps) => {
  
  const { deletePatient, getPatientById } = usePatientStore()

  const handleClick = () => {
    deletePatient(patient.id);
    toast.error('EL Perfil del Paciente fue Eliminado Correctamente')
  }
  
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />

      <PatientDetailItem label="Nombre" data={patient.name} />

      <PatientDetailItem label="Dueño" data={patient.caretaker} />

      <PatientDetailItem label="Email" data={patient.email} />

      <PatientDetailItem label="Fecha de Alta" data={patient.date.toString()} />

      <PatientDetailItem label="Síntomas" data={patient.symptoms} />

      <div className="flex flex-col gap-10 mt-10 md:flex-row">
        <button
          type="button"
          onClick={() => getPatientById(patient.id)}
          className="py-3 w-full md:w-1/3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
          Editar
        </button>

        <button
          type="button"
          onClick={handleClick} 
          className="py-3 w-full md:w-1/3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
          Eliminar
        </button>
      </div>
    </div>
  )
}
