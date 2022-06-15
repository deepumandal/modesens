import React from 'react'
import style from "../community.module.css"
import Community_data from "../community_page_data.json"
const Community_Data = () => {
  return (
        <div className={style.community_posts}>
            {Community_data.map((data)=>(
            <div className={style.community_individul_posts}>
                <div className={style.community_posts_MainlogoDiv}>
                    <div className={style.community_posts_logoDiv}>
                        <img src={data.user_icon_main} alt="logo" />
                        <p>{data.user_name}</p>
                    </div>
                    <div>
                        <button>FOLLOW</button>
                    </div>
                </div>
               
                <br />
                <div className={style.community_posts_imagesDiv}>
                    <div className={style.community_posts_iDiv_i1}>
                        <img src={data.image} alt="mainimage" />
                    </div>
                    <div className={style.community_posts_iDiv_i2_i3_i4}>
                        <img src={data.image_2} alt="imageside" />
                        <img src={data.image_3} alt="imageside" />
                        <img src={data.image_4} alt="imageside" />
                    </div>
                </div>
                <div className={style.community_posts_lastLine}>
                    <p>{data.product_name}</p>
                </div>
            </div>
            ))}
    </div>
  )
}

export default Community_Data