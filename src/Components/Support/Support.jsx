import React from 'react';

function Support() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="pt-5" id="supportWrapper">
                <h4 className="fw-normal">Support Portal</h4>
                <a href="#">Track Tickets</a> {/* Changed empty href to "#" */}
            </div>

            <div className="row p-5">
                <div className="col-1"></div>

                <div className="col-6 p-3">
                    <h1 className="fs-4 fw-normal">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input
                        type="text"
                        placeholder="Eg. how do I activate F&O"
                        className="form-control" // Added a class for styling
                    />
                    <br />
                    <a href="#">Track account opening</a> {/* Changed empty href to "#" */}
                    <a href="#">Track segment activation</a> {/* Changed empty href to "#" */}
                    <a href="#">Intraday margins</a> {/* Changed empty href to "#" */}
                    <a href="#">Kite user manual</a> {/* Changed empty href to "#" */}
                </div>

                <div className="col-5 p-3">
                    <h1 className="fs-3 ol_p">Featured</h1>
                    <ol className="ol_list">
                        <li>
                            <a href="#">Current Takeovers and Delisting - January 2024</a> {/* Changed empty href to "#" */}
                        </li>
                        <li>
                            <a href="#">Latest Intraday leverages - MIS & CO</a> {/* Changed empty href to "#" */}
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Support;
