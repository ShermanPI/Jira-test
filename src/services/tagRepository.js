import generateUUIDv4 from '../utilities/generateUUID'
import { KEYS, localStorageService } from './localStorageService'

const tagsLocalStorageRepository = {
  getAllTags () {
    return localStorageService.get(KEYS.TAG)
  },
  createTag ({ name }) {
    const tagList = this.getAllTags()
    const alreadyExist = tagList.some(el => el.name === name)
    if (alreadyExist) return undefined

    const newTag = { name, id: generateUUIDv4() }
    tagList.push(newTag)
    localStorageService.set(KEYS.TAG, tagList)
    return newTag
  }
}

const tagsRepository = tagsLocalStorageRepository

export default tagsRepository
