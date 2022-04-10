import React from 'react'
import cn from 'classnames'
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as SelectMui } from "@mui/material"

export default function Select({ className, label, name, options }: Props) {
  const { control } = useFormContext();

  const getOptions = () => {
    return options?.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (

    <Controller
      name={name}
      control={control}
      rules={{
        required: 'this field is required',
      }}
      render={({
        field: { ...field },
        fieldState: { error },
        formState,
      }) => (
        <FormControl className={cn(className)} fullWidth error={!!error}>
          <InputLabel id={"select-label" + name}>{label}</InputLabel>
          <SelectMui
            {...field}
            fullWidth
            labelId={"select-label" + name}
            label={label}
          >
            {getOptions()}
          </SelectMui>
          <FormHelperText className='text-red-600'>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />

  )
}

Select.defaultProps = {
  label: '',
  name: '',
  options: []
}

type Props = {
  className?: string
  label: string
  name: string
  options: any[]
}