import React from 'react'
import { Card } from '../shared/Card'
import { CardHeader } from '../shared/CardHeader'
import { CardBody } from '../shared/CardBody'
// import { Button } from '../shared/Button'
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
            // console.log(questions)
            this.setState({ questions: questions.data })
        } catch (error) {
            console.error(error)
        }
    }

    renderQuestions = () => {
        // const {
        //     match: { path },
        //     history,
        //   } = this.props
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
                
                {/* <Button
                  color="primary"
                  title="Edit"
                  className="edit" */}
                {/* //   onClick={() => history.push(`${path}/edit/${food.id}`)} */}
                
              </Card>
            ))
          }
    }


    render() {
        return (
            <>
                <div style={widgetStyle}>sports widget will be here</div>
                <h1>Welcome to NFL Questions</h1>
                <h3>Have a doubt on what to do regarding your fantasy team?</h3>
                <p>Post your question below to see opinions</p>
                {this.renderQuestions()}
            </>
        )
    }
}



export default NFLQuestions