import * as RegionActions from "../actions/region.actions";
const regionInitialState = {
    message:"Region initial stage level 0",
};

const RegionReducer = (state = regionInitialState, action)=>{
    switch(action.type){
            case  RegionActions.RegionActionsEnum.regionInitial:
                return {
                    ...state,
                    data:"",
                    isRequest:false, 
                    isload:false,
                    message:"Region initial stage",
                }
            case RegionActions.RegionActionsEnum.regionDataRequest:
                return {
                    ...state,
                    data:action.payload,
                    isRequest:true, 
                    isload:false,
                    message:"Region data requested"
                }
            case RegionActions.RegionActionsEnum.regionDataRequestSuccessful:
                return {
                    ...state,
                    data:action.payload,
                    isRequest:false, 
                    isload:true,
                    message:"Region data requested successful"
                }
            case RegionActions.RegionActionsEnum.regionDataRequestFail:
                    return {
                        ...state,
                        data:"",
                        isRequest:false, 
                        isload:false,
                        message:"Region data requested fail"
                    }
            default:
                    return state
    }
}

export default RegionReducer;