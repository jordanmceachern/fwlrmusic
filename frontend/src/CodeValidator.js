import React, { useState, useRef } from 'react'
import './resources/CodeValidator.css'
import SocialLinks from './SocialLinks'
import LoadingSpinner from './LoadingSpinner'

const CodeValidator = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const [secretAnswer, setSecretAnswer] = useState(null)
  const inputRef = useRef(null)
  const codeReturnRef = useRef(null)

  const runQuery = async userInput => {
    const response = await fetch(`/database/:${userInput}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.text()
  }

  const queryDatabase = async e => {
    e.preventDefault()
    setIsDisabled(true)
    if (secretAnswer) {
      setSecretAnswer(null)
    }
    //
    let inputValue
    let secret
    const input = inputRef.current
    const codeReturn = codeReturnRef.current
    //
    codeReturn.textContent = ''
    //
    if (input) {
      setIsValidating(true)
      inputValue = input.value
      if (!inputValue.includes('http')) {
        secret = await runQuery(inputValue).catch(console.dir)
        setIsValidating(false)
        setIsDisabled(false)
        if (secret) {
          codeReturn.textContent = 'Code Validated!'
          codeReturn.style.color = 'rgb(0,255,0)'
          setSecretAnswer(secret)
        } else {
          codeReturn.textContent = 'This code is invalid'
          codeReturn.style.color = 'rgb(255,0,0)'
        }
      } else {
        setIsValidating(false)
        setIsDisabled(false)
        codeReturn.textContent = 'This code is invalid'
        codeReturn.style.color = 'rgb(255,0,0)'
      }
    }
  }

  return (
    <div className='code-validator-container'>
      <form className='code-validator' onSubmit={queryDatabase}>
        <h1>Code Validator</h1>
        <input
          ref={inputRef}
          type='text'
          className='code-input'
          placeholder='Input secret code here'
          required
        />
        <div className='code-return-container'>
          {
            isValidating && (
              <LoadingSpinner inline />
            )
          }
          <p ref={codeReturnRef} className='code-return' />
          {
            (secretAnswer && secretAnswer.includes('http'))
              ? <a href={secretAnswer} target='_blank' rel='noopener noreferrer nofollow' className='secret-answer'>Click here</a>
              : <p className='secret-answer'>{secretAnswer}</p>
          }
        </div>
        <input
          type='submit'
          className='submit-code'
          value='Submit'
          disabled={isDisabled}
        />
      </form>
      <SocialLinks />
    </div>
  )
}

export default CodeValidator
