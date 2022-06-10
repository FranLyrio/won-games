import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import bannerMock from '../../components/BannerSlider/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'

import Home from '.'

const props = {
	banners: bannerMock,
	newGames: [gamesMock[0]],
	mostPopularHighlight: highlightMock,
	mostPopularGames: [gamesMock[0]],
	upcomingGames: [gamesMock[0]],
	upcomingHighligth: highlightMock,
	upcomingMoreGames: [gamesMock[0]],
	freeGames: [gamesMock[0]],
	freeHighligth: highlightMock
}

describe('<Home />', () => {
	it('should render Home template', () => {
		renderWithTheme(<Home {...props} />)

		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /follow us/i })
		).toBeInTheDocument()

		expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /most popular/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /upcoming/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /free games/i })
		).toBeInTheDocument()

		// banner
		expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
		// card game (5 sections com 4 cards cada = 5x4 = 20; apenas um card 5x1)
		expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
		// highlight
		expect(screen.getAllByText(/read dead it’s back/i)).toHaveLength(3)
	})
})