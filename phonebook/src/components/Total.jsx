import React from 'react'

export const Total = ({course}) => {
    

    

    // console.log(totalMap)

    return (
        <div>
            {
               course. parts.reduce((acc, cur) =>{
                    return acc + cur.exercises
                }, 0 )
            }
        </div>
    )
    

    
   
  
}
