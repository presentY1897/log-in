import AnimatePlaceholderInput from "@/app/components/atom/animate-placeholder-input";
import LabelInput from "@/app/components/atom/label-input";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
				<AnimatePlaceholderInput type="email" placeholder="Username or email"/>
				<LabelInput label="Password" type="password" placeholder=""/>
				<a href="/pages/find-password" className="text-sm text-blue-500">Forgot your password?</a>
				<button className="bg-blue-500 text-white rounded-md p-2">Log In</button>
			</div>
		</div>
	)
}