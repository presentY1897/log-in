

export default function AnimatePlaceholderInput( { type, placeholder }: { type: string, placeholder: string }) {
	return (
		<div className="flex flex-col">
			<div className="peer-wrap flex flex-col bg-black rounded-md p-2 focus-within:ring-2 focus-within:ring-white">
				<input className="peer place-content-center rounded-md bg-black text-gray-700 focus:outline-none" type={type}/>
				<div className="p-1 absolute justify-items-center align-middle text-center place-content-center pointer-events-none select-none bg-black text-gray-500 peer-focus:transition peer-focus:duration-200 peer-focus:-translate-x-1 peer-focus:-translate-y-full">{placeholder}</div>
			</div>
		</div>
	)
}
	