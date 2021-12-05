import React from 'react';
import LikeTopUser from './LikeTopUser';

const LikesTop = (props) => {
    const { users } = props;
    // console.log("state users component LikesTop  ", users);

    const userLikes = users
        .sort(function (a, b) {
            return b.likes - a.likes;
        })
        .slice(0, 3)

    return (
        <div className="Topfour">
            <div className="TopfourContent">
                <h3>Top 3</h3>
                <ul>
                    {userLikes
                        // .sort(function (a, b) {
                        //     return b.likes - a.likes;
                        // })
                        // .slice(0, 3)
                        .map((user, index) => (
                            <li key={user._id}>
                                <LikeTopUser user={user} index={index} />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default LikesTop;