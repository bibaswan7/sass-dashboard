import React from 'react'

const UserLayout = ({children}: {children: React.ReactNode}) => {
  return (
      <div className='container w-full max-w-screen mx-auto py-10'>
          {children}
    </div>
  )
}

export default UserLayout