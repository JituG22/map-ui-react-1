import {combineReducers} from "redux";
import RegionReducer from "./region.reducer";
import SidebarReducer from "./sidebar.reducer";
const SelectReducer = combineReducers({
    region:RegionReducer,
    sidebar:SidebarReducer,
})

export default SelectReducer;