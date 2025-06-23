import { useNavigate, useParams } from 'react-router'
import logoIcon from '../assets/Logo_Icon.svg'
import { getLinkByAlias } from '../http/get-link-by-alias'
import { useCallback, useEffect, useState } from 'react'
import { incrementLinkClicks } from '../http/increment-link-clicks'

function Redirect() {
  const [href, setHref] = useState<string>()
  const { alias } = useParams()
  const navigate = useNavigate()

  const incrementAndRedirect = useCallback(async () => {
    if (!alias) return navigate('/')

    const { link } = await getLinkByAlias(alias)

    if (link === null) return navigate('/not-found')

    setHref(link.url)

    await incrementLinkClicks(link.alias)

    window.location.href = link.url
  }, [navigate, alias])

  useEffect(() => {
    incrementAndRedirect()
  }, [incrementAndRedirect])

  return (
    <div className="flex items-center justify-center h-full pb-6">
      <div className="py-12 px-5 bg-gray-100 w-full max-w-[36.25rem] rounded-sm flex flex-col gap-6 items-center">
        <img className="w-12" src={logoIcon} />
        <h2 className="text-gray-600 text-xl">Redirecionando...</h2>
        <div className="text-gray-500 text-md text-center gap-1 grid">
          <p>O link será aberto automaticamente em alguns instantes. </p>
          <p>
            Não foi redirecionado?{' '}
            <a className="text-blue-base cursor-pointer" href={href}>
              Acesse aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Redirect
