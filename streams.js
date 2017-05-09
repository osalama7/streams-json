//this data structure would be more straight forward to parse
//Provides less reliability on hardcoded lookups
//if it's possible to merge two data structures on contentful, or as a separate
//utility function it would be more practical
let contentTypes = {
    "tab_news": {
        "SimpleNews": 'rawContent',
        "YouTube": 'rawContent'
    },
    "tab_info": {
        "SimpleNews": 'rawContent',
        "YouTube": 'rawContent'
    },
    "tab_community_activities": {
        YouDonated : 'donatedDB',
        StackedYouDonated : 'donatedDB',
        FriendDonated : 'donatedFriendDB',
        StackedFriendDonated : 'donatedFriendDB',
    },
    "tab_profile_myactivities": {
        YouDonated : 'donatedDB',
        StackedYouDonated : 'donatedDB',
        YouUnlocked : 'youUnlockedDB',
        StackedYouUnlocked : 'youUnlockedDB'
    }
};

//currently used data structures
const rendererToDataSource = {
    SimpleNews : 'rawContent',
    YouTube : 'rawContent',
    YouDonated : 'donatedDB',
    StackedYouDonated : 'donatedDB',
    FriendDonated : 'donatedFriendDB',
    StackedFriendDonated : 'donatedFriendDB',
    YouUnlocked : 'youUnlockedDB',
    StackedYouUnlocked : 'youUnlockedDB'
};

const STREAMDB = {
    SimpleNews : ContentService,
    YouDonated : UserContentService,
    StackedYouDonated : UserContentService,
    FriendDonated : UserContentService.newsfeedDonatedFriendByAccountIdsAsync,
    StackedFriendDonated : UserContentService.newsfeedDonatedFriendByAccountIdsAsync,
    YouUnlocked : UserContentService,
    StackedYouUnlocked : UserContentService
};