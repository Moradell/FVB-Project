import { MainContainer } from '../../components/MainContainer';

export default function ({ user }) {
  return (
    <MainContainer>
      <div>
        Имя пользователя - {user.name}
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  console.log(user);
  return {
    props: { user },
  }
}
