import { Visualizer } from "./index";

function transformStyles(css) {
	const transformed = css
		.replace(/TARGET/gm, Visualizer.SETTINGS.target.replace(".", ""))
		.replace(/CONTAINER/gm, Visualizer.SETTINGS.containerClass.replace(".", ""))
		.replace(/VOID/gm, Visualizer.SETTINGS.voidClass.replace(".", ""))
		.replace(/COLUMN/gm, Visualizer.SETTINGS.columnClass.replace(".", ""));

	return transformed;
}

export default transformStyles;
