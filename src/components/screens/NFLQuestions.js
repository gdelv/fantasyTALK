import React from 'react'
import { Card } from '../shared/Card'
import { CardHeader } from '../shared/CardHeader'
import { CardBody } from '../shared/CardBody'
import { Button } from '../shared/Button'
import { api } from '../../services/ApiConfig'



class NFLQuestions extends React.Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      questionToDelete: {},
      toDelete: false,
    }
  }

  componentDidMount() {
    this.fetchQuestions()
  }

  fetchQuestions = async () => {
    try {
      const questions = await api.get('/NFL')
      // console.log(questions)
      this.setState({ questions: questions.data })
    } catch (error) {
      console.error(error)
    }
  }

  handleDeleteQuestion = () => {
    api.delete(`/NFL/${this.state.questionToDelete.id}`)
      .then(() => {
        const allQuestions = this.state.questions
        allQuestions.splice(this.state.questionToDelete.index, 1)
        this.setState({ questions: allQuestions })
      }).then(() => this.handleCloseModal())
      .catch(error => console.error(error))
  }

  handleOpenModal = (question, index) => {
    this.setState({ toDelete: true, questionToDelete: { ...question, index } })
  }

  handleCloseModal = () => {
    this.setState({ toDelete: false, questionToDelete: {} })
  }

  renderQuestions = () => {
    const {
      match: { path },
      history,
    } = this.props
    if (this.state.questions.length) {
      return this.state.questions.map((question, index) => (
        <Card key={question.id}>
          <CardHeader imageUrl={question.image_url} />
          <CardBody>
            <h3>{question.topic}</h3>
            <p>{question.question}</p>
          </CardBody>
          <Button
            title="X"
            className="delete"
            onClick={() => this.handleOpenModal(question, index)}
          />


          <Button
            title="Edit"
            className="edit"
            onClick={() => history.push(`${path}/edit/${question.id}`)}
          />

        </Card>
      ))
    }
  }

  renderDeleteConfirmModal = () => {
    if (this.state.toDelete) {
      return (
        <div className='modal'>
          <h3>Are you sure you want to delete your prediction of {this.state.questionToDelete.topic}?</h3>
          <div>
            <Button
              title='Yes'
              onClick={this.handleDeleteQuestion}
            />

            <Button
              title='No'
              onClick={this.handleCloseModal}
            />
          </div>
        </div>
      )
    } else {
      return (<div className='close' />)
    }
  }


  render() {
    return (
      <>
        <h1>NFL Predictions</h1>
        {/* <h3>Have a gut feeling on who's going to win an upcoming game?</h3>
        <p>Post your prediction below and prove the world the Nostradamus you are</p> */}
        {this.renderQuestions()}
        {this.renderDeleteConfirmModal()}
      </>
    )
  }
}



export default NFLQuestions