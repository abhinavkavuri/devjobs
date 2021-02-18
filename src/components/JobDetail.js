import React from "react";
import Loader from "react-loader-spinner";
import { fetchJob } from "../actions";
import { connect } from "react-redux";
import dummy from "../static/dummy.png";
import Moment from "react-moment";
import "./JobDetail.css";

class JobDetail extends React.Component {
    componentDidMount() {
        const id = window.location.pathname.substring(5);
        this.props.fetchJob(id);
    }

    onApplyClick() {
        console.log("applied");
    }

    render() {
        const job = this.props.job.job;
        if (Object.keys(this.props.job).length === 0) {
            return (
                <div className="Loader">
                    <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={80}
                        width={80}
                    />
                </div>
            );
        } else {
            return (
                <div className="DetailContainer">
                    <div className="JobDetailGroup">
                        <section className="Company">
                            <img src={dummy} alt="logo" />
                            <div className="CompanyGroup">
                                <h3 className="CompanyTitle">{job.company}</h3>
                                <p className="CompanyUrl">{job.company_url}</p>
                            </div>
                            <a
                                className="btn btn-Company"
                                href={job.company_url}
                                target="_blank"
                            >
                                Company Site
                            </a>
                        </section>

                        <section className="JobDetail">
                            <div className="JobHeading">
                                <div className="JobDetailTime">
                                    <p className="JobDetailsTimestamp">
                                        <Moment fromNow>
                                            {job.created_at}
                                        </Moment>
                                    </p>
                                    <div className="Details-dot"></div>
                                    <p className="JobDetailsType">{job.type}</p>
                                </div>
                                <h1 className="JobDetailTitle">{job.title}</h1>
                                <p className="JobDetailLocation">
                                    {job.location}
                                </p>
                                <button
                                    className="btn btn-apply"
                                    onClick={this.onApplyClick}
                                >
                                    Apply Now
                                </button>
                            </div>
                            <div className="JobDescription">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: job.description,
                                    }}
                                />
                            </div>
                        </section>

                        <section className="JobHow">
                            <h3 className="JobHowHeading">How to apply</h3>
                            <div className="JobHowDescription">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: job.how_to_apply,
                                    }}
                                />
                            </div>
                        </section>

                        <section className="CompanyFooter">
                            <div className="CompanyGroup">
                                <h3 className="CompanyTitle">{job.company}</h3>
                                <p className="CompanyUrl">{job.company_url}</p>
                            </div>
                            <a
                                className="btn btn-apply-footer"
                                href={job.company_url}
                                target="_blank"
                            >
                                Apply Now
                            </a>
                        </section>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return { job: state.job };
};

export default connect(mapStateToProps, { fetchJob })(JobDetail);

// if(Object.keys(this.props.job).length === 0){
//     return (
//         <div className="Loader">
//                 <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
//         </div>
//     );
// }
