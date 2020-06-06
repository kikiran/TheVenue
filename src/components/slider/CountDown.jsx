import React from 'react'
import Slide from 'react-reveal/Slide';

class CountDown extends React.Component {

    state = {
        deadLine: 'Dec, 11, 2020',
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0
    }

    getDeadline = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) {
            console.log('time passed')
        }else {
            const days = Math.floor(time/(1000*60*60*24));
            const hours = Math.floor((time/(1000*60*60))%24);
            const mins =  Math.floor((time/(1000/60))%60);
            const secs =  Math.floor(time/(1000)%60);

            this.setState({ 
                days, hours, mins, secs
            })

        }

    }

    componentDidMount() {
       setInterval( () => this.getDeadline(this.state.deadLine), 1000);
    }

    render() {
        return ( 
            <Slide left delay={1000}>
                <div className='countdown_wrapper'>
                        <div className="countdown_top">
                            Event Starts In
                        </div>
                        <div className="countdown_bottom">
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.days}
                                </div>
                                <div className="countdown_tag">
                                    Days
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.hours}
                                </div>
                                <div className="countdown_tag">
                                    HS   
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.mins}
                                </div>
                                <div className="countdown_tag">
                                    Min
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.secs}
                                </div>
                                <div className="countdown_tag">
                                    Sec
                                </div>
                            </div>
                        </div>
    
                    </div>
            </Slide>
       
         );
    
    }
}
  
 
export default CountDown;
