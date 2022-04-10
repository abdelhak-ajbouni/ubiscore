import React from 'react'
import cn from 'classnames'
import { Checkbox as CheckboxMui } from '@mui/material'

export default function Checkbox({ className, checked, onChange }: Props) {

  return (
    <div className={cn(className, 'flex items-center')}>
      <CheckboxMui
        defaultChecked
        checked={checked}
        onChange={onChange}
      />
      <span>Read and agree <a className='text-blue-500 font-bold underline' href="#">Terms and Conditions</a>.</span>
    </div>
  )
}

type Props = {
  className?: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}