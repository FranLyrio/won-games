import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
	it('should render correctly', () => {
		renderWithTheme(
			<Banner
				img="https://source.unsplash.com/user/willianjusten/1042x580"
				title="Defy death"
				subtitle="<p>Play the new <strong>CrashLands</strong> season</p>"
				buttonLabel="Buy now"
				buttonLink="/games/defy-death"
			/>
		)

		expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /defy death/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /Play the new CrashLands season/i })
		).toBeInTheDocument()
	})
})