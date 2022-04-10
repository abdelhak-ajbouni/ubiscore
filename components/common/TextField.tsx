import React from 'react'
import cn from "classnames"
import { Controller, useFormContext } from "react-hook-form";
import { TextField as TextFieldMui } from "@mui/material"


export default function TextField({ className, label, name, rules }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'this field is required',
        minLength: {
          value: 3,
          message: "this field must be at least 3 characters"
        },
        maxLength: {
          value: 50,
          message: "this field must be at most 50 characters"
        },
        ...rules
      }}
      render={({
        field: { ...field },
        fieldState: { error },
        formState,
      }) => {
        return (
          <div>
            <TextFieldMui
              {...field}
              id={name}
              className={cn(className, { error: error })}
              label={label}
              aria-label={label}
              variant="outlined"
              fullWidth
              error={!!error}
              helperText={error?.message}
            />
          </div>
        )
      }

      }
    />
  )
}

TextField.defaultProps = {
  className: "",
  label: '',
  name: '',
  rules: {}
}

type Props = {
  className?: string
  label: string,
  name: string,
  rules?: any
}