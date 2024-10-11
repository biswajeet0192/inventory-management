import React from 'react'
import Header from '@/components/dashboard/header'

export default function Layout({children}) {
  return (
    <div className='flex'>
      <div className="w-56 min-h-screen bg-slate-900 text-slate-50">sidebar</div>
      <main className='w-full bg-slate-200 min-h-screen'>
        <Header />
        {children}
        </main>
    </div>
  )
}
