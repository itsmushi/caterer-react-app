import { Link } from "react-router-dom";

const Checkemail = () => {
	return (
		<div className="row g-0 auth-wrapper">
			<div className="d-flex forget-header">
				<Link className="forget-link text-link" to="/login" ><img src="./images/vector.png" alt="backicon" /></Link>
				<div className="mx-auto text-center">
					<h4 className="pr-90">Check Your Email</h4>
				</div>
			</div>
			<div className="check-main-col auth-body text-center">
				<img src="./images/Frame.png" alt="frameimg" />
				<p className="my-4">
					We have sent a pin recover instruction<br />
					to your email
				</p>
				<button type="submit" className="btn btn-login w-100 theme-btn mx-auto"><h6 className="mb-0">Open Email App</h6></button>
				<button type="submit" className="btn btn-white w-100 theme-btn mx-auto mt-2"><h6 className="mb-0 text-lightgreen">Skip, i’ll confirm later</h6></button>
			</div>
			<div className="bottom-bar">
				<p className="text-grey text-center">Did not recieve the email ? Check your spam filter</p>
				<button type="submit" className="btn btn-white w-100 theme-btn mx-auto mt-2 mb-5"><h6 className="mb-0 text-lightgreen">Try another email address</h6></button>
			</div>
		</div>
	);
}

export default Checkemail;