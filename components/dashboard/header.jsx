import { History } from 'lucide-react'
import React from 'react'

export default function header() {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8'>
      <div className="flex">
        <button>
          <History className='w-6 h-6 ' />
        </button>
      </div>
      <div className="flex">

      </div>
    </div>
  )
}
