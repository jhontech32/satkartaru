const validate = ({
  nama,
  nip,
  username,
  email,
  hp,
  alamat,
  password,
  confirmPassword
}) => {
  const errors = {
    firstName: '',
    nip: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  }

  errors.nama = !nama
    ? '*'
    : nama.length < 3
      ? 'Full Name min 3 character'
      : nama.length > 255
        ? 'Full Name max 255 character'
        : undefined

  errors.nip = !nip
    ? '*'
    : nip.length < 20
      ? 'NIP min 20 character'
      : nip.length > 20
        ? 'NIP max 20 character'
        : undefined

  errors.username = !username
    ? '*'
    : username.length < 3
      ? 'Username min 3 character'
      : username.length > 255
        ? 'Username max 255 character'
        : undefined

  errors.email = !email
    ? '*'
    : email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      ? 'Invalid email address'
      : email.length > 60
        ? 'Email max 60 character'
        : undefined

  errors.hp = !hp
    ? '*'
    : hp.length > 12
      ? 'Phone Number max 12 character'
      : undefined

  errors.alamat = !alamat
    ? '*'
    : undefined

  errors.password = !password
    ? '*'
    : password.length < 6
      ? 'Password min 6 character'
      : undefined

  errors.confirmPassword = !confirmPassword
    ? '*'
    : confirmPassword !== password
      ? 'Password Doesnt Match!'
      : undefined

  return errors
}

export default validate
