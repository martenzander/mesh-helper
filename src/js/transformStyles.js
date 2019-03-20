import GridHelper from "./index";

function transformStyles(css) {
	const transformed = css
		.replace(/COLUMNCOLOR/gm, GridHelper.SETTINGS.columnColor)
		.replace(/GUTTERCOLOR/gm, GridHelper.SETTINGS.gutterColor)
		.replace(/TARGET/gm, GridHelper.SETTINGS.target)
		.replace(/CONTAINER/gm, GridHelper.SETTINGS.containerClass)
		.replace(/VOID/gm, GridHelper.SETTINGS.voidClass)
		.replace(/COLUMN/gm, GridHelper.SETTINGS.columnClass);

	return transformed;
}

export default transformStyles;
