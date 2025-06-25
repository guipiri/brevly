function LoadingBar({ active }: { active: boolean }) {
  return (
    <>
      {active && (
        <div className="absolute w-1/3 bg-blue-base animate-linear-loading h-1 top-0 rounded-xl" />
      )}
    </>
  )
}

export default LoadingBar
