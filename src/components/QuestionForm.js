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
				placeholder='NFL Topic (Format: Action/Not) '
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='question'
				value={question}
				required={true}
				placeholder='Question'
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='image_url'
				value={image_url}
				required={true}
				placeholder='Question Image (RIGHT CLICK desired image and select Open Image in New Tab (then) SELECT Copy Image Address)'
				onChange={(e) => onChange(e)}
			/>
			
			<Button title='Submit Question' color='primary' />
        </form>
    )
}

export default QuestionForm