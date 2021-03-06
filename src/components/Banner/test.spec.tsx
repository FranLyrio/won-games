import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
	img: 'https://source.unsplash.com/user/willianjusten/1042x580',
	title: 'Defy death',
	subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
	buttonLabel: 'Buy now',
	buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
	it('should render correctly', () => {
		renderWithTheme(<Banner {...props} />)

		expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /defy death/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /Play the new CrashLands season/i })
		).toBeInTheDocument()
	})

	it('should render with Ribbon', () => {
		renderWithTheme(
			<Banner
				{...props}
				ribbonText="My Ribbon"
				ribbonSize="small"
				ribbonColor="secondary"
			/>
		)

		const ribbon = screen.getByText(/my ribbon/i)

		expect(ribbon).toBeInTheDocument()
		expect(ribbon).toHaveStyle({
			'background-color': '#3cd3c1'
		})
		expect(ribbon).toHaveStyle({
			height: '2.6rem',
			'font-size': '1.2rem'
		})
	})
})
