import type { Meta, StoryObj } from '@storybook/react'
import { NavigationExample as NavigationExampleComponent } from './navigation-example'
import React from 'react'

const meta: Meta<typeof NavigationExampleComponent> = {
  component: NavigationExampleComponent,
  title: 'Organisms/Navigation Example',
  tags: ['autodocs'],
  args: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/pagina-1', label: 'Pagina 1' },
      { href: '/pagina-2', label: 'Pagina 2' },
      { href: '/pagina-3', label: 'Pagina 3' },
      { href: '/pagina-4', label: 'Pagina 4' },
      { href: '/pagina-5', label: 'Pagina 5' },
    ],
  },
}
export default meta

export const NavigationExample: StoryObj<typeof NavigationExampleComponent> = {
  render: (args) => {
    return (
      <div style={{ display: 'flex' }}>
        <NavigationExampleComponent {...args} />
      </div>
    )
  },
}
