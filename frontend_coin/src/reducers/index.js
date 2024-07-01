import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
// import AdvertisingReducer from './AdvertisingReducer';
// import AgenciesReducer from './AgenciesReducer';
// import AgenciesSingleReducer from './AgenciesSingleReducer';

// import BlogReducer from './BlogReducer';
// import ProjectsCategoriesReducer from './ProjectsCategoriesReducer';
// import ProjectsReducer from './ProjectsReducer';
// import AboutUsReducer from './AboutUsReducer';
// import TeamReducer from './TeamReducer';
// import Status404Reducer from './Status404Reducer';

export default combineReducers({
    home: HomeReducer,
    // advertising: AdvertisingReducer,
    // realestateagencies:AgenciesReducer,
    // realestatesingleagencies:AgenciesSingleReducer,

    // blog: BlogReducer,
    // projectsCategories: ProjectsCategoriesReducer,
    // projects: ProjectsReducer,
    // aboutUs: AboutUsReducer,
    // team: TeamReducer,
    // status404: Status404Reducer
});
