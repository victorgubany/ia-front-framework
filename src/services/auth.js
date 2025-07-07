export async function login(email, password) {
  const res = await fetch(`${import.meta.env.VITE_APP_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  // console.log(data)
  if (res.ok && data.access_token) {
    localStorage.setItem('token',data.token_type + " " + data.access_token);
    return true;
  }

  throw new Error(data.message || 'Login failed');
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}
