import axios from 'axios'

const url = 'https://api.jsonbin.io/b/605446d27ea6546cf3e29258/1'

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}
