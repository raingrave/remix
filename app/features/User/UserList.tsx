interface Props {
    users: unknown[];
}

export function UsersList({ users }: Props) {
  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <h3>{user.name}</h3>
                    <img src={user.avatar} alt={user.name} height="80" />
                </li>
            ))}
        </ul>
    </div>
  );
}