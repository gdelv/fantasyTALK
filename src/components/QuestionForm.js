import React from 'react'
import { Input } from './shared/Input'
import { Button } from './shared/Button'

const QuestionForm =  (props) => {
    const { onChange, onSubmit } = props
    const { topic, question, image_url } = props.formData
    return(
        <form className='form' onSubmit={(e) => onSubmit(e)}>
            <Input
				name='topic'
				value={topic}
				required={true}
				placeholder='Prediction '
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='question'
				value={question}
				required={true}
				placeholder='Prediction Owner '
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='image_url'
				value={image_url}
				required={true}
				placeholder='Prediction Image (Paste Image Address)'
				onChange={(e) => onChange(e)}
			/>
			
			<Button title='Submit Prediction' color='primary' className='submit' />
        </form>
    )
}

export default QuestionForm