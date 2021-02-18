import { 
    DARK_ON, 
    DARK_OFF, 
    FETCH_JOBS,
    FETCH_JOB
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
        const { title, location, fulltime, lat, long } = formValues;
        
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

export const fetchJob = (id) => {
    return async (dispatch) => {
        const response = await Jobs.get(`/positions/${id}.json`);

        dispatch({ 
            type: FETCH_JOB, 
            payload: response.data
        });
    };
};