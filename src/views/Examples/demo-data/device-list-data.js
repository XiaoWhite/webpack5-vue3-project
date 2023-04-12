let deviceList = [];

for (let i = 0; i < 100; i++) {
  deviceList.push({
    id: String(Math.random()).substring(2, 10),
    name: `device_${i + 1}`,
  });
}

export { deviceList };
