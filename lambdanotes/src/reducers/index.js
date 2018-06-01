import { DELETE_NOTE, EDIT_NOTE, CREATE_NOTE } from '../actions';

const initialState = [
    {
        _id : 'asdasdiuljkskhl1012939',
        title: 'Note 1',
        body: 'litora faucibus nisl nulla. Dolor, dui, finibus posuere, class blandit, felis aliquam eget nisi phasellus suscipit. Luctus amet nisi nunc, elit interdum, mi auctor aptent leo, tincidunt porttitor, feugiat velit faucibus odio ex, rutrum. Et curabitur sagittis elit, torquent sem, vestibulum, nibh, at, eleifend. Imperdiet augue blandit hac dignissim condimentum ligula enim, est tellus, risus turpis lectus ac mattis, orci a, massa. Duis phasellus quam blandit, ad molestie vel dui, arcu, quisque. Lacinia a, nulla, cras ut cursus, odio sem, a elit, torquent libero. Sed vivamus proin porta donec laoreet, curabitur turpis lectus phasellus. Egestas ultrices nisi, posuere sed nulla, vitae, varius vivamus mollis euismod. Vitae, convallis feugiat luctus, eget. Praesent varius mattis porttitor vel hendrerit gravida varius, et, bibendum. Sodales nostra, nisi, mauris, etiam massa cursus, orci vitae, laoreet, fames enim.',
        createdAt: 1527536455211,
    },
    {
        _id : 'asdasdiuljkskhl1012940',
        title: 'Note 2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: 1527536455341,
    },
    {
        _id: 'asdasdiuljkskhl1012941',
        title: 'Note 3',
        body: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.',
        createdAt: 1527536455341,
    },
    {
        _id: 'asdasdiuljkskhl1012943',
        title: 'Note 4',
        body: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.',
        createdAt: 1527536455341,
    },
    {
        _id:'asdasdiuljkskhl1012944',
        title: 'Note 5',
        body: 'Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.',
        createdAt: 1527536455341,
    },
    {
        _id:'asdasdiuljkskhl1012945',
        title: 'Note 6',
        body: 'Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci.',
        createdAt: 1527536455341,
    },
    {
        _id:'asdasdiuljkskhl1012946',
        title: 'Note 7',
        body: 'Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
        createdAt: 1527536455546,
    },
    {
        _id:'asdasdiuljkskhl1012947',
        title: 'Note 8',
        body: 'Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.',
        createdAt: 1527536455546,
    },
    {
        _id:'asdasdiuljkskhl1012948',
        title: 'Note 9',
        body: 'Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.',
        createdAt: 1527536455546,
    },
    {
        _id:'asdasdiuljkskhl1012949',
        title: 'Note 10',
        body: 'Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam.',
        createdAt: 1527536455546,
    },
    {
        _id:'asdasdiuljkskhl1012950',
        title: 'Note 11',
        body: 'In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor.',
        createdAt: 1527536455546,
    },
    {
        _id:'asdasdiuljkskhl1012951',
        title: 'Note 12',
        body: 'Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus.',
        createdAt: 1527536455764,
    },
    {
        _id:'asdasdiuljkskhl1012952',
        title: 'Note 13',
        body: 'Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.',
        createdAt: 1527536455764,
    },
    {
        _id:'asdasdiuljkskhl1012953',
        title: 'Note 14',
        body: 'Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.',
        createdAt: 1527536455764,
    },
    {
        _id:'asdasdiuljkskhl1012954',
        title: 'Note 15',
        body: 'Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.',
        createdAt: 1527536455764,
    },
    {
        _id:'asdasdiuljkskhl1012955',
        title: 'Note 16',
        body: 'Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.',
        createdAt: 1527536455764,
    },
    {
        _id:'asdasdiuljkskhl1012956',
        title: 'Note 17',
        body: 'Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi.',
        createdAt: 1527536455999,
    },
    {
        _id:'asdasdiuljkskhl1012957',
        title: 'Note 18',
        body: 'Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: 1527536455999,
    },
    {
        _id:'asdasdiuljkskhl1012958',
        title: 'Note 19',
        body: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
        createdAt: 1527536455999,
    },
    {
        _id:'asdasdiuljkskhl1012959',
        title: 'Note 20',
        body: 'Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.',
        createdAt: 1527536455999,
    },
    {
        _id: 'asdasdiuljkskhl1012960',
        title: 'Note 21',
        body: 'Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.',
        createdAt: 1527536455999,
    }
];

const notesReducer = ( state = initialState, action ) =>
{
    let temp = Array.from( state );
    switch ( action.type )
    {
        case DELETE_NOTE:
            state.forEach( ( item, index ) =>
            {
                if ( item._id === action.payload )
                {
                    temp.splice( index, 1 );
                    return;
                }
            } );
            return temp;
        case EDIT_NOTE:
            state.forEach( ( item, index ) =>
            {
                if ( item._id === action.payload._id )
                {
                    temp.splice( index, 1 );
                    return;
                }
            } );
            temp.push( action.payload );
            return temp;
        case CREATE_NOTE:
            temp.push( action.payload );
            return temp;
        default:
            return state;
    }
}

export default notesReducer;
