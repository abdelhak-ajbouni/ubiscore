import React from 'react'
import cn from 'classnames'
import { Button as ButtonMui } from "@mui/material"

export default function Button({ className, label, disabled, onClick }: Props) {

  return (
    <div>
      <ButtonMui
        className={cn(className, "bg-blue-500")}
        variant="contained"
        disableElevation
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </ButtonMui>
    </div>
  )
}

type Props = {
  className?: string
  label: string
  disabled?: boolean
  onClick?: () => void
}