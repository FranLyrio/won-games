import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import CartList from 'components/CartList'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { CartListProps } from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'

import Base from 'templates/Base'

import * as S from './styles'
import Empty from 'components/Empty'

export type CartProps = {
	recommendedGames: GameCardProps[]
	recommendedHighlight: HighlightProps
} & CartListProps &
	Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
	recommendedGames,
	recommendedHighlight,
	items,
	total,
	cards
}: CartProps) => {
	const handlePayment = () => console.log('handle payment')

	return (
		<Base>
			<Container>
				<Heading lineLeft lineColor="secondary">
					My cart
				</Heading>

				{items.length ? (
					<S.Content>
						<CartList items={items} total={total} />
						<PaymentOptions cards={cards} handlePayment={handlePayment} />
					</S.Content>
				) : (
					<Empty
						title="Yout cart is empty"
						description="Go back to the store and explore great games and offers"
						hasLink
					/>
				)}
				<Divider />
			</Container>

			<Showcase
				title="You may like these games"
				games={recommendedGames}
				highlight={recommendedHighlight}
			/>
		</Base>
	)
}

export default Cart
