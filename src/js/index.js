import "./../styles/app.css";

function Visualizer(parameters = {}) {
	console.log(parameters.isHidden);
	this.trigger = parameters.trigger || 72;
	this.isHidden =
		parameters.isHidden !== undefined ? parameters.isHidden : true;
	this.targetSelector = parameters.target || ".js-grid-helper";
	this.targets = Array.from(document.querySelectorAll(this.targetSelector));

	const init = e => {
		if (this.isHidden) {
			this.targets.forEach(target => {
				target.classList.add("is-hidden");
			});
		}
		document.addEventListener("keydown", this.onKeyDown);
	};

	this.onKeyDown = e => {
		const code = e.keyCode;
		if (code === this.trigger) {
			this.targets.forEach(target => {
				if (target.classList.contains("is-hidden")) {
					target.classList.remove("is-hidden");
				} else {
					target.classList.add("is-hidden");
				}
			});
		}
	};

	init();
}

export { Visualizer };
