import SignUpFormProvider from '@/components/form/sign-up/form-provider'
import React from 'react'
import RegistrationFormStep from '@/components/form/sign-up/registration-step'
import ButtonHandler from '@/components/form/sign-up/button-handlers'
import HighLightBar from '@/components/form/sign-up/highlight-bar'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
            <ButtonHandler />
          </div>
          <HighLightBar/>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUp