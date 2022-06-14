

export const  handlegclick=(gclick,setGclick)=>{
    setGclick(!gclick)
}
export const handlecondclick=(condclick,setCondclick)=>{
    setCondclick(!condclick)
}
export const handlecatclick=(catclick,setCatclick)=>{
    setCatclick(!catclick)
}
export const handlequickview=(quickviewstatus,setQuickviewstatus)=>{
    if(quickviewstatus)
    {
        setQuickviewstatus(quickviewstatus=false)
    }
    else{
        setQuickviewstatus(quickviewstatus=true)
    }
    console.log("mouseover")
}

