import React from 'react'

export const Mensdropdown = ({dropcontent}) => {
  return (
    <div>
        { dropcontent?.map((el)=>(
            <div>{el.name}</div>
        ))  }
         { dropcontent.length>0 && <div >Home</div>} 
    </div>
  )
}
