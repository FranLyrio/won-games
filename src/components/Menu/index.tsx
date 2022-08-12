import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type MenuProps = {
	username?: string
}

const Menu = ({ username }: MenuProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<S.Wrapper>
			<MediaMatch lessThan="medium">
				<S.IconWrapper onClick={() => setIsOpen(true)}>
					<MenuIcon aria-label="Open menu" />
				</S.IconWrapper>
			</MediaMatch>

			<S.LogoWrapper>
				<Link href="/" passHref>
					<a>
						<Logo hideOnMobile />
					</a>
				</Link>
			</S.LogoWrapper>

			<MediaMatch greaterThan="medium">
				<S.MenuNav>
					<Link href="/" passHref>
						<S.MenuLink>Home</S.MenuLink>
					</Link>
					<Link href="/games" passHref>
						<S.MenuLink>Explore</S.MenuLink>
					</Link>
				</S.MenuNav>
			</MediaMatch>

			<S.MenuGroup>
				<S.IconWrapper>
					<SearchIcon aria-label="Search" />
				</S.IconWrapper>

				<S.IconWrapper>
					<ShoppingCartIcon aria-label="Open shopping cart" />
				</S.IconWrapper>

				{!username && (
					<MediaMatch greaterThan="medium">
						<Link href="/sign-in" passHref>
							<Button as="a">Sign in</Button>
						</Link>
					</MediaMatch>
				)}
			</S.MenuGroup>

			<S.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
				<CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
				<S.MenuNav>
					<Link href="/" passHref>
						<S.MenuLink>Home</S.MenuLink>
					</Link>
					<Link href="/games" passHref>
						<S.MenuLink>Explore</S.MenuLink>
					</Link>

					{!!username && (
						<>
							<S.MenuLink href="#">My account</S.MenuLink>
							<S.MenuLink href="#">Wishlist</S.MenuLink>
						</>
					)}
				</S.MenuNav>

				{!username && (
					<S.RegisterBox>
						<Link href="/sign-in" passHref>
							<Button fullWidth size="large">
								Sign in
							</Button>
						</Link>
						<span>or</span>
						<Link href="/sign-up" passHref>
							<S.CreateAccount title="Sign up">Sign up</S.CreateAccount>
						</Link>
					</S.RegisterBox>
				)}
			</S.MenuFull>
		</S.Wrapper>
	)
}

export default Menu
