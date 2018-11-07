/**
 * 密码校验
 * @param psd 密码
 * @param cpsd 确认密码
 * @param min 最小长度
 * @param max 最大长度
 * @return {boolean}
 */
export const psdVerify = (psd, cpsd, min, max) => {
	if (psd.length <= max && psd.length >= min) {
		if (psd === cpsd) {
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}
