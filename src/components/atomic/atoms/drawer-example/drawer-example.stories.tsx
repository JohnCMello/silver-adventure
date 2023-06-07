import type { Meta, StoryObj } from '@storybook/react'
import { DrawerExample as DrawerExampleComponent } from './drawer-example'
import React from 'react'

const meta: Meta<typeof DrawerExampleComponent> = {
  component: DrawerExampleComponent,
  title: 'Atoms/Drawer Example',
  args: {
    open: false,
    variant: 'temporary',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['temporary', 'permanent', 'persistent'],
    },
  },
}
export default meta

export const Left: StoryObj<typeof DrawerExampleComponent> = {
  render: (args) => {
    const drawerWidth = 240

    return (
      <div style={{ display: 'flex' }}>
        <DrawerExampleComponent
          {...args}
          anchor='left'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              p: 4,
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellendus totam temporibus, inventore fugit
          quae modi deleniti aliquid commodi magnam. Quis nemo cum rerum. Cupiditate porro quisquam sequi tempore
          officia?
        </DrawerExampleComponent>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nesciunt quae voluptate eius sed quos impedit
          adipisci necessitatibus! Nemo sed delectus totam incidunt reiciendis officia veniam ipsa atque quia esse.
          Impedit maxime nam id quidem odit corporis ratione nemo voluptates, cum, quibusdam ullam repellat excepturi
          quas accusantium minima nisi magnam obcaecati totam dolores aspernatur saepe vero. Saepe eligendi quos labore!
        </p>
      </div>
    )
  },
}
export const Right: StoryObj<typeof DrawerExampleComponent> = {
  render: (args) => {
    const drawerWidth = 240

    return (
      <div style={{ display: 'flex' }}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nesciunt quae voluptate eius sed quos impedit
          adipisci necessitatibus! Nemo sed delectus totam incidunt reiciendis officia veniam ipsa atque quia esse.
          Impedit maxime nam id quidem odit corporis ratione nemo voluptates, cum, quibusdam ullam repellat excepturi
          quas accusantium minima nisi magnam obcaecati totam dolores aspernatur saepe vero. Saepe eligendi quos labore!
        </p>
        <DrawerExampleComponent
          {...args}
          anchor='right'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              p: 4,
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellendus totam temporibus, inventore fugit
          quae modi deleniti aliquid commodi magnam. Quis nemo cum rerum. Cupiditate porro quisquam sequi tempore
          officia?
        </DrawerExampleComponent>
      </div>
    )
  },
}
