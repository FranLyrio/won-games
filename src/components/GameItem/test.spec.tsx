import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
	img: 'https://source.unsplash;com/user/willianjusten/151x70',
	title: 'Red Dead Redemption 2',
	price: 'R$ 125,00'
}

describe('<GameItem />', () => {
	it('should render the item', () => {
		renderWithTheme(<GameItem {...props} />)

		expect(
			screen.getByRole('heading', { name: props.title })
		).toBeInTheDocument()

		expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
			'src',
			props.img
		)

		expect(screen.getByText('R$ 125,00')).toBeInTheDocument()
	})

	it('should render the item with download link', () => {
		const downloadLink = 'https://link'

		renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

		expect(screen.getByRole('link', { name: `Get ${props.title} here` }))
	})

	it('should render the payment info', () => {
		const paymentInfo = {
			cardNumber: '**** **** **** 4326',
			cardFlag: 'mastercard',
			flagImg: '/img/master-card.png',
			purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
		}

		renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

		expect(
			screen.getByRole('img', { name: paymentInfo.cardFlag })
		).toHaveAttribute('src', paymentInfo.flagImg)
	})
})
