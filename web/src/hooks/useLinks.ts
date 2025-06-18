import { useEffect, useState } from 'react'
import { fetchLinksWithAxios, type ILink } from '../http/fetch-links'

export function useLinks() {
  const [links, setLinks] = useState<ILink[]>([])
  const [refresh, setRefresh] = useState<boolean>(false)

  const fetchLinks = async () => {
    const links = await fetchLinksWithAxios.exec()
    setLinks(links)
  }

  useEffect(() => {
    fetchLinks()
  }, [refresh])

  const refetch = () => {
    setRefresh(!refresh)
  }

  return { links, refetch }
}
