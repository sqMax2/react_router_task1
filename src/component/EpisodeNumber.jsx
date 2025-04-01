import useDataFetching from "../useDataFetching";

export default function EpisodeNumber({link}) {
	const dataFetched = useDataFetching(link);

	return (
		<>
			<span>{dataFetched?dataFetched.episode:''}</span>
		</>
	);

}