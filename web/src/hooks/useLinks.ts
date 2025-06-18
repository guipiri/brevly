import { useEffect, useState } from 'react'
import { fetchLinksWithAxios, type ILink } from '../http/fetch-links'

export function useLinks() {
  const [links, setLinks] = useState<null | ILink[]>(null)

  const fetchLinks = async () => {
    const links = await fetchLinksWithAxios.exec()
    setLinks(links)
  }

  useEffect(() => {
    fetchLinks()
  }, [])

  return links
}
