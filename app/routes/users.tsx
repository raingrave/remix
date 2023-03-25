import { json } from '@remix-run/node';
import { useLoaderData } from 'react-router';
import { UsersList } from '~/features/User/UserList';
import { getUsers } from '~/features/User/users.api';

export async function loader () {
    return json({
        users: await getUsers()
    },
    {
        headers: {
            "Cache-Control": "max-age=60"
        }
    })
}

export default function () {
    
  const { users } = useLoaderData<typeof loader>();

  return <UsersList users={users} />
}