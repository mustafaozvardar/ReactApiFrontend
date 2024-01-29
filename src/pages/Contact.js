

function Contact(){
    return (
        <div>
             <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4> Contact Us
                            </h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control"></input>
                                    
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="text" name="email"  className="form-control"></input>
                                
                                </div>
                                
                                
                               
                                <div className="mb-3">
                                    <label>Message</label>
                                    <input type="text" name="course"  className="form-control"></input>
                               
                                </div>
                                <div className="mb-3">
                                    <button type="submit"  class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Contact;