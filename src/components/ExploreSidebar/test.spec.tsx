import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mock from './mock'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
	it('should render the headings', () => {
		renderWithTheme(<ExploreSidebar items={mock} />)

		expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /sort by/i })
		).toBeInTheDocument()
		expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
		expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
	})

	it('should render inputs', () => {
		renderWithTheme(<ExploreSidebar items={mock} />)

		expect(
			screen.getByRole('checkbox', { name: /under \$50/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('radio', { name: /low to high/i })
		).toBeInTheDocument()
	})

	it('should render the filter button', () => {
		renderWithTheme(<ExploreSidebar items={mock} />)

		expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
	})
})