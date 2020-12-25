export function isBrowser() {
	return typeof window !== `undefined`
}

/**
 * Truncate function that takes a string and checks the length
 * @param {string} text the text you want to check
 * @param {number} charLimit the character limit you want to check against
 *
 * @return {string} that appends ... if the length is greater than character limit
 */
export function truncateString(text, charLimit) {
	if (typeof text === 'undefined') {
		return ''
	}
	if (text.length <= charLimit) {
		return text
	} else {
		const truncatedText = text.substring(0, charLimit)
		return `${truncatedText.substr(0, Math.min(truncatedText.length, truncatedText.lastIndexOf(' ')))}...`
	}
}
