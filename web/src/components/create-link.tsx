import { WarningIcon } from '@phosphor-icons/react'
import { createLinkWithAxios, type ICreateLink } from '../http/create-link'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import LoadingBar from './loading-bar'
import { useAlert } from '../contexts/AlertContext'

function CreateLink() {
  const [createLinkPayload, setCreateLinkPayload] = useState<ICreateLink>({
    alias: '',
    url: '',
  })
  const { showAlert } = useAlert()

  const createLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createLinkWithAxios(createLinkPayload)
  }

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createLink,
    onSuccess: (_, { target }) => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
      showAlert({
        message: 'Link criado com sucesso',
        type: 'success',
        duration: 3000,
      })
      ;(target as HTMLFormElement).reset()
    },
    onError: ({ message }) => {
      showAlert({ message, type: 'error' })
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateLinkPayload((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <div className="relative overflow-hidden p-6 max-w-[40rem] sm:max-w-[23.75rem] w-full bg-white rounded-sm flex flex-col gap-5">
      <LoadingBar active={mutation.isPending} />
      <h2 className="text-lg text-gray-600">Novo link</h2>
      <form
        onSubmit={mutation.mutate}
        onInvalid={(e) => e.preventDefault()}
        id="createLink"
        className="flex flex-col gap-4"
      >
        <div className="group w-full flex flex-col gap-2 outline-">
          <label className="text-xs uppercase" htmlFor="url">
            Link Original
          </label>
          <input
            onChange={handleChange}
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
              onChange={handleChange}
              className="outline-none h-full w-full text-md text-gray-600 font-normal"
              name="alias"
              id="alias"
              type="text"
              required
              pattern="^[a-zA-Z0-9_\-]+$"
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
      <div>
        <button
          onInvalid={(e) => {
            e.preventDefault()
            console.log('invalid')
          }}
          type="submit"
          form="createLink"
          className="w-full bg-blue-base h-12 px-5 rounded-sm text-md text-white disabled:opacity-50 hover:bg-blue-dark hover:cursor-pointer transition-all"
          disabled={mutation.status === 'pending'}
        >
          Salvar Link
        </button>
      </div>
    </div>
  )
}

export default CreateLink
