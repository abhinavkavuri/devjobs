import { 
    DARK_ON, 
    DARK_OFF, 
    FETCH_JOBS
} from './types';
import Jobs from '../api/Jobs';


export const darkOn = () => {
    return {
        type: DARK_ON,
    };
};

export const darkOff = () => {
    return {
        type: DARK_OFF,
    };
};

export const fetchJobs = (formValues) => {
    return async (dispatch) => {
        const { title, location, fulltime} = formValues;

        const response = await Jobs.get('/positions.json', 
            {
                params: {
                    description: title,
                    fulltime: fulltime,
                    location: location
                }
            });

        dispatch({ 
            type: FETCH_JOBS, 
            payload: response.data
        });
    };
};