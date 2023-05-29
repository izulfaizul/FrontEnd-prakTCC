// import CourseDbSource from '../../data/course-db-source';
// import { restaurantItemTemplate } from '../templates/template-creator';
import CourseDbSource from '../../data/course-db-source';

const Login = {
  async renderMain() {
    return `
    <div class="login-form">
        <h2>Login</h2>
        <form action="">
            <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="email" placeholder="email@example.com">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" placeholder="min 8 charachter">
                </div>
            </div>
            <div class="wrapper-button">
            <button type="submit" class="btn btn-primary">Submit</button>   
            </div>
        </form>
        <p>belum punya akun ? <a href="/#/regis">Registrasi</a></p>
    </div>
        `;
  },

  async renderHeader() {
    return '';
  },

  async afterRender() {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      const { data } = await CourseDbSource.login(email, password);

      if (data) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('auth', JSON.stringify(data));
        window.location.href = '/';
      }
    });
  },
};

export default Login;
