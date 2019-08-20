import React from 'react';
import Serverless from 'serverless';
import {render, Box, Static, TestResults} from 'ink';

const funcs = [
	{ title: "function 1", id: 1},
	{ title: "function 2", id: 2},
	{ title: "function 3", id: 3},
]

const serverless = new Serverless();

const Demo = () => {
	console.log(JSON.stringify(serverless.init()));
	console.log(JSON.stringify(serverless.run("logs")));
	return (
		<>
			<Static>
				{funcs.map(func => (
					<div style={{display: "flex", flexDirection: "row"}} key={func.id}>
						<div>{"\u03BB "}</div>
						<div>{func.title}</div>
					</div>
				))}
			</Static>
		</>
	)
};

render(<Demo/>);
