import { onUnmounted } from 'vue';

export function useEventBus() {
	const CHANNEL_CODE = 'FRAMEWORK_CHANNEL_CODE';
	let channel = undefined;

	onUnmounted(() => {
		// 关闭 BroadcastChannel
		channel && channel.close();
	});

	// 发送消息
	function postMessage(eventCode, message) {
		if (!channel) {
			// 创建 BroadcastChannel
			channel = new BroadcastChannel(CHANNEL_CODE);
		}

		const data = {
			timestamp: Date.now(),
			eventCode: eventCode,
			message: message,
		};
		channel.postMessage(data);
	}

	// 接收消息
	function onMessage(eventCode, callback) {
		if (!channel) {
			// 创建 BroadcastChannel
			channel = new BroadcastChannel(CHANNEL_CODE);
		}

		channel.onmessage = (res) => {
			let data = res.data;
			if (data.eventCode === eventCode) {
				callback && callback(data.message);
			}
		};
	}
	return {
		postMessage,
		onMessage,
	};
}
