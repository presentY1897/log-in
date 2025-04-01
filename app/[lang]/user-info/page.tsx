import { getUser } from "@/app/lib/dal";
import UserInfoPage from "@/components/pages/userinfo-page";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    return <div>Loading...</div>;
  }
  if (user.error) {
    return <div>{user.error.message}</div>;
  }
  if (!user.data) {
    return <div>Loading...</div>;
  }

  return (
    <UserInfoPage
      userInfo={{
        username: user.data.username,
        email: user.data.email,
        created: user.data.created_at,
      }}
    />
  );
}
