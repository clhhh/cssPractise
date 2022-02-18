import React, { useState } from "react";
import cn from "classnames";
import "./index.scss";

const Prefix = "Slider";

const SliderDemo = function SliderDemo(props) {
  const {marks,article}=props
  const [rotateAngle, setRotateAngle] = useState(0);
  const [yearItem, setYearItem] = useState(2020);
  const [articleItem, setArticleItem] = useState((article)[Object.keys(article)[0]]);
  const [progress, setProgress] = useState(Object.keys(marks)[0]);
  const [oldItem,setOldItem]=useState(Object.keys(marks)[0])
  const handleOnMouseOver = (e) => {
    setArticleItem(article[e]);
    setYearItem(marks[e]);
    setProgress(e);
    if(e!==oldItem){
      e>oldItem?setRotateAngle(rotateAngle + 75): setRotateAngle(rotateAngle - 75);
    }
    setOldItem(e)
  };

  return (
    <div className={`${Prefix}-content`}>
      <div className={`${Prefix}-circle`}>
        <img
          src="https://yitutech.com/sites/all/themes/yitu/images/bg-history-line.svg"
          alt=""
          style={{
            transition: "all 1s cubic-bezier(0.645, 0.045, 0.355, 1)", //箭头转向增加平滑效果
            transform: `rotate(${rotateAngle}deg)`,
          }}
        />
      </div>
      
      <div className={`${Prefix}-content2`}>
      <div className={`${Prefix}-textHeader`}>我们的历程</div>
        <div className={`${Prefix}-text`}>
          <div className={`${Prefix}-text-right`}>{yearItem}</div>
          <div className={`${Prefix}-text-left`}>{articleItem}</div>
        </div>
        <div className={`${Prefix}-bar`}>
          {Object.keys(marks).map((item) => {
            console.log(typeof item, item);
            return (
              <div>
                <div  className={cn(`${Prefix}-light`, { isHover: item === progress })}
                style={{ left: `${item*0.8}vw`}}>

                </div>
                <div  className={cn(`${Prefix}-animationLight`, { isHover: item === progress })}
                style={{ left: `${item*0.8}vw`}}>

                </div>
                <div
                  className={cn(`${Prefix}-point`, { isHover: item === progress })}
                  style={{ left: `${item*0.8}vw` }}
                  onMouseOver={() => handleOnMouseOver(item)}
                  //加了key值无法触发补间动画
                  //key={progress} 
                />
                 <div
                  className={cn(`${Prefix}-bottomYearItem`, { isHover: item === progress })}
                  style={{ left: `${item*0.8}vw`}}
                  onMouseOver={() => handleOnMouseOver(item)}
                >
                  {marks[item]}
                </div>
                
              </div>
            );
          })}
         
          <div className={`${Prefix}-active-bar`} style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </div>
  );
};

export default SliderDemo;





