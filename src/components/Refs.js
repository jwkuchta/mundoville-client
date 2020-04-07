// import React, { Component } from 'react'

// class Refs extends Component {

//     constructor(props) {
//         super(props);
//         this.inputField = React.createRef();
//         this.toggleInputCase = this.toggleInputCase.bind(this);
//         this.state = { uppercase: false };
//       }
      
//       toggleInputCase() {
//           debugger
//         const isUpper = this.state.uppercase;
        
//         // Accessing the ref using this.inputField.current
//         const value = this.inputField.current.value;
        
//         this.inputField.current.value =
//           isUpper
//             ? value.toLowerCase()
//             : value.toUpperCase();
            
//         this.setState({ uppercase: !isUpper });
//       }
    
//       render() {
//         return (
//           <div>
//             {/* Referencing the ref from this.inputField */}
//             <input type="text" ref={this.inputField} />
            
//             <button type="button" onClick={this.toggleInputCase}>
//               Toggle Case
//             </button>
//           </div>
//         );
//       }
// }

// export default Refs

import React, { Component } from 'react'

class Refs extends Component {

    constructor(props) {
        super(props);
        this.inputField1 = React.createRef()
        this.inputField2 = React.createRef()
        // this.toggleInputCase = this.toggleInputCase.bind(this);
        this.state = { uppercase: false };
      }
      
      toggleInputCase = () => {
        //   debugger
        const isUpper = this.state.uppercase;
        
        // Accessing the ref using this.inputField.current
        const value = this.inputField.current.value;
        
        this.inputField.current.value =
          isUpper
            ? value.toLowerCase()
            : value.toUpperCase();
            
        this.setState({ uppercase: !isUpper });
      }

      handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            this.inputField2.current.focus()
        }
      }
    
      render() {
        return (
          <div>
            {/* Referencing the ref from this.inputField */}
            <input type="text" ref={this.inputField1} onKeyUp={e => this.handleKeyUp(e)}/>
            <input type="text" ref={this.inputField2} />
            
            <button type="button" onClick={this.toggleInputCase}>
              Toggle Case
            </button>
          </div>
        );
      }
}

export default Refs