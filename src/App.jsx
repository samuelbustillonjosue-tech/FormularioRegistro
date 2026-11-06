import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mensaje, setMensaje] = useState('')

  const nombreValido = nombre.trim().length >= 3
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
  const contrasenaValida = contrasena.length >= 8

  const formularioValido =
    nombreValido && correoValido && contrasenaValida

  const registrarUsuario = (e) => {
    e.preventDefault()

    if (!formularioValido) return

    setMensaje(`¡Registro exitoso! ¡Bienvenido, ${nombre.trim()}!`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600 px-4">
      <form
        onSubmit={registrarUsuario}
        noValidate
        className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Crear una cuenta
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Regístrate para comenzar a comprar
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre de usuario
          </label>

          <input
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value)
              setMensaje('')
            }}
            placeholder="Ingresa tu nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {nombre.length > 0 && !nombreValido && (
            <p className="text-red-500 text-sm mt-1">
              El nombre debe tener al menos 3 caracteres.
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>

          <input
            type="email"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value)
              setMensaje('')
            }}
            placeholder="tucorreo@ejemplo.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {correo.length > 0 && !correoValido && (
            <p className="text-red-500 text-sm mt-1">
              Ingresa un correo electrónico válido.
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>

          <input
            type="password"
            value={contrasena}
            onChange={(e) => {
              setContrasena(e.target.value)
              setMensaje('')
            }}
            placeholder="Mínimo 8 caracteres"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {contrasena.length > 0 && !contrasenaValida && (
            <p className="text-red-500 text-sm mt-1">
              La contraseña debe tener al menos 8 caracteres.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!formularioValido}
          className="w-full py-2 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Registrar
        </button>

        {mensaje && (
          <p className="text-sm text-center text-green-700 bg-green-100 rounded-lg p-3">
            {mensaje}
          </p>
        )}

        <p className="text-sm text-center text-gray-400">
          © 2026 - Formulario de Registro
        </p>
      </form>
    </div>
  )
}

export default App