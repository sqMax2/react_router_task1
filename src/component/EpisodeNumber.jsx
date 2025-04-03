import useDataFetching from "../useDataFetching";

export default function EpisodeNumber({link}) {
	const {dataFetched, error, loading, hasMore} = useDataFetching(link);

	return (
		<>
			<span>{dataFetched[0]?dataFetched[0]?.episode:''}</span>
		</>
	);
}
