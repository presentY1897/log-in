import { SignupFormSchema } from "@/app/lib/definitions";
import { createSession, signin } from "@/app/lib/session";
import { redirect } from "next/navigation";


export async function login(formData: FormData){

	const validatedFields = SignupFormSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password'),
	})

	if (!validatedFields.success) {
		return { 
			errors: validatedFields.error.flatten().fieldErrors,
		 }
	}

	const {name, email, password} = validatedFields.data;

	const { user, error } = await signin(name, email, password);

	if (error) {
		return {
			message: error.message,
		}
	}

  if (!user) {
    return {
      message: 'An error occurred while sign in your account.',
    }
  }

	await createSession(user.id.toString());

	redirect('/');
}
