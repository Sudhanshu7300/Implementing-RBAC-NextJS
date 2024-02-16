import PageContainer from "../../components/container/PageContainer";
async function userList() {
  let data: any = await fetch("https://dummyjson.com/users");
  data = await data.json();

  return data.users;
}
export default async function Products() {
  let users = await userList();
  return (
    <PageContainer title="Dashboard" description="Dashboard page">
      {users.map((item: any, index: number) => (
        <div key={index}> {item?.username}</div>
      ))}
    </PageContainer>
  );
}
