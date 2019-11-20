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

    renderQuestions = () => {
        const {
            match: { path },
            history,
          } = this.props
          if (this.state.questions.length) {
            return this.state.questions.map((question) => (
              <Card key={question.id}>
                <CardHeader imageUrl={question.image_url} />
                <CardBody>
                  <h3>{question.topic}</h3>
                  <p>{question.question}</p>
                </CardBody>
                {/* <Button
                  variant="fab"
                  color="danger"
                  title="X"
                  className="delete" */}
                {/* //   onClick={() => this.handleOpenModal(food, index)} */}
                
                <Button
                  color="primary"
                  title="Edit"
                  className="edit" 
                  onClick={() => history.push(`${path}/edit/${question.id}`)} 
                />
                
              </Card>
            ))
          }
    }


    render() {
        return (
            <>
                <h1>Welcome to NFL Predictions</h1>
                <h3>Have a gut feeling on who's going to win an upcoming game?</h3>
                <p>Post your prediction below and prove the world the Nostradamus you are</p>
                {this.renderQuestions()}
            </>
        )
    }
}



export default NFLQuestions