export interface IChartObservation {
	date: string;
	label: string;
	value: number;
}

export interface IChartFigureData {
	id: string;
	title: string;
	unit: string;
	maximum: number;
	caption: string;
	methodology: string;
}

export interface ITimeSeriesData extends IChartFigureData {
	observations: IChartObservation[];
	axisDates?: string[];
	labelDates?: string[];
}

export interface ICategoricalChartData extends IChartFigureData {
	observations: { label: string; value: number }[];
}
