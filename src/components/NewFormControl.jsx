import React from 'react';

class NewFormControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    return (
      <div>
        This is the new form control!
      </div>
    );
  }
}

export default NewFormControl;