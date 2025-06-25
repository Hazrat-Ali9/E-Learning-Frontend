import React from 'react'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import DashboardContent from './DashboardContent/DashboardContent'

const Dashboard = () => {
  return (
    <div id='dashboard.jsx' className='my-5'>
      <div className="container flex gap-10">
        <div className="dashboard_sidebar w-[30%]">
            <DashboardSidebar/>
        </div>
        <div className="dashboard_content w-[70%]">
            <DashboardContent/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
