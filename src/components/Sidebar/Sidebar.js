import React from "react";
import {Navigation} from 'react-minimal-side-navigation';
import Icon from "awesome-react-icons";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


export function Sidebar(props) {
    return (
        <div className="container-fluid" style={{padding: "10%", height: "100vh"}}>
            <h4 className="mt-3 mb-3">Quizreo</h4>
            <Navigation
                activeItemId="/home"
                onSelect={({itemId}) => {
                    // maybe push to the route
                }}
                items={[
                    {
                        title: 'Feed',
                        itemId: '/feed',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <Icon name="bell"/>,
                    },
                    {
                        title: 'Survey',
                        itemId: '/surveys',
                        elemBefore: () => <Icon name="star"/>,
                        subNav: [
                            {
                                title: "Create",
                                itemId: "/surveys/create",
                                // Optional
                                elemBefore: () => <Icon name="plus"/>
                            },
                            {
                                title: "List",
                                itemId: "/surveys/list",
                                elemBefore: () => <Icon name="radio"/>
                            }
                        ]
                    },
                    {
                        title: 'Quiz',
                        itemId: '/quizzes',
                        elemBefore: () => <Icon name="check-square"/>,
                        subNav: [
                            {
                                title: "Create",
                                itemId: "/quizzes/create",
                                // Optional
                                elemBefore: () => <Icon name="plus"/>
                            },
                            {
                                title: "List",
                                itemId: "/quizzes/list",
                                elemBefore: () => <Icon name="radio"/>
                            }
                        ]
                    },
                    {
                        title: 'Trial',
                        itemId: '/trials',
                        elemBefore: () => <Icon name="check-circle"/>,
                        subNav: [
                            {
                                title: "Create",
                                itemId: "/trials/create",
                                // Optional
                                elemBefore: () => <Icon name="plus"/>
                            },
                            {
                                title: "List",
                                itemId: "/trials/list",
                                elemBefore: () => <Icon name="radio"/>
                            }
                        ]
                    },
                    {
                        title: 'Share',
                        itemId: '/share',
                        elemBefore: () => <Icon name="share-other"/>,
                        subNav: [
                            {
                                title: "Survey",
                                itemId: "/share/survey",
                                elemBefore: () => <Icon name="star"/>
                            },
                            {
                                title: "Quiz",
                                itemId: "/share/quiz",
                                elemBefore: () => <Icon name="check-square"/>
                            }
                        ]
                    },
                    {
                        title: 'Settings',
                        itemId: '/settings',
                        elemBefore: () => <Icon name="settings"/>,
                        subNav: [
                            {
                                title: "Profile",
                                itemId: "/settings/profile",
                                elemBefore: () => <Icon name="user"/>
                            },
                            {
                                title: "Account",
                                itemId: "/settings/account",
                                elemBefore: () => <Icon name="circle"/>
                            },
                            {
                                title: "Help",
                                itemId: "/settings/help",
                                elemBefore: () => <Icon name="help-circle"/>
                            }
                        ]
                    },
                ]}
            />

        </div>
    );
}
