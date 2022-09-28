import React, { useEffect } from 'react'

export const Message = () => {
  /*
    Nota:
    El componente es montado solo cuando la condición se cumple
    Puedes realizar alguna acción cuando el componente es mostrado y
    despues, una vez que es destruido puedes realizar alguna otra operación
  */
  useEffect(() => {
    const onMouseMove = ({ x, y }:MouseEvent) => {
      const coords = { x, y }
      console.log(coords)
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div className='text-center mt-3'>
        <h3 className='text-danger'>El usuario ya existe</h3>
    </div>
  )
}
