// @flow
import {
    TOGGLE_DEPARTMENT_MODAL , ONCLICK_DEPARTMENT_MODAL,
    SAVE_DEPARTMENT_SUCCESS,SAVE_DEPARTMENT  ,SAVE_DEPARTMENT_FAILED,
    LOAD_COMPANY_BY_DEPARTMENT_FOR_DEPARTMENT,LOAD_COMPANY_BY_DEPARTMENT_SUCCESS_FOR_DEPARTMENT,
    UPDATE_DEPARTMENT,UPDATE_DEPARTMENT_SUCCESS,
    RESET_DEPARTMENT_NOTIFICATION
} from '../../constants/actionTypes';






const INIT_STATE = {
    
    users:[],
    loading: false,
    departmentModal :{show: false,title: 'New Deprt',mode : 'Add',
    data:   {
        name:  '',
        description: '', companyID :''
    }},
    departmentNotification : {notify:false, message:''}

};

type UserAction = { type: string, payload: {} | string };
type State = { user?: {} | null, loading?: boolean, +value?: boolean };

const Department = (state:State = INIT_STATE, action: UserAction) => {
    switch (action.type) {


        
            case ONCLICK_DEPARTMENT_MODAL:
                return { ...state, loading: true};      
            case TOGGLE_DEPARTMENT_MODAL:
                return { ...state, ...action.payload, loading: false};
                case SAVE_DEPARTMENT:
                    return { ...state, loading: true};
            case SAVE_DEPARTMENT_SUCCESS:
                return { ...state, ...INIT_STATE, ...action.payload, loading: false, error: null };
            case SAVE_DEPARTMENT_FAILED:
                return { ...state, ...action.payload, loading: false, error: null };


                case LOAD_COMPANY_BY_DEPARTMENT_FOR_DEPARTMENT:
                    return { ...state, loading: true };
                case LOAD_COMPANY_BY_DEPARTMENT_SUCCESS_FOR_DEPARTMENT:
                    return {
                        ...state, availableCompany: action.payload.response !== undefined ? action.payload.response : [],
                        departmentNotification: INIT_STATE.departmentNotification, loading: false, error: null
                    }
                    case UPDATE_DEPARTMENT:
            return { ...state, loading: true };
        case UPDATE_DEPARTMENT_SUCCESS:
            return { ...state, ...action.payload, loading: false, error: null };

            case RESET_DEPARTMENT_NOTIFICATION:
                return { ...state, ...action.payload, loading: false };
        default: return { ...state };
    }
}

export default Department;