import React from "react";
import MyForm from "./MyForm";
import ShowJobsComponent from "./ShowJobsComponent";
class ParentComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "Job1", title: "Front-End", salary: "500$" },
            { id: "Job2", title: "Back-End", salary: "400$" },
            { id: "Job3", title: "Mobile", salary: "300$" },
        ],
    }

    AddJobs = (job) => {
        this.setState(
            {

                arrJobs: [...this.state.arrJobs, job]
            }
        )
    }
    render() {
        return (
            <>
                <MyForm AddJobs={this.AddJobs} />
                <ShowJobsComponent arrJobs={this.state.arrJobs} />
            </>
        )
    }
}

export default ParentComponent;