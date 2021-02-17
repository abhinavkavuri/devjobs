import React from 'react';
import Card from "./Card";
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import './JobGroup.css';

class JobGroup extends React.Component {

    getJobs() {
        return this.props.jobs.jobs.map(job => {
            const dummy = {
                id: job.id,
                company_logo: job.company_logo,
                created_at: job.created_at,
                type: job.type,
                title: job.title,
                company: job.company,
                location: job.location,
            };
            return (
                <Card job={dummy} />
            );
        }); 
    }

    render() {
        if(Object.keys(this.props.jobs).length === 0){
            return (
                <div className="Loader">
                    <Loader type="Grid" color="#00BFFF" height={80} width={80} />
                </div>
            );
        }
        else{
            return (
                <div className="JobGroup">
                    {this.getJobs()}
                </div>
            );
        }        
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs };
};

export default connect(mapStateToProps, { })(JobGroup);


// if(this.jobs === undefined){
//     return (
//         <div className="Loader">
//             <Loader type="Grid" color="#00BFFF" height={80} width={80} />
//         </div>
//     );
// }
// else{
//     return (
//         <div className="JobGroup">
//             {this.getJobs()}
//         </div>
//     );
// }