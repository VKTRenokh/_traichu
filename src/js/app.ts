import {weatherBalloon} from "@/js/weather";
import {dateTime} from "@/js/date";
import "@/css/main.css"
export async function app() {
	dateTime()
	await weatherBalloon('paphos', '01f2e9d8c1b2b51139e24be4803d4de4')
}
