// const cbMap = new Map();

import { onMounted, onUnmounted } from 'vue';

// let CHANNEL_CODE = 'FRAMEWORK_CHANNEL_CODE';

// let channel1 = null; // 监听消息时使用
// let channel2 = null; // 发送消息时使用

// export function onMessage(eventCode, callback, vueInstance) {
//   if (!vueInstance && this) {
//     vueInstance = this;
//   }

//   // 回调函数
//   let fn = (data) => {
//     // 判断是否是vue实例，是的话判断是否已经销毁。销毁则移除
//     if (vueInstance && vueInstance._isVue && vueInstance._isDestroyed) {
//       if (cbMap.has(fn)) {
//         cbMap.delete(fn);
//       }

//       return;
//     }

//     if (callback && data != 'CLOSE_EXPIRED_MESSAGE') {
//       callback(data);
//     }
//   };

//   // 添加到 map
//   cbMap.set(fn, {
//     eventCode,
//     callback: fn
//   });

//   // 如果频道不存在，创建频道并监听 message
//   if (!channel1) {
//     channel1 = new BroadcastChannel(CHANNEL_CODE);
//     channel1.onmessage = (res) => {
//       let currEventCode = '';
//       let currMessageBody = {};
//       if (res.data) {
//         currEventCode = res.data.eventCode;
//         currMessageBody = res.data.message;
//       }

//       // 遍历 map，查找对应的 eventCode，并执行对应的 callback
//       for (let data of cbMap.values()) {
//         if (data.eventCode === currEventCode && data.callback) {
//           try {
//             data.callback(currMessageBody);
//           } catch (e) {
//             console.error('event bus error>>>', e);
//           }
//         }
//       }
//     };
//   }
// }

// /**
//  *
//  * @param {String} eventCode EventCode是唯一标识某个事件的字符串
//  * @param {Object} message 消息体，是个对象
//  */
// export function postMessage(eventCode, message) {
//   // 如果频道不存在，创建频道
//   if (!channel2) {
//     channel2 = new BroadcastChannel(CHANNEL_CODE);
//   }

//   // 组装要发送的数据
//   let data = {
//     timestamp: new Date().getTime(),
//     eventCode: eventCode,
//     message: message
//   };

//   // 发送数据
//   channel2.postMessage(data);
// }

// export function closeExpiredMessage() {
//   for (let data of cbMap.values()) {
//     if (data.callback) {
//       try {
//         data.callback('CLOSE_EXPIRED_MESSAGE');
//       } catch (e) {
//         console.error('event bus error>>>', e);
//       }
//     }
//   }
// }

export function useEventBus() {
	const CHANNEL_CODE = 'FRAMEWORK_CHANNEL_CODE';
	let channel = undefined;
	// onMounted(() => {
	// 	// 创建 BroadcastChannel
	// 	channel = new BroadcastChannel(CHANNEL_CODE);
	// });

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
