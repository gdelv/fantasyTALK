import React from 'react'
// import { Card, CardHeader, CardBody, Button } from '../shared'
import { Card } from '../shared/Card'
import { CardHeader } from '../shared/CardHeader'
import { CardBody } from '../shared/CardBody'
import { Button } from '../shared/Button'
import { api } from '../../services/ApiConfig'

const widgetStyle = {
    border: '2px solid black',
    padding: '20px',
}

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
            console.log(questions)
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
                  {/* <p>{question.rating}/10</p> */}
                </CardBody>
                <Button
                  variant="fab"
                  color="danger"
                  title="X"
                  className="delete"
                //   onClick={() => this.handleOpenModal(food, index)}
                />
                <Button
                  color="primary"
                  title="Edit"
                  className="edit"
                //   onClick={() => history.push(`${path}/edit/${food.id}`)}
                />
              </Card>
            ))
          }
    }


    render() {
        return (
            <>
                <div style={widgetStyle}>sports widget will be here</div>
                <h1>welcome to nfl questions</h1>
                {this.renderQuestions()}
            </>
        )
    }
}



export default NFLQuestions