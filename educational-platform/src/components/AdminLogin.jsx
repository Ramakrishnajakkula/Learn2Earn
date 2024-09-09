const onSubmit = async e => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/auth/admin-login', formData);
    localStorage.setItem('token', res.data.token);
    navigate('/admin-dashboard');
  } catch (err) {
    setError('Invalid email or password');
  }
};
