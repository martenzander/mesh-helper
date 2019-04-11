class GridHelper {
	static SETTINGS = {};

	constructor(parameters = {}) {
		this.generateDOM = parameters.generateDOM !== undefined ? parameters.generateDOM : true;

		this.useCookie = parameters.useCookie !== undefined ? parameters.useCookie : true;
		this.isHidden = this.getHiddenState(parameters);

		this.columns = parameters.columns || 12;
		this.viewports = parameters.viewports || ["sm", "md", "lg", "xl"];

		this.mainClass = parameters.mainClass || "js-grid-helper";
		this.containerClass = parameters.containerClass || "mesh-container";
		this.voidClass = parameters.voidClass || "mesh-void";
		this.columnClass = parameters.columnClass || "mesh-column";

		this.columnColor = this.hexToRgba(parameters.columnColor || "#24a2d824");
		this.gutterColor = this.hexToRgba(parameters.gutterColor || "#24a2d824");

		this.key = parameters.key !== undefined ? parameters.key.toLowerCase() : "h";

		GridHelper.SETTINGS.target = this.mainClass;
		GridHelper.SETTINGS.containerClass = this.containerClass;
		GridHelper.SETTINGS.voidClass = this.voidClass;
		GridHelper.SETTINGS.columnClass = this.columnClass;
		GridHelper.SETTINGS.columnColor = this.columnColor;
		GridHelper.SETTINGS.gutterColor = this.gutterColor;
		require("./../styles/app.css");

		if (this.generateDOM) {
			const mainDiv = document.createElement("div");
			mainDiv.classList.add(this.mainClass);

			const containerDiv = document.createElement("div");
			containerDiv.classList.add(this.containerClass);

			const voidDiv = document.createElement("div");
			voidDiv.classList.add(this.voidClass);

			for (let i = 0; i < this.columns; i++) {
				const columnDiv = document.createElement("div");
				columnDiv.classList.add(`${this.columnClass}-1`);

				this.viewports.forEach(viewport => {
					columnDiv.classList.add(`${this.columnClass}-${viewport}-1`);
				});

				voidDiv.appendChild(columnDiv);
			}

			containerDiv.appendChild(voidDiv);
			mainDiv.appendChild(containerDiv);

			document.body.appendChild(mainDiv);
			this.target = mainDiv;
		} else {
			this.target = document.querySelector(this.mainClass);
		}

		this.onKeyDown = this.onKeyDown.bind(this);

		this.init();
	}

	init() {
		if (this.isHidden) this.target.classList.add("is-hidden");
		document.addEventListener("keydown", this.onKeyDown);
	}

	hexToRgba(hex) {
		let r, g, b, a;
		hex = hex.replace("#", "");
		switch (hex.length) {
			case 3: {
				r = hex.charAt(0);
				g = hex.charAt(1);
				b = hex.charAt(2);
				break;
			}
			case 4: {
				r = hex.charAt(0);
				g = hex.charAt(1);
				b = hex.charAt(2);
				a = hex.charAt(3);
				break;
			}
			case 6: {
				r = hex.substring(0, 2);
				g = hex.substring(2, 4);
				b = hex.substring(4, 6);
				break;
			}
			case 8: {
				r = hex.substring(0, 2);
				g = hex.substring(2, 4);
				b = hex.substring(4, 6);
				a = hex.substring(6, 8);
				break;
			}
			default: return "";
		}

		if (typeof a === "undefined") {
			a = "ff";
		}
		if (r.length === 1) {
			r += r;
		}
		if (g.length === 1) {
			g += g;
		}
		if (b.length === 1) {
			b += b;
		}
		if (a.length === 1) {
			a += a;
		}
		r = parseInt(r, 16);
		g = parseInt(g, 16);
		b = parseInt(b, 16);
		a = parseInt(a, 16) / 255;
		return `rgba(${r},${g},${b},${a})`;
	}

	getHiddenState(parameters) {
		if (parameters.isHidden !== undefined) return parameters.isHidden;
		if (this.useCookie && sessionStorage.getItem("gridHelperIsHidden") !== null) {
			return sessionStorage.getItem("gridHelperIsHidden") === "true";
		}
		return true;
	}

	onKeyDown(e) {
		if (e.key.toLowerCase() === this.key) {
			this.target.classList.toggle("is-hidden");
			if (this.useCookie) sessionStorage.setItem("gridHelperIsHidden", this.target.classList.contains("is-hidden"));
		}
	}
}

export default GridHelper;
