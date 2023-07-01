import { fetcher } from '@app-next/utils/fetcher';

export default function Home() {
	const nasa = fetcher();
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}
