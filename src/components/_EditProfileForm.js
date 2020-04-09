import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'semantic-ui-react'
import { languages, countries, years } from './dropdown'

const usersUrl = 'http://localhost:3000/api/v1/users/'

// initially wanted to use createRef, which worked with basic html
// but did not want to play nice with Semantic UI, so I used getElementById instead

class EditProfileForm extends Component {

    render() {
        return(
            // <form className="ui form">
            //     <div className="equal width fields">
            //         <div className="field">
            //         <label>First name</label>
            //         <div className="ui fluid input"><input type="text" placeholder="First name" /></div>
            //         </div>
            //         <div className="field">
            //         <label>Last name</label>
            //         <div className="ui fluid input"><input type="text" placeholder="Last name" /></div>
            //         </div>
            //         <div className="field">
            //         <label>Gender</label>
            //         <div role="listbox" ariaExpanded="false" className="ui fluid selection dropdown" tabIndex="0">
            //             <div className="default text" role="alert" ariaLive="polite" ariaAtomic="true">Gender</div>
            //             <i ariaHidden="true" className="dropdown icon"></i>
            //             <div className="menu transition">
            //             <div
            //                 style={{pointerEvents: 'all'}}
            //                 role="option"
            //                 ariaChecked="false"
            //                 ariaSelected="true"
            //                 className="selected item"
            //             >
            //                 <span className="text">Male</span>
            //             </div>
            //             <div
            //                 style={{pointerEvents: 'all'}}
            //                 role="option"
            //                 ariaChecked="false"
            //                 ariaSelected="false"
            //                 className="item"
            //             >
            //                 <span className="text">Female</span>
            //             </div>
            //             <div
            //                 style={{pointerEvents: 'all'}}
            //                 role="option"
            //                 ariaChecked="false"
            //                 ariaSelected="false"
            //                 className="item"
            //             >
            //                 <span className="text">Other</span>
            //             </div>
            //             </div>
            //         </div>
            //         </div>
            //     </div>
            //     <div className="inline fields">
            //         <label>Size</label>
            //         <div className="field">
            //         <div className="ui radio checkbox">
            //             <input type="radio" className="hidden" readOnly="" tabIndex="0" value="sm" />
            //             <label>Small</label>
            //         </div>
            //         </div>
            //         <div className="field">
            //         <div className="ui radio checkbox">
            //             <input type="radio" className="hidden" readOnly="" tabIndex="0" value="md" />
            //             <label>Medium</label>
            //         </div>
            //         </div>
            //         <div className="field">
            //         <div className="ui radio checkbox">
            //             <input type="radio" className="hidden" readOnly="" tabIndex="0" value="lg" />
            //             <label>Large</label>
            //         </div>
            //         </div>
            //     </div>
            //     <div className="field">
            //         <label>About</label>
            //         <textarea placeholder="Tell us more about you..." rows="3"></textarea>
            //     </div>
            //     <div className="field">
            //         <div className="ui checkbox">
            //         <input type="checkbox" className="hidden" readOnly="" tabIndex="0" />
            //         <label>I agree to the Terms and Conditions</label>
            //         </div>
            //     </div>
            //     <div className="field"><button className="ui button">Submit</button></div>
            // </form>
            <form className="ui form">
  <div className="equal width fields">
    <div className="field">
      <label>First name</label>
      <div className="ui fluid input">
        <input type="text" placeholder="First name" />
      </div>
    </div>
    <div className="field">
      <label>Last name</label>
      <div className="ui fluid input">
        <input type="text" placeholder="Last name" />
      </div>
    </div>
    <div className="field">
      <label>Gender</label>
      <div
        role="listbox"
        aria-expanded="false"
        className="ui fluid selection dropdown"
        tabIndex={0}
      >
        <div
          className="default text"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          Gender
        </div>
        <i aria-hidden="true" className="dropdown icon" />
        <div className="menu transition">
          <div
            style={{ pointerEvents: "all" }}
            role="option"
            aria-checked="false"
            aria-selected="true"
            className="selected item"
          >
            <span className="text">Male</span>
          </div>
          <div
            style={{ pointerEvents: "all" }}
            role="option"
            aria-checked="false"
            aria-selected="false"
            className="item"
          >
            <span className="text">Female</span>
          </div>
          <div
            style={{ pointerEvents: "all" }}
            role="option"
            aria-checked="false"
            aria-selected="false"
            className="item"
          >
            <span className="text">Other</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="inline fields">
    <label>Size</label>
    <div className="field">
      <div className="ui radio checkbox">
        <input
          type="radio"
          className="hidden"
          readOnly
          tabIndex={0}
          defaultValue="sm"
        />
        <label>Small</label>
      </div>
    </div>
    <div className="field">
      <div className="ui radio checkbox">
        <input
          type="radio"
          className="hidden"
          readOnly
          tabIndex={0}
          defaultValue="md"
        />
        <label>Medium</label>
      </div>
    </div>
    <div className="field">
      <div className="ui radio checkbox">
        <input
          type="radio"
          className="hidden"
          readOnly
          tabIndex={0}
          defaultValue="lg"
        />
        <label>Large</label>
      </div>
    </div>
  </div>
  <div className="field">
    <label>About</label>
    <textarea
      placeholder="Tell us more about you..."
      rows={3}
      defaultValue={""}
    />
  </div>
  <div className="field">
    <div className="ui checkbox">
      <input type="checkbox" className="hidden" readOnly tabIndex={0} />
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <div className="field">
    <button className="ui button">Submit</button>
  </div>
</form>
        )
    }
}



const mapStateToProps = state => {
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(EditProfileForm)
