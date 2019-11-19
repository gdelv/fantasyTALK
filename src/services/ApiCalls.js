import { api } from './ApiConfig'

export const getAllQuestions = async () => {
    try {
        const resp = await api.get('/NFL')
        return resp.data
    } catch(error) {
        throw error
    }
}

export const getSingleQuestion = async (question_id) => {
    try {
        const resp = await api.get(`/NFL/${question_id}`)
        return resp.data
    } catch(error) {
        throw error
    }
}

export const createQuestion = async (questionData) => {
    try {
        const resp = await api.post('/NFL', questionData)
        return resp
    } catch(error) {
        throw error
    }
}