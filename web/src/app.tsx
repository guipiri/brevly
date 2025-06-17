import { LinkIcon, WarningIcon } from '@phosphor-icons/react'
import logo from './assets/Logo.svg'

function App() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="p-2 bg-gray-200 h-dvh">
      <header className="pb-6 pt-8 w-full bg-gray-200 sm:max-w-[60.5rem] mx-auto">
        <img className="block m-auto sm:ml-0" src={logo} alt="logo-brevly" />
      </header>

      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:items-start">
        <div className="p-6 max-w-[40rem] sm:max-w-[23.75rem] w-full bg-white rounded-sm flex flex-col gap-5">
          <h2 className="text-lg text-gray-600">Novo link</h2>
          <form
            onSubmit={onSubmit}
            onInvalid={(e) => e.preventDefault()}
            id="createLink"
            className="flex flex-col gap-4"
          >
            <div className="group w-full flex flex-col gap-2 outline-">
              <label className="text-xs uppercase" htmlFor="url">
                Link Original
              </label>
              <input
                className="px-4 rounded-sm text-md text-gray-600 font-sans font-normal ring-2 ring-gray-300 outline-none h-12 focus:ring-blue-base error:ring-danger user-invalid:ring-danger"
                name="url"
                id="url"
                type="url"
                required
                placeholder="www.exemplo.com.br"
              />
              <div className="group-has-user-invalid:flex group-has-focus:hidden hidden text-sm text-gray-500 gap-2 items-center">
                <WarningIcon width={18} className="fill-danger" />
                <span>Insira uma url válida.</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 outline-">
              <label className="text-xs uppercase" htmlFor="alias">
                Link Encurtado
              </label>
              <div className="peer has-user-invalid:ring-danger has-focus:ring-blue-base ring-2 flex items-center px-4 rounded-sm text-gray-400 text-md font-sans font-normal ring-gray-300 h-12">
                brev.ly/
                <input
                  className="outline-none h-full w-full text-md text-gray-600 font-normal"
                  name="alias"
                  id="alias"
                  type="text"
                  required
                  pattern="^[a-zA-Z0-9\-\&]+$"
                />
              </div>
              <div className="peer-has-user-invalid:flex peer-has-focus:hidden hidden text-sm text-gray-500 gap-2 items-center">
                <WarningIcon width={14} className="fill-danger" />
                <span>
                  Insira uma url minúscula e sem espaço/caracter especial.
                </span>
              </div>
            </div>
          </form>
          <button
            type="submit"
            form="createLink"
            disabled={false}
            className="w-full bg-blue-base h-12 px-5 rounded-sm text-md text-white disabled:opacity-50 hover:bg-blue-dark hover:cursor-pointer transition-all"
          >
            Salvar Link
          </button>
        </div>

        <div className="p-6 w-full max-w-[40rem] sm:max-w-[36.25rem] bg-white rounded-sm flex flex-col gap-4">
          <h2 className="text-lg text-gray-600 h-6">Meus Links</h2>
          <hr className="border-gray-200" />
          <div className="pt-4 pb-6 flex flex-col gap-3 items-center">
            <LinkIcon size={32} className="fill-gray-400" />
            <span className="text-xs text-gray-500 uppercase">
              ainda não existem links cadastrados
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
