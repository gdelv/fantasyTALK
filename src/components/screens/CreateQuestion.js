import React from 'react'
import QuestionForm from '../QuestionForm'
import { api } from '../../services/ApiConfig'


class CreateQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: '',
            question: '',
            image_url: '',
            errorMsg: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { topic, question, image_url } = this.state
        const data = {
            topic,
            question,
            image_url
        }
        api.post('/NFL', data)
            .then((response) => response.status === 201 ? this.props.history.push('/NFL') : null)
            .catch(() => this.setState({ errorMsg: 'There was an error' }))
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { topic, question, image_url } = this.state
        return (
            <div className='food-forms'>
                <h3>Create a prediction!</h3>
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


export default CreateQuestion