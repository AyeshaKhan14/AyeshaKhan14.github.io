import React from "react";
import GitHubCalendar from 'react-github-calendar';




  const Statistics=()=>{
    const selectLastHalfYear = contributions => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 6;
    
      return contributions.filter(day => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();
    
        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    };
    return(
      <div 
      name="statistics"
      className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
      <div>
        <p className="text-orange-600	 text-4xl font-bold inline border-b-4 border-gray-500">
          Statistics
        </p>
      </div>

      <div className="flex justify-center items-center mt-4 text-7xl font-medium">
        <GitHubCalendar className="text-2xl text-orange-600"
     username="ayeshakhan14" 
  transformData={selectLastHalfYear} 
  hideTotalCount 
  hideColorLegend
/>
      </div>
     </div>
    )

  }

export default Statistics;