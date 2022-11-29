export interface IActivityTask {
	_id: string ;
	task_id: string ;
	created_at: string;
	started_at: string;
	updated_at?: string;
	completed_at?: string;
	type: string ;
	status: string ;
	customer_uid: string ;
	media_id: string ;
	target_language?: string ;
	profile_uid?: string ;
}
