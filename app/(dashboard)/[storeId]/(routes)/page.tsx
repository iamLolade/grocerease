import prismadb from '@/lib/prismadb'
import React from 'react'

interface DashboardPageProps {
  params: { storeId: string }
};

const DashboardPage: React.FC<DashboardPageProps> = async ({
  params
}) => {

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })

  return (
    <div className='pt-6 px-24 text-xl'>
      <span className='font-semibold'>Active Store:</span> {store?.name}
    </div>
  )
}

export default DashboardPage