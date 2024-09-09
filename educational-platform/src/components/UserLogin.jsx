const onSubmit = async e => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/auth/user-login', formData);
    localStorage.setItem('token', res.data.token);
    navigate('/user-dashboard');
  } catch (err) {
    setError('Invalid email or password');
  }
};
