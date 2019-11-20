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
        this.fetchQuestionById()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { topic, question, image_url } = this.state
        const data = {
            topic,
            question,
            image_url
        }
        api.put(`/NFL/${this.props.match.params.NFL_id}`, data)
            .then(response => response.status === 200 ? this.props.history.push('/nflquestions') : null)
            .catch(() => this.setState({ errorMsg: "An error has been found in Edit Component" }))
    }

    fetchQuestionById = async () => {
        const {
            match: { params }
        } = this.props
        try {
            const questions = await api.get(`/NFL/${params.NFL_id}`)
            this.setState({
                topic: questions.data.topic,
                question: questions.data.question,
                image_url: questions.data.image_url
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { topic, question, image_url } = this.state
        return (
            <div className='food-forms'>
                <h3>Change Predicition</h3>
                <QuestionForm
                    formData={{ topic, question, image_url }}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                {this.state.errorMsg ? (
                    <p className='error-text'>{this.state.errorMsg}</p>
                ) : null}
            </div>
        )
    }

}


export default EditQuestions
