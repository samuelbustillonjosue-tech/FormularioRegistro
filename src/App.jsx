import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mensaje, setMensaje] = useState('')

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
  const nombreValido = nombre.trim().length >= 3
  const contrasenaValida = contrasena.length >= 8

  const formularioValido =
    nombreValido && correoValido && contrasenaValida

  const registrarUsuario = (e) => {
    e.preventDefault()

    if (!formularioValido) return

    setMensaje(`¡Registro exitoso! ¡Bienvenido, ${nombre.trim()}!`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center p-6">
      <section className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
            👤
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Crear una cuenta
          </h1>

          <p className="text-gray-500 mt-2">
            Regístrate para comenzar a comprar
          </p>
        </div>

        <form onSubmit={registrarUsuario} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
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
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {nombre.length > 0 && !nombreValido && (
              <p className="text-red-500 text-sm mt-1">
                El nombre debe tener al menos 3 caracteres.
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correo electrónico
            </label>

            <input
              type="email"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value)
                setMensaje('')
              }}
              placeholder="ejemplo@correo.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {correo.length > 0 && !correoValido && (
              <p className="text-red-500 text-sm mt-1">
                Ingresa un correo electrónico válido.
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
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
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Registrar
          </button>
        </form>

        {mensaje && (
          <div className="mt-6 bg-green-100 border border-green-300 text-green-800 rounded-xl p-4 text-center font-medium">
            {mensaje}
          </div>
        )}

        <p className="text-center text-gray-400 text-sm mt-8">
          © 2026 - Formulario de Registro
        </p>
      </section>
    </main>
  )
}

export default App