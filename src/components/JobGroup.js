import React from 'react';
import Card from "./Card";
import { connect } from 'react-redux';
import './JobGroup.css';

class JobGroup extends React.Component {

    

    render() {
        const dummy = {
            id:"ee163ad3-116c-49ec-bfd6-cabec6b88e13",
            type:"Full Time",
            url:"https://jobs.github.com/positions/ee163ad3-116c-49ec-bfd6-cabec6b88e13",
            created_at:"Mon Feb 15 15:07:11 UTC 2021",
            company:"Humanoo ",
            company_url:"http://humanoo.com",
            location:"Berlin ",
            title:"SysOps / DevOps Engineer (f/m/d)",
            description:"<p><strong>Humanoo. ></p> <ul> <li></strong></p> ",
            how_to_apply:"Sample ",
            company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBajJaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--98b26c906455125b4c54887a81d4eb3782c282e5/Humanoo%20Logos-02.jpg"
        }

        return (
            <div className="JobGroup">
                 <Card job={dummy} />
                 <Card job={dummy} />
                 <Card job={dummy} />
                 <Card job={dummy} />
                 <Card job={dummy} />
                 <Card job={dummy} />
                 <Card job={dummy} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs };
};

export default connect(mapStateToProps, { })(JobGroup);