import LabelInput from "@/app/components/atoms/label-input";


export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="flex flex-col gap-4">
				<LabelInput label="Username" type="email" placeholder="username or email" />
				<button className="bg-blue-500 text-white rounded-md p-2">Submit</button>
			</div>
		</div>
	)
}