import { SpinnerIcon } from '@phosphor-icons/react'

function LoadingSpinner() {
  return (
    <>
      <hr className="border-gray-200" />
      <div className="pt-4 pb-6 flex flex-col gap-3 items-center">
        <SpinnerIcon size={32} className="fill-gray-400 animate-spin" />
        <span className="text-xs text-gray-500 uppercase">
          carregando links...
        </span>
      </div>
    </>
  )
}

export default LoadingSpinner
