import React from 'react';

import './App.css';

export default class App extends React.Component{
  constructor(){
    super()
    this.state = ({
      year:2020,
      N_month:"Jan",
      month:1,
      day:1,
      hour:12,
      Minute:1,
      Second:1,
      N_months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"],
    })
  }

  componentWillMount(){
    setInterval(()=>{
      let time = new Date()
      this.setState({
        N_month:this.state.N_months[time.getUTCMonth()],
        month:time.getMonth()+1,
        day:time.getDate(),
        hour:time.getHours(),
        Minute:time.getMinutes(),
        Second:time.getSeconds(),
      })
    },1000)
  }

  array = length => Array.from({length}).map((a,b)=>b).map(x=>x+1);
  addZero = num =>{
    if(num>=10){
      return num;
    }
      
    return '0'+num
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="msg">
            <div className="year">
              <span>
                {this.state.year}
              </span>
            </div>
            </div>
            <div>
              {`${this.state.N_month}`}
            </div>
            <div className='box'>
                {this.array(12).map((x,index)=>{
                  return(
                    <div key={index} className={`month item ${index===(this.state.month-1)?"active":""}`}
                    style={{transform:`rotate(${index*30-30*(this.state.month-1)}deg)`}}
                    >
                      {`${x} month`}
                    </div>
                  )
                })}

                {this.array(30).map((x,index)=>{
                  return(
                    <div key={index} className={`day item ${index===(this.state.day-1)?"active":""}`} 
                      style={{transform:`rotate(${index*12-12*(this.state.day-1)}deg)`}}
                    >
                        {`${x} day`}
                    </div>
                  )
                })}               

                {this.array(24).map((x,index)=>{
                  return(
                    <div key={index} className={`hour item ${index===(this.state.hour-1)?"active":""}`}
                      style={{transform: `rotate(${index*(360/24)-(360/24)*(this.state.hour-1)}deg)`}}
                    >
                      {`${x} hr`}
                    </div>
                  )
                })}
                {this.array(60).map((x,index)=>{
                  return (
                    <div key={index} className={`Minute item ${index===(this.state.Minute-1)?"active":""}`}
                      style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.Minute-1)}deg)`}}
                    >
                      {`${x} min `}
                    </div>
                  )
                })}
                  {this.array(60).map((x,index)=>{
              return (
                <div key={index} 
                className={`second item ${index===(this.state.Second-1)?"active":""}`} 
                style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.Second-1)}deg)`}}>
                  {`${x} sec`}
                </div>
              )
            })}
            </div>
        </header>
      </div>
    )
  }
}
