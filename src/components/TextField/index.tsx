import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
	onInput?: (value: string) => void
	label?: string
	labelFor?: string
	initialValue?: string
	icon?: React.ReactNode
	iconPosition?: 'left' | 'right'
	error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
	label,
	labelFor = '',
	initialValue = '',
	onInput,
	icon,
	iconPosition = 'left',
	disabled,
	error,
	...props
}: TextFieldProps) => {
	const [value, setValue] = useState(initialValue)

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value
		setValue(newValue)

		!!onInput && onInput(newValue)
	}

	return (
		<S.Wrapper disabled={disabled} error={!!error}>
			{!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
			<S.InputWrapper>
				{!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
				<S.Input
					iconPosition={iconPosition}
					type="text"
					onChange={onChange}
					value={value}
					disabled={disabled}
					{...props}
				/>
			</S.InputWrapper>
			{!!error && <S.Error>{error}</S.Error>}
		</S.Wrapper>
	)
}

export default TextField