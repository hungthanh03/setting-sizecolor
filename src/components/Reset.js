
import React,{Component} from 'react';


class Reset extends Component{

	
	onReset = () => {
		this.props.onSetting('nice');
	}

    render(){
    	return (
      	<button type="button" className="btn btn-primary" onClick={this.onReset}>reset</button>
  );
  }
}
  
export default Reset;
