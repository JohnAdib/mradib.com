export const developmentLoopData = {
	title: "Verification travels with the change",
	caption:
		"A practical workflow pattern. Each step produces something the next step can inspect, and production learning informs the next task.",
	steps: [
		{
			title: "Plan",
			output: "Expected behaviour and a focused task",
		},
		{
			title: "Implement and write tests",
			output: "A change with repeatable checks",
		},
		{
			title: "Verify",
			output: "Test results and checks against the task",
		},
		{
			title: "Capture device evidence",
			output: "Screenshots and a recording of the flow",
		},
		{
			title: "Review",
			output: "A human decision supported by evidence",
		},
		{
			title: "Deliver a test build",
			output: "An installable build for real-device feedback",
		},
		{
			title: "Observe and learn",
			output: "Production signals that shape the next task",
		},
	],
	returnLabel: "New learning returns to planning",
};
