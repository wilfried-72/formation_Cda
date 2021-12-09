import React from 'react';

const LikesTop = (props) => {
    const { users } = props;
    // console.log("state users component LikesTop  ", users);

    return (
        <div className="Topfour">
            <div className="TopfourContent">
                <h3>Top 3</h3>
                <ul >
                    {[...users].sort(function (a, b) {
                        return b.likes - a.likes;
                    }).slice(0, 3).map((user, index) => (
                        <li className="topLike" key={index}>
                            {user.pseudo}
                            <img src="./icons/clap.png" className="clap" alt="clap" />
                            {user.likes}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LikesTop;

<div ></div>