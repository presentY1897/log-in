
export default function LabelInput({ label, type, placeholder }: { label: string, type: string, placeholder: string }) {
	return (
		<div className="flex flex-col">
			<label>{label}</label>
			<input className="rounded-md text-gray-700" type={type} placeholder={placeholder}/>
		</div>
	)
}
