import type { Meta, StoryObj } from '@storybook/react'
import { HeroBannerExample as HeroBannerExampleComponent } from './hero-banner-example'
import React from 'react'

const meta: Meta<typeof HeroBannerExampleComponent> = {
  component: HeroBannerExampleComponent,
  title: 'Organisms/Hero Banner Example',
  tags: ['autodocs'],
  args: {
    title: 'Here is a title',
    backgroundImage: {
      alt: 'Next.js',
      url: 'https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png',
    },
  },
}
export default meta

export const HeroBannerExample: StoryObj<typeof HeroBannerExampleComponent> = {
  render: (args) => {
    return (
      <div style={{ display: 'flex' }}>
        <HeroBannerExampleComponent {...args} />
      </div>
    )
  },
}
