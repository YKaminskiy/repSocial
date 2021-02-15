import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setPagination, setTotalCount, setUsers, toggleLoadingImg, unfollow} from "../../Redux/usersReduxer";
import {ApiUsers} from "../../api/api";



class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleLoadingImg(true);
          ApiUsers.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleLoadingImg(false);
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    pageOnChange =(pageNumber)=> {
        this.props.setPagination(pageNumber)
        this.props.toggleLoadingImg(true);
        ApiUsers.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleLoadingImg(false);
                this.props.setUsers(data.items)

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