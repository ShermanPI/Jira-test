export const localStorageService = {
  get (key) {
    try {
      const value = window.localStorage.getItem(key)
      if (!value) this.set(key, [])
      return value ? JSON.parse(value) : []
    } catch {
      this.set(key, [])
      return []
    }
  },
  set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

export const KEYS = {
  CARD: 'cards',
  TAG: 'tags'
}
