import { ref } from 'vue'
import type { AxiosError } from 'axios'

/**
 * Abstract composable for handling loading, error, and fetch logic.
 * @param fetchRequest - Async function to fetch data
 * @returns { isLoading, error, fetchData }
 */
export const useFetchRequest = <T>(fetchRequest: () => Promise<T>) => {
  const isLoading = ref(false)
  const error = ref<AxiosError>()

  const fetchData = async () => {
    try {
      isLoading.value = true
      await fetchRequest()
      error.value = undefined
    } catch (e) {
      error.value = e as AxiosError
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    fetchData,
  }
}
