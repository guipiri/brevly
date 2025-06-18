import logoIcon from '../assets/Logo_Icon.svg'

function Redirect() {
  // const params = useParams()

  return (
    <div className="flex items-center justify-center h-full">
      <div className="py-12 px-5 bg-gray-100 w-full max-w-[36.25rem] rounded-sm flex flex-col gap-6 items-center">
        <img className="w-12" src={logoIcon} />
        <h2 className="text-gray-600 text-xl">Redirecionando...</h2>
        <div className="text-gray-500 text-md text-center gap-1 grid">
          <p>O link será aberto automaticamente em alguns instantes. </p>
          <p>
            Não foi redirecionado?{' '}
            <a className="text-blue-base cursor-pointer" href="/">
              Acesse aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Redirect
