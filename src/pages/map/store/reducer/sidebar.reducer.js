import * as SidebarActions from "../actions/sidebar.actions";
const regionInitialState = {
    message:"Side bar inistal",
    isOpen:true,
};

const SidebarReducer = (state = regionInitialState, action)=>{
    switch(action.type){
            case  SidebarActions.SidebarActionsEnum.isOpen:
                return {
                    ...state,
                    isOpen:!action.payload,
                    message:"isOpen sidebar " + state.isOpen,
                }
            default:
                return state
    }
}

export default SidebarReducer;