import { Link } from "react-router-dom";

const Selectuser = () => {
	return (
		<div className="text-center">
			<h4 className="forget-header">Select Operator</h4>
			<p className="forget-text">Choose an account to get more authority</p>
			<div className="row container mx-auto">
				<div className="col-md-4 col-sm-6 col-12 my-2">
					<button type="submit" className="btn btn-white w-100 theme-btn mx-auto">
						<Link className="text-link" to="/enter-pin" >
							<div className="user-box d-flex">
								<img className="user-avatar" src="./images/user (1).png" alt="" />
								<div className="text-start">
									<h5>Sarinah Hasbunah</h5>
									<p>Manager</p>
								</div>
							</div>
						</Link>
					</button>
				</div>
				<div className="col-md-4 col-sm-6 col-12 my-2">
					<button type="submit" className="btn btn-white w-100 theme-btn mx-auto">
						<Link className="text-link" to="/enter-pin" >
							<div className="user-box d-flex">
								<img className="user-avatar" src="./images/user (2).png" alt="" />
								<div className="text-start">
									<h5>Aisafu Mahfudah</h5>
									<p>Manager</p>
								</div>
							</div>
						</Link>
					</button>
				</div>
				<div className="col-md-4 col-sm-6 col-12 my-2">
					<button type="submit" className="btn btn-white w-100 theme-btn mx-auto">
						<Link className="text-link" to="/enter-pin" >
							<div className="user-box d-flex">
								<img className="user-avatar" src="./images/user (3).png" alt="" />
								<div className="text-start">
									<h5>Dinastri Mina</h5>
									<p>Manager</p>
								</div>
							</div>
						</Link>
					</button>
				</div>
				<div className="col-md-4 col-sm-6 col-12 my-2">
					<button type="submit" className="btn btn-white w-100 theme-btn mx-auto">
						<Link className="text-link" to="/enter-pin" >
							<div className="user-box d-flex">
								<img className="user-avatar" src="./images/user (4).png" alt="" />
								<div className="text-start">
									<h5>Mahfudah</h5>
									<p>Staff</p>
								</div>
							</div>
						</Link>
					</button>
				</div>
				<div className="col-md-4 col-sm-6 col-12 my-2">
					<button type="submit" className="btn btn-white w-100 theme-btn mx-auto">
						<Link className="text-link" to="/enter-pin" >
							<div className="user-box d-flex">
								<img className="user-avatar" src="./images/user (5).png" alt="" />
								<div className="text-start">
									<h5>Citi Mulamah</h5>
									<p>Staff</p>
								</div>
							</div>
						</Link>
					</button>
				</div>
				<div className="col-md-4 col-sm-6 col-12 my-2">
					<button type="submit" className="btn btn-white w-100 theme-btn mx-auto">
						<Link className="text-link" to="/enter-pin" >
							<div className="user-box d-flex">
								<img className="user-avatar" src="./images/user (6).png" alt="" />
								<div className="text-start">
									<h5>Sarinah Hasbunah</h5>
									<p>Manager</p>
								</div>
							</div>
						</Link>
					</button>
				</div>
			</div>
			<div className="bottom-bar text-center">
				<button type="submit" className="btn btn-logout w-100 theme-btn mx-auto"><Link className="forget-link text-link" to="/login" ><h6 className="mb-0 logout">Log out</h6></Link></button>
			</div>
		</div>
	);
}

export default Selectuser;