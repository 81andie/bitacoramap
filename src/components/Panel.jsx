import React from 'react'


export const Panel = () => {
  return (
    <div className="contenedor-panel">
    <div className="subcontenedor-btn">
        <button type="button" className="btn-cerrar">X</button>
    </div>
    <h4 className="contenedor-titulo">Añadir nuevo marcador</h4>
    <span className="contenedor-span">Añade comentario</span>
    <textarea className="contenedor-textarea"></textarea>

    <div className="btn-grupo">
    <button type="button" className="btn-cancelar">Cancelar</button>
    <button type="button" className="btn-guardar">Guardar</button>
    </div>
    

    </div>
  )
}
