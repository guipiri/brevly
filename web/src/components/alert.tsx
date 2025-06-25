import { useState } from 'react'
import { CheckIcon, WarningIcon, XIcon } from '@phosphor-icons/react'

const alertStyles = {
  success: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    icon: <CheckIcon className="w-5 h-5 text-green-600" />,
  },
  error: {
    bg: 'bg-red-100',
    text: 'text-red-danger',
    icon: <XIcon className="w-5 h-5 text-red-600" />,
  },
  warning: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    icon: <WarningIcon className="w-5 h-5 text-yellow-600" />,
  },
}

export type AlertType = 'success' | 'warning' | 'error'

export interface AlertProps {
  type?: AlertType
  message: string
  onClose?: () => void
}

export default function Alert({
  type = 'warning',
  message,
  onClose = () => {},
}: AlertProps) {
  const [visible, setVisible] = useState(true)
  const style = alertStyles[type]

  if (!visible) return null

  return (
    <div
      className={`flex items-center p-4 rounded-sm ${style.bg} shadow-2xl ${style.text} transition-opacity duration-300 animate`}
    >
      <div className="mr-3">{style.icon}</div>
      <span className="flex-1 text-md text-gray-500">{message}</span>
      {onClose && (
        <button
          onClick={() => {
            setVisible(false)
            onClose()
          }}
          className="ml-4 text-xl font-bold leading-none focus:outline-none hover:cursor-pointer"
        >
          <XIcon size={16} className="fill-gray-500" />
        </button>
      )}
    </div>
  )
}
