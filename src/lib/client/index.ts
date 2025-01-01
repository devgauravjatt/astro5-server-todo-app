import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export function addBlinkingAnimation(element: HTMLElement) {
	element.classList.add('blinking-animation')
}

export function removeBlinkingAnimation(element: HTMLElement) {
	element.classList.remove('blinking-animation')
}

export function getFormattedDate(date: Date) {
	dayjs.extend(relativeTime)
	const time = dayjs().to(dayjs(date))
	return time
}
