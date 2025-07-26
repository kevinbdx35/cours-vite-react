import { useState } from 'react'

// Hook pour contrôler le layout depuis n'importe quel composant
export function useLayout() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)
  const [modal, setModal] = useState(null)

  const showToast = (content, options = {}) => {
    setToast({
      content,
      onDismiss: () => setToast(null),
      duration: 4000,
      ...options
    })
  }

  const showModal = (config) => {
    setModal({
      open: true,
      onClose: () => setModal(null),
      ...config
    })
  }

  const hideModal = () => {
    setModal(null)
  }

  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  return {
    loading,
    toast,
    modal,
    showToast,
    showModal,
    hideModal,
    startLoading,
    stopLoading,
    layoutProps: {
      loading,
      toast,
      modal
    }
  }
}