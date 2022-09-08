import React from "react";
import {Navigation} from 'react-minimal-side-navigation';
import Icon from "awesome-react-icons";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {useLocation, useNavigate} from "react-router-dom";

export function Sidebar(props) {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="container-fluid" style={{padding: "10%", height: "100vh"}}>
            <h4 className="mt-3 mb-3">Quizreo</h4>
            <Navigation
                activeItemId={location.pathname}
                onSelect={({itemId}) => {
                    navigate(itemId);
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
                        title: 'surveys',
                        elemBefore: () => <Icon name="star"/>,
                        subNav: [
                            {
                                title: "Create",
                                itemId: "/create_survey",
                                // Optional
                                elemBefore: () => <Icon name="plus"/>
                            },
                            {
                                title: "List",
                                itemId: "/list_survey",
                                elemBefore: () => <Icon name="radio"/>
                            }
                        ]
                    },
                    {
                        title: 'Quiz',
                        elemBefore: () => <Icon name="check-square"/>,
                        subNav: [
                            {
                                title: "Create",
                                itemId: "/create_quiz",
                                // Optional
                                elemBefore: () => <Icon name="plus"/>
                            },
                            {
                                title: "List",
                                itemId: "/list_quiz",
                                elemBefore: () => <Icon name="radio"/>
                            }
                        ]
                    },
                    {
                        title: 'Trial',
                        elemBefore: () => <Icon name="check-circle"/>,
                        subNav: [
                            {
                                title: "Create",
                                itemId: "/create_trial",
                                // Optional
                                elemBefore: () => <Icon name="plus"/>
                            },
                            {
                                title: "List",
                                itemId: "/list_trial",
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
