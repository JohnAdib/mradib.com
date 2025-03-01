import Page404Banner from "./page-404-banner";

export function Page404() {
	// https://codepen.io/heyvian/pen/KKwoZNX
	return (
		<>
			<div id="page404">
				<div className="ternary-system">
					<div className="sun primary animate-pulse" />
					<div className="sun secondary animate-pulse" />
					<div className="sun secondary animate-ping" />
					<div className="sun ternary" />
				</div>
				<div className="sand">
					<div className="pendulums">
						<div className="pendulum">
							<div className="bar" />
							<div className="motion">
								<div className="string" />
								<div className="weight" />
							</div>
						</div>
						<div className="pendulum shadow-sm">
							<div className="bar" />
							<div className="motion">
								<div className="string animate-pulse" />
								<div className="weight" />
							</div>
						</div>
					</div>
				</div>
				<div className="pyramid" />
			</div>
			<Page404Banner />
		</>
	);
}
