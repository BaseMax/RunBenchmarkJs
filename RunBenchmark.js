/**
*
* @Name : RunBenchmark.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2018-11-21
* @Released under : https://github.com/BaseMax/RunBenchmarkJs/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/RunBenchmarkJs
*
**/
;(function(window,document)
{
	"use strict";
	/**
	* @function benchmark
	*
	* @return struct
	**/
	window.benchmark=function(_function,...parameters)
	{
		const time_start = new Date();
		const result = _function(...parameters);
		const time_end = new Date();
		const time = time_end - time_start;
		console.log(`Result: ${result}\nExecution Time: ${time} ms.`);
		return {result:result,start:time_start,end:time_end,time:time};
	}
}(window,document));
