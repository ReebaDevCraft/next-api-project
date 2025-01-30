async function getUsers() {
    const response = await fetch('http://localhost:3000/api/user');
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
}

export default async function Page() {
    const users = await getUsers();

    return (
        <div className="p-8 font-sans">
            <h1 className="text-3xl font-bold text-center mb-6">User List</h1>
            <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
                <thead>
                    <tr className="bg-red-500 text-white">
                        <th className="border border-gray-300 px-6 py-3">ID</th>
                        <th className="border border-gray-300 px-6 py-3">Name</th>
                        <th className="border border-gray-300 px-6 py-3">Email</th>
                        <th className="border border-gray-300 px-6 py-3">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'
                            } hover:bg-green-300`}
                        >
                            <td className="border border-gray-300 px-6 py-3">{item.id}</td>
                            <td className="border border-gray-300 px-6 py-3">{item.name}</td>
                            <td className="border border-gray-300 px-6 py-3">{item.email}</td>
                            <td className="border border-gray-300 px-6 py-3">{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
