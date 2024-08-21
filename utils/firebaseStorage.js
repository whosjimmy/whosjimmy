import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export async function uploadImage(file, filePath) {
	const storage = getStorage()
	const storageRef = ref(storage, filePath)
	const snapshot = await uploadBytes(storageRef, file)
	return getDownloadURL(snapshot.ref)
}
