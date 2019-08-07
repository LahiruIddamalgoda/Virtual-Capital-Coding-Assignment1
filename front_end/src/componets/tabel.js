import ReactTable from 'react-table';
import React, { Component } from 'react';
import {getUserList} from '../service';
import Table from 'react-bootstrap/Table'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'
require("bootstrap/less/bootstrap.less");


export default class table extends Component {

    constructor(){
        super();
        this.state ={
          id:"",
          user:[],
          currentPage: 1,
          pageCount:0,
          show: false  
              };
      }
      onShow = ()=> {
        this.setState({ show: true })
      }
      onHide = ()=> {
        this.setState({ show: false })
      }

     
      //Update current page state
      //and update a query to get data
      changeCurrentPage = numPage => {
        this.onShow();       
        this.setState({ currentPage: numPage });
        this.componentDidMount(numPage);
        this.onHide();
       
      };

     
     /**
     * for get users from server
     * @param {bool} submitting Shows if form submitting is in progress
     * @param {function} handleSubmit Form submit callback function
     */
      componentDidMount(pagenum) {
        this.onShow();
        getUserList(pagenum).then(data =>{

          this.setState({
            user:[...data.posts],
            currentPage:data.page,
            pageCount:data.pageCount
          },
          ()  => { this.onHide();} 
          
          );
        });
      }


  render() {
    return (
      <div >
        <Loading
          show={this.state.show}
          color="red"
        />
          <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Total video Posted</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.user.map((event, i) => (<tr>
                        <td key={i}>{i}</td>
                        <td>{event.firts_name}</td>
                        <td>{event.last_name}</td>
                        <td></td>
                    </tr>))}
                    
                </tbody>
                <Pagination
                  currentPage={this.state.currentPage}
                  totalPages={this.state.pageCount}
                  changeCurrentPage={this.changeCurrentPage}
                  theme="square-fill"
               />
         </Table>


     
      </div>
    );
  }
}
