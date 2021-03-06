import { Meta, Story } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
	title: 'Banner',
	component: Banner,
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		title: 'Defy death',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death'
	},
	parameters: {
		layout: 'fullScreen'
	}
} as Meta

export const Basic: Story<BannerProps> = (args) => (
	<div style={{ maxWidth: '104rem', margin: '0 auto' }}>
		<Banner {...args} />
	</div>
)

export const WithRibbon: Story<BannerProps> = (args) => (
	<div style={{ maxWidth: '104rem', margin: '0 auto' }}>
		<Banner {...args} />
	</div>
)
WithRibbon.args = {
	ribbonText: 'Best seller',
	ribbonColor: 'primary',
	ribbonSize: 'normal'
}
