import { useState } from 'react'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'

import * as S from './styles'

export type ItemProps = {
	title: string
	name: string
	type: string
	fields: Field[]
}

type Field = {
	label: string
	name: string
}

type Values = {
	[key: string]: boolean | string
}

export type ExploreSidebarProps = {
	items: ItemProps[]
	onFilter: (values: Values) => void
	initialValues?: Values
}

const ExploreSidebar = ({
	items,
	onFilter,
	initialValues = {}
}: ExploreSidebarProps) => {
	const [values, setValues] = useState(initialValues)

	const handleChangeValues = (field: string, value: string | boolean) => {
		setValues((prev) => ({ ...prev, [field]: value }))
	}

	const handleFilter = () => {
		onFilter(values)
	}

	return (
		<S.Wrapper>
			{items.map((item) => (
				<div key={item.title}>
					<Heading lineBottom lineColor="secondary">
						{item.title}
					</Heading>

					{item.type === 'checkbox' &&
						item.fields.map((field) => (
							<Checkbox
								key={field.name}
								name={field.name}
								label={field.label}
								labelFor={field.name}
								isChecked={!!values[field.name]}
								onCheck={(value) => handleChangeValues(field.name, value)}
							/>
						))}

					{item.type === 'radio' &&
						item.fields.map((field) => (
							<Radio
								key={field.name}
								id={field.name}
								name={item.name}
								label={field.label}
								labelFor={field.name}
								defaultChecked={field.name === values[item.name]}
								onChange={() => handleChangeValues(item.name, field.name)}
							/>
						))}
				</div>
			))}

			<Button fullWidth size="medium" onClick={handleFilter}>
				Filter
			</Button>
		</S.Wrapper>
	)
}

export default ExploreSidebar
