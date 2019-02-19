import { Visualizer } from "./index";

export default css => {
	const transformed = css
		.replace(/TARGET/gm, Visualizer.SETTINGS.target)
		.replace(/CONTAINER/gm, Visualizer.SETTINGS.containerClass)
		.replace(/VOID/gm, Visualizer.SETTINGS.voidClass)
		.replace(/COLUMN/gm, Visualizer.SETTINGS.columnClass);

	return transformed;
};
