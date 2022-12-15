// 表格分页加载

export default function useTablePage(params) {
	const pageNo = ref(params.pageNo || 1); // 页码
	const pageSize = ref(params.pageSize || 10); // 每页加载数量
	const pageSizeList = ref((params.pageSizeList && params.pageSizeList > 0) || [10, 20, 30]);
	const total = ref(0); // 总数量
	const tableData = ref([]); // 表格数据
	// 接口 url，由外面传入进来

	// 页码变化
	function pageNoChange() {
		// 重新加载数据
	}

	// 每页数量变化
	function pageSizeChange() {
		// 重新加载数据
	}

	// 加载数据
	function loadTableData() {}

	return {
		pageNo,
		pageSize,
		pageSizeList,
		total,
		tableData,
		pageNoChange,
		pageSizeChange,
		loadTableData,
	};
}
