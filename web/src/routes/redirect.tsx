import { useParams } from 'react-router'

function Redirect() {
  const params = useParams()
  console.log(params)

  return <div>Redirect</div>
}

export default Redirect
