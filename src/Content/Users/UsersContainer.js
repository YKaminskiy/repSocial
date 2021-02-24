import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,

    getUsersData,
    setPagination,
    unfollow,

} from "../../Redux/usersReduxer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,

} from "../../Redux/usersSelector";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersData(this.props.currentPage, this.props.pageSize)
    }

    pageOnChange = (pageNumber) => {
        this.props.setPagination(pageNumber);
        this.props.getUsersData(pageNumber, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)

    }
}
export default compose (connect(mapStateToProps,    {
        follow, unfollow, setPagination, getUsersData}),
    withAuthRedirect
    ) (UsersContainer)
