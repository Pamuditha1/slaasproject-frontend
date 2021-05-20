import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.changeShow = this.changeShow.bind(this)
    this.state = this.getInitialState(); 
  }
  

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      show: false
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    console.log('Range', range)
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }
  changeShow() {
      this.setState({
          show: !this.state.show
      })
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    switch(this.state.show) {
        case true : {

            return (
                <>
                
              <div className="RangeExample">
                <p>
                  {!from && !to && 'Please select the first day.'}
                  {from && !to && 'Please select the last day.'}
                  {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                        ${to.toLocaleDateString()}`}{' '}
                  {from && to && (
                      <>
                    <button className="link" onClick={this.handleResetClick}>
                      Reset
                    </button>
                    <button onClick={this.changeShow}>Close</button>
                    </>
                  )}
                </p>
                <DayPicker
                  className="Selectable"
                  numberOfMonths={this.props.numberOfMonths}
                  selectedDays={[from, { from, to }]}
                  modifiers={modifiers}
                  onDayClick={this.handleDayClick}
                />
                <Helmet>
                  <style>{`
                    .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                    background-color: #f0f8ff !important;
                    color: #4a90e2;
                    }
                    .Selectable .DayPicker-Day {
                    border-radius: 0 !important;
                    }
                    .Selectable .DayPicker-Day--start {
                    border-top-left-radius: 50% !important;
                    border-bottom-left-radius: 50% !important;
                    }
                    .Selectable .DayPicker-Day--end {
                    border-top-right-radius: 50% !important;
                    border-bottom-right-radius: 50% !important;
                    }
                    `}</style>
                </Helmet>
                
              </div>
             
              </>
            );
        }

        case false : { return (<>
        {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                        ${to.toLocaleDateString()}`}{' '}
        <button onClick={this.changeShow}>Show</button>
        <h1>Hello</h1></>)   }
    }
    
  }
}