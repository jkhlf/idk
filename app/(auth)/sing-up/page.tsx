import { error } from 'console'
import React, { use, useActionState } from 'react'
import { signUp, ActionResponse } from '@/app/actions/auth'
import { useRouter } from 'next/navigation'

const initialState: ActionResponse = {
    sucess: false,
    message: '',
    errors: undefined
}

function SignUpPage() {
const router = useRouter();

const [state, formAction, isPeding] = useActionState <AuthenticatorAssertionResponse,FormData>(
    async (prevState: ActionResponse, formData: FormData) => {
        try {
            const result = await signUp(formData)
        }
    } catch (err) {
        return {

        }
    }
}, initialState)

  return (
    <div>page</div>
  )
}

export default SignUpPage