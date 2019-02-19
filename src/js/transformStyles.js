import { Visualizer } from "./index";

export default css => {
	const transformed = css
		.replace(/CONTAINER/gm, Visualizer.SETTINGS.containerClass)
		.replace(/VOID/gm, Visualizer.SETTINGS.voidClass)
		.replace(/COLUMN/gm, Visualizer.SETTINGS.columnClass);

	return transformed;
};
