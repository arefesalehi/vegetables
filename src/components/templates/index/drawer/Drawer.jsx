'use client'
import React from 'react'
import {
   Drawer as MTDrawer ,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { useState } from 'react'

const DrawerMenu = () => {
  const [openLeft, setOpenLeft] = useState(false)
  const openDrawerLeft = () => setOpenLeft(true)
  const closeDrawerLeft = () => setOpenLeft(false)

  return (
    <>
      <Button onClick={openDrawerLeft}>Open Drawer Left</Button>
      <Drawer
        placement="left"
        open={openLeft}
        onClose={closeDrawerLeft}
        className="p-4"
      >


          <div className="flex justify-between items-center mb-6">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>

    

      
    </>
  )
}

export default DrawerMenu
