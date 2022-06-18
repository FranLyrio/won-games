import { Meta, Story } from '@storybook/react'
import Gallery, { GalleryProps } from '.'
import mock from './mock'

export default {
	title: 'Gallery',
	component: Gallery,
	args: { items: mock },
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story<GalleryProps> = (args) => <Gallery {...args} />
