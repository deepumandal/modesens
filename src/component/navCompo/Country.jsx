import React from "react";
import style from "./Country.module.css";
const Country = () => {
  return (
    <div className={style.Country}>
      <h3 
       style={{
        fontWeight : 700,
        fontSize : "12px",
        lineHeight : "18px",
        color :  "#6c757d"
      }}  >Destination</h3>
      <ul className={style.destinationlist}>
        <li>
          <img
            className={style.countryicon}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAilBMVEX////YACfw8PAuUrLx9PTpur/w8fHXABzYACXXAAXXAAzYFiXjcXgkTLD09PK+xd17jcnga3fy+vnZJTPv6+sTRK45WbTUDC8dSK/p6+7O0+MAPq36+fSCksiqtNabp9Fker9IZLje4emRns3Fy98ANKq0vdpcdL1SbLptgcKjrdMAK6jZa3nTKTxDhlPEAAACX0lEQVRoge2Y646bMBCFWZzSq216MbXBNheDCaR9/9frxmMiVVpVGVd0u1o+5ceRgg7jzPEYkmUHBwcHB/+KEoMpGIaMIpBE5RgygqF6vebVk65/Yy7bM43KdFHRxcio+lVu5gUCMO/J4Koe1OgJqMrWm2oHUEmVW10wtTxWTJ1+zKe5qpDp9qqWnBXahgu/v8MA5s2qdRVWLozWnQi/z6y1AdVrvTbJ5mJwows/tRxXb8NtpPfrGMypq10to/kDAjCvZiFiHzspOmhjJ25Kipkkm99Nmjn9s+n2dZI5Nf1mU543x3nZPCsX1cNbDLGhl7qcIC0X3l5CG8XUelByKmtQ5MdnDGDOVaHUtTpqVZGrkO72ccMoHxKvVK54WMHp9AVBrNxrPYfamnZLtyi1bkF1TPuQ86QdKmquSsi5r4cWct4OtYecl4rXItm8Mg010DMnJCjqRAN9pIY0hiSbX6NG71CJ8/y+nCdW3t3OiG5LPOlviScx8RUqLFtapnFpoKGTdQ00tHEWsk+bZZxizj9hAHPP82EMfbRcDSPkfBzUaEM/xyHnPiwtZYeSmmkHVXLG4shdNeOwGsdYDdelzBbBBz2D0apYjKIpFCSedmzgItmceHGORpb0K9zGVsTCbdpZ2vTKibylTYbP74rSTe18WODP0Lv5+RUD8nHuG4pMYKAK88BVZBwFarTkGepVgSHNcZf/T+anHcne7Ej2fkcyzKzAcpg/g/mHHdk357vu0F1ny2H+pDnqUESyb+UfdyRDPUIhecGD6+Wao15ykGSo1zMkz/0n+MHBwcEr4he1M49j16i8yAAAAABJRU5ErkJggg=="
            alt=""
          />
          <p> United States (USD)</p>
        </li>
        <li>
          <img
            className={style.countryicon}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAApVBMVEX////PFCsAJH3MAAD12tv89PX44+UAAGkAH3slNYN2eqgAFHgAHXsAF3lobJ6Oj7RWWJQAEHfOACLWVloAAHHNABrRKTrNABPOCibrtLe1uM7hjo/aaW7Lzdz5+vzxzM7W2ORYYJjURUzddHvMAAnYWmJGTY69v9IAAFoAAGM9RovZYmiaoL+mpsCCg6nwxcgyPYcYK3/SOkLVSlXdfn/kmZ7pqa7NDJNgAAAEhElEQVR4nO2Ze3OaQBTFMaAmUXzwcJEajIDYxjSaaPv9P1r3wWMXdlkkM02nc88fGUOA+3PP4XFvDAMEAoFAIBAIBAKBQCAQ6MsVJSf+18Pi+4+xRj9meEfL5GThDTP9cd+zA95xHeRHHS1a0k0vWx7heebZd62aPOLdRuaglDnCGx4n7UfZ3uzZMIbrDxTgQ3wnGeUFXcdBexFhN2lF6ANgT3ZPeLnXcUrL+4lVlnPxFscUEZ52batwO4DtkfLGOjZJecfcWFyxq+nQjRchC21G3AqAyz+T8oO8/HVkCLL2KUVAXbNwG0DNez+plTciw9jufYbQLQu3ANiTxTPnvZNYYmn84zHEP7dxbkSXLHQHsL2F2nsjfKQEC++BIuzlWZAgdAUovF9JvQ8fvAX9sJhOvXNIs8AQUKzJQjeAwvuV1Pvw7E2nBcDd3dR7OXTPQhcAfN3Tbx+jxnWPbT+8eKRqBUAQMmrEJdVnQQ8gXvd+WvM+81hNHoAgiFlwlVnQAdS9Fxf/8OAVFUWAEsE6arLQDqD3vqxXB9BnYWnrAOzljpaPkey6Z963AEiyILjHsqAGqHmP5N63AlRZcKW3JpIFFUDh/QcrbwrfnvNeA1Ah5FlIG1mQA1Dvo/WALT5K6redZh0VAEE4t2XhVQbw+sR5H7R5LwJEmbeUyBu/hAThgnys1HQFBBkAfeKZdHfR+yh8GctrZPRZ8HOu0Nsr+fvpG9N1HWkAhr+u+b6C99Hrm6rCT+MTkqzA39V/BDCyeumUVgDpqd85GHds9hJXHxP0O0dMAchr+dcocAEAAAAAAP4NgJ63YpM/Vc9TsFvxsJ8s/mlo9TzJpx6i/8/7wJcDzGcK7ebCa+gp2RAd3W9DDUD02z3SfTe/yW/znarCnO69WNoSeazLKbWNke84DiobpdYVGG1S0yG7r9ZD2sp4shrLBRvRSFqGfLxQld8j2qH4pHwUzmUA85BfMCtxfHKpo3htqMZdys4obzGrk+UjAzbTDbOxvDUb07a2OmqTUgSTIsjGXQoAu7b4J6FLJT2eqjnFPeVBMCKhRwbmiq1CHUEKwMYLgvesPB1ts/GCuj3P21oOwWdGFFmwNQBsvKDyvmgx2wYU+YiDy0JQZGFYjTgUAHXvi3ERyr0vOtz2EU0+4uCygBRZqAGoyrPGmB8v6IZU9SxYRRY+xCwIAE3vU957YbygH9M1s8BWAQ1Ij11kgQPQeH8WxwtdBpX5iEOVhRnJQgmAy7d4f8jq041uo9pmFnwhC0s7B8jGCu9Z+XNzuNJ1WK3LwjgjW6O5WL6Y2x/z2859/bS3jOvvG1kw6SqkA4ogPu1oeRdVU6mG97cDNLMwqp4RzfehrfC/m/pYsR8AzYJohJCFm7zvB8BWQZqFI7fx1MH7vgAkC+9iFq4kC/lruei91eJ9fwB5FpwCAC++HwSBg1z6upF59n2rlgwgKMUAlu1H2fi+IN6a0gv7cEQrKnrPf8rsB53e3wiAsyrlEIC3d+2Bdia+6PxqXAcgEAgEAoFAIBAIBAKBQH9ffwCLWa5ouPPHnQAAAABJRU5ErkJggg=="
            alt=""
          />
          <p> United Kingdom (GBP) </p>
        </li>
        <li>
          <img
            className={style.countryicon}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT_K0zXpTtFrzz1KPWuXpKaRj0nVBvC-ppw&usqp=CAU"
            alt=""
          />
          <p> Australia (AUD)</p>
        </li>
        <li>
          <img
            className={style.countryicon}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAElBMVEXtKTn////tJjfsCSX/9/jtHTKAFE5lAAAAuElEQVR4nO3csQ2DABDAwCfA/iunf0u0UNyN4AE8AwAAAAAAAAAAAAAAAAAAADz6sc3JNhfbHGyalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJzc3mf1JvL2kAAAAAAAAAAAAAAAAAAADg6/7FHFGlgJcmpgAAAABJRU5ErkJggg=="
            alt=""
          />
          <p>Austria (EUR)</p>
        </li>
        <li>
          <img
            className={style.countryicon}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD8ziLHRj392mf8zRjGQDZXV1fVfHeUeRT/0yP5xyTHRT2goKDiravFPDG3t7fh4eGpqalycnJPUVeum1//32f71WjckYznuLX56elRUVGSdgDFOC3Ud3HEMybsxsRkZGTXg37t7e368fHhpqMkwM+zAAABK0lEQVR4nO3d3U7CUBCF0VOOVgUE8R+0Agrv/4qGmBjvO9E6Xd8brPT0dnYpkiRJkiRJkiRJkiRJkiRJkiT9Qavbu4ue3T88nkX1dNm75/Xmp++lCeh1eh7VrO1f1719G28ifE1zNZ1ENavz2r92uwsFDk9Y6xdxFQQconDenh7qPrGwLt9L+YgCDlJYu0PYXzhU4a5c5xYuF+mFx/TC/N+QkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPA/C/Pf885/k73sMwtPd/VHsI2Qf99iBBslI9iZGcFWkCRJkiRJkiRJkiRJkiRJkiRJv9Yn0sn+gwAtXdcAAAAASUVORK5CYII="
            alt=""
          />
          <p>Belgium (EUR)</p>
        </li>
      </ul>
      <br />
      <hr />
      <h4 
      style={{
        fontWeight : 700,
        fontSize : "12px",
        lineHeight : "18px",
        color :  "#6c757d"
      }} >Language</h4 >
      <ul>
        <li>English</li>
        <li>简体中文</li>
      </ul>
    </div>
  );
};

export default Country;
