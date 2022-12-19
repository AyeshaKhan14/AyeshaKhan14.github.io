import React from "react";
import GitHubCalendar from 'react-github-calendar';




  const Statistics=()=>{
    const selectLastHalfYear = contributions => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 12;
    
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
      <div className="flex gap-9  justify-center mt-14">
      <p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=ayeshakhan14&show_icons=true&locale=en&layout=compact&theme=gruvbox" alt="ayeshakhan14" /></p>
      <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=ayeshakhan14&theme=gruvbox" alt="ayeshakhan14" /></p>
      </div>
      <div className="flex justify-center items-center  mt-16 text-6xl font-medium">
        <GitHubCalendar 
     username="ayeshakhan14" 
  transformData={selectLastHalfYear} 
 
/>
      </div>

      <div style={{marginTop:"60px"}}>
          <img className="flex justify-center items-center " alt="Ayesha Khan's Activity Graph" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ayeshakhan14&theme=gruvbox" />
        </div>
     </div>
    )

  }

export default Statistics;