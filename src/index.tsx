import "vazirmatn/Vazirmatn-font-face.css";

const input = (
	<textarea
		id="input"
		class="inputText inputTextarea"
		onInput={(event) => {
			const result = (input.value as string)
				.replace(/^(\r?\n)*/g, "%")
				.replace(/(\r?\n)*$/g, "%")
				.replace(/(\r?\n)+/g, "%\n%")
				.replace(/[^a-zA-Z0-9آابپتثجچحخدذرزژسشصضطعغفقگلمنوه\n]/g, "%")
				.replace(/%{2,}/g, "%");

			output.value = result;
		}}
	/>
) as HTMLTextAreaElement;
const output = (
	<textarea id="output" class="inputText inputTextarea" />
) as HTMLTextAreaElement;

const content = (
	<>
		<h1>جستجو در آموزشیار</h1>
		<div id="boxes">
			<div className="box inputBox">
				<h2>ورودی</h2>
				{input}
				<button
					id="copy_i"
					className="copyButton"
					onClick={() => {
						navigator.clipboard.writeText(input.value);
					}}
				>
					کپی
				</button>
			</div>
			<div className="box outputBox">
				<h2>خروجی</h2>
				{output}
				<button
					id="copy_o"
					className="copyButton"
					onClick={() => {
						navigator.clipboard.writeText(output.value);
					}}
				>
					کپی
				</button>
			</div>
		</div>
		<div className="copyright">
			<a href="https://shmovahhedi.com">توسعه یافته توسط شهاب الدّین موحّدی</a>
		</div>
	</>
) as unknown as JSX.Element[];

document.getElementById("app").append(...content);
