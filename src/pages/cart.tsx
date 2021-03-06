import Cart, { CartProps } from 'templates/Cart'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
	return <Cart {...props} />
}

export async function getServerSideProps() {
	return {
		props: {
			total: 'R$ 400,00',
			items: itemsMock,
			cards: cardsMock,
			recommendedGames: gamesMock,
			recommendedHighlight: highlightMock
		}
	}
}
