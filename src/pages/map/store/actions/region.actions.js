
export const RegionActionsEnum = {
    regionInitial:"REGION_INITIAL",
    regionDataRequest:"REGION_DATA_REQUEST",
    regionDataRequestSuccessful:"REGION_DATA_REQUEST_SUCCESSFUL",
    regionDataRequestFail:"REGION_DATA_REQUEST_FAIL",
}

export const RegionActions ={ 
    regionInitial(){
        return {
            type:RegionActionsEnum.regionInitial, 
            payload:"Region initial stage action"
        }
    },
    regionDataRequest(){
        return {
            type:RegionActionsEnum.regionDataRequest, 
            payload:"Region data requested"
        }
    },
    regionDataRequestSuccessful(payload){
        return {
            type:RegionActionsEnum.regionDataRequestSuccessful, 
            payload:payload 
        }
    },
    regionDataRequestFail(payload){
        return {
            type:RegionActionsEnum.regionDataRequestFail, 
            payload:payload 
        }
    },
}
