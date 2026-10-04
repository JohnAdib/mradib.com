export interface IChartObservation {
	date: string;
	label: string;
	value: number;
}

export interface ITimeSeriesData {
	id: string;
	title: string;
	unit: string;
	maximum: number;
	observations: IChartObservation[];
	caption: string;
	methodology: string;
	axisDates?: string[];
	labelDates?: string[];
}
