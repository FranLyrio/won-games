import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../utils/tests/helpers'

import Radio from '.'

describe('<Radio />', () => {
	it('should render with label (white)', () => {
		renderWithTheme(<Radio label="Radio" labelFor="check" value="anyValue" />)

		const label = screen.getByText('Radio')
		expect(label).toBeInTheDocument()
		expect(label).toHaveStyle({ color: '#fafafa' })
	})

	it('should render with label (black)', () => {
		renderWithTheme(<Radio label="Radio" labelColor="black" />)

		const label = screen.getByText('Radio')
		expect(label).toBeInTheDocument()
		expect(label).toHaveStyle({ color: '#030517' })
	})

	it('should render without label', () => {
		renderWithTheme(<Radio />)

		expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
	})

	it('should dispatch onCheck when label status changes', async () => {
		const onCheck = jest.fn()
		renderWithTheme(
			<Radio
				label="Radio"
				labelFor="Radio"
				onCheck={onCheck}
				value="anyValue"
			/>
		)

		expect(onCheck).not.toHaveBeenCalled()

		userEvent.click(screen.getByLabelText('Radio'))
		await waitFor(() => {
			expect(onCheck).toHaveBeenCalledTimes(1)
		})
		expect(onCheck).toHaveBeenCalledWith('anyValue')
	})

	it('Should be accessible with tab', () => {
		renderWithTheme(<Radio label="Radio label" labelFor="Radio" />)

		const radio = screen.getByLabelText(/radio label/i)

		expect(document.body).toHaveFocus()
		userEvent.tab()
		expect(radio).toHaveFocus()
	})
})
