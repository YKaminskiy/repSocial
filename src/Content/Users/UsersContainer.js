import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,

    getUsers,
    setPagination,
    unfollow,

} from "../../Redux/usersReduxer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    pageOnChange = (pageNumber) => {
        this.props.setPagination(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                pageOnChange={this.pageOnChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}

            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps,    {
        follow, unfollow, setPagination, getUsers})(UsersContainer)
