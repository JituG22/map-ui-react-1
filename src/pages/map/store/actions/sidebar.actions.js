
export const SidebarActionsEnum = {
    isOpen:"Is side bar open",
}

export const SidebarActions ={ 
    isOpen(payload){
        return {
            type:SidebarActionsEnum.isOpen, 
            payload:payload
        }
    }
   
}
