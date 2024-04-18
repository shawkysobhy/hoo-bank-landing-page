function CustomButton({
	children,
	style,
}: {
	children: React.ReactNode;
	style: string;
}) {
	return (
		<button
			type='button'
			className={`px-6 py-4  hover:opacity-80 font-medium text-black outline-none bg-blue-gradient text-lg rounded-md ${style}`}>
			{children}
		</button>
	);
}

export default CustomButton;
