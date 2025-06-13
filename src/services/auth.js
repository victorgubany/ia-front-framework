export async function login(email, password) {
  const res = await fetch(`${import.meta.env.VITE_APP_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (res.ok && data.token) {
    localStorage.setItem('token', data.token);
    return true;
  }

  throw new Error(data.message || 'Login failed');
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}
