import { ref } from "@vue/runtime-dom"
import { projectStorage } from "../firebase/config"
import getUser from "./getUser"

const { user } = getUser()

const useStorage = () => {
    const error = ref(null)
    const url = ref(null)
    const filePath = ref(null)

    const uploadImage = async (file) => {
        filePath.value = `covers/${user.value.uid}/${file.name}`
        const storageRef = projectStorage.ref(filePath.value)

        try {
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()
        } catch(err) {
            console.log(err.message)
            error.value = err.message
        }
    }

    const uploadAvatar = async (file) => {
        filePath.value = `Avatar/${user.value.uid}/${file.name}`
        const storageRef = projectStorage.ref(filePath.value)

        try {
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()
        } catch(err) {
            console.log(err.message)
            error.value = err.message
        }
    }

    return { url, filePath, error, uploadImage, uploadAvatar }
}

export default useStorage