import * as Permissions from 'expo-permissions'

class AppPermissions {
    async getLocationPermission() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)
        if (status !== 'granted') {
            return this.askLocationPermission()
        }

        return true
    }

    async askLocationPermission() {
        const { status, permissions } = await Permissions.askAsync(
            Permissions.LOCATION
        )

        if (status === 'granted') {
            return true
        }

        return false
    }

    async getCameraPermission() {
        const { status } = await Permissions.getAsync(Permissions.CAMERA)

        if (status !== 'granted') {
            return this.askCameraPermission()
        }

        return true
    }

    async askCameraPermission() {
        const { status, permissions } = await Permissions.askAsync(
            Permissions.CAMERA
        )

        if (status === 'granted') {
            return true
        }

        return false
    }

    async getCameraRollPermission() {
        const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL)

        if (status !== 'granted') {
            return this.askCameraRollPermission()
        }

        return true
    }

    async askCameraRollPermission() {
        const { status, permissions } = await Permissions.askAsync(
            Permissions.CAMERA_ROLL
        )

        if (status === 'granted') {
            return true
        }

        return false
    }

    async getNotificationsPermission() {
        const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)

        if (status !== 'granted') {
            return this.askNotificationsPermission()
        }

        return true
    }

    async askNotificationsPermission() {
        const { status, permissions } = await Permissions.askAsync(
            Permissions.NOTIFICATIONS
        )

        if (status === 'granted') {
            return true
        }

        return false
    }

    async getAudioRecordingPermission() {
        const { status } = await Permissions.getAsync(Permissions.AUDIO_RECORDING)

        if (status !== 'granted') {
            return this.askAudioRecordingPermission()
        }

        return true
    }

    async askAudioRecordingPermission() {
        const { status, permissions } = await Permissions.askAsync(
            Permissions.AUDIO_RECORDING
        )

        if (status === 'granted') {
            return true
        }

        return false
    }
}

export { AppPermissions }
