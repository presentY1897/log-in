import bcrypt from "bcryptjs";
import { createClient } from "@/utils/supbase/client";
import { SignupFormSchema } from "@/app/lib/definitions";
import { createSession } from "@/app/lib/session";
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
  const hashedPassword = await bcrypt.hash(password, 10)

	const supabase = createClient();
	const { data, error } = await supabase.from('user-info').select('id, username').eq('username', name).is('email', email).eq('password', hashedPassword).limit(1);

	if (error) {
		return {
			message: error.message,
		}
	}

	if (data == null || data.length == 0){
		return {
			errors: {
				name: ['Username or email not found'],
			}
		}
	}

	const user = data[0];

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

	await createSession(user.id.toString());
	redirect('/');

}
