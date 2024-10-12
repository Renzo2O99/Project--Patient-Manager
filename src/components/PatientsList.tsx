import { usePatientStore } from "../store"
import { PatientItem } from "./PatientDetails"

export const PatientsList = () => {

  const patients = usePatientStore(state => state.patients)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="text-2xl font-black my-2 text-center text-gray-600 md:text-3xl">
            Listado de Pacientes
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}

            <span className="text-indigo-600 font-bold">
              pacientes y citas
            </span>
          </p>

          {patients.map(patient => (
            <PatientItem 
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-center font-black text-2xl text-gray-600 md:text-3xl">
            Aún no hay pacientes registrados...
          </h2>

          <p className="text-lg mt-5 mb-10 text-center text-gray-600 p-5 md:p-0">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  )
}
