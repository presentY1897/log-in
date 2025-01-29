import AnimatePlaceholderInput from "./atom/animate-placeholder-input";
import LabelInput from "./atom/label-input";


export default function LogIn() {
	return (
		<div className="flex flex-col gap-2">
			<AnimatePlaceholderInput type="email" placeholder="username or email"/>
			<LabelInput label="Password" type="password" placeholder=""/>
			<a href="/pages/find-password" className="text-sm text-blue-500">Forgot your password?</a>
		</div>
	)
}