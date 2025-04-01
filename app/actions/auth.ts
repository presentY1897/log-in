import { SignupFormSchema } from "../lib/definitions";

export async function login(data: FormData){

	const validatedFields = SignupFormSchema.safeParse({
		name: data.get('name'),
		email: data.get('email'),
		password: data.get('password'),
	})

	if (!validatedFields.success) {
		return { 
			errors: validatedFields.error.flatten().fieldErrors,
		 }
	}

}
