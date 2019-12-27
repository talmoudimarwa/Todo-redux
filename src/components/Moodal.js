import { Modal, Button } from 'antd';
import { connect } from "react-redux";
import React from "react";
import {editTask} from "../actions/actions.js";
class Moodal extends React.Component {
  state = { visible: false ,
    input:""};

  showModal = () => {
    this.setState({
      visible: true,
    });
  };


changeName = e => {
  this.setState({
    input: e.target.value
  });
  console.log(this.state.input);
};
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,

    });
  };

  render() {
    return (
      <div>
        <Button type="primary"  onClick={this.showModal}>
         Edit
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={()=>{this.props.editTask({id:this.props.el.id,text:this.state.input})}}
        //   onClick={ () =>  { this.props.handleEdit ({id:this.props.Task.id,text:this.props.text}) ;  this.closeModal()}}


          onCancel={this.handleCancel}
        >
          <input
          type="text"
          placeholder="Enter new task"
        //  value={this.text}
          onChange={e => this.changeName(e)} 
          ></input>
      
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        text: state.Input
        
    };
  };
  const mapDispatchToProps = dispatch => {
    return {

        editTask: (payload) => dispatch(editTask(payload))
    };
  };
  
 const ModalContainer= connect(mapStateToProps, mapDispatchToProps)(Moodal);
 export default ModalContainer
















// import { connect } from "react-redux";
// import React from 'react';
// import Modal from 'react-modal';
// import {editTask,inputTask} from "../actions/actions.js";
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };
 
// // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// // Modal.setAppElement('#yourAppElement')
 
// class Moodal extends React.Component {
 
//     state = {
//       modalIsOpen: false,
//       input:""
//     };
 
//   openModal=()=> {
//     this.setState({modalIsOpen: true});
//   }
 
//   afterOpenModal=() =>{
//     // references are now sync'd and can be accessed.
//     this.subtitle.style.color = '#f00';
//   }
 
//   closeModal=()=> {
//     this.setState({modalIsOpen: false});
//   }
//   changeName = e => {
//     this.setState({
//       input: e.target.value
//     });
//     console.log(this.state.input);
//   };
//   render() {
//     return (
//       <div >
//         <button className="btnMd" onClick={this.openModal}>Open Modal</button>
//         <Modal
//           isOpen={this.state.modalIsOpen}
//           onAfterOpen={this.afterOpenModal}
//           onRequestClose={this.closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
 
//           <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
//           <button onClick={this.closeModal}>close</button>
//           <div>Change your input</div>
//           <form>
//             <input value={this.text}
//             onChange={e => this.changeName(e)} 
//              />
//             <button  className="btnS"  onClick={ () =>  { this.props.editTask 
//               ({id:this.props.el.id,text:this.state.input}) ;  this.closeModal()}}
// >Submit</button>
            
//           </form>
//         </Modal>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => {
//       return {
//           text: state.Input
          
//       };
//     };
//     const mapDispatchToProps = dispatch => {
//       return {
       
  
//           editTask: (payload) => dispatch(editTask(payload))
//       };
//     };
    
//    const ModalContainer= connect(mapStateToProps, mapDispatchToProps)(Moodal);
//    export default ModalContainer
