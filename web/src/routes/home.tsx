import CreateLink from '../components/create-link'
import HomeHeader from '../components/home-header'
import ListLinks from '../components/list-links'

function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:items-start">
        <CreateLink />
        <ListLinks />
      </div>
    </>
  )
}

export default Home
