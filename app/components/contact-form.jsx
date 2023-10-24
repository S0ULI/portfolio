'use client';

import { useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';

import Wrapper from './Wrapper';
import Image from 'next/image';

const Form = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_KEY)
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(e)
    setEmailInput('');
    setMessageInput('')
  }

  return (
    <div className='mb-96'>
      <Wrapper myStyle="w-full flex flex-col gap-6 justify-center items-center">
        <h2 className='h2-style'>Contact Me</h2>
        <form onSubmit={submitHandler} className='flex flex-col gap-6 w-full max-w-md'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-color-gray-light' >Your Email</label>
            <input id="email" type="email" name="email" className='px-4 py-2 rounded-lg ring-2 bg-transparent ring-color-secondary text-color-white outline-none' value={emailInput} onChange={(e) => {setEmailInput(e.target.value)}} />
            <div className='text-color-accent'>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="message" className='text-color-gray-light'>Your Mesage</label>
            <textarea id="message" name="message" rows={5} className='px-4 py-2 rounded-lg bg-transparent ring-2 ring-color-secondary text-color-white outline-none resize-none' value={messageInput} onChange={(e) => {setMessageInput(e.target.value)}} />
            <div className='text-color-accent'>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
          {
            state.succeeded && <p className='text-color-secondary text-lg'>Thank You. I Got Your Message</p>
          }
          <button type="submit" disabled={state.submitting} className='btn w-fit'>
              <div className='flex justify-between items-center gap-2'>
                <span>Send Your Message</span>
                <span>
                  {
                    state.submitting ? (
                      <Image src='/icon/spinner.svg' alt='' width={20} height={20} className='animate-spinner' />
                      ) : (
                        <Image src='/icon/send.svg' alt='' width={20} height={20} />
                      )
                  }
                </span>
              </div>
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </Wrapper>
    </div>
  );
};

export default Form;
