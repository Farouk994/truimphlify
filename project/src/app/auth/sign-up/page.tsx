// import ButtonHandler from '@/components/forms/sign-up/button-handlers'
// import SignUpFormProvider from '@/components/form-provider'
import SignUpFormProvider from '@/components/form/sign-up/form-provider'
// import HighLightBar from '@/components/forms/sign-up/highlight-bar'

import React from 'react'
import RegistrationFormStep from '@/components/form/sign-up/registration-step'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
            <h1>something</h1>
            {/* <ButtonHandler /> */}
          </div>
          {/* <HighLightBar /> */}
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUp