'use client'

import React from 'react'
import Discussionposts from './Discussionposts'
import Marketstories from './Marketstories'
import { useAppContext } from '@/app/context'

const ToggleDiscussionMarket = () => {
  
  const {activebutton} =useAppContext()
  
  return (
    <div>
      {activebutton === 'discussion' && <Discussionposts/>}
      {activebutton === 'market' && <Marketstories/>}
    </div>
  )
}

export default ToggleDiscussionMarket