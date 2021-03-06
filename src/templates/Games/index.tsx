import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'

import * as S from './styles'

export type GamesTemplateProps = {
	games?: GameCardProps[]
	filterItems: ItemProps[]
}

const GamesTemplate = ({ games, filterItems }: GamesTemplateProps) => (
	<Base>
		<S.Main>
			<ExploreSidebar
				items={filterItems}
				onFilter={(items) => console.log(items)}
			/>

			<section>
				<Grid>
					{games?.map((game) => (
						<GameCard key={game.title} {...game} />
					))}
				</Grid>

				<S.ShowMore role="button" onClick={() => console.log('show more')}>
					<p>Show more</p>
					<ArrowDown size={35} />
				</S.ShowMore>
			</section>
		</S.Main>
	</Base>
)

export default GamesTemplate
