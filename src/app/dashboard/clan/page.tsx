'use client'

// import Button from '../components/Button'
import Button from '../../components/Button'
import { BottomNavigation } from '../../components/BottomNavigation'
import { ProfileStatsClan } from '../../components/ClanForms/ProfileStatsClan'
import Loader from '../../components/TextLoader'
import { CreateClanForm } from '../../components/ClanForms/CreateClan'
import { Dropdown } from '../../components/ClanForms/Dropdown'
import { ChatComponent } from '../../components/ClanForms/ClanChat'
import { BombaclatChat } from '../../components/ClanForms/BombaclatChat'
import { Press_Start_2P } from 'next/font/google'
import { Townhall } from "../../components/Townhall";
import url from '@/config'
import { useState, useEffect } from 'react'
import { init } from 'next/dist/compiled/webpack/webpack'
import { Clan } from '../../pages/types'

const inter = Press_Start_2P({
  subsets: ['latin'],
  weight: '400'
})

export default function DashboardPage() {

  const initClan: Clan = {
    "name": "hi",
    "num_members": 0,
    "level": 0,
    'weight_lifted': 0,
    'curr_xp': 0,
    'target_xp': 0
  }

  const [clanData, setClanData] = useState(initClan)

  useEffect(function () {
    fetch(url + '/clan/stats', {})
      .then((resp) => resp.json())
      .then((data: Clan) => {
        setClanData(data)
      })

  }, [])

  return (
    <div>
      <section className='flex flex-col items-center justify-center py-10'>
        {/* <h1 className='text-center text-9xl font-extrabold leading-tight'> */}

        <span
          className={`block text-center text-7xl font-extrabold leading-tight ${inter.className} bg-span-bg bg-clip-text text-transparent`}
          style={{ width: '500px', display: 'block', overflow: 'visible' }}
        >
          {clanData.name}
        </span>
        <br />
        {/* </h1> */}
        <div className='my-6 px-20 text-center text-3xl text-text-secondary'>
          a member of the {clanData.name} since 2024
          {/* REPLACE THESE BUTTONS WITH A MODAL TO LEAVE OR JOIN CLAN */}
        </div>
        {/* <div className='h-20'>
          <Loader texts={fuckwit}/>
        </div> */}
        {/* <div className='mt-4 flex flex-row gap-4'>

          <a
            href='/login'
            target='_blank'
          >
            <Button rounded size='large' className='bg-red-500 text-white'>
              Leave Clan
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
          </a>
        </div> */}
        <div className='flex'>
          <CreateClanForm />
          <Button className='bg-green-600 ml-10 mr-10'>Join Clan</Button>
          {/* <Dropdown className='bg-green-600 ml-10'/> */}
          {/* <Button className='bg-red-500 ml-10'>Leave Clan</Button> */}
          <BombaclatChat />
        </div>
      </section>
      {/* <section className='bg-background-secondary py-8 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-md grid-cols-2 md:grid-cols-3 gap-5 px-3 py-3 md:max-w-screen-lg md:gap-7'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>Progress</h2>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Socialize</h2>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Level up!</h2>
          </div>
        </div>
      </section> */}




      <Townhall />
      <div>
        <ProfileStatsClan clan={clanData} />
        <div style={{ marginBottom: '50px' }}></div>
      </div>
      <div>
        {/* <ProfileStatsClan/> */}
        {/* <ChatComponent/> */}
      </div>
      <BottomNavigation />
    </div>
  )
}