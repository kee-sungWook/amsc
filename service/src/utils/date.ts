export function formatDate(dateStr: string) {
	const date = new Date(dateStr);

	const today = new Date();
	const isToday =
		date.getFullYear() === today.getFullYear() &&
		date.getMonth() === today.getMonth() &&
		date.getDate() === today.getDate();

	if (isToday) {
		return date.toTimeString().slice(0, 5)
	} else {
		const y = date.getFullYear();
		const m = String(date.getMonth() + 1).padStart(2, "0");
		const d = String(date.getDate()).padStart(2, "0");
		return `${y}-${m}-${d}`;
	}
}
