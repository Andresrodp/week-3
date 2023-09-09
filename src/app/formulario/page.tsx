'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
}
const Formulario = () => {
    const [usuarios, setUsuarios] = useState([] as Usuario[]);

    const formik = useFormik({
        initialValues: {
            id: 0,
            nombre: '',
            apellido: '',
            email: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio'),
            apellido: Yup.string().required('El apellido es obligatorio'),
            email: Yup.string().email('El email no es válido').required('El email es obligatorio')
        }),
        onSubmit: (formData) => {
            formData.id = usuarios.length + 1;
            setUsuarios([...usuarios, formData]);
            formik.handleReset(()=>{
                formik.values.nombre = '';
                formik.values.apellido = '';
                formik.values.email = '';
            });
        }
    })
    return (
      <main className='w-full h-screen flex items-center justify-center p-10 gap-5'>
        <div className='flex flex-col w-2/4 border-solid border-zinc-50 border-2 rounded-lg items-center gap-2 p-2'>
          <h1 className='font-semibold text-3xl'>Formulario de Usuarios</h1>
          <form onSubmit={formik.handleSubmit} className='flex flex-col items-center'>
            <div className='flex flex-col w-10/12 items-center gap-3 mb-7'>
              <div className='flex items-center gap-3'>
                <label htmlFor='nombre'>Nombre</label>
                <input
                  className='border-solid border-2 border-zinc-50 rounded-md p-2 text-black'
                  type='text'
                  id='nombre'
                  name='nombre'
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                />
              </div>
              {formik.errors.nombre && formik.touched.nombre ? (
                <div className='text-red-500 text-sm'>{formik.errors.nombre}</div>
              ) : null}
            </div>
            <div className='flex flex-col w-10/12 items-center gap-3 mb-7'>
              <div className='flex items-center gap-3'>
                <label htmlFor='apellido'>Apellido</label>
                <input
                  className='border-solid border-2 border-zinc-50 rounded-md p-2 text-black'
                  type='text'
                  id='apellido'
                  name='apellido'
                  onChange={formik.handleChange}
                  value={formik.values.apellido}
                />
              </div>
              {formik.errors.apellido && formik.touched.apellido ? (
                <div className='text-red-500 text-sm'>{formik.errors.apellido}</div>
              ) : null}
            </div>
            <div className='flex flex-col w-10/12 items-center gap-3 mb-7'>
              <div className='flex items-center gap-3'>
                <label htmlFor='email'>Email</label>
                <input
                  className='border-solid border-2 border-zinc-50 rounded-md p-2 text-black'
                  type='email'
                  id='email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
            </div>
              {formik.errors.email && formik.touched.email ? (
                <div className='text-red-500 text-sm'>{formik.errors.email}</div>
              ) : null}
            </div>
            <button
              className='border-solid border-2 border-zinc-50 rounded-md p-2'
              type='submit'
            >
              Enviar
            </button>
          </form>
        </div>
        <div className='flex flex-col w-2/4 border-zinc-50 border-solid border-2 rounded-lg items-center gap-2 p-2'>
          <h1>Lista de Usuarios</h1>
          <ul>
            {usuarios.map((usuario) => (
              <li key={usuario.id}>
                {usuario.nombre} {usuario.apellido} - {usuario.email}
              </li>
            ))}
          </ul>
        </div>
      </main>
    )
};


export default Formulario;