import EpisodeNumber from "./EpisodeNumber";

export default function FieldFilter({key, value}) {
	

	const allowedFields = new Set(['name', 'status', 'type', 'gender', 'species', 'image', 'created', 'origin', 'location', 'air_date', 'episode', 'dimension']);
	if (!allowedFields.has(key)) return '';
	if (key === 'image') {
		return (<p key={key}>
				{<img src={value} alt="" />}
			</p>);
	}
	if (key === 'location' || key === 'origin') {
		return (<p key={key}>
				{`${key}: ${value.name}`}
			</p>);
	}
	if (key === 'episode') {
		if (Array.isArray(value)) {
			return (<div key={key}>{key}: <>
						{value.map((episode, index) => {
							return <span key={episode}><EpisodeNumber link={episode}/>{(index < value.length - 1)?', ':''}</span>
						})}
					</></div>);
		}
	}
	return (<p key={key}>
		{`${key}: ${value?value:'none'}`}
	</p>);			
}
