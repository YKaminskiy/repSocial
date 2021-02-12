import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import {follow, setPagination, setTotalCount, setUsers, toggleLoadingImg, unfollow} from "../Redux/usersReduxer";



class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleLoadingImg(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{ headers: {'API-KEY': '6397f476-ecf7-4ee3-bb38-7ec52a1be1b9'}})
            .then(response => {
                this.props.toggleLoadingImg(false);
                this.props.setUsers(response.data.items)
            })
    }

    pageOnChange =(pageNumber)=> {
        this.props.setPagination(pageNumber)
        this.props.toggleLoadingImg(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{ headers: {'API-KEY': '6397f476-ecf7-4ee3-bb38-7ec52a1be1b9'}})
            .then(response => {
                this.props.toggleLoadingImg(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    render() {
        return (


            <Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                pageOnChange = {this.pageOnChange}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                isFetching = {this.props.isFetching}
            />
        )

    }
}

let mapStateToProps =(state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }

}


const UsersContainer = connect(mapStateToProps,
{follow, unfollow, setUsers, setPagination,setTotalCount,toggleLoadingImg})  (UsersAPI)



export default UsersContainer;