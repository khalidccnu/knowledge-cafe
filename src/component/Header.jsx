import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-100">
            <div className="container">
                <div className="navbar justify-between">
                    <h2 className="font-bold text-xl">Knowledge Cafe</h2>
                    <div className="w-10 rounded-full overflow-hidden">
                        <img src="https://gravatar.com/avatar/2e5acfcd597c3079261c0a45ed47d489"  alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;