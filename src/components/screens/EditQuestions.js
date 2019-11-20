import React from 'react'
import QuestionForm from '.././QuestionForm'
import { api } from '../../services/ApiConfig'

class EditQuestions extends React.Component {
    constructor() {
        super()
        this.state = {
            topic: '',
            question: '',
            image_url: '',
            errorMsg: '',
        }
    }

    componentDidMount() {
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { topic, question, image_url } = this.state
        const data =  {
            topic,
            question,
            image_url
        }
        api.put(`/NFL/${this.props.match.params.NFL_id}`, data)
        .then(response => response.status === 200 ? this.props.history.push('/NFL') : null)
        .catch(() => this.setState({ errorMsg: "An error has been found in Edit Component" }))
    }

    fetchQuestionById = async () => {
        const {
            match: { params }
        } = this.props
        try {
            const questions = await api.get(`/NFL/${params.NFL_id}`)
            this.setState({
                topic: NFL.data.topic,
                question: NFL.data.question,
                image_url: NFL.data.image_url
            })
        } catch(error) {
            console.error(error)
        }
    }

    

}

