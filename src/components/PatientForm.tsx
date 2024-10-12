import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { ErrorInput } from "./ErrorInput";
import { DraftPatient } from "../types/types";
import { usePatientStore } from "../store";

export const PatientForm = () => {

  const { addPatient, activeId, patients, updatePatient } = usePatientStore();

  const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm<DraftPatient>();


  useEffect(() => {
    if (activeId) {
      const activePatient = patients.filter(patient => patient.id === activeId)[0]
      setValue('name', activePatient.name)
      setValue('caretaker', activePatient.caretaker)
      setValue('email', activePatient.email)
      setValue('date', activePatient.date)
      setValue('symptoms', activePatient.symptoms)
    }
  }, [activeId])

  const registerPatient = (data: DraftPatient) => {
    if (activeId) {
      updatePatient(data)
      toast.success('El Perfil del Paciente ha sido Editado Correctamente')
    } else {
      addPatient(data)
      toast.success('El Perfil del Paciente ha sido Registrado Correctamente')
    };

    reset()
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-2xl text-center md:text-3xl">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(registerPatient)}
        >
            <div className="mb-5">
                <label htmlFor="name" className="text-sm uppercase font-bold">
                    Paciente 
                </label>
                <input  
                    id="name"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Paciente" 
                    {...register('name', {
                      required: "El nombre del paciente es obligatorio",
                    })}
                />

                {errors.name && (
                  <ErrorInput>{errors.name?.message}</ErrorInput>
                )}
            </div>

            <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                    Propietario 
                </label>
                <input  
                    id="caretaker"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Propietario" 
                    {...register('caretaker', {
                        required: "El propietario del paciente es obligatorio",
                    })}
                />

                {errors.caretaker && (
                  <ErrorInput>{errors.caretaker?.message}</ErrorInput>
                )}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Email 
              </label>
              <input  
                  id="email"
                  className="w-full p-3  border border-gray-100"  
                  type="email" 
                  placeholder="Email de Registro" 
                  {...register("email", {
                    required: "El Email es Obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email No Válido'
                    }
                  })} 
              />

              {errors.email && (
                <ErrorInput>{errors.email?.message}</ErrorInput>
              )}
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Fecha Alta 
                </label>
                <input  
                    id="date"
                    className="w-full p-3  border border-gray-100"  
                    type="date" 
                    {...register('date', {
                      required: "La fecha de alta es obligatoria",
                  })}
              />

              {errors.date && (
                <ErrorInput>{errors.date?.message}</ErrorInput>
              )}
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                Síntomas 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Síntomas del paciente" 
                    {...register('symptoms', {
                      required: "Los síntomas del paciente son obligatorios",
                  })}></textarea>

                {errors.symptoms && (
                  <ErrorInput>{errors.symptoms?.message}</ErrorInput>
                )}
            </div>

            <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value='Guardar Paciente'
            />
        </form> 
    </div>
  )
}