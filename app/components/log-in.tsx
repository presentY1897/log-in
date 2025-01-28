import LabelInput from "./atom/label-input";


export default function LogIn() {
	return (
		<div className="flex flex-col gap-2">
			<LabelInput label="Username" type="email" placeholder="username or email"/>
			<LabelInput label="Password" type="password" placeholder=""/>
		</div>
	)
}