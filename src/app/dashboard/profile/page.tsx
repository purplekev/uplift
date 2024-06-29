'use client'

import { ProfileStats } from '@/src/app/components/ProfileStats'
import { Press_Start_2P } from 'next/font/google'
import Loader from '@/src/app/components/TextLoader'
import { Shiba } from "../../components/Shiba";
import { BottomNavigation } from '../../components/BottomNavigation'
import { useState, useEffect } from 'react';
import url from '@/config'

import { User } from '@/src/app/pages/types'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400'
})

const base_user: User = {
  "username": "test",
  "email": "test",
  "name": "test",
  "curr_xp": 0,
  "target_xp": 0,
  "level": 0
}

export default function DashboardPage() {

  const texts = ["uplift"];
  const [ret_user, setUser] = useState(base_user)

  useEffect(function () {
    fetch(url + '/user/stats', {})
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data)
      })

  }, [])


  return (
    <div>
      <section className='flex flex-col items-center justify-center py-10'>
        <h1 className='text-center text-9xl font-extrabold leading-tight'>

          <span className={`text-center text-5xl font-extrabold leading-tight ${pressStart2P.className} bg-span-bg bg-clip-text text-transparent`}>
            {ret_user.username}
          </span>
          <br />
        </h1>
        <div className='h-16'>
          <Loader texts={texts} typingSpeed={150} pauseTime={2000} />
        </div>
      </section>
      <Shiba />
      <section className='flex flex-col items-center justify-center py-10'>
        <div>
          <ProfileStats user={ret_user} />
          <div style={{ marginBottom: '20px' }}></div>
        </div>

      </section>
      <BottomNavigation />
    </div>
  )
}