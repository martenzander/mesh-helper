class Visualizer {
	static SETTINGS = {};

	constructor(parameters = {}) {
		this.trigger = parameters.trigger || 72;
		this.isHidden = parameters.isHidden !== undefined ? parameters.isHidden : true;
		this.targetSelector = parameters.target || ".js-grid-helper";
		this.targets = Array.from(document.querySelectorAll(this.targetSelector));
		Visualizer.SETTINGS.target = this.targetSelector.replace(".", "");
		Visualizer.SETTINGS.containerClass =
			parameters.containerClass.replace(".", "") || "mesh-container";
		Visualizer.SETTINGS.voidClass = parameters.voidClass.replace(".", "") || "mesh-void";
		Visualizer.SETTINGS.columnClass = parameters.columnClass.replace(".", "") || "mesh-column";
		require("./../styles/app.css");

		this.onKeyDown = this.onKeyDown.bind(this);

		this.init();
	}

	init() {
		if (this.isHidden) {
			this.targets.forEach(target => {
				target.classList.add("is-hidden");
			});
		}

		document.addEventListener("keydown", this.onKeyDown);
	}

	onKeyDown(e) {
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
	}
}

export { Visualizer };
