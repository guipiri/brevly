import React, { createContext, useContext, useState, useCallback } from 'react'
import Alert, { type AlertProps } from '../components/alert'

type ShowAlertProps = AlertProps & {
  id?: number
  duration?: number
}

const AlertContext = createContext<{
  showAlert: (params: ShowAlertProps) => void
}>({
  showAlert: () => {},
})

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<ShowAlertProps[]>([])

  const showAlert = useCallback(
    ({ type, message, duration = 5000, onClose }: ShowAlertProps) => {
      const id = Date.now()

      setAlerts((prev) => [...prev, { id, type, message, duration, onClose }])

      if (duration) {
        setTimeout(() => {
          setAlerts((prev) => prev.filter((alert) => alert.id !== id))
          if (onClose) onClose()
        }, duration)
      }
    },
    []
  )

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <div className="absolute bottom-0 left-0 z-50 space-y-3 w-full sm:max-w-[23.75rem] max-w-[40rem] p-4">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            type={alert.type}
            message={alert.message}
            onClose={alert.onClose}
          />
        ))}
      </div>
    </AlertContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAlert() {
  const context = useContext(AlertContext)
  if (!context) throw new Error('useAlert deve estar dentro de <AlertProvider>')
  return { showAlert: context.showAlert }
}
