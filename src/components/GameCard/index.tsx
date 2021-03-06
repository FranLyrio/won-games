import {
	FavoriteBorder,
	AddShoppingCart,
	Favorite
} from 'styled-icons/material-outlined'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Button from 'components/Button'
import * as S from './styles'

export type GameCardProps = {
	title: string
	developer: string
	img: string
	price: string
	promotionalPrice?: string
	favorite?: boolean
	onFav?: () => void
	ribbonText?: React.ReactNode
	ribbonColor?: RibbonColors
	ribbonSize?: RibbonSizes
}

const GameCard = ({
	title,
	developer,
	img,
	price,
	promotionalPrice,
	favorite = false,
	onFav,
	ribbonText,
	ribbonColor = 'primary',
	ribbonSize = 'small'
}: GameCardProps) => (
	<S.Wrapper>
		{!!ribbonText && (
			<Ribbon color={ribbonColor} size={ribbonSize}>
				{ribbonText}
			</Ribbon>
		)}
		<S.ImageBox>
			<img src={img} alt={title} />
		</S.ImageBox>

		<S.Content>
			<S.Info>
				<S.Title>{title}</S.Title>
				<S.Developer>{developer}</S.Developer>
			</S.Info>

			<S.FavButton onClick={onFav} role="button">
				{favorite ? (
					<Favorite aria-label="Remove from wishlist" />
				) : (
					<FavoriteBorder aria-label="Add to wishlist" />
				)}
			</S.FavButton>

			<S.BuyBox>
				{!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
				<S.Price>{promotionalPrice || price}</S.Price>
				<Button icon={<AddShoppingCart />} size="small" />
			</S.BuyBox>
		</S.Content>
	</S.Wrapper>
)

export default GameCard
