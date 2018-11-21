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
	* @struct timer
	*
	* @goal : access to public functions
	*
	* @return struct
	**/
	window.benchmark=function(_function,...parameters)
	{
		/*
		 * See
		 * https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now?hl=en
		 * https://www.w3.org/TR/hr-time/
		 * for more information.
		*/
		if(performance.now)
		{
			const time_start = performance.now();
			const result = _function(...parameters);
			const time_end = performance.now();
			const time = time_end - time_start;
			console.log(`Result: ${result}\nExecution Time: ${time} millisecond.`);
			return {result:result,start:time_start,end:time_end,time:time};
		}
	}
	window.benchmarks=function(...parameters)
	{
		//if(parameters && parameters.length != 0)
		if(parameters)
		{
			const count=parameters.length;
			if(count != 0)
			{
				let time=0;//Sum
				for(var i = count -1;i >= 0; i--)
				{
					time+=parameters[i].time;
				}
				const average=time/count;//Value of $count should not be zero.
				console.log(`Execution Time: ${time} ms.\nAverage Execution Time: ${average}`);
			}
		}
	}
}(window,document));
