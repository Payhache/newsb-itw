export interface IRepresentation {
	_id: string ;
	created_at?: string ;
	updated_at?: string ;
	task_id?: string ;
	task_status?: string;
	s3_key: string ;
	profile: string ;
	status: string ;
	extension: string;
	complete: boolean ;
	progress_percent?: number;
	duration?: number;
	url?: string;
	width?: number;
	height?: number;
}
